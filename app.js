const languages = [
  { id: "python", name: "Python", subtitle: "Readable and beginner-friendly", designedBy: "Guido van Rossum", firstAppeared: "1991", typingDiscipline: "Dynamic / gradual", paradigm: "Object-oriented, procedural, functional", family: "General-purpose", description: "Python focuses on readability and developer speed. It dominates education, AI, automation, and backend development.", features: ["Simple syntax", "Huge library ecosystem", "Great for scripting", "Strong data tooling"], useCases: ["Web backends", "AI and ML", "Data science", "Automation"], fact: "Python was named after Monty Python, not the snake." },
  { id: "javascript", name: "JavaScript", subtitle: "The language of the modern web", designedBy: "Brendan Eich", firstAppeared: "1995", typingDiscipline: "Dynamic", paradigm: "Event-driven, functional, imperative", family: "Scripting", description: "JavaScript runs in browsers and servers, making it a full-stack language for interactive apps.", features: ["Runs in every browser", "Asynchronous model", "Massive npm ecosystem", "Flexible coding styles"], useCases: ["Frontend apps", "APIs with Node.js", "Real-time apps", "Tooling"], fact: "JavaScript was created in just 10 days." },
  { id: "typescript", name: "TypeScript", subtitle: "JavaScript with static typing", designedBy: "Microsoft", firstAppeared: "2012", typingDiscipline: "Static", paradigm: "Object-oriented, functional", family: "Scripting", description: "TypeScript adds type safety and tooling to JavaScript, making large codebases easier to maintain.", features: ["Type checking", "Better autocompletion", "Safer refactors", "Compiles to JS"], useCases: ["Large web apps", "Frontend frameworks", "Node.js backends", "Libraries"], fact: "TypeScript is now the default choice for many React and Angular teams." },
  { id: "java", name: "Java", subtitle: "Enterprise-grade and battle-tested", designedBy: "James Gosling", firstAppeared: "1995", typingDiscipline: "Static", paradigm: "Object-oriented, class-based, concurrent", family: "General-purpose", description: "Java powers enterprise systems, Android apps, and large-scale backends through the JVM ecosystem.", features: ["JVM portability", "Mature ecosystem", "Strong performance", "Robust tooling"], useCases: ["Enterprise software", "Android", "Financial systems", "Large APIs"], fact: "Java's slogan is famously 'Write once, run anywhere'." },
  { id: "csharp", name: "C#", subtitle: "Versatile .NET language", designedBy: "Anders Hejlsberg", firstAppeared: "2000", typingDiscipline: "Static", paradigm: "Object-oriented, functional", family: "General-purpose", description: "C# is widely used for web backends, desktop software, cloud apps, and Unity game development.", features: ["Excellent tooling", "Modern language features", ".NET integration", "Performance options"], useCases: ["Web APIs", "Desktop software", "Games with Unity", "Cloud services"], fact: "C# has evolved rapidly with records, pattern matching, and async features." },
  { id: "go", name: "Go", subtitle: "Minimal and highly practical", designedBy: "Google", firstAppeared: "2009", typingDiscipline: "Static", paradigm: "Concurrent, procedural", family: "Systems", description: "Go is built for reliability and simplicity, making it a favorite for backend and cloud infrastructure.", features: ["Fast compilation", "Built-in concurrency", "Small language surface", "Static binaries"], useCases: ["Cloud services", "Microservices", "CLI tools", "Networking"], fact: "Docker and Kubernetes are written largely in Go." },
  { id: "rust", name: "Rust", subtitle: "Safety and speed together", designedBy: "Graydon Hoare", firstAppeared: "2010", typingDiscipline: "Static", paradigm: "Systems, functional", family: "Systems", description: "Rust helps developers write fast programs with strict memory safety and fearless concurrency.", features: ["Memory safety", "No GC required", "High performance", "Powerful type system"], useCases: ["Systems software", "Performance-critical APIs", "CLI tools", "WebAssembly"], fact: "Rust has topped developer 'most loved' surveys for multiple years." },
  { id: "cpp", name: "C++", subtitle: "High-performance systems language", designedBy: "Bjarne Stroustrup", firstAppeared: "1985", typingDiscipline: "Static", paradigm: "Procedural, object-oriented, generic", family: "Systems", description: "C++ offers low-level control and top performance, common in game engines and embedded systems.", features: ["Manual control", "Templates", "Performance tuning", "Wide platform support"], useCases: ["Game engines", "Embedded systems", "Compilers", "Trading systems"], fact: "Many AAA game engines use C++ at their core." },
  { id: "ruby", name: "Ruby", subtitle: "Developer happiness focused", designedBy: "Yukihiro Matsumoto", firstAppeared: "1995", typingDiscipline: "Dynamic", paradigm: "Object-oriented, functional", family: "Scripting", description: "Ruby emphasizes elegant code and productivity, best known for the Ruby on Rails web framework.", features: ["Clean syntax", "Everything is an object", "Rails ecosystem", "Rapid prototyping"], useCases: ["Web apps", "Prototypes", "Automation", "Developer tooling"], fact: "Ruby on Rails popularized convention-over-configuration." },
  { id: "php", name: "PHP", subtitle: "Server-side web scripting staple", designedBy: "Rasmus Lerdorf", firstAppeared: "1995", typingDiscipline: "Dynamic", paradigm: "Imperative, object-oriented", family: "Scripting", description: "PHP powers a large portion of the web and is commonly used for backend websites and CMS platforms.", features: ["Easy deployment", "Huge web footprint", "Strong frameworks", "Built for server rendering"], useCases: ["CMS sites", "Web backends", "E-commerce", "APIs"], fact: "WordPress, used by millions of sites, is written in PHP." },
  { id: "swift", name: "Swift", subtitle: "Apple's modern app language", designedBy: "Apple", firstAppeared: "2014", typingDiscipline: "Static", paradigm: "Protocol-oriented, functional, object-oriented", family: "General-purpose", description: "Swift is the main language for iOS and macOS apps, designed for safety and performance.", features: ["Safe syntax", "Great for Apple platforms", "Fast", "Modern tooling"], useCases: ["iOS apps", "macOS apps", "Server-side Swift", "Cross-platform Apple ecosystem"], fact: "Swift replaced Objective-C as Apple's preferred language." },
  { id: "kotlin", name: "Kotlin", subtitle: "Concise and safe JVM language", designedBy: "JetBrains", firstAppeared: "2011", typingDiscipline: "Static", paradigm: "Object-oriented, functional", family: "General-purpose", description: "Kotlin runs on the JVM and is a primary language for Android development.", features: ["Null safety", "Concise code", "Java interop", "Modern syntax"], useCases: ["Android apps", "JVM backends", "Multiplatform projects", "Mobile apps"], fact: "Google officially supports Kotlin for Android." },
  { id: "r", name: "R", subtitle: "Statistics and data analysis language", designedBy: "Ross Ihaka and Robert Gentleman", firstAppeared: "1993", typingDiscipline: "Dynamic", paradigm: "Procedural, functional", family: "Data Science", description: "R is specialized for statistical computing, visualizations, and research workflows.", features: ["Statistical packages", "Data visualization", "Research-friendly", "Powerful analytics"], useCases: ["Biostatistics", "Academic research", "Data analysis", "Statistical modeling"], fact: "R's CRAN repository hosts thousands of specialized statistics packages." },
  { id: "sql", name: "SQL", subtitle: "The language of relational data", designedBy: "IBM", firstAppeared: "1974", typingDiscipline: "Declarative", paradigm: "Declarative querying", family: "Declarative", description: "SQL is used to query and manage relational databases and remains foundational for backend systems.", features: ["Declarative syntax", "Powerful querying", "Standardized", "Data manipulation"], useCases: ["Database queries", "Analytics", "Data pipelines", "Backend services"], fact: "SQL is one of the most universally used languages in software." },
];

const typeInfo = [
  { name: "Compiled Languages", detail: "Translated to machine code before running. Often fast and efficient." },
  { name: "Interpreted Languages", detail: "Run by an interpreter at runtime. Great for quick iteration." },
  { name: "Scripting Languages", detail: "Usually used to automate tasks and power web interactions." },
  { name: "Systems Languages", detail: "Close to hardware, optimized for memory and performance." },
  { name: "Functional Languages", detail: "Focus on expressions and immutable data for cleaner logic." },
  { name: "Object-Oriented Languages", detail: "Model software around objects and reusable class structures." },
  { name: "Declarative Languages", detail: "Describe what to do, not step-by-step how to do it." },
  { name: "Data Science Languages", detail: "Designed for analysis, statistics, and data modeling workflows." },
];

const nav = document.getElementById("languageNav");
const article = document.getElementById("languageArticle");
const searchInput = document.getElementById("searchInput");
const typeCards = document.getElementById("typeCards");
const featuredCards = document.getElementById("featuredCards");
const quickStats = document.getElementById("quickStats");

function createTags(items) {
  return `<ul class="tag-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderStats() {
  const families = new Set(languages.map((language) => language.family)).size;
  const oldest = languages.reduce((acc, current) => (Number(current.firstAppeared) < Number(acc.firstAppeared) ? current : acc), languages[0]);

  quickStats.innerHTML = `
    <article class="stat-card"><p class="stat-number">${languages.length}</p><p class="stat-label">Languages in this wiki</p></article>
    <article class="stat-card"><p class="stat-number">${families}</p><p class="stat-label">Language families covered</p></article>
    <article class="stat-card"><p class="stat-number">${oldest.name}</p><p class="stat-label">Oldest listed language (${oldest.firstAppeared})</p></article>
    <article class="stat-card"><p class="stat-number">Daily</p><p class="stat-label">Fresh learning in 5 min</p></article>
  `;
}

function renderTypeCards() {
  typeCards.innerHTML = typeInfo.map((type) => `<article class="type-item"><h4>${type.name}</h4><p>${type.detail}</p></article>`).join("");
}

function renderFeaturedCards() {
  const featured = ["python", "javascript", "go", "rust", "sql", "kotlin"]
    .map((id) => languages.find((language) => language.id === id))
    .filter(Boolean);

  featuredCards.innerHTML = featured
    .map(
      (language) =>
        `<article class="featured-item"><h4>${language.name}</h4><p>${language.subtitle}</p><a class="nav-link" href="#${language.id}" data-id="${language.id}">Read article</a></article>`
    )
    .join("");
}

function renderArticle(language) {
  if (!language) {
    article.innerHTML = "<p>No language found. Try a different search term.</p>";
    return;
  }

  article.innerHTML = `
    <h2>${language.name}</h2>
    <p class="subtitle">${language.subtitle}</p>

    <aside class="infobox">
      <h3>${language.name}</h3>
      <dl>
        <dt>Designed by</dt>
        <dd>${language.designedBy}</dd>
        <dt>First appeared</dt>
        <dd>${language.firstAppeared}</dd>
        <dt>Typing discipline</dt>
        <dd>${language.typingDiscipline}</dd>
        <dt>Paradigm</dt>
        <dd>${language.paradigm}</dd>
        <dt>Family</dt>
        <dd>${language.family}</dd>
      </dl>
    </aside>

    <p>${language.description}</p>

    <h3 class="section-title">Key Features</h3>
    ${createTags(language.features)}

    <h3 class="section-title">Common Use Cases</h3>
    ${createTags(language.useCases)}

    <p class="fun-fact"><strong>Fun fact:</strong> ${language.fact}</p>
  `;
}

function renderNav(items) {
  nav.innerHTML = items
    .map((language) => `<a class="nav-link" href="#${language.id}" data-id="${language.id}">${language.name}</a>`)
    .join("");
}

function highlightActive(id) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.id === id);
  });
}

function getLanguageFromHash() {
  const id = window.location.hash.replace("#", "");
  return languages.find((language) => language.id === id) || languages[0];
}

function onHashChange() {
  const current = getLanguageFromHash();
  renderArticle(current);
  highlightActive(current.id);
}

function onSearchInput(event) {
  const query = event.target.value.trim().toLowerCase();
  const filtered = languages.filter((language) => {
    return language.name.toLowerCase().includes(query) || language.family.toLowerCase().includes(query) || language.paradigm.toLowerCase().includes(query);
  });

  renderNav(filtered);
  const current = filtered[0] || null;
  if (current) {
    renderArticle(current);
    highlightActive(current.id);
  } else {
    renderArticle(null);
  }
}

renderStats();
renderTypeCards();
renderFeaturedCards();
renderNav(languages);
window.addEventListener("hashchange", onHashChange);
searchInput.addEventListener("input", onSearchInput);
onHashChange();
