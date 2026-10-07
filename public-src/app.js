(() => {
  'use strict';

  const SUPPORT_COPY = {
    guided: 'All core ideas are visible. The learner reconstructs the answer structure without guessing among distractors.',
    cued: 'The structure stays visible, but answer content is hidden. The learner tries retrieval first and asks for a cue only when needed.',
    recall: 'The learner attempts the full point from memory before revealing it, then self-checks whether the recall was accurate.'
  };

  const ESSAYS = [
    {
      id: 'sherry-required-points',
      kind: 'Required-points reconstruction',
      title: 'Sherry-cask whisky',
      prompt: 'A whisky is aged in a sherry cask. Reconstruct the main considerations that belong in a complete answer.',
      goal: 'Practice retrieving the required components of the answer without turning them into “pick the correct option” questions.',
      type: 'set',
      points: [
        {
          id: 'quantity-shach',
          cue: 'Quantity — stricter measure',
          text: 'Shach can require ששים against the absorbed wine represented by the barrel thickness.'
        },
        {
          id: 'quantity-sa-taz',
          cue: 'Quantity — alternative measure',
          text: 'S”A and Taz use a 1:6 measure against כדי קליפה.'
        },
        {
          id: 'flavor',
          cue: 'Does the sherry add positive flavor?',
          text: 'Rav Moshe describes the remnant as weakened קיוהא, while Mishna Halachot says the sherry may prevent bad oak flavor rather than add tasted wine flavor.'
        },
        {
          id: 'intentional-nullification',
          cue: 'אין מבטלין איסור לכתחילה',
          text: 'The notes/key give a manufacture-for-non-Jews route, together with Rav Moshe’s limitation for a rabbinic prohibition without a practical biblical libation root.'
        }
      ]
    },
    {
      id: 'nbn-match',
      kind: 'Authority / position reconstruction',
      title: 'נ״ט בר נ״ט — deliberate cooking',
      prompt: 'Reconstruct the major positions for deliberate cooking and the related practical applications.',
      goal: 'Keep the useful authority/position mechanic, but test how it feels as one task shape inside a broader essay system.',
      type: 'match',
      points: [
        { id: 'strict-ben-yomo', cue: 'Ben-yomo — stricter authorities', name: 'Shach / Ben Ish Chai / Kaf HaChaim', text: 'Forbid לכתחילה deliberately cooking parve food in a ben-yomo meat or dairy vessel when the plan is to add the opposite type.' },
        { id: 'ovadya-ben-yomo', cue: 'Ben-yomo — lenient authority', name: 'Rav Ovadya', text: 'Permits the deliberate cooking לכתחילה.' },
        { id: 'lenient-eino', cue: 'Eino-ben-yomo — permissive line', name: 'Gra / Badei HaShulchan', text: 'Permit using the eino-ben-yomo vessel.' },
        { id: 'qualified-eino', cue: 'Eino-ben-yomo — qualified line', name: 'Chochmat Adam / Rav Elyashiv', text: 'Initially forbid, but allow when no other pot is available.' }
      ]
    },
    {
      id: 'stam-outline',
      kind: 'Structured-outline reconstruction',
      title: 'סתם יינם — benefit and the modern dispute',
      prompt: 'Reconstruct the architecture of the answer: why benefit was prohibited, how the major opinions treat benefit today, and the practical framework.',
      goal: 'Test whether visible essay architecture can train organization without showing the substantive answer too early.',
      type: 'outline',
      points: [
        {
          id: 'why',
          cue: '1. Why was benefit prohibited?',
          text: 'Beit Yosef models the prohibition on יין נסך; Ran connects it to preventing benefit from actual יין נסך; Rashba describes a later benefit decree after the original drinking decree.'
        },
        {
          id: 'today',
          cue: '2. How do the major opinions treat benefit today?',
          text: 'Rashi and the Geonim permit benefit today while drinking remains prohibited; Rosh distinguishes the non-Jew’s own wine from Jewish wine touched by a non-Jew; Rambam keeps benefit prohibited in both.'
        },
        {
          id: 'practical',
          cue: '3. What is the practical S”A / Rama framework?',
          text: 'S”A follows Rambam, while Rama allows reliance on the Geonic/Rashi position בדיעבד or for loss.'
        }
      ]
    }
  ];

  const state = {
    essayId: ESSAYS[0].id,
    support: 'cued',
    results: {},
    revealed: new Set()
  };

  const $ = selector => document.querySelector(selector);
  const essaySelect = $('#essaySelect');
  const supportPicker = $('#supportPicker');
  const taskHost = $('#taskHost');

  function currentEssay() {
    return ESSAYS.find(essay => essay.id === state.essayId) || ESSAYS[0];
  }

  function resetAttempt() {
    state.results = {};
    state.revealed = new Set();
    render();
  }

  function resultFor(id) {
    return state.results[id] || '';
  }

  function mark(id, result) {
    state.results[id] = result;
    state.revealed.add(id);
    render();
  }

  function reveal(id) {
    state.revealed.add(id);
    render();
  }

  function isVisible(point) {
    return state.support === 'guided' || state.revealed.has(point.id);
  }

  function pointActions(point) {
    const result = resultFor(point.id);
    const visible = isVisible(point);
    const wrap = document.createElement('div');
    wrap.className = 'point-actions';

    if (!visible) {
      const revealButton = document.createElement('button');
      revealButton.type = 'button';
      revealButton.className = 'primary';
      revealButton.textContent = state.support === 'recall' ? 'Reveal point' : 'Need a cue';
      revealButton.addEventListener('click', () => reveal(point.id));
      wrap.append(revealButton);
      return wrap;
    }

    const hadIt = document.createElement('button');
    hadIt.type = 'button';
    hadIt.className = result === 'unaided' ? 'good' : '';
    hadIt.textContent = state.support === 'guided' ? 'I can explain this' : 'I had it';
    hadIt.addEventListener('click', () => mark(point.id, state.support === 'guided' ? 'cued' : 'unaided'));

    const neededHelp = document.createElement('button');
    neededHelp.type = 'button';
    neededHelp.className = result === 'cued' ? 'primary' : '';
    neededHelp.textContent = 'I needed this cue';
    neededHelp.addEventListener('click', () => mark(point.id, 'cued'));

    const missed = document.createElement('button');
    missed.type = 'button';
    missed.className = result === 'missed' ? 'missed' : '';
    missed.textContent = 'I missed it';
    missed.addEventListener('click', () => mark(point.id, 'missed'));

    wrap.append(hadIt, neededHelp, missed);
    return wrap;
  }

  function renderSet(essay) {
    const section = document.createElement('section');
    section.className = 'task-section';
    section.innerHTML = `
      <div class="task-head"><h3>Build the required points</h3><span class="task-count">${essay.points.length} required</span></div>
      <p class="recall-instruction">${state.support === 'guided' ? 'Read the points, then practice turning them into a coherent spoken outline.' : 'Try to say each point before revealing its content.'}</p>
      <div class="point-list"></div>`;
    const list = section.querySelector('.point-list');

    essay.points.forEach((point, index) => {
      const visible = isVisible(point);
      const card = document.createElement('article');
      card.className = 'point-card';
      card.dataset.result = resultFor(point.id);
      card.innerHTML = `
        <div class="point-main">
          <span class="point-number">${index + 1}</span>
          <div class="point-copy"><strong>${point.cue}</strong><p class="${visible ? '' : 'point-hidden'}">${visible ? point.text : 'Recall this point before revealing it.'}</p></div>
        </div>`;
      card.append(pointActions(point));
      list.append(card);
    });
    taskHost.append(section);
  }

  function renderMatch(essay) {
    const section = document.createElement('section');
    section.className = 'task-section';
    section.innerHTML = `
      <div class="task-head"><h3>Reconstruct the relationships</h3><span class="task-count">${essay.points.length} relationships</span></div>
      <p class="recall-instruction">The authority names remain as retrieval cues; the position can fade as mastery grows.</p>
      <div class="match-grid"></div>`;
    const grid = section.querySelector('.match-grid');

    essay.points.forEach(point => {
      const visible = isVisible(point);
      const row = document.createElement('article');
      row.className = 'point-card';
      row.dataset.result = resultFor(point.id);
      const main = document.createElement('div');
      main.className = 'match-row';
      main.innerHTML = `<div class="match-name">${point.name}</div><div class="match-position ${visible ? '' : 'hidden-copy'}">${visible ? point.text : 'Recall the position before revealing it.'}</div>`;
      row.append(main, pointActions(point));
      grid.append(row);
    });
    taskHost.append(section);
  }

  function renderOutline(essay) {
    const section = document.createElement('section');
    section.className = 'task-section';
    section.innerHTML = `
      <div class="task-head"><h3>Reconstruct the essay outline</h3><span class="task-count">${essay.points.length} sections</span></div>
      <p class="recall-instruction">The organizational skeleton stays visible. The substantive content fades.</p>
      <div class="outline-stack"></div>`;
    const stack = section.querySelector('.outline-stack');

    essay.points.forEach(point => {
      const visible = isVisible(point);
      const card = document.createElement('article');
      card.className = 'point-card';
      card.dataset.result = resultFor(point.id);
      const content = document.createElement('div');
      content.className = 'outline-section';
      content.innerHTML = `<h4>${point.cue}</h4><p class="${visible ? '' : 'point-hidden'}">${visible ? point.text : 'Explain what belongs in this section before revealing it.'}</p>`;
      card.append(content, pointActions(point));
      stack.append(card);
    });
    taskHost.append(section);
  }

  function renderSummary() {
    const values = Object.values(state.results);
    const unaided = values.filter(value => value === 'unaided').length;
    const cued = values.filter(value => value === 'cued').length;
    const missed = values.filter(value => value === 'missed').length;
    $('#unaidedCount').textContent = String(unaided);
    $('#cueCount').textContent = String(cued);
    $('#missedCount').textContent = String(missed);

    const total = unaided + cued + missed;
    const summary = !total
      ? 'Complete a few points to compare the learning signal.'
      : unaided > cued + missed
        ? 'Most completed points were retrieved before the answer was shown. This is the signal we want to strengthen as support fades.'
        : missed > unaided
          ? 'Several points were not retrievable yet. A future adaptive version could bring those specific ideas back sooner.'
          : 'The attempt mixed retrieval and support. Compare how this feels at another support level on the same essay.';
    $('#sessionInterpretation').textContent = summary;
  }

  function render() {
    const essay = currentEssay();
    $('#essayKind').textContent = essay.kind;
    $('#essayTitle').textContent = essay.title;
    $('#essayPrompt').textContent = essay.prompt;
    $('#learningGoal').textContent = essay.goal;
    $('#supportDescription').textContent = SUPPORT_COPY[state.support];

    supportPicker.querySelectorAll('button').forEach(button => {
      const selected = button.dataset.support === state.support;
      button.setAttribute('aria-checked', selected ? 'true' : 'false');
      button.tabIndex = selected ? 0 : -1;
    });

    taskHost.textContent = '';
    if (essay.type === 'set') renderSet(essay);
    else if (essay.type === 'match') renderMatch(essay);
    else renderOutline(essay);
    renderSummary();
  }

  ESSAYS.forEach(essay => {
    const option = document.createElement('option');
    option.value = essay.id;
    option.textContent = essay.title;
    essaySelect.append(option);
  });
  essaySelect.value = state.essayId;
  essaySelect.addEventListener('change', () => {
    state.essayId = essaySelect.value;
    resetAttempt();
  });

  supportPicker.addEventListener('click', event => {
    const button = event.target.closest('[data-support]');
    if (!button) return;
    state.support = button.dataset.support;
    resetAttempt();
  });

  $('#resetBtn').addEventListener('click', resetAttempt);
  render();
})();
