(() => {
  'use strict';

  const SUPPORT_COPY = {
    guided: 'All core ideas are visible. The learner reconstructs the answer structure without guessing among distractors.',
    cued: 'The structure stays visible, but answer content is hidden. The learner tries retrieval first and asks for a cue only when needed.',
    recall: 'The learner attempts the full point from memory before revealing it, then self-checks whether the recall was accurate.'
  };

  const ESSAYS = [
    {
      id: 'fish-meat',
      kind: 'Structured-outline reconstruction',
      title: '1. Fish and meat mixtures',
      prompt: 'Discuss the major halachic issues that arise when fish and meat become mixed.',
      goal: 'Reconstruct the answer as four conceptual sections: the contemporary danger, bitul, creating shishim, and practical applications.',
      type: 'outline',
      points: [
        {
          id: 'fish-danger-today',
          cue: '1. Does the danger still apply today?',
          text: 'Magen Avraham suggests that the danger of eating fish and meat together may no longer exist today. Divrei Malkiel understands him as even permitting them together, although this is used only as a tziruf.'
        },
        {
          id: 'fish-bitul',
          cue: '2. What is the dispute about bitul?',
          text: 'Issur V\'Heter holds that fish is batel b\'shishim in meat, while Mahari\'l says chamira sakanta me\'isura and therefore it is not batel.'
        },
        {
          id: 'fish-add-shishim',
          cue: '3. May food be added to create shishim?',
          text: 'Pischei Teshuvah says even the Rama would allow adding food to create shishim, because ein mevatlin issur lechatchilla applies to prohibition, not danger; once the flavor disappears, the danger is batel.'
        },
        {
          id: 'fish-practical',
          cue: '4. What practical cases qualify the rule?',
          text: 'Rav Wosner says frozen gefilte fish quickly removed from meat soup is permitted, but if it begins defrosting, shishim against the entire fish is required. Chayei Halevi says meat juice falling onto gefilte fish forbids the fish even with shishim, because the juice penetrates and remains in its crevices.'
        }
      ],
      sampleAnswer: 'Magen Avraham suggests that the danger of eating fish and meat together may no longer exist today. Divrei Malkiel understands him as even permitting them together, although this is used only as a tziruf. Regarding bitul, Issur V\'Heter holds that fish is batel b\'shishim in meat, while Mahari\'l says chamira sakanta me\'isura and therefore it is not batel. Pischei Teshuvah says even the Rama would allow adding food to create shishim, because ein mevatlin issur lechatchilla applies to prohibition, not danger; once the flavor disappears, the danger is batel. Rav Wosner says frozen gefilte fish quickly removed from meat soup is permitted, but if it begins defrosting, shishim against the entire fish is required. Chayei Halevi says meat juice falling onto gefilte fish forbids the fish even with shishim, because the juice penetrates and remains in its crevices.'
    },
    {
      id: 'parve-liquid-stream',
      kind: 'Structured-outline reconstruction',
      title: '2. Parve liquid poured from fleishig to dairy',
      prompt: 'Discuss the status of parve liquid poured directly from a fleishig pot into a dairy utensil.',
      goal: 'Practice organizing the answer around the Rama\'s ruling, the mechanics of the stream, the liquid/solid distinction, and the Shach/Chochmas Adam conclusion.',
      type: 'outline',
      points: [
        {
          id: 'stream-rama',
          cue: '1. Rama — bottom dairy dish',
          text: 'If hot parve liquid is poured directly from a ben-yomo fleishig pot into a ben-yomo dairy dish, the Rama forbids the bottom dairy dish because the continuous stream remains connected to the fleishig pot and has not yet become nat bar nat.'
        },
        {
          id: 'stream-upper-liquid',
          cue: '2. Upper pot and the liquid itself',
          text: 'The Shach explains that the upper pot is not forbidden because dairy flavor cannot travel back up the stream; the liquid itself is permitted because tata\'ah gavar limits the effect to k\'dei kelipah.'
        },
        {
          id: 'stream-liquid-solid',
          cue: '3. Rama — liquids versus solids',
          text: 'The Rama distinguishes liquids from solids: a solid becomes disconnected from the pot immediately, while a poured liquid remains connected through the stream.'
        },
        {
          id: 'stream-shach-practical',
          cue: '4. Shach and Chochmas Adam',
          text: 'The Shach ultimately disagrees and permits the bowl because the stream is considered disconnected once it leaves the pot and therefore becomes nat bar nat. Chochmas Adam rules that one may rely on this, but if there is no financial loss one should be stringent for the Rama.'
        }
      ],
      sampleAnswer: 'If hot parve liquid is poured directly from a ben-yomo fleishig pot into a ben-yomo dairy dish, the Rama forbids the bottom dairy dish because the continuous stream remains connected to the fleishig pot and has not yet become nat bar nat. The Shach explains that the upper pot is not forbidden because dairy flavor cannot travel back up the stream; the liquid itself is permitted because tata\'ah gavar limits the effect to k\'dei kelipah. The Rama distinguishes liquids from solids: a solid becomes disconnected from the pot immediately, while a poured liquid remains connected through the stream. The Shach ultimately disagrees and permits the bowl because the stream is considered disconnected once it leaves the pot and therefore becomes nat bar nat. Chochmas Adam rules that one may rely on this, but if there is no financial loss one should be stringent for the Rama.'
    },
    {
      id: 'yayin-stam-benefit',
      kind: 'Definition / position reconstruction',
      title: '3. Yayin nesech, stam yeinam, and benefit',
      prompt: 'Explain yayin nesech and stam yeinam and the dispute concerning benefit from these wines.',
      goal: 'Use the key terms and authorities as retrieval cues while reconstructing the definitions, dispute, and practical ruling.',
      type: 'match',
      points: [
        { id: 'yayin-definition', name: 'Yayin nesech', text: 'Wine used for idolatrous libation.' },
        { id: 'stam-definition', name: 'Stam yeinam', text: 'Wine belonging to a non-Jew that was not used for idolatrous libations.' },
        { id: 'rashi-geonim-benefit', name: 'Rashi and the Geonim', text: 'Permit benefit from both stam yeinam and Jewish-owned wine touched by a non-Jew.' },
        { id: 'rosh-benefit', name: 'Rosh', text: 'Permits benefit only from Jewish-owned wine touched by a non-Jew, but not from stam yeinam.' },
        { id: 'rambam-benefit', name: 'Rambam', text: 'Prohibits benefit from both.' },
        { id: 'sa-benefit', name: 'S\'A', text: 'Follows the Rambam.' },
        { id: 'rama-benefit', name: 'Rama', text: 'Following the Geonim, permits benefit from both today, but generally only bedieved or in a case of financial loss; it is preferable not to make a business of buying and selling stam yeinam.' }
      ],
      sampleAnswer: 'Yayin nesech means wine used for idolatrous libation. Stam yeinam means wine belonging to a non-Jew that was not used for idolatrous libations. Regarding benefit from stam yeinam and Jewish-owned wine touched by a non-Jew: Rashi and the Geonim permit benefit from both; the Rosh permits benefit only from Jewish-owned wine touched by a non-Jew but not stam yeinam; and the Rambam prohibits benefit from both. The S\'A follows the Rambam. The Rama, following the Geonim, permits benefit from both today, but generally only bedieved or in a case of financial loss, and it is preferable not to make a business of buying and selling stam yeinam.'
    },
    {
      id: 'sherry-cask',
      kind: 'Concern / response reconstruction',
      title: '4. Sherry-cask whiskey',
      prompt: 'Analyze the halachic issues involved in sherry-cask whiskey.',
      goal: 'Reconstruct four concern/response units so the learner practices the architecture of the analysis rather than memorizing isolated names.',
      type: 'outline',
      points: [
        {
          id: 'sherry-quantity',
          cue: '1. How much absorbed wine must be nullified?',
          text: 'The Shach requires sufficient whiskey to nullify the wine absorbed in the barrel walls, while the more lenient view requires only 1:6 against the k\'dei kelipah.'
        },
        {
          id: 'sherry-flavor',
          cue: '2. Detectable flavor',
          text: 'Concern: something deliberately added for flavor is not batel when its flavor is detectable. Responses: Rav Moshe says a weak flavor may be batel even when detectable; Mishneh Halachos says the sherry mainly neutralizes the bad wood flavor rather than actually flavoring the whiskey.'
        },
        {
          id: 'sherry-color',
          cue: '3. Color',
          text: 'Concern: something added for color is not batel. Response: Minchas Yitzchak says the color rule applies only to biblical prohibitions.'
        },
        {
          id: 'sherry-bitul',
          cue: '4. Ein mevatlin issur lechatchilla',
          text: 'Concern: deliberately relying on bitul raises ein mevatlin issur lechatchilla. Responses: there is no bitul lechatchilla problem when the whiskey is principally produced for non-Jews; Rav Moshe further allows deliberate nullification of a rabbinic prohibition with no Torah basis; according to the Rama, stam yeinam today is concerned only with intermarriage rather than actual libation, so it has no biblical basis.'
        }
      ],
      sampleAnswer: 'There are four concerns: the Shach requires sufficient whiskey to nullify the wine absorbed in the barrel walls, while the more lenient view requires only 1:6 against the k\'dei kelipah; something deliberately added for flavor is not batel when its flavor is detectable; something added for color is not batel; and deliberately relying on bitul raises ein mevatlin issur lechatchilla. The responses are that Rav Moshe says a weak flavor may be batel even when detectable; Mishneh Halachos says the sherry mainly neutralizes the bad wood flavor rather than actually flavoring the whiskey; Minchas Yitzchak says the color rule applies only to biblical prohibitions; and there is no bitul lechatchilla problem when the whiskey is principally produced for non-Jews. Rav Moshe further allows deliberate nullification of a rabbinic prohibition with no Torah basis; according to the Rama, stam yeinam today is concerned only with intermarriage rather than actual libation, so it has no biblical basis.'
    },
    {
      id: 'wine-touch-four-conditions',
      kind: 'Required-points reconstruction',
      title: '5. Four conditions for fully prohibiting touched wine',
      prompt: 'What determines whether wine touched by a non-Jew becomes fully prohibited?',
      goal: 'Test the core use case for this lab: can a learner retrieve four required criteria without being given a multiple-choice bank?',
      type: 'set',
      points: [
        { id: 'wine-condition-intent', cue: 'Intent', recallCue: 'Criterion 1', text: 'The non-Jew must intend to touch the wine.' },
        { id: 'wine-condition-awareness', cue: 'Awareness', recallCue: 'Criterion 2', text: 'The non-Jew must know that it is wine.' },
        { id: 'wine-condition-purpose', cue: 'Purpose of the contact', recallCue: 'Criterion 3', text: 'The non-Jew must be touching it for the sake of the wine rather than while distracted with something else.' },
        { id: 'wine-condition-shake', cue: 'Physical action', recallCue: 'Criterion 4', text: 'The non-Jew must shake the wine.' }
      ],
      sampleAnswer: 'Four conditions are required for the wine to become prohibited both for drinking and benefit: the non-Jew must intend to touch the wine, know that it is wine, be touching it for the sake of the wine rather than while distracted with something else, and shake the wine.'
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
          <div class="point-copy"><strong>${state.support === 'recall' && point.recallCue ? point.recallCue : point.cue}</strong><p class="${visible ? '' : 'point-hidden'}">${visible ? point.text : 'Recall this point before revealing it.'}</p></div>
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
    $('#sampleAnswer').textContent = essay.sampleAnswer || '';

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
