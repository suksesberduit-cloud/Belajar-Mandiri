(function(){
  'use strict';

  var SUBJECTS = [window.CONTENT_MATEMATIKA, window.CONTENT_FISIKA, window.CONTENT_KIMIA, window.CONTENT_BIOLOGI];
  var STORAGE_KEY = 'bengkelnalar_progress_v1';
  var state = {
    activeSubject: SUBJECTS[0].key,
    openBab: null,
    view: null // {subjectKey, babId, subbabId}
  };

  // ephemeral per-subbab investigation state (not persisted — resets each visit)
  var caseState = { stageIndex:0, kasusStep:0, quizSelected:null, quizAnswered:false, activeHotspot:null };
  var caseStateKey = null;

  function resetCaseStateIfNeeded(newKey){
    if(caseStateKey !== newKey){
      caseStateKey = newKey;
      caseState = { stageIndex:0, kasusStep:0, quizSelected:null, quizAnswered:false, activeHotspot:null };
    }
  }

  function loadProgress(){
    try{ var raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; }catch(e){ return {}; }
  }
  function saveProgress(p){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){} }
  var progress = loadProgress();

  function totalSubbabs(){
    var t = 0;
    SUBJECTS.forEach(function(s){ s.babs.forEach(function(b){ if(b.unlocked && b.subbabs) t += b.subbabs.length; }); });
    return t;
  }
  function doneCount(){ return Object.keys(progress).filter(function(k){ return progress[k]; }).length; }
  function updateProgressPill(){
    document.getElementById('progress-count').textContent = doneCount();
    document.getElementById('progress-total').textContent = totalSubbabs();
  }

  function findSubject(key){ return SUBJECTS.filter(function(s){return s.key===key;})[0]; }
  function findBab(subject, babId){ return subject.babs.filter(function(b){return b.id===babId;})[0]; }
  function findSubbab(bab, subbabId){ return (bab.subbabs||[]).filter(function(sb){return sb.id===subbabId;})[0]; }

  function goToSubbab(subjectKey, babId, subbabId){
    state.view = {subjectKey:subjectKey, babId:babId, subbabId:subbabId};
    resetCaseStateIfNeeded(subjectKey+'/'+babId+'/'+subbabId);
    render();
    window.scrollTo({top:0, behavior:'instant'});
  }

  // ---------- RENDER: TABS ----------
  function renderTabs(){
    var bar = document.getElementById('tabbar');
    bar.innerHTML = '';
    SUBJECTS.forEach(function(s){
      var btn = document.createElement('button');
      btn.className = 'tab-btn' + (s.key===state.activeSubject ? ' active' : '');
      btn.setAttribute('role','tab');
      btn.innerHTML = '<span class="n">'+s.icon+'</span> '+s.label;
      btn.onclick = function(){ state.activeSubject = s.key; state.view = null; state.openBab = null; render(); };
      bar.appendChild(btn);
    });
  }

  // ---------- RENDER: SUBJECT (list of bab) ----------
  function renderSubjectView(container, subject){
    var hero = document.createElement('div');
    hero.className = 'subject-hero';
    hero.innerHTML =
      '<span class="subject-eyebrow">'+subject.eyebrow+'</span>'+
      '<h1 class="subject-title">'+subject.label+'</h1>'+
      '<p class="subject-desc">'+subject.desc+'</p>';
    container.appendChild(hero);

    subject.babs.forEach(function(bab, idx){
      var card = document.createElement('div');
      card.className = 'bab-card' + (state.openBab===bab.id ? ' open' : '');
      var numLabel = String(idx+1).padStart(2,'0');

      var head = document.createElement('div');
      head.className = 'bab-head';
      head.innerHTML =
        '<span class="bab-num'+(bab.unlocked?'':' locked')+'">'+numLabel+'</span>'+
        '<div class="bab-title-wrap">'+
          '<span class="bab-title">'+bab.title+'</span>'+
          '<span class="bab-meta">'+bab.meta+'</span>'+
        '</div>'+
        '<span class="bab-chevron">›</span>';
      head.onclick = function(){ state.openBab = (state.openBab===bab.id) ? null : bab.id; render(); };
      card.appendChild(head);

      var body = document.createElement('div');
      body.className = 'bab-body';
      if(bab.unlocked && bab.subbabs){
        bab.subbabs.forEach(function(sb){
          var item = document.createElement('div');
          item.className = 'subbab-item';
          var isDone = !!progress[subject.key+'/'+bab.id+'/'+sb.id];
          item.innerHTML =
            '<span class="subbab-dot'+(isDone?' done':'')+'"></span>'+
            '<span class="subbab-name">'+sb.title+'</span>'+
            '<span class="subbab-arrow">→</span>';
          item.onclick = function(){ goToSubbab(subject.key, bab.id, sb.id); };
          body.appendChild(item);
        });
      } else {
        var note = document.createElement('div');
        note.className = 'locked-note';
        note.innerHTML = '🔒 <span>Kasus ini masih dalam penyelidikan tim BENGKEL NALAR — segera dibuka. '+(bab.note||'')+'</span>';
        body.appendChild(note);
      }
      card.appendChild(body);
      container.appendChild(card);
    });
  }

  // ---------- STAGE LIST BUILDER ----------
  function buildStages(sb){
    var stages = [];
    stages.push({type:'mengamati', icon:'🧭', title:'Mengamati'});
    stages.push({type:'kenapa', icon:'❓', title:'Kenapa Ini Ada'});
    stages.push({type:'menelaah', icon:'🔬', title:'Menelaah / Hakikat'});
    if(sb.rumus) stages.push({type:'rumus', icon:'🧮', title:'Rumus / Prinsip Ditemukan'});
    if(sb.duniaNyata) stages.push({type:'dunia', icon:'🌍', title:'Di Dunia Nyata'});
    if(sb.kasus) stages.push({type:'kasus', icon:'🧩', title:'Kasus: Pecahkan Ini'});
    if(sb.ujiNalar) stages.push({type:'uji', icon:'🏆', title:'Uji Nalar Kamu'});
    return stages;
  }

  // ---------- DIAGRAM (interactive hotspots) ----------
  function renderDiagram(diagram, uidPrefix){
    if(!diagram) return '';
    var w = diagram.viewBox[0], h = diagram.viewBox[1];
    var pins = (diagram.hotspots||[]).map(function(hs, i){
      var leftPct = (hs.cx / w * 100).toFixed(1);
      var topPct = (hs.cy / h * 100).toFixed(1);
      return '<button class="hotspot-pin" data-idx="'+i+'" style="left:'+leftPct+'%; top:'+topPct+'%;" aria-label="'+hs.label+'">'+(i+1)+'</button>';
    }).join('');
    var html = '<div class="diagram">';
    html += '<div class="diagram-canvas">'+diagram.svg+'<div class="hotspot-layer">'+pins+'</div></div>';
    html += '<div class="diagram-cap">'+(diagram.cap||'')+'</div>';
    if(diagram.hotspots && diagram.hotspots.length){
      html += '<div class="hotspot-hint">👆 Ketuk titik bernomor untuk detail</div>';
      html += '<div class="hotspot-panel" id="'+uidPrefix+'-hotspot-panel" style="display:none;"></div>';
    }
    html += '</div>';
    return html;
  }
  function wireDiagram(container, diagram, uidPrefix){
    if(!diagram || !diagram.hotspots) return;
    var panel = container.querySelector('#'+uidPrefix+'-hotspot-panel');
    var pins = container.querySelectorAll('.hotspot-pin');
    pins.forEach(function(pin){
      pin.onclick = function(){
        var idx = parseInt(pin.getAttribute('data-idx'), 10);
        var hs = diagram.hotspots[idx];
        pins.forEach(function(p){ p.classList.remove('active'); });
        pin.classList.add('active');
        panel.style.display = 'block';
        panel.innerHTML = '<span class="hotspot-panel-label">'+hs.label+'</span><p>'+hs.text+'</p>';
      };
    });
  }

  // ---------- STAGE CONTENT RENDERERS ----------
  function renderStageContent(stage, sb){
    var html = '';
    if(stage.type === 'mengamati'){
      html = '<p>'+sb.mengamati+'</p>';
    } else if(stage.type === 'kenapa'){
      html = '<p>'+sb.kenapa+'</p>';
    } else if(stage.type === 'menelaah'){
      var m = sb.menelaah;
      if(m.text) html += '<p>'+m.text+'</p>';
      if(m.points) html += '<ul>'+m.points.map(function(p){return '<li>'+p+'</li>';}).join('')+'</ul>';
      if(m.diagram) html += renderDiagram(m.diagram, 'diag-'+sb.id);
    } else if(stage.type === 'rumus'){
      html = '<div class="formula-box">'+sb.rumus.formula+'</div>';
      if(sb.rumus.note) html += '<div class="formula-note">'+sb.rumus.note+'</div>';
    } else if(stage.type === 'dunia'){
      html = sb.duniaNyata.map(function(w){
        return '<div class="world-example"><span class="wx-title">'+w.title.toUpperCase()+'</span>'+w.text+'</div>';
      }).join('');
    } else if(stage.type === 'kasus'){
      html = '<p><strong>Kasus:</strong> '+sb.kasus.soal+'</p>';
      html += '<div id="kasus-steps-wrap"></div>';
    } else if(stage.type === 'uji'){
      html = '<div id="quiz-wrap"></div>';
    }
    return html;
  }

  function renderKasusSteps(sb){
    var wrap = document.getElementById('kasus-steps-wrap');
    if(!wrap) return;
    var steps = sb.kasus.steps;
    var revealed = Math.min(caseState.kasusStep, steps.length);
    var html = '';
    for(var i=0;i<revealed;i++){
      html += '<div class="case-step"><span class="step-no">'+(i+1)+'</span><span class="step-text">'+steps[i]+'</span></div>';
    }
    if(revealed < steps.length){
      html += '<button class="btn-solve" id="btn-next-step">Tunjukkan Langkah '+(revealed+1)+' dari '+steps.length+'</button>';
    } else {
      html += '<div class="formula-note answer-reveal">✅ '+sb.kasus.jawaban+'</div>';
    }
    wrap.innerHTML = html;
    var btn = document.getElementById('btn-next-step');
    if(btn){ btn.onclick = function(){ caseState.kasusStep++; renderKasusSteps(sb); }; }
  }

  function renderQuiz(sb){
    var wrap = document.getElementById('quiz-wrap');
    if(!wrap) return;
    var q = sb.ujiNalar;
    var html = '<p><strong>Coba sendiri:</strong> '+q.soal+'</p>';
    html += '<div class="quiz-options">';
    q.options.forEach(function(opt, i){
      var cls = 'quiz-option';
      if(caseState.quizAnswered){
        if(i === q.correctIndex) cls += ' correct';
        else if(i === caseState.quizSelected) cls += ' wrong';
        else cls += ' disabled';
      }
      html += '<button class="'+cls+'" data-idx="'+i+'" '+(caseState.quizAnswered?'disabled':'')+'>'+
                '<span class="quiz-letter">'+String.fromCharCode(65+i)+'</span>'+
                '<span>'+opt+'</span>'+
              '</button>';
    });
    html += '</div>';
    if(caseState.quizAnswered){
      var isCorrect = caseState.quizSelected === q.correctIndex;
      html += '<div class="quiz-feedback '+(isCorrect?'is-correct':'is-wrong')+'">'+
                (isCorrect ? '✅ Tepat!' : '❌ Belum tepat.') +
                '</div>';
      html += '<div class="formula-note" style="text-align:left;">'+q.explanation+'</div>';
    }
    wrap.innerHTML = html;
    if(!caseState.quizAnswered){
      wrap.querySelectorAll('.quiz-option').forEach(function(btn){
        btn.onclick = function(){
          caseState.quizSelected = parseInt(btn.getAttribute('data-idx'),10);
          caseState.quizAnswered = true;
          renderQuiz(sb);
        };
      });
    }
  }

  // ---------- RENDER: CASE FILE (subbab detail, one stage at a time) ----------
  function renderCaseFile(container, subject, bab, sb){
    var stages = buildStages(sb);
    if(caseState.stageIndex >= stages.length) caseState.stageIndex = stages.length - 1;
    var stage = stages[caseState.stageIndex];

    var wrap = document.createElement('div');
    wrap.className = 'casefile';

    var back = document.createElement('button');
    back.className = 'case-back';
    back.innerHTML = '‹ Kembali ke '+bab.title;
    back.onclick = function(){ state.view = null; render(); window.scrollTo({top:0, behavior:'instant'}); };
    wrap.appendChild(back);

    var header = document.createElement('div');
    header.className = 'case-header';
    header.innerHTML =
      '<span class="case-tag">'+subject.label.toUpperCase()+' · '+bab.title+'</span>'+
      '<h2 class="case-title">'+sb.title+'</h2>';
    wrap.appendChild(header);

    // stepper dots
    var stepper = document.createElement('div');
    stepper.className = 'stepper';
    stages.forEach(function(st, i){
      var dot = document.createElement('button');
      dot.className = 'stepper-dot' + (i===caseState.stageIndex ? ' active' : '') + (i<caseState.stageIndex ? ' passed' : '');
      dot.title = st.title;
      dot.textContent = st.icon;
      dot.onclick = function(){ caseState.stageIndex = i; render(); };
      stepper.appendChild(dot);
    });
    wrap.appendChild(stepper);

    // current stage card
    var stageEl = document.createElement('div');
    stageEl.className = 'stage stage-active';
    stageEl.innerHTML =
      '<div class="stage-label"><span class="stage-icon">'+stage.icon+'</span><span class="stage-title">'+stage.title+' <span class="stage-progress">('+(caseState.stageIndex+1)+'/'+stages.length+')</span></span></div>'+
      '<div class="stage-content">'+renderStageContent(stage, sb)+'</div>';
    wrap.appendChild(stageEl);

    // stage nav (prev/next stage within subbab)
    var stageNav = document.createElement('div');
    stageNav.className = 'stage-nav';
    var prevStageBtn = document.createElement('button');
    prevStageBtn.className = 'nav-btn';
    prevStageBtn.textContent = '‹ Tahap Sebelumnya';
    prevStageBtn.disabled = caseState.stageIndex <= 0;
    prevStageBtn.onclick = function(){ caseState.stageIndex--; render(); };
    stageNav.appendChild(prevStageBtn);

    if(caseState.stageIndex < stages.length - 1){
      var nextStageBtn = document.createElement('button');
      nextStageBtn.className = 'nav-btn nav-btn-primary';
      nextStageBtn.textContent = 'Lanjut ke Tahap Berikutnya ›';
      nextStageBtn.onclick = function(){ caseState.stageIndex++; render(); };
      stageNav.appendChild(nextStageBtn);
    }
    wrap.appendChild(stageNav);

    // final actions only on last stage
    if(caseState.stageIndex === stages.length - 1){
      var isDone = !!progress[subject.key+'/'+bab.id+'/'+sb.id];
      var footer = document.createElement('div');
      footer.className = 'stage-footer';
      var doneBtn = document.createElement('button');
      doneBtn.className = 'btn-solve' + (isDone ? ' solved' : '');
      doneBtn.textContent = isDone ? '✓ Kasus Ditutup — Sudah Dipahami' : 'Tandai Kasus Ini Selesai';
      doneBtn.onclick = function(){
        var key = subject.key+'/'+bab.id+'/'+sb.id;
        progress[key] = !progress[key];
        saveProgress(progress);
        render();
      };
      footer.appendChild(doneBtn);
      wrap.appendChild(footer);

      var idx = bab.subbabs.indexOf(sb);
      var nav = document.createElement('div');
      nav.className = 'case-nav';
      var prevBtn = document.createElement('button');
      prevBtn.className = 'nav-btn';
      prevBtn.textContent = '‹ Subbab Sebelumnya';
      prevBtn.disabled = idx<=0;
      prevBtn.onclick = function(){ if(idx>0) goToSubbab(subject.key, bab.id, bab.subbabs[idx-1].id); };
      var nextBtn = document.createElement('button');
      nextBtn.className = 'nav-btn';
      nextBtn.textContent = 'Subbab Berikutnya ›';
      nextBtn.disabled = idx>=bab.subbabs.length-1;
      nextBtn.onclick = function(){ if(idx<bab.subbabs.length-1) goToSubbab(subject.key, bab.id, bab.subbabs[idx+1].id); };
      nav.appendChild(prevBtn); nav.appendChild(nextBtn);
      wrap.appendChild(nav);
    }

    container.appendChild(wrap);

    // wire interactive bits after DOM insertion
    if(stage.type === 'menelaah' && sb.menelaah.diagram){
      wireDiagram(stageEl, sb.menelaah.diagram, 'diag-'+sb.id);
    }
    if(stage.type === 'kasus'){ renderKasusSteps(sb); }
    if(stage.type === 'uji'){ renderQuiz(sb); }
  }

  // ---------- DRAWER (TOC) ----------
  function renderDrawer(){
    var list = document.getElementById('drawer-list');
    list.innerHTML = '';
    SUBJECTS.forEach(function(subject){
      var h = document.createElement('div');
      h.className = 'drawer-subject';
      h.textContent = subject.icon+' '+subject.label.toUpperCase();
      list.appendChild(h);
      subject.babs.forEach(function(bab, idx){
        var row = document.createElement('div');
        row.className = 'drawer-bab' + (bab.unlocked ? '' : ' locked');
        row.innerHTML = String(idx+1).padStart(2,'0')+'. '+bab.title + (bab.unlocked ? '' : ' <span class="badge-locked">segera</span>');
        row.onclick = function(){
          state.activeSubject = subject.key;
          state.openBab = bab.id;
          closeDrawer();
          if(bab.unlocked && bab.subbabs && bab.subbabs.length){
            goToSubbab(subject.key, bab.id, bab.subbabs[0].id);
          } else {
            state.view = null;
            render();
            window.scrollTo({top:0, behavior:'instant'});
          }
        };
        list.appendChild(row);
      });
    });
  }
  function openDrawer(){ document.getElementById('drawer').classList.add('show'); document.getElementById('drawer-overlay').classList.add('show'); }
  function closeDrawer(){ document.getElementById('drawer').classList.remove('show'); document.getElementById('drawer-overlay').classList.remove('show'); }

  // ---------- MAIN RENDER ----------
  function render(){
    renderTabs();
    updateProgressPill();
    var app = document.getElementById('app');
    app.innerHTML = '';
    var subject = findSubject(state.activeSubject);

    if(state.view && state.view.subjectKey===subject.key){
      var bab = findBab(subject, state.view.babId);
      var sb = findSubbab(bab, state.view.subbabId);
      if(bab && sb){ renderCaseFile(app, subject, bab, sb); return; }
    }
    renderSubjectView(app, subject);
  }

  // ---------- INIT ----------
  document.getElementById('btn-toc').onclick = function(){ renderDrawer(); openDrawer(); };
  document.getElementById('drawer-close').onclick = closeDrawer;
  document.getElementById('drawer-overlay').onclick = closeDrawer;
  document.getElementById('btn-progress').onclick = function(){ renderDrawer(); openDrawer(); };

  render();

  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){ navigator.serviceWorker.register('sw.js').catch(function(){}); });
  }
})();
