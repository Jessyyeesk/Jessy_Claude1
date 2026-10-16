"use strict";

/* =====================================================================
   QUESTION BANK  (edit this section to change the content)
   One entry = one room. Fields:
   room      – room title            theme – two background colours
   intro     – Dr. Quirk's line      objects – clues to inspect (2 per room)
   scenario  – the situation shown at the door
   options   – answer choices: text + why (feedback shown when picked)
   answer    – index (starting at 0) of the correct option
   summary   – key idea shown after the correct answer and on the results page
   ===================================================================== */
const QUESTIONS = [
  {
    room: "Room 1: The Mopey Waiting Room",
    theme: ["#cfd9f5", "#8d9fd6"],
    intro: "Dr. Quirk: “Welcome! The door only opens if you can name the problem. Poke everything first.”",
    objects: [
      { icon: "🛋️", label: "Soggy sofa", title: "Clue: What is major depressive disorder (MDD)?",
        text: "MDD is a mood disorder. For at least 2 weeks, nearly every day, a person has a low mood or loses interest in things they used to enjoy, plus several other symptoms: sleep changes, appetite or weight changes, tiredness, feeling worthless or guilty, trouble concentrating, or thoughts of death." },
      { icon: "📋", label: "Dusty clipboard", title: "Clue: Sadness vs. a disorder",
        text: "Everyone feels sad sometimes. It becomes MDD when symptoms last, are strong, and get in the way of school, work or relationships. Someone with MDD has never had a manic episode (a super-high, over-energised period)." }
    ],
    scenario: "Dan used to love gaming and football. For the past 6 weeks he feels empty almost every day, has lost interest in everything, sleeps 12 hours but is still tired, has barely eaten, and says he feels worthless. He has never had a period of unusually high energy, and he has no voices or odd beliefs. Which disorder fits Dan best?",
    options: [
      { text: "Major depressive disorder", why: "Low mood and loss of interest for 2+ weeks, with sleep, appetite, energy and worthlessness symptoms, and no mania, is the pattern of MDD." },
      { text: "Bipolar disorder", why: "Bipolar disorder needs at least one manic (or hypomanic) episode of very high energy. Dan has only lows." },
      { text: "Schizophrenia", why: "Schizophrenia involves psychosis such as hallucinations and delusions. Dan has none." },
      { text: "Ordinary sadness that will pass", why: "Six weeks of nearly daily symptoms that affect eating, sleep and interest is more than a normal sad patch." }
    ],
    answer: 0,
    summary: "MDD = low mood or loss of interest for 2+ weeks plus other symptoms, with no history of mania."
  },
  {
    room: "Room 2: The Rollercoaster Break Room",
    theme: ["#ffe0b8", "#f0a45c"],
    intro: "Dr. Quirk: “Careful, the coffee machine here has been… enthusiastic. Look around for clues!”",
    objects: [
      { icon: "☕", label: "Hyper coffee machine", title: "Clue: What are mood disorders?",
        text: "Mood disorders are conditions where the main problem is a disturbance in mood or emotion. There are two big families: depressive disorders (such as MDD, only lows) and bipolar disorders (highs and lows)." },
      { icon: "🎢", label: "Mood-swing poster", title: "Clue: Bipolar disorder",
        text: "Bipolar disorder has manic episodes: for about a week or more, a person feels extremely high or irritable, needs little sleep, has racing thoughts and big plans, and does risky things like overspending. These episodes alternate with periods of depression." }
    ],
    scenario: "Mia barely slept for a week yet felt unstoppable. She talked non-stop, announced three business ideas, and spent her savings on 12 espresso machines. A few weeks later she crashed into a deep low, stayed in bed and felt hopeless. Which mood disorder fits Mia best?",
    options: [
      { text: "Major depressive disorder", why: "MDD has only depressive episodes. Mia also had a manic episode, so MDD does not explain her." },
      { text: "Bipolar disorder", why: "A manic episode (little sleep, high energy, risky spending) plus a depressive episode is bipolar disorder, a mood disorder with highs and lows." },
      { text: "Schizophrenia", why: "Mia's problem is her mood swinging high and low, not hallucinations or delusions." },
      { text: "Normal stress after exams", why: "A week of almost no sleep with risky spending, followed by a deep low, goes far beyond normal stress." }
    ],
    answer: 1,
    summary: "Mood disorders = problems of mood. Bipolar disorder swings between mania and depression; MDD has only depression."
  },
  {
    room: "Room 3: The Whispering Fridge Kitchen",
    theme: ["#c8f0d9", "#6fc79a"],
    intro: "Dr. Quirk: “Don't mind the fridge. It… talks. Well, that is what the last patient said.”",
    objects: [
      { icon: "🧊", label: "Chatty fridge", title: "Clue: Schizophrenia and psychosis",
        text: "Schizophrenia is a psychotic disorder: the person loses touch with reality. Positive symptoms are things added: hallucinations (hearing or seeing things that are not there), delusions (strong false beliefs) and disorganised speech or behaviour." },
      { icon: "📌", label: "Myth-buster note", title: "Clue: Myths and facts",
        text: "Schizophrenia does NOT mean “split personality”. Negative symptoms are things taken away: flat emotions, low motivation, social withdrawal. Signs last for at least 6 months, and the main problem is thought and perception, not mood." }
    ],
    scenario: "Sam has been withdrawn for 8 months. He hears two voices commenting on everything he does and is sure the neighbours' microwave is broadcasting his thoughts. His speech jumps between unrelated topics, and he shows little emotion. Which disorder fits Sam best?",
    options: [
      { text: "Major depressive disorder", why: "MDD centres on low mood or lost interest. It does not explain voices and false beliefs about thought broadcasting." },
      { text: "Bipolar disorder", why: "Bipolar disorder centres on manic and depressive mood episodes, which Sam does not describe." },
      { text: "Schizophrenia", why: "Hallucinations (voices), delusions (thought broadcasting), disorganised speech, flat emotion and 6+ months of signs match schizophrenia." },
      { text: "Split personality disorder", why: "This is a common myth. Schizophrenia is not split personality, and the voices are hallucinations, not a second personality." }
    ],
    answer: 2,
    summary: "Schizophrenia = psychosis (hallucinations, delusions, disorganised speech) with signs lasting 6+ months."
  },
  {
    room: "Room 4: The Mix-Up Lab",
    theme: ["#f6c9ec", "#c986c0"],
    intro: "Dr. Quirk: “Oops, I shuffled two patient files. Can you tell which is which?”",
    objects: [
      { icon: "🔬", label: "Wobbly microscope", title: "Clue: The big difference",
        text: "Ask one question: is the main problem mood or reality? In mood disorders (MDD, bipolar) the main disturbance is emotion: too low, or too high and low. In schizophrenia the main disturbance is thought and perception: hallucinations and delusions." },
      { icon: "🗂️", label: "Mixed-up files", title: "Clue: Quick sorting guide",
        text: "MDD: lows only, no mania. Bipolar disorder: manic highs and depressive lows. Schizophrenia: hallucinations or delusions, often with flat emotion, lasting 6+ months." }
    ],
    scenario: "Two files are mixed up. File A: Ana has felt deeply sad and hopeless for two months, cannot sleep, and has no hallucinations or odd beliefs. File B: Ben hears voices that give orders, believes his teacher is a robot spy, and shows almost no emotion. Which sorting is correct?",
    options: [
      { text: "Ana: major depressive disorder (mood disorder). Ben: schizophrenia", why: "Ana's problem is mood only, so a mood disorder. Ben's problem is psychosis (voices and false beliefs), which points to schizophrenia." },
      { text: "Ana: schizophrenia. Ben: major depressive disorder", why: "This swaps them. Ana has no psychosis, and Ben's main problem is not low mood." },
      { text: "Ana: bipolar disorder. Ben: major depressive disorder", why: "Ana shows no manic episode, and Ben's voices and robot-spy belief are not depression symptoms." },
      { text: "Both have schizophrenia", why: "Ana has no hallucinations or delusions, so schizophrenia does not fit her." }
    ],
    answer: 0,
    summary: "Mood disorders disturb emotion; schizophrenia disturbs thought and perception (reality)."
  },
  {
    room: "Final Room: Dr. Quirk's Vault",
    theme: ["#ffd6d6", "#e58b8b"],
    intro: "Dr. Quirk: “Last door! This one uses brand-new cases. No peeking at old answers.”",
    objects: [
      { icon: "🧩", label: "Recap poster", title: "Clue: Three checks",
        text: "1) Mood only? Low for 2+ weeks with no mania = MDD. 2) Highs and lows? Manic episode plus depression = bipolar disorder. 3) Hallucinations or delusions lasting 6+ months = schizophrenia." },
      { icon: "🏆", label: "Dusty trophy", title: "Clue: Mood disorder or not?",
        text: "A mood disorder is about emotion. If a case has voices, strong false beliefs and jumbled speech as the main problem, it is not mainly a mood disorder. If it is all about being very low (or high and low), it is." }
    ],
    scenario: "Dr. Quirk's whiteboard shows four new cases. Which one is a MOOD disorder rather than schizophrenia?",
    options: [
      { text: "Chris insists TV newsreaders speak to him in secret code and hears a voice describing his actions all day, for 9 months.", why: "Hallucinations and delusions lasting months point to schizophrenia, not a mood disorder." },
      { text: "Taylor has felt exhausted, tearful and guilty for a month, has no appetite and no longer enjoys football. There are no voices or odd beliefs.", why: "Right: low mood, lost interest, appetite change and guilt for 2+ weeks, with no psychosis, is major depressive disorder, a mood disorder." },
      { text: "Alex believes his neighbours swapped his cat for a robot and hears them plotting, while his mood stays calm.", why: "Delusions and hallucinations with a calm mood point to schizophrenia." },
      { text: "Jo whispers back to the fridge, speaks in jumbled sentences and has shown little emotion for 7 months.", why: "Hallucinations, disorganised speech and flat emotion lasting months fit schizophrenia." }
    ],
    answer: 1,
    summary: "Ask: is the main problem mood or reality? Mood only = mood disorder; psychosis = schizophrenia."
  }
];
/* ===================== END OF QUESTION BANK ===================== */

const POINTS = [20, 10, 5];            // points for 1st, 2nd, 3rd+ attempt
const MAX_SCORE = QUESTIONS.length * POINTS[0];
const PACE_SECONDS = 600;              // 10-minute pacing clock (never affects score)

const $ = id => document.getElementById(id);
function h(tag, props, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (k === "class") e.className = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  kids.flat().forEach(c => e.append(c));
  return e;
}
function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

let S = null;   // game state

function newState() {
  return { i: 0, seen: new Set(), tried: new Set(), attempts: 0, locked: false, moved: false,
           score: 0, results: [], panel: null, order: [], untimed: $("untimed").checked,
           left: PACE_SECONDS, timer: null };
}

/* ---------- screens ---------- */
function show(id) {
  ["home", "how", "game", "done"].forEach(s => { $(s).hidden = (s !== id); });
  $("hud").hidden = (id !== "game");
  window.scrollTo(0, 0);
}
function goHome() { stopTimer(); S = null; show("home"); }
function inProgress() { return S && !$("game").hidden && (S.i > 0 || S.score > 0 || S.seen.size > 0); }
function confirmLeave(msg) { return !inProgress() || window.confirm(msg); }

/* ---------- timer (pacing only) ---------- */
function fmt(s) { return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
function drawTimer() {
  const t = $("timer");
  if (S.untimed) { t.textContent = "Untimed"; t.classList.remove("low"); return; }
  t.textContent = S.left > 0 ? "Time left: " + fmt(S.left) : "0:00 (no penalty)";
  t.classList.toggle("low", S.left <= 60);
}
function startTimer() {
  drawTimer();
  if (S.untimed) return;
  S.timer = setInterval(() => { if (S.left > 0) S.left--; drawTimer(); }, 1000);
}
function stopTimer() { if (S && S.timer) { clearInterval(S.timer); S.timer = null; } }

/* ---------- game flow ---------- */
function startGame() {
  stopTimer();
  S = newState();
  show("game");
  renderRoom();
  startTimer();
}

function updateHud() {
  $("roomNum").textContent = "Room " + (S.i + 1) + " of " + QUESTIONS.length;
  $("score").textContent = S.score;
  const st = $("steps");
  st.textContent = "";
  QUESTIONS.forEach((_, k) => {
    const done = k < S.i || (k === S.i && S.locked);
    st.append(h("span", { class: done ? "done" : (k === S.i ? "current" : "") }));
  });
}

function renderRoom() {
  const q = QUESTIONS[S.i];
  S.seen = new Set(); S.tried = new Set(); S.attempts = 0; S.locked = false; S.moved = false;
  S.order = shuffle(q.options.map((_, k) => k));
  const room = $("room");
  room.style.setProperty("--c1", q.theme[0]);
  room.style.setProperty("--c2", q.theme[1]);
  $("roomName").textContent = q.room;
  $("story").textContent = q.intro;
  const scene = $("scene");
  scene.textContent = "";
  q.objects.forEach((o, k) => {
    scene.append(h("button", { class: "obj", type: "button", id: "obj" + k, onclick: () => openClue(k) },
      h("span", { class: "ico", "aria-hidden": "true" }, o.icon),
      h("span", { class: "lbl" }, (k + 1) + ". " + o.label)));
  });
  const n = q.objects.length;
  scene.append(h("button", { class: "obj door", type: "button", id: "doorBtn", "aria-disabled": "true", onclick: tryDoor },
    h("span", { class: "ico", id: "doorIco", "aria-hidden": "true" }, "🔒"),
    h("span", { class: "lbl" }, (n + 1) + ". Locked door")));
  $("roomHint").textContent = "Inspect every object (" + n + " to find) to get the clues, then try the door.";
  closePanel();
  updateHud();
}

function closePanel() { $("panel").hidden = true; $("panel").textContent = ""; if (S) S.panel = null; }

function openClue(k) {
  const q = QUESTIONS[S.i], o = q.objects[k];
  S.seen.add(k);
  const b = $("obj" + k);
  if (!b.querySelector(".tick")) { b.classList.add("seen"); b.append(h("span", { class: "tick", "aria-hidden": "true" }, "✅")); }
  const p = $("panel");
  p.textContent = "";
  p.append(h("h3", {}, o.icon + " " + o.title), h("p", {}, o.text),
           h("button", { class: "btn primary", type: "button", id: "gotIt", onclick: closePanel }, "Got it"));
  p.hidden = false; S.panel = "clue";
  $("gotIt").focus();
  p.scrollIntoView({ behavior: "smooth", block: "nearest" });
  if (S.seen.size === q.objects.length) {
    $("roomHint").textContent = "All clues found. The door is ready: try it!";
    $("doorBtn").classList.add("ready");
    $("doorBtn").setAttribute("aria-disabled", "false");
  } else {
    $("roomHint").textContent = (q.objects.length - S.seen.size) + " object(s) left to inspect.";
  }
}

function tryDoor() {
  const q = QUESTIONS[S.i];
  if (S.locked) return;
  if (S.seen.size < q.objects.length) {
    $("roomHint").textContent = "The lock is stubborn! Inspect all " + q.objects.length + " objects first (" + (q.objects.length - S.seen.size) + " left).";
    return;
  }
  openDoorPanel();
}

function openDoorPanel() {
  const q = QUESTIONS[S.i];
  const p = $("panel");
  p.textContent = "";
  const opts = h("div", { class: "opts", role: "group", "aria-label": "Answer choices" });
  S.order.forEach((orig, pos) => {
    opts.append(h("button", { class: "opt", type: "button", "data-orig": String(orig), onclick: e => choose(orig, e.currentTarget) },
      h("b", { "aria-hidden": "true" }, String(pos + 1)), h("span", {}, q.options[orig].text)));
  });
  p.append(h("h3", {}, "🚪 Door puzzle: choose the best answer"),
           h("div", { class: "scenario" }, q.scenario), opts,
           h("div", { id: "fb", "aria-live": "polite" }));
  p.hidden = false; S.panel = "door";
  p.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function choose(orig, btn) {
  if (S.locked || S.tried.has(orig)) return;       // blocks repeat clicks and double scoring
  const q = QUESTIONS[S.i];
  S.tried.add(orig);
  S.attempts++;
  btn.disabled = true;
  const fb = $("fb");
  fb.textContent = "";
  if (orig === q.answer) {
    S.locked = true;
    const pts = POINTS[Math.min(S.attempts, POINTS.length) - 1];
    S.score += pts;
    S.results.push({ room: q.room, attempts: S.attempts, pts, summary: q.summary });
    document.querySelectorAll("#panel .opt").forEach(b => { b.disabled = true; });
    btn.classList.add("right");
    $("doorIco").textContent = "🔓";
    $("doorBtn").classList.remove("ready");
    $("doorBtn").classList.add("open");
    const last = S.i === QUESTIONS.length - 1;
    fb.append(h("div", { class: "fb good" },
      h("p", {}, h("b", {}, "✅ Correct! Door unlocked. +" + pts + " points")),
      h("p", {}, q.options[orig].why),
      h("p", {}, h("b", {}, "Key idea: "), q.summary)),
      h("div", { class: "row" }, h("button", { class: "btn primary", type: "button", id: "contBtn", onclick: cont },
        last ? "See my results" : "Continue to next room")));
    updateHud();
    $("contBtn").focus();
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    btn.classList.add("wrong");
    fb.append(h("div", { class: "fb bad" },
      h("p", {}, h("b", {}, "❌ Not quite. The door stays locked.")),
      h("p", {}, q.options[orig].why),
      h("p", {}, "Check the clues in your head, then try another answer.")));
  }
}

function cont() {
  if (!S.locked || S.moved) return;                // Continue works once per room
  S.moved = true;
  if (S.i < QUESTIONS.length - 1) { S.i++; renderRoom(); window.scrollTo(0, 0); }
  else finish();
}

function finish() {
  stopTimer();
  const first = S.results.filter(r => r.attempts === 1).length;
  $("finalScore").textContent = S.score + " / " + MAX_SCORE;
  let msg;
  if (first === QUESTIONS.length) msg = "Perfect run: all " + first + " doors opened on the first try. Dr. Quirk wants to hire you.";
  else if (first >= 3) msg = "Nice work: " + first + " of " + QUESTIONS.length + " doors opened on the first try. Review the notes below to polish the rest.";
  else msg = "You escaped, and learning from mistakes counts. Only " + first + " of " + QUESTIONS.length + " were first-try, so read the notes below and play again.";
  if (!S.untimed && S.left <= 0) msg += " (You passed the 10-minute pacing clock. That never affects your score.)";
  $("finalMsg").textContent = msg;
  const ol = $("results");
  ol.textContent = "";
  S.results.forEach(r => {
    ol.append(h("li", {}, h("b", {}, r.room),
      h("span", { class: "badge" + (r.attempts === 1 ? " first" : "") },
        r.attempts === 1 ? "1st try · " + r.pts + " pts" : r.attempts + " tries · " + r.pts + " pts"),
      h("br"), r.summary));
  });
  show("done");
}

/* ---------- wiring ---------- */
$("playBtn").addEventListener("click", startGame);
$("howPlayBtn").addEventListener("click", startGame);
$("againBtn").addEventListener("click", startGame);
$("howBtn").addEventListener("click", () => show("how"));
$("howBackBtn").addEventListener("click", () => show("home"));
$("doneHomeBtn").addEventListener("click", goHome);
$("logoBtn").addEventListener("click", () => { if (confirmLeave("Go home? Your progress will be lost.")) goHome(); });
$("homeBtn").addEventListener("click", () => { if (confirmLeave("Go home? Your progress will be lost.")) goHome(); });
$("restartBtn").addEventListener("click", () => { if (confirmLeave("Restart from Room 1? Your progress will be lost.")) startGame(); });

document.addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey || !S || $("game").hidden) return;
  if (e.target && e.target.tagName === "INPUT") return;
  if (e.key === "Escape" && S.panel === "clue") { closePanel(); return; }
  if (!/^[1-4]$/.test(e.key)) return;
  const n = Number(e.key) - 1;
  if (S.panel === "door") {
    const b = document.querySelectorAll("#panel .opt")[n];
    if (b && !b.disabled) b.click();
  } else if (S.panel === null) {
    const q = QUESTIONS[S.i];
    if (n < q.objects.length) $("obj" + n).click();
    else if (n === q.objects.length) $("doorBtn").click();
  }
});
