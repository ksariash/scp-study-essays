(() => {
  'use strict';

  const b = (id, label, answers) => ({ id, label, answers });

  const ESSAYS = [
    {
      id: 'fish-meat',
      title: '1. Fish and meat mixtures',
      prompt: 'Discuss the major halachic issues that arise when fish and meat become mixed.',
      frames: [
        {
          id: 'fish-danger',
          job: 'Open by addressing whether the underlying danger may still apply today.',
          cue: 'Think: who questions whether the danger still exists, who extends that reading, and how much weight does the extension receive?',
          segments: [
            b('ma', 'Authority', ['Magen Avraham']),
            ' suggests that the danger of eating fish and meat together may no longer exist today. ',
            b('dm', 'Authority', ['Divrei Malkiel']),
            ' understands him as even permitting them together, although this is used only as a ',
            b('tz', 'Status', ['tziruf', 'tzaruf'])
          ],
          built: 'Magen Avraham suggests that the danger of eating fish and meat together may no longer exist today. Divrei Malkiel understands him as even permitting them together, although this is used only as a tziruf.'
        },
        {
          id: 'fish-bitul',
          job: 'State the dispute about whether ordinary bitul can solve the mixture.',
          cue: 'Two authorities disagree over bitul b\'shishim; the stringent side invokes a danger-versus-prohibition principle.',
          segments: [
            'Regarding bitul, ',
            b('ivh', 'Authority', ["Issur V'Heter", 'Issur VeHeter', 'Issur V Heter']),
            ' holds that fish is batel b\'shishim in meat, while ',
            b('maharil', 'Authority', ["Mahari'l", 'Maharil']),
            ' says ',
            b('chamira', 'Principle', ["chamira sakanta me'isura", 'chamira sakanta meisura']),
            ' and therefore it is not batel.'
          ],
          built: "Regarding bitul, Issur V'Heter holds that fish is batel b'shishim in meat, while Mahari'l says chamira sakanta me'isura and therefore it is not batel."
        },
        {
          id: 'fish-add',
          job: 'Explain why adding more food to create shishim may be allowed.',
          cue: 'Identify the authority and the rule that normally bars deliberate nullification.',
          segments: [
            b('pt', 'Authority', ['Pischei Teshuvah', 'Pitchei Teshuvah']),
            ' says one may add food to create shishim because ',
            b('emei', 'Rule', ['ein mevatlin issur lechatchilla', 'ein mevatlin isur lechatchila', 'ein mevatlin issur lechatchila']),
            ' applies to prohibition rather than danger; once the flavor disappears, the danger is batel.'
          ],
          built: 'Pischei Teshuvah says one may add food to create shishim because ein mevatlin issur lechatchilla applies to prohibition rather than danger; once the flavor disappears, the danger is batel.'
        },
        {
          id: 'fish-cases',
          job: 'Close with the two practical applications and their limiting details.',
          cue: 'Think: frozen gefilte fish in soup, when the leniency ends, and meat juice penetrating gefilte fish.',
          segments: [
            b('wosner', 'Authority', ['Rav Wosner', 'Wosner']),
            ' permits frozen gefilte fish quickly removed from meat soup, but once it begins ',
            b('defrost', 'Threshold', ['defrosting', 'to defrost', 'thawing']),
            ', ',
            b('shishim', 'Measure', ['shishim', '60']),
            ' against the entire fish is required. ',
            b('chayei', 'Authority', ['Chayei Halevi', 'Chayei HaLevi']),
            ' says meat juice falling onto gefilte fish forbids the fish even with shishim because the juice penetrates and remains in its crevices.'
          ],
          built: 'Rav Wosner permits frozen gefilte fish quickly removed from meat soup, but once it begins defrosting, shishim against the entire fish is required. Chayei Halevi says meat juice falling onto gefilte fish forbids the fish even with shishim because the juice penetrates and remains in its crevices.'
        }
      ],
      modelAnswer: "Magen Avraham suggests that the danger of eating fish and meat together may no longer exist today, and Divrei Malkiel reads him as even permitting the combination, though only as a tziruf. On bitul, Issur V'Heter allows fish to be batel b'shishim in meat, while Mahari'l invokes chamira sakanta me'isura and says it is not batel. Pischei Teshuvah permits adding food to create shishim because ein mevatlin issur lechatchilla applies to prohibition rather than danger. Practically, Rav Wosner permits frozen gefilte fish quickly removed from meat soup but requires shishim against the whole fish once it begins defrosting, while Chayei Halevi forbids gefilte fish hit by meat juice even with shishim because the juice penetrates and remains in its crevices."
    },
    {
      id: 'parve-stream',
      title: '2. Parve liquid poured from fleishig to dairy',
      prompt: 'Discuss the status of parve liquid poured directly from a fleishig pot into a dairy utensil.',
      frames: [
        {
          id: 'stream-rama',
          job: 'State the Rama\'s ruling and the reason the stream matters.',
          cue: 'Identify the authority and the taste-transfer concept that has not yet taken effect.',
          segments: [
            'If hot parve liquid is poured directly from a ben-yomo fleishig pot into a ben-yomo dairy dish, the ',
            b('rama', 'Authority', ['Rama']),
            ' forbids the bottom dairy dish because the continuous stream remains connected to the fleishig pot and has not yet become ',
            b('nbn', 'Concept', ['nat bar nat', 'not bar not', 'nat bar not'])
          ],
          built: 'If hot parve liquid is poured directly from a ben-yomo fleishig pot into a ben-yomo dairy dish, the Rama forbids the bottom dairy dish because the continuous stream remains connected to the fleishig pot and has not yet become nat bar nat.'
        },
        {
          id: 'stream-upper',
          job: 'Explain why the upper pot and the liquid itself are treated differently.',
          cue: 'Think: whose explanation, the lower-one-dominates principle, and the limited depth of effect.',
          segments: [
            'The ',
            b('shach', 'Authority', ['Shach']),
            ' explains that dairy flavor cannot travel back up the stream, so the upper pot is not forbidden; the liquid itself remains permitted because ',
            b('tg', 'Principle', ["tata'ah gavar", 'tataah gavar']),
            ' limits the effect to ',
            b('kelipah', 'Measure', ["k'dei kelipah", 'kdei kelipah', 'kdei klipah'])
          ],
          built: "The Shach explains that dairy flavor cannot travel back up the stream, so the upper pot is not forbidden; the liquid itself remains permitted because tata'ah gavar limits the effect to k'dei kelipah."
        },
        {
          id: 'stream-solid-liquid',
          job: 'State the Rama\'s distinction between a poured liquid and a solid.',
          cue: 'One becomes disconnected immediately; the other remains connected through the stream.',
          segments: [
            'The Rama distinguishes the two: a ',
            b('solid', 'Food type', ['solid', 'solid food']),
            ' becomes disconnected from the pot immediately, while a poured ',
            b('liquid', 'Food type', ['liquid']),
            ' remains connected through the stream.'
          ],
          built: 'The Rama distinguishes the two: a solid becomes disconnected from the pot immediately, while a poured liquid remains connected through the stream.'
        },
        {
          id: 'stream-practical',
          job: 'Finish with the dissenting view and the practical ruling.',
          cue: 'Identify the authority who permits the bowl and the authority who allows reliance with a stringency when loss is absent.',
          segments: [
            'The ',
            b('shach2', 'Authority', ['Shach']),
            ' ultimately permits the bowl because the stream is disconnected once it leaves the pot and therefore becomes nat bar nat. ',
            b('ca', 'Authority', ['Chochmas Adam', 'Chochmat Adam']),
            ' allows reliance on this, but absent ',
            b('loss', 'Condition', ['financial loss', 'loss']),
            ' one should be stringent for the Rama.'
          ],
          built: 'The Shach ultimately permits the bowl because the stream is disconnected once it leaves the pot and therefore becomes nat bar nat. Chochmas Adam allows reliance on this, but absent financial loss one should be stringent for the Rama.'
        }
      ],
      modelAnswer: "The Rama forbids the bottom dairy dish when hot parve liquid is poured directly from a ben-yomo fleishig pot because the continuous stream is still connected and has not yet become nat bar nat. The Shach explains that dairy flavor cannot travel back up the stream, and that tata'ah gavar limits the liquid's effect to k'dei kelipah. The Rama distinguishes a liquid stream from a solid, which becomes disconnected immediately. The Shach disagrees and permits the bowl because the stream is disconnected once it leaves the pot; Chochmas Adam allows reliance on this, though without financial loss one should be stringent for the Rama."
    },
    {
      id: 'yayin-benefit',
      title: '3. Yayin nesech, stam yeinam, and benefit',
      prompt: 'Explain yayin nesech and stam yeinam and the dispute concerning benefit from these wines.',
      frames: [
        {
          id: 'wine-definitions',
          job: 'Define the two wine categories before discussing the dispute.',
          cue: 'One definition turns on idolatrous use; the other on non-Jewish ownership without that use.',
          segments: [
            'Yayin nesech is wine used for ',
            b('libation', 'Use', ['idolatrous libation', 'idolatrous libations', 'avodah zarah libation']),
            '; stam yeinam is wine belonging to a ',
            b('nonjew', 'Owner', ['non-Jew', 'non Jew', 'nonjew']),
            ' that was not used for idolatrous libations.'
          ],
          built: 'Yayin nesech is wine used for idolatrous libation; stam yeinam is wine belonging to a non-Jew that was not used for idolatrous libations.'
        },
        {
          id: 'wine-permissive',
          job: 'Present the two more permissive positions on benefit.',
          cue: 'One position permits benefit from both categories; the next distinguishes stam yeinam from Jewish-owned wine merely touched by a non-Jew.',
          segments: [
            b('rg', 'Authorities', ['Rashi and the Geonim', 'Rashi / Geonim', 'Rashi and Geonim']),
            ' permit benefit from both, while the ',
            b('rosh', 'Authority', ['Rosh']),
            ' permits benefit only from Jewish-owned wine touched by a non-Jew and not from stam yeinam.'
          ],
          built: 'Rashi and the Geonim permit benefit from both, while the Rosh permits benefit only from Jewish-owned wine touched by a non-Jew and not from stam yeinam.'
        },
        {
          id: 'wine-strict',
          job: 'State the strict position and who codifies it.',
          cue: 'The strict authority prohibits benefit from both; identify the posek who follows him.',
          segments: [
            'The ',
            b('rambam', 'Authority', ['Rambam']),
            ' prohibits benefit from both, and the ',
            b('sa', 'Posek', ["S'A", 'SA', 'Shulchan Aruch']),
            ' follows the Rambam.'
          ],
          built: "The Rambam prohibits benefit from both, and the S'A follows the Rambam."
        },
        {
          id: 'wine-rama',
          job: 'Give the Rama\'s contemporary practical framework.',
          cue: 'Who is the practical authority, and in what two limited circumstances is benefit generally allowed?',
          segments: [
            'The ',
            b('rama', 'Authority', ['Rama']),
            ', following the Geonim, permits benefit from both today, generally only bedieved or in a case of ',
            b('loss', 'Condition', ['financial loss', 'loss']),
            '; it remains preferable not to make a business of buying and selling stam yeinam.'
          ],
          built: 'The Rama, following the Geonim, permits benefit from both today, generally only bedieved or in a case of financial loss; it remains preferable not to make a business of buying and selling stam yeinam.'
        }
      ],
      modelAnswer: "Yayin nesech is wine used for idolatrous libation, while stam yeinam is wine belonging to a non-Jew that was not used for libations. Rashi and the Geonim permit benefit from both stam yeinam and Jewish-owned wine touched by a non-Jew. The Rosh permits benefit only from the latter, while Rambam prohibits benefit from both and the S'A follows him. The Rama follows the Geonim and permits benefit from both today, generally only bedieved or in a case of financial loss, and it is preferable not to make a business of buying and selling stam yeinam."
    },
    {
      id: 'sherry',
      title: '4. Sherry-cask whiskey',
      prompt: 'Analyze the halachic issues involved in sherry-cask whiskey.',
      frames: [
        {
          id: 'sherry-quantity',
          job: 'Open with the disagreement over how much absorbed wine must be nullified.',
          cue: 'Identify the stricter authority and the more lenient numerical measure.',
          segments: [
            'On quantity, the ',
            b('shach', 'Authority', ['Shach']),
            ' requires enough whiskey to nullify the wine absorbed in the barrel walls, while the more lenient view requires only ',
            b('ratio', 'Ratio', ['1:6', '1/6', 'one to six']),
            ' against the ',
            b('kelipah', 'Measure', ["k'dei kelipah", 'kdei kelipah', 'kdei klipah'])
          ],
          built: "On quantity, the Shach requires enough whiskey to nullify the wine absorbed in the barrel walls, while the more lenient view requires only 1:6 against the k'dei kelipah."
        },
        {
          id: 'sherry-flavor',
          job: 'Present the flavor concern and the two responses to it.',
          cue: 'One response says weak flavor can still be batel; the other says the sherry is neutralizing bad wood flavor.',
          segments: [
            'Although something deliberately added for flavor is not batel when its flavor is detectable, ',
            b('rm', 'Authority', ['Rav Moshe', 'Moshe Feinstein', 'Rav Moshe Feinstein']),
            ' says a weak flavor may still be batel, while ',
            b('mh', 'Authority', ['Mishneh Halachos', 'Mishna Halachot', 'Mishneh Halachot']),
            ' says the sherry mainly neutralizes bad wood flavor rather than actually flavoring the whiskey.'
          ],
          built: 'Although something deliberately added for flavor is not batel when its flavor is detectable, Rav Moshe says a weak flavor may still be batel, while Mishneh Halachos says the sherry mainly neutralizes bad wood flavor rather than actually flavoring the whiskey.'
        },
        {
          id: 'sherry-color',
          job: 'Address the separate concern about something added for color.',
          cue: 'Identify the authority who limits this rule to one level of prohibition.',
          segments: [
            'The color concern is answered by ',
            b('my', 'Authority', ['Minchas Yitzchak', 'Minchat Yitzchak']),
            ', who says the rule that something added for color is not batel applies only to ',
            b('biblical', 'Level', ['biblical prohibitions', 'biblical prohibition', 'deoraisa prohibitions', 'deoraita prohibitions'])
          ],
          built: 'The color concern is answered by Minchas Yitzchak, who says the rule that something added for color is not batel applies only to biblical prohibitions.'
        },
        {
          id: 'sherry-bitul',
          job: 'Finish with ein mevatlin issur lechatchilla and why this case may escape it.',
          cue: 'Think: who the whiskey is produced for, Rav Moshe\'s category, and the Rama\'s reason for stam yeinam today.',
          segments: [
            'There is no bitul lechatchilla problem when the whiskey is principally produced for ',
            b('nonjews', 'Market', ['non-Jews', 'non Jews', 'nonjews']),
            '. ',
            b('rm2', 'Authority', ['Rav Moshe', 'Moshe Feinstein', 'Rav Moshe Feinstein']),
            ' further allows deliberate nullification of a ',
            b('rabbinic', 'Category', ['rabbinic prohibition with no Torah basis', 'rabbinic prohibition without a Torah basis', 'rabbinic prohibition with no biblical basis']),
            '; according to the ',
            b('rama', 'Authority', ['Rama']),
            ', stam yeinam today is concerned with ',
            b('intermarriage', 'Concern', ['intermarriage']),
            ' rather than actual libation.'
          ],
          built: 'There is no bitul lechatchilla problem when the whiskey is principally produced for non-Jews. Rav Moshe further allows deliberate nullification of a rabbinic prohibition with no Torah basis; according to the Rama, stam yeinam today is concerned with intermarriage rather than actual libation.'
        }
      ],
      modelAnswer: "Sherry-cask whiskey raises four issues. First, the Shach requires enough whiskey to nullify the wine absorbed in the barrel walls, while the lenient measure is 1:6 against k'dei kelipah. Second, detectable flavor is normally not batel when deliberately added, but Rav Moshe allows a weak flavor to be batel and Mishneh Halachos says the sherry mainly neutralizes bad wood flavor. Third, Minchas Yitzchak limits the color rule to biblical prohibitions. Finally, producing the whiskey principally for non-Jews avoids a bitul lechatchilla problem; Rav Moshe also permits deliberate nullification of a rabbinic prohibition with no Torah basis, and according to the Rama stam yeinam today is concerned with intermarriage rather than actual libation."
    },
    {
      id: 'wine-touch',
      title: '5. Four conditions for fully prohibiting touched wine',
      prompt: 'What determines whether wine touched by a non-Jew becomes fully prohibited?',
      frames: [
        {
          id: 'wine-touch-set',
          type: 'set',
          job: 'Retrieve all four conditions without being shown a word bank.',
          cue: 'The four categories are: intention, awareness, purpose of the contact, and physical action.',
          concepts: [
            { id: 'intent', answers: ['intend to touch the wine', 'intends to touch the wine', 'intention to touch the wine', 'touch the wine intentionally', 'intent to touch the wine'] },
            { id: 'know', answers: ['know that it is wine', 'knows that it is wine', 'knowledge that it is wine', 'know it is wine', 'knows it is wine'] },
            { id: 'purpose', answers: ['touching it for the sake of the wine', 'touch it for the sake of the wine', 'for the sake of the wine', 'touching for the sake of the wine', 'not distracted with something else', 'not distracted'] },
            { id: 'shake', answers: ['shake the wine', 'shakes the wine', 'shaking the wine'] }
          ],
          built: 'Four conditions are required for full prohibition: the non-Jew must intend to touch the wine, know that it is wine, be touching it for the sake of the wine rather than while distracted with something else, and shake the wine.'
        }
      ],
      modelAnswer: 'Four conditions are required for the wine to become prohibited both for drinking and benefit: the non-Jew must intend to touch the wine, know that it is wine, be touching it for the sake of the wine rather than while distracted with something else, and shake the wine.'
    }
  ];

  const state = {
    essayId: ESSAYS[0].id,
    frameIndex: 0,
    attempts: {},
    hints: {},
    outcomes: {},
    completed: {}
  };

  const $ = selector => document.querySelector(selector);
  const essaySelect = $('#essaySelect');
  const frameHost = $('#frameHost');

  function normalize(value) {
    return String(value || '')
      .normalize('NFKD')
      .toLocaleLowerCase()
      .replace(/[’‘'"“”]/g, '')
      .replace(/[^a-z0-9֐-׿]+/g, ' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function matches(value, answers = []) {
    const candidate = normalize(value);
    return !!candidate && answers.some(answer => normalize(answer) === candidate);
  }

  function currentEssay() {
    return ESSAYS.find(essay => essay.id === state.essayId) || ESSAYS[0];
  }

  function currentFrame() {
    return currentEssay().frames[state.frameIndex] || null;
  }

  function resetEssay() {
    state.frameIndex = 0;
    state.attempts = {};
    state.hints = {};
    state.outcomes = {};
    state.completed = {};
    render();
  }

  function frameStatus(frameId) {
    return state.outcomes[frameId] || '';
  }

  function buildInput(blank) {
    const wrap = document.createElement('span');
    wrap.className = 'blank-wrap';
    const label = document.createElement('label');
    label.className = 'blank-label';
    label.textContent = blank.label;
    const input = document.createElement('input');
    input.className = 'blank-input';
    input.type = 'text';
    input.autocomplete = 'off';
    input.autocapitalize = 'words';
    input.spellcheck = false;
    input.dataset.blankId = blank.id;
    input.setAttribute('aria-label', blank.label);
    label.append(input);
    wrap.append(label);
    return wrap;
  }

  function renderSentenceFrame(frame, card) {
    const builder = document.createElement('div');
    builder.className = 'sentence-builder';
    for (const segment of frame.segments) {
      if (typeof segment === 'string') builder.append(document.createTextNode(segment));
      else builder.append(buildInput(segment));
    }
    card.append(builder);
  }

  function renderSetFrame(frame, card) {
    const builder = document.createElement('div');
    builder.className = 'set-builder';
    frame.concepts.forEach((concept, index) => {
      const row = document.createElement('label');
      row.className = 'set-row';
      row.innerHTML = `<span>${index + 1}</span>`;
      const input = document.createElement('input');
      input.type = 'text';
      input.autocomplete = 'off';
      input.autocapitalize = 'sentences';
      input.spellcheck = false;
      input.dataset.setIndex = String(index);
      input.setAttribute('aria-label', `Criterion ${index + 1}`);
      input.placeholder = `Criterion ${index + 1}`;
      row.append(input);
      builder.append(row);
    });
    card.append(builder);
  }

  function sentenceBlanks(frame) {
    return frame.segments.filter(segment => typeof segment !== 'string');
  }

  function evaluateSentence(frame, card) {
    const blanks = sentenceBlanks(frame);
    let correct = 0;
    blanks.forEach(blank => {
      const input = card.querySelector(`[data-blank-id="${blank.id}"]`);
      const ok = matches(input?.value, blank.answers);
      input?.classList.toggle('correct', ok);
      input?.classList.toggle('incorrect', !ok);
      input?.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (ok) correct += 1;
    });
    return { correct, total: blanks.length, complete: correct === blanks.length };
  }

  function evaluateSet(frame, card) {
    const inputs = [...card.querySelectorAll('[data-set-index]')];
    const unmatched = new Set(frame.concepts.map(concept => concept.id));
    let correct = 0;
    inputs.forEach(input => {
      const concept = frame.concepts.find(item => unmatched.has(item.id) && matches(input.value, item.answers));
      const ok = !!concept;
      if (concept) unmatched.delete(concept.id);
      input.classList.toggle('correct', ok);
      input.classList.toggle('incorrect', !ok);
      input.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (ok) correct += 1;
    });
    return { correct, total: frame.concepts.length, complete: correct === frame.concepts.length };
  }

  function finishFrame(frame, outcome, card, message) {
    state.outcomes[frame.id] = outcome;
    state.completed[frame.id] = frame.built;
    const inputs = card.querySelectorAll('input');
    inputs.forEach(input => { input.disabled = true; });
    const feedback = card.querySelector('.frame-feedback');
    feedback.className = 'frame-feedback good';
    feedback.textContent = message;
    const check = card.querySelector('[data-check]');
    const next = card.querySelector('[data-next]');
    const cue = card.querySelector('[data-cue]');
    const reveal = card.querySelector('[data-reveal]');
    if (check) check.classList.add('hidden');
    if (cue) cue.classList.add('hidden');
    if (reveal) reveal.classList.add('hidden');
    if (next) next.classList.remove('hidden');
    renderHeaderAndBuilt();
  }

  function revealFrame(frame, card) {
    state.outcomes[frame.id] = 'revealed';
    state.completed[frame.id] = frame.built;
    if (frame.type === 'set') {
      const canonical = [
        'intend to touch the wine',
        'know that it is wine',
        'touching it for the sake of the wine',
        'shake the wine'
      ];
      [...card.querySelectorAll('[data-set-index]')].forEach((input, index) => {
        input.value = canonical[index] || '';
        input.classList.remove('incorrect');
        input.classList.add('correct');
        input.disabled = true;
      });
    } else {
      sentenceBlanks(frame).forEach(blank => {
        const input = card.querySelector(`[data-blank-id="${blank.id}"]`);
        if (!input) return;
        input.value = blank.answers[0];
        input.classList.remove('incorrect');
        input.classList.add('correct');
        input.disabled = true;
      });
    }
    const feedback = card.querySelector('.frame-feedback');
    feedback.className = 'frame-feedback bad';
    feedback.textContent = 'Answer revealed. This sentence is marked as revealed rather than recalled.';
    card.querySelector('[data-check]')?.classList.add('hidden');
    card.querySelector('[data-cue]')?.classList.add('hidden');
    card.querySelector('[data-reveal]')?.classList.add('hidden');
    card.querySelector('[data-next]')?.classList.remove('hidden');
    renderHeaderAndBuilt();
  }

  function checkFrame(frame, card) {
    const previousAttempts = Number(state.attempts[frame.id]) || 0;
    const result = frame.type === 'set' ? evaluateSet(frame, card) : evaluateSentence(frame, card);
    state.attempts[frame.id] = previousAttempts + 1;
    const feedback = card.querySelector('.frame-feedback');

    if (result.complete) {
      const firstTry = previousAttempts === 0 && !state.hints[frame.id];
      const outcome = firstTry ? 'first' : 'assisted';
      finishFrame(
        frame,
        outcome,
        card,
        firstTry
          ? 'Correct on the first try. The sentence has been added to your essay.'
          : 'Correct. The sentence has been added to your essay.'
      );
      return;
    }

    feedback.className = 'frame-feedback bad';
    feedback.textContent = `${result.correct} of ${result.total} key ${result.total === 1 ? 'term' : 'terms'} correct. Fix the highlighted field${result.total - result.correct === 1 ? '' : 's'} and try again.`;
  }

  function renderHeaderAndBuilt() {
    const essay = currentEssay();
    const completedFrames = essay.frames.filter(frame => state.completed[frame.id]);
    $('#scorePill').textContent = `${completedFrames.length}/${essay.frames.length} sentences built`;
    $('#builtCount').textContent = `${completedFrames.length} sentence${completedFrames.length === 1 ? '' : 's'}`;
    $('#progressFill').style.width = `${Math.round((completedFrames.length / essay.frames.length) * 100)}%`;

    const body = $('#builtAnswerBody');
    body.textContent = '';
    if (!completedFrames.length) {
      const p = document.createElement('p');
      p.className = 'built-placeholder';
      p.textContent = 'Complete the first sentence job to start building the answer.';
      body.append(p);
    } else {
      completedFrames.forEach(frame => {
        const p = document.createElement('p');
        p.className = 'built-sentence';
        p.textContent = frame.built;
        body.append(p);
      });
    }
  }

  function showCompletion() {
    const essay = currentEssay();
    frameHost.textContent = '';
    const outcomes = Object.values(state.outcomes);
    const first = outcomes.filter(value => value === 'first').length;
    const assisted = outcomes.filter(value => value === 'assisted').length;
    const revealed = outcomes.filter(value => value === 'revealed').length;
    $('#firstTryCount').textContent = String(first);
    $('#assistedCount').textContent = String(assisted);
    $('#revealedCount').textContent = String(revealed);
    $('#completionSummary').textContent = revealed
      ? 'You completed the structure, but at least one sentence was revealed. Rehearse the assembled answer aloud, then restart this essay later and try to retrieve that sentence without revealing it.'
      : assisted
        ? 'You built the full answer with some support. Rehearse the assembled answer aloud once, then repeat it later with fewer cues.'
        : 'Every sentence was completed on the first try without a cue. Rehearse the full answer aloud before opening the model answer.';
    $('#sampleAnswer').textContent = essay.modelAnswer;
    $('#completionCard').classList.remove('hidden');
  }

  function renderFrame() {
    const essay = currentEssay();
    const frame = currentFrame();
    frameHost.textContent = '';
    $('#completionCard').classList.add('hidden');

    if (!frame) {
      showCompletion();
      return;
    }

    const card = document.createElement('article');
    card.className = 'frame-card';
    card.innerHTML = `
      <div class="frame-head">
        <div>
          <span class="eyebrow">Sentence job</span>
          <h3>${frame.job}</h3>
        </div>
        <span class="frame-number">${state.frameIndex + 1} of ${essay.frames.length}</span>
      </div>
      <p class="job-copy">Fill the key terms from memory. The surrounding sentence gives you structure, not the answer.</p>`;

    if (frame.type === 'set') renderSetFrame(frame, card);
    else renderSentenceFrame(frame, card);

    const cue = document.createElement('div');
    cue.className = 'cue-box hidden';
    cue.dataset.cueBox = '';
    cue.textContent = frame.cue;
    card.append(cue);

    const feedback = document.createElement('p');
    feedback.className = 'frame-feedback';
    feedback.textContent = ' ';
    card.append(feedback);

    const actions = document.createElement('div');
    actions.className = 'frame-actions';
    actions.innerHTML = `
      <button class="tertiary" type="button" data-cue>Show cue</button>
      <button class="reveal-btn" type="button" data-reveal>Reveal answer</button>
      <button class="primary" type="button" data-check>Check sentence</button>
      <button class="primary hidden" type="button" data-next>${state.frameIndex + 1 === essay.frames.length ? 'Finish essay' : 'Next sentence'} →</button>`;
    card.append(actions);
    frameHost.append(card);

    card.querySelector('[data-cue]').addEventListener('click', event => {
      state.hints[frame.id] = true;
      cue.classList.remove('hidden');
      event.currentTarget.disabled = true;
      event.currentTarget.textContent = 'Cue shown';
    });
    card.querySelector('[data-reveal]').addEventListener('click', () => revealFrame(frame, card));
    card.querySelector('[data-check]').addEventListener('click', () => checkFrame(frame, card));
    card.querySelector('[data-next]').addEventListener('click', () => {
      state.frameIndex += 1;
      renderFrame();
      renderHeaderAndBuilt();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const firstInput = card.querySelector('input');
    if (firstInput && !window.matchMedia?.('(pointer: coarse)').matches) firstInput.focus();
  }

  function render() {
    const essay = currentEssay();
    $('#essayCounter').textContent = `Essay ${ESSAYS.indexOf(essay) + 1} of ${ESSAYS.length}`;
    $('#essayTitle').textContent = essay.title.replace(/^\d+\.\s*/, '');
    $('#essayPrompt').textContent = essay.prompt;
    essaySelect.value = essay.id;
    renderHeaderAndBuilt();
    renderFrame();
  }

  ESSAYS.forEach(essay => {
    const option = document.createElement('option');
    option.value = essay.id;
    option.textContent = essay.title;
    essaySelect.append(option);
  });

  essaySelect.addEventListener('change', () => {
    state.essayId = essaySelect.value;
    resetEssay();
  });

  $('#restartBtn').addEventListener('click', resetEssay);
  render();
})();
