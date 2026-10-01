
const TEXT = {
  en: { dir:'ltr', name:'RecoBot', sub:'match / score — recommendation engine',
    title:'Talking to', historyLabel:'ASKED SO FAR', empty:'Nothing yet. Tell RecoBot what you like.',
    placeholder:'e.g. relaxing farming games, or sci-fi and fantasy books...', send:'Send', clear:'CLEAR HISTORY',
    hints:['hello','help','sci-fi action movies','relaxing farming games','anime adventure','horror shows','bye'],
    R: {
      greeting: ["Hey! 👋 I'm RecoBot. Tell me what you're into and I'll match you with something. Type 'help' for tips.", "Hi there! 🎯 Describe your taste — genres, mood, category — and I'll recommend items."],
      exit: ["Goodbye! 👋 Refresh the page to start a new session.", "Session ended. Happy watching/reading/playing! ✨"],
      wellbeing: ["Running smoothly, scoring recommendations as usual! ⚙️ You?"],
      identity: ["I'm RecoBot 🎯 — I don't use AI/ML, just content-based filtering: I tokenize what you type and score it against a tagged catalog of movies, shows, anime, books, games and music.", "RecoBot here 🧠 — pure tag-overlap logic, no neural network involved."],
      help: ["Tell me your interests in a sentence, e.g. 'sci-fi and thrillers', 'relaxing farming games', 'anime with action and fantasy'. I'll match keywords against tags across movies 🎬, TV shows 📺, anime 🍥, books 📚, games 🎮 and music 🎧, and rank the best fits. Type 'bye' to exit."],
      thanks: ["You're welcome! 🙌 Tell me more preferences anytime.", "Anytime! 😊"],
      reco_intro: ["Here's what I matched for you 🎯", "Based on those tags, here's what scored highest 📊", "Found a few good fits 🔍"],
      no_match: ["I couldn't match any tags to that 🤔. Try genre words like sci-fi, fantasy, action, relaxing, mystery, or a category like movies/books/games/music.", "No overlap found 📉 — try mentioning a genre or mood, e.g. 'puzzle games' or 'romantic drama'."],
      fallback: ["I don't have a rule for that yet 🤔. Try 'help' to see how I work."]
    }
  },
  ur: { dir:'rtl', name:'RecoBot', sub:'مماثلت / اسکور — تجویز انجن',
    title:'گفتگو جاری ہے', historyLabel:'اب تک پوچھے گئے سوالات', empty:'ابھی کچھ نہیں۔ اپنی پسند بتائیں۔',
    placeholder:'مثلاً sci-fi action, یا relaxing farming games...', send:'بھیجیں', clear:'تاریخ صاف کریں',
    hints:['سلام','مدد','sci-fi action movies','anime adventure','horror shows','خدا حافظ'],
    R: {
      greeting: ["وعلیکم السلام! 👋 میں RecoBot ہوں۔ اپنی پسند بتائیں، میں تجویز دوں گا۔ 'مدد' لکھیں۔", "ہیلو! 🎯 اپنا ذوق بتائیں — genre، mood، category — میں تجویز کروں گا۔"],
      exit: ["خدا حافظ! 👋 نیا سیشن شروع کرنے کے لیے صفحہ ریفریش کریں۔", "سیشن ختم ہوا۔ لطف اٹھائیں! ✨"],
      wellbeing: ["ٹھیک چل رہا ہوں، تجاویز بنا رہا ہوں! ⚙️ آپ کیسے ہیں؟"],
      identity: ["میں RecoBot ہوں 🎯 — کوئی AI/ML نہیں، صرف tag-matching منطق استعمال کرتا ہوں۔"],
      help: ["اپنی دلچسپیاں بتائیں، مثلاً 'sci-fi and thrillers' یا 'relaxing farming games'۔ میں movies 🎬, shows 📺, anime 🍥, books 📚, games 🎮 اور music 🎧 میں سے بہترین میچ تلاش کروں گا۔ نکلنے کے لیے 'خدا حافظ' لکھیں۔"],
      thanks: ["خوش آمدید! 🙌"],
      reco_intro: ["یہ رہیں آپ کے لیے تجاویز 🎯", "ان tags کی بنیاد پر بہترین میچز 📊"],
      no_match: ["کوئی میچ نہیں ملا 🤔۔ genre الفاظ آزمائیں جیسے sci-fi, fantasy, action, relaxing۔"],
      fallback: ["میرے پاس اس کے لیے ابھی کوئی اصول نہیں 🤔۔ 'مدد' لکھ کر دیکھیں۔"]
    }
  },
  es: { dir:'ltr', name:'RecoBot', sub:'coincidencia / puntaje — motor de recomendación',
    title:'Hablando con', historyLabel:'PREGUNTADO HASTA AHORA', empty:'Nada todavía. Dile a RecoBot qué te gusta.',
    placeholder:'ej. juegos de granja relajantes, o libros de ciencia ficción...', send:'Enviar', clear:'BORRAR HISTORIAL',
    hints:['hola','ayuda','sci-fi action movies','anime adventure','horror shows','adiós'],
    R: {
      greeting: ["¡Hola! 👋 Soy RecoBot. Dime qué te gusta y te recomendaré algo. Escribe 'ayuda'.", "¡Hey! 🎯 Describe tu gusto y te daré recomendaciones."],
      exit: ["¡Adiós! 👋 Actualiza la página para empezar una nueva sesión.", "Sesión terminada. ¡Disfruta! ✨"],
      wellbeing: ["Funcionando bien, puntuando recomendaciones. ⚙️ ¿Y tú?"],
      identity: ["Soy RecoBot 🎯 — sin IA/ML, solo lógica de coincidencia de etiquetas."],
      help: ["Dime tus intereses, ej. 'ciencia ficción y suspenso' o 'juegos de granja relajantes'. Buscaré las mejores coincidencias en películas 🎬, series 📺, anime 🍥, libros 📚, juegos 🎮 y música 🎧. Escribe 'adiós' para salir."],
      thanks: ["¡De nada! 🙌"],
      reco_intro: ["Esto es lo que encontré para ti 🎯", "Según esas etiquetas, esto puntuó más alto 📊"],
      no_match: ["No encontré coincidencias 🤔. Prueba con géneros como sci-fi, fantasy, action, relaxing."],
      fallback: ["Todavía no tengo una regla para eso 🤔. Prueba con 'ayuda'."]
    }
  },
  fr: { dir:'ltr', name:'RecoBot', sub:'correspondance / score — moteur de recommandation',
    title:'Discussion avec', historyLabel:'DEMANDÉ JUSQU\u2019ICI', empty:'Rien pour l\u2019instant. Dites à RecoBot ce que vous aimez.',
    placeholder:'ex. jeux de ferme relaxants, ou livres de science-fiction...', send:'Envoyer', clear:'EFFACER L\u2019HISTORIQUE',
    hints:['bonjour','aide','sci-fi action movies','anime adventure','horror shows','au revoir'],
    R: {
      greeting: ["Bonjour ! 👋 Je suis RecoBot. Dites-moi ce que vous aimez. Tapez 'aide'.", "Salut ! 🎯 Décrivez vos goûts et je vous recommande quelque chose."],
      exit: ["Au revoir ! 👋 Actualisez la page pour démarrer une nouvelle session.", "Session terminée. Profitez-en ! ✨"],
      wellbeing: ["Tout fonctionne bien, je note des recommandations. ⚙️ Et vous ?"],
      identity: ["Je suis RecoBot 🎯 — pas d\u2019IA/ML, juste une logique de correspondance d\u2019étiquettes."],
      help: ["Dites-moi vos intérêts, ex. 'science-fiction et thriller' ou 'jeux de ferme relaxants'. Je chercherai les meilleures correspondances parmi films 🎬, séries 📺, anime 🍥, livres 📚, jeux 🎮 et musique 🎧. Tapez 'au revoir' pour quitter."],
      thanks: ["Je vous en prie ! 🙌"],
      reco_intro: ["Voici ce que j\u2019ai trouvé pour vous 🎯", "D\u2019après ces étiquettes, voici les meilleurs scores 📊"],
      no_match: ["Aucune correspondance trouvée 🤔. Essayez des genres comme sci-fi, fantasy, action, relaxing."],
      fallback: ["Je n\u2019ai pas encore de règle pour ça 🤔. Essayez 'aide'."]
    }
  },
  ar: { dir:'rtl', name:'RecoBot', sub:'مطابقة / نتيجة — محرك التوصيات',
    title:'تتحدث مع', historyLabel:'ما سُئل حتى الآن', empty:'لا شيء بعد. أخبر RecoBot بما تحب.',
    placeholder:'مثال: ألعاب مزرعة مريحة، أو كتب خيال علمي...', send:'إرسال', clear:'مسح السجل',
    hints:['مرحبا','مساعدة','sci-fi action movies','anime adventure','horror shows','وداعا'],
    R: {
      greeting: ["مرحباً! 👋 أنا RecoBot. أخبرني بما تحب وسأقترح لك شيئاً. اكتب 'مساعدة'.", "أهلاً! 🎯 صف ذوقك وسأوصي لك."],
      exit: ["وداعاً! 👋 أعد تحميل الصفحة لبدء جلسة جديدة.", "انتهت الجلسة. استمتع! ✨"],
      wellbeing: ["أعمل بشكل جيد، أقيّم التوصيات. ⚙️ وأنت؟"],
      identity: ["أنا RecoBot 🎯 — بدون ذكاء اصطناعي، فقط منطق مطابقة الوسوم."],
      help: ["أخبرني باهتماماتك، مثل 'خيال علمي وإثارة' أو 'ألعاب مزرعة مريحة'. سأبحث عن أفضل التطابقات في الأفلام 🎬 والمسلسلات 📺 والأنمي 🍥 والكتب 📚 والألعاب 🎮 والموسيقى 🎧. اكتب 'وداعاً' للخروج."],
      thanks: ["عفواً! 🙌"],
      reco_intro: ["إليك ما وجدته لك 🎯", "بناءً على هذه الوسوم، هذه أعلى النتائج 📊"],
      no_match: ["لم أجد أي تطابق 🤔. جرّب كلمات مثل sci-fi, fantasy, action, relaxing."],
      fallback: ["ليس لدي قاعدة لهذا بعد 🤔. جرّب 'مساعدة'."]
    }
  }
};

// ---------- 2. Rule table for the fixed commands (if/else core) ----------
const RULE_KEYS = {
  exit:      ['bye','goodbye','exit','quit','خدا حافظ','adiós','au revoir','وداعا'],
  greeting:  ['hello','hi ','hi','hey','salam','assalam','سلام','hola','bonjour','مرحبا','اہلا','أهلاً'],
  wellbeing: ['how are you','kaisa','kya hal','cómo estás','comment vas','كيف حالك'],
  identity:  ['your name','who are you','naam','tu nombre','ton nom','اسمك'],
  help:      ['help','madad','مدد','ayuda','aide','مساعدة'],
  thanks:    ['thanks','thank you','shukriya','شکریہ','gracias','merci','شكراً']
};

// ---------- 3. Item catalog for content-based recommendation ----------
const CATALOG = [
  { name:'Inception', emoji:'🌀', category:'movie', tags:['sci-fi','thriller','mind-bending','action','dream'] },
  { name:'The Dark Knight', emoji:'🦇', category:'movie', tags:['action','superhero','crime','thriller'] },
  { name:'Interstellar', emoji:'🚀', category:'movie', tags:['sci-fi','space','drama','adventure','emotional'] },
  { name:'Spirited Away', emoji:'🐉', category:'movie', tags:['animation','fantasy','adventure','family'] },
  { name:'John Wick', emoji:'🔫', category:'movie', tags:['action','thriller','revenge'] },
  { name:'La La Land', emoji:'🎹', category:'movie', tags:['romance','musical','drama'] },
  { name:'Parasite', emoji:'🏚️', category:'movie', tags:['thriller','drama','dark-comedy','social'] },
  { name:'The Matrix', emoji:'🕶️', category:'movie', tags:['sci-fi','action','dystopian','philosophy'] },
  { name:'Toy Story', emoji:'🧸', category:'movie', tags:['animation','family','comedy','adventure'] },
  { name:'The Grand Budapest Hotel', emoji:'🏨', category:'movie', tags:['comedy','quirky','adventure'] },
  { name:'Get Out', emoji:'🎭', category:'movie', tags:['horror','thriller','social'] },
  { name:'Dune', emoji:'🏜️', category:'book', tags:['sci-fi','adventure','politics','epic'] },
  { name:'Harry Potter', emoji:'⚡', category:'book', tags:['fantasy','adventure','magic','family'] },
  { name:'The Hobbit', emoji:'💍', category:'book', tags:['fantasy','adventure','epic'] },
  { name:'1984', emoji:'👁️', category:'book', tags:['dystopian','political','thriller','drama'] },
  { name:'Sherlock Holmes', emoji:'🔎', category:'book', tags:['mystery','detective','thriller'] },
  { name:'The Alchemist', emoji:'🧭', category:'book', tags:['adventure','philosophy','self-help'] },
  { name:'The Martian', emoji:'🧑\u200d🚀', category:'book', tags:['sci-fi','space','survival','comedy'] },
  { name:'Pride and Prejudice', emoji:'💌', category:'book', tags:['romance','drama','classic'] },
  { name:'The Girl on the Train', emoji:'🚆', category:'book', tags:['mystery','thriller','drama'] },
  { name:'Atomic Habits', emoji:'📈', category:'book', tags:['self-help','productivity','non-fiction'] },
  { name:'The Witcher 3', emoji:'⚔️', category:'game', tags:['fantasy','adventure','rpg','story'] },
  { name:'Minecraft', emoji:'🧱', category:'game', tags:['sandbox','creative','adventure','family'] },
  { name:'Valorant', emoji:'🎯', category:'game', tags:['action','shooter','competitive'] },
  { name:'Stardew Valley', emoji:'🌾', category:'game', tags:['relaxing','farming','simulation','casual'] },
  { name:'Portal 2', emoji:'🧩', category:'game', tags:['puzzle','sci-fi','comedy'] },
  { name:'Hades', emoji:'🔥', category:'game', tags:['action','mythology','story','roguelike'] },
  { name:'Animal Crossing', emoji:'🍃', category:'game', tags:['relaxing','simulation','casual','family'] },
  { name:'Celeste', emoji:'⛰️', category:'game', tags:['puzzle','platformer','emotional','indie'] },
  { name:'Among Us', emoji:'👾', category:'game', tags:['social','competitive','mystery','party'] },
  { name:'Lo-fi Beats', emoji:'🎧', category:'music', tags:['relaxing','chill','study','instrumental'] },
  { name:'Coke Studio Pakistan', emoji:'🎤', category:'music', tags:['music','fusion','cultural','live'] },
  { name:'Classical Piano', emoji:'🎻', category:'music', tags:['relaxing','instrumental','study','classical'] },
  { name:'K-pop Hits', emoji:'💃', category:'music', tags:['music','pop','dance','energetic'] },
  { name:'Breaking Bad', emoji:'🧪', category:'show', tags:['crime','drama','thriller','intense'] },
  { name:'Stranger Things', emoji:'👾', category:'show', tags:['sci-fi','horror','adventure','mystery'] },
  { name:'Friends', emoji:'☕', category:'show', tags:['comedy','family','sitcom','romance'] },
  { name:'Attack on Titan', emoji:'⚔️', category:'anime', tags:['action','drama','fantasy','epic'] },
  { name:'Naruto', emoji:'🍥', category:'anime', tags:['action','adventure','fantasy','story'] }
];

// Small multilingual genre synonyms so a genre word typed in Urdu,
// Spanish, French or Arabic still maps onto the English catalog tags.
const SYNONYMS = {
  'سائنس فکشن':'sci-fi','سائنسی':'sci-fi','ایکشن':'action','تصوراتی':'fantasy','مہم جوئی':'adventure',
  'مزاحیہ':'comedy','رومانوی':'romance','سنسنی خیز':'thriller','معمہ':'mystery','پرسکون':'relaxing',
  'پہیلی':'puzzle','خاندانی':'family','موسیقی':'music','جادو':'magic','ڈرامہ':'drama','خوفناک':'horror',
  'ciencia':'sci-fi','ficción':'sci-fi','acción':'action','fantasía':'fantasy','aventura':'adventure',
  'comedia':'comedy','suspenso':'thriller','misterio':'mystery','relajante':'relaxing','rompecabezas':'puzzle',
  'familia':'family','música':'music','magia':'magic','terror':'horror',
  'science-fiction':'sci-fi','fantastique':'fantasy','aventure':'adventure','comédie':'comedy',
  'mystère':'mystery','relaxant':'relaxing','famille':'family','musique':'music','magie':'magic','drame':'drama','horreur':'horror',
  'خيال':'sci-fi','علمي':'sci-fi','أكشن':'action','خيالي':'fantasy','مغامرة':'adventure','كوميديا':'comedy',
  'رومانسي':'romance','إثارة':'thriller','غموض':'mystery','مريح':'relaxing','أحجية':'puzzle',
  'عائلي':'family','سحر':'magic','دراما':'drama','رعب':'horror'
};

function tokenize(raw) {
  return raw.toLowerCase()
    .split(/[^\p{L}\p{N}-]+/u)
    .filter(t => t.length > 1)
    .map(t => SYNONYMS[t] || t);
}

// ---------- 4. The decision function (if/else core) ----------
function classify(rawInput) {
  const msg = rawInput.toLowerCase().trim();
  if (!msg) return null;

  if (RULE_KEYS.exit.some(k => msg.includes(k))) return 'exit';
  else if (RULE_KEYS.greeting.some(k => msg.includes(k))) return 'greeting';
  else if (RULE_KEYS.wellbeing.some(k => msg.includes(k))) return 'wellbeing';
  else if (RULE_KEYS.identity.some(k => msg.includes(k))) return 'identity';
  else if (RULE_KEYS.help.some(k => msg.includes(k))) return 'help';
  else if (RULE_KEYS.thanks.some(k => msg.includes(k))) return 'thanks';
  else return 'reco';
}

function buildReply(type, lang) {
  const pool = TEXT[lang].R[type];
  return pool[Math.floor(Math.random() * pool.length)];
}

// ---------- 5. Recommendation logic: score items by tag overlap ----------
function recommend(rawInput) {
  const tokens = tokenize(rawInput);
  if (tokens.length === 0) return [];

  const scored = CATALOG.map(item => {
    const haystack = (item.name + ' ' + item.category + ' ' + item.tags.join(' ')).toLowerCase();
    let score = 0;
    const matchedTags = new Set();
    tokens.forEach(tok => {
      if (haystack.includes(tok)) {
        score++;
        item.tags.forEach(tag => { if (tag.includes(tok) || tok.includes(tag)) matchedTags.add(tag); });
      }
    });
    return { ...item, score, matchedTags: [...matchedTags].slice(0, 3) };
  });

  return scored.filter(i => i.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
}

// ---------- 4. App state + the "continuous loop" ----------
// Each call to handleSubmit() is one iteration of the classic
// `while True: user_input = input(); ...` loop — here triggered
// by Enter/Send instead of blocking on stdin.
let lang = 'en';
let history = [];   // previously asked questions
let ended = false;

const els = {
  thread: document.getElementById('thread'),
  input: document.getElementById('input'),
  sendBtn: document.getElementById('sendBtn'),
  langSelect: document.getElementById('langSelect'),
  historyList: document.getElementById('historyList'),
  historyEmpty: document.getElementById('historyEmpty'),
  clearBtn: document.getElementById('clearBtn'),
  hintRow: document.getElementById('hintRow'),
  subLabel: document.getElementById('subLabel'),
  historyLabel: document.getElementById('historyLabel'),
  topbarTitle: document.getElementById('topbarTitle'),
  sidebar: document.getElementById('sidebar'),
  overlay: document.getElementById('sidebarOverlay'),
  hamburger: document.getElementById('hamburger'),
  main: document.querySelector('.main')
};

function openSidebar() { els.sidebar.classList.add('open'); els.overlay.classList.add('show'); }
function closeSidebar() { els.sidebar.classList.remove('open'); els.overlay.classList.remove('show'); }
els.hamburger.addEventListener('click', () => {
  els.sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
els.overlay.addEventListener('click', closeSidebar);

function applyLanguageChrome() {
  const t = TEXT[lang];
  document.documentElement.setAttribute('dir', t.dir);
  els.input.placeholder = t.placeholder;
  els.sendBtn.textContent = t.send;
  els.clearBtn.textContent = t.clear;
  els.subLabel.textContent = t.sub;
  els.historyLabel.textContent = t.historyLabel;
  els.topbarTitle.innerHTML = t.title + ' <b>' + t.name + '</b>';
  els.hintRow.innerHTML = '';
  t.hints.forEach(h => {
    const b = document.createElement('button');
    b.className = 'hint';
    b.textContent = h;
    b.onclick = () => { els.input.value = h; handleSubmit(); };
    els.hintRow.appendChild(b);
  });
  renderHistory();

  els.main.classList.remove('lang-fade');
  void els.main.offsetWidth; // restart animation
  els.main.classList.add('lang-fade');
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function addRow(text, who, onComplete) {
  const row = document.createElement('div');
  row.className = 'row ' + who;
  const b = document.createElement('div');
  b.className = 'bubble';
  row.appendChild(b);
  els.thread.appendChild(row);
  els.thread.scrollTop = els.thread.scrollHeight;

  if (who === 'user' || prefersReducedMotion) {
    b.textContent = text;
    if (onComplete) onComplete();
    return;
  }
  typeText(b, text, 16, onComplete);
}

function typeText(el, text, speed, onComplete) {
  speed = speed || 16;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  let i = 0;
  el.textContent = '';
  el.appendChild(cursor);
  const timer = setInterval(() => {
    i++;
    el.textContent = text.slice(0, i);
    el.appendChild(cursor);
    els.thread.scrollTop = els.thread.scrollHeight;
    if (i >= text.length) {
      clearInterval(timer);
      setTimeout(() => { cursor.remove(); if (onComplete) onComplete(); }, 350);
    }
  }, speed);
}

function renderRecoCards(items) {
  const wrap = document.createElement('div');
  wrap.className = 'reco-wrap';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'reco-card';
    card.style.animationDelay = (i * 110) + 'ms';
    const chips = item.matchedTags.map(t => '<span class="reco-chip">' + t + '</span>').join('');
    card.innerHTML =
      '<div class="reco-emoji">' + item.emoji + '</div>' +
      '<div class="reco-body">' +
        '<div class="reco-name">' + item.name + '</div>' +
        '<div class="reco-cat">' + item.category + '</div>' +
        '<div class="reco-tags">' + chips + '</div>' +
      '</div>' +
      '<div class="reco-score">🎯 ' + item.score + '</div>';
    wrap.appendChild(card);
  });
  els.thread.appendChild(wrap);
  els.thread.scrollTop = els.thread.scrollHeight;
}

function renderHistory() {
  els.historyList.innerHTML = '';
  if (history.length === 0) {
    els.historyList.appendChild(els.historyEmpty);
    els.historyEmpty.textContent = TEXT[lang].empty;
    return;
  }
  history.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'history-item';
    btn.innerHTML = '<span class="idx">' + (i + 1) + '.</span>' + q;
    btn.title = q;
    btn.onclick = () => {
      els.input.value = q;
      els.input.focus();
      if (window.innerWidth <= 900) closeSidebar();
    };
    els.historyList.appendChild(btn);
  });
}

function showTyping() {
  const row = document.createElement('div');
  row.className = 'row bot typing';
  row.id = 'typingRow';
  row.innerHTML = '<div class="bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
  els.thread.appendChild(row);
  els.thread.scrollTop = els.thread.scrollHeight;
}
function removeTyping() {
  const row = document.getElementById('typingRow');
  if (row) row.remove();
}

function handleSubmit() {
  if (ended) return;
  const val = els.input.value;
  if (!val.trim()) return;

  addRow(val, 'user');
  history.unshift(val);
  renderHistory();
  els.input.value = '';

  els.sendBtn.classList.remove('send-pulse');
  void els.sendBtn.offsetWidth;
  els.sendBtn.classList.add('send-pulse');

  showTyping();
  const type = classify(val);
  const delay = prefersReducedMotion ? 60 : 450 + Math.random() * 250;

  setTimeout(() => {
    removeTyping();

    if (type === 'reco') {
      const results = recommend(val);
      if (results.length === 0) {
        addRow(buildReply('no_match', lang), 'bot');
      } else {
        const intro = buildReply('reco_intro', lang) + ' (' + results.length + ')';
        addRow(intro, 'bot', () => renderRecoCards(results));
      }
      return;
    }

    const reply = buildReply(type, lang);
    addRow(reply, 'bot');
    if (type === 'exit') {
      ended = true;
      els.input.disabled = true;
      els.sendBtn.disabled = true;
    }
  }, delay);
}

els.sendBtn.addEventListener('click', handleSubmit);
els.input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSubmit(); });
els.clearBtn.addEventListener('click', () => { history = []; renderHistory(); });
els.langSelect.addEventListener('change', e => { lang = e.target.value; applyLanguageChrome(); });

// Boot
applyLanguageChrome();
addRow(buildReply('greeting', lang), 'bot');
els.input.focus();
