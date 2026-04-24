const languages = [
  { id: "python", name: "Python", subtitle: "Readable and beginner-friendly", designedBy: "Guido van Rossum", firstAppeared: "1991", typingDiscipline: "Dynamic / gradual", paradigm: "Object-oriented, procedural, functional", family: "General-purpose", description: "Python focuses on readability and developer speed. It dominates education, AI, automation, and backend development.", features: ["Simple syntax", "Huge library ecosystem", "Great for scripting", "Strong data tooling"], useCases: ["Web backends", "AI and ML", "Data science", "Automation"], exampleLabel: "Example", exampleIntro: "A short loop and function show Python's clean, readable style.", exampleCode: `def greet(name):\n    return f"Hello, {name}"\n\nfor language in ["Python", "Rust", "Go"]:\n    print(greet(language))`, fact: "Python was named after Monty Python, not the snake." },
  { id: "javascript", name: "JavaScript", subtitle: "The language of the modern web", designedBy: "Brendan Eich", firstAppeared: "1995", typingDiscipline: "Dynamic", paradigm: "Event-driven, functional, imperative", family: "Scripting", description: "JavaScript runs in browsers and servers, making it a full-stack language for interactive apps.", features: ["Runs in every browser", "Asynchronous model", "Massive npm ecosystem", "Flexible coding styles"], useCases: ["Frontend apps", "APIs with Node.js", "Real-time apps", "Tooling"], exampleLabel: "Example", exampleIntro: "JavaScript often uses array methods and arrow functions for compact logic.", exampleCode: `const languages = ["JavaScript", "TypeScript", "Node.js"];\n\nlanguages\n  .map((name) => name.toUpperCase())\n  .forEach((name) => console.log(\`Learning \${name}\`));`, fact: "JavaScript was created in just 10 days." },
  { id: "typescript", name: "TypeScript", subtitle: "JavaScript with static typing", designedBy: "Microsoft", firstAppeared: "2012", typingDiscipline: "Static", paradigm: "Object-oriented, functional", family: "Scripting", description: "TypeScript adds type safety and tooling to JavaScript, making large codebases easier to maintain.", features: ["Type checking", "Better autocompletion", "Safer refactors", "Compiles to JS"], useCases: ["Large web apps", "Frontend frameworks", "Node.js backends", "Libraries"], exampleLabel: "Example", exampleIntro: "Types make function inputs and outputs clear for larger codebases.", exampleCode: `type Language = {\n  name: string;\n  released: number;\n};\n\nconst language: Language = { name: "TypeScript", released: 2012 };\nconsole.log(language.name);`, fact: "TypeScript is now the default choice for many React and Angular teams." },
  { id: "java", name: "Java", subtitle: "Enterprise-grade and battle-tested", designedBy: "James Gosling", firstAppeared: "1995", typingDiscipline: "Static", paradigm: "Object-oriented, class-based, concurrent", family: "General-purpose", description: "Java powers enterprise systems, Android apps, and large-scale backends through the JVM ecosystem.", features: ["JVM portability", "Mature ecosystem", "Strong performance", "Robust tooling"], useCases: ["Enterprise software", "Android", "Financial systems", "Large APIs"], exampleLabel: "Example", exampleIntro: "Java uses classes and explicit types, which makes its structure easy to follow.", exampleCode: `public class HelloWorld {\n  public static void main(String[] args) {\n    String[] languages = {"Java", "Kotlin", "Scala"};\n\n    for (String language : languages) {\n      System.out.println("Hello, " + language);\n    }\n  }\n}`, fact: "Java's slogan is famously 'Write once, run anywhere'." },
  { id: "csharp", name: "C#", subtitle: "Versatile .NET language", designedBy: "Anders Hejlsberg", firstAppeared: "2000", typingDiscipline: "Static", paradigm: "Object-oriented, functional", family: "General-purpose", description: "C# is widely used for web backends, desktop software, cloud apps, and Unity game development.", features: ["Excellent tooling", "Modern language features", ".NET integration", "Performance options"], useCases: ["Web APIs", "Desktop software", "Games with Unity", "Cloud services"], exampleLabel: "Example", exampleIntro: "C# combines readable class syntax with modern collection helpers.", exampleCode: `using System;\n\nvar languages = new[] { "C#", ".NET", "Unity" };\nforeach (var language in languages)\n{\n    Console.WriteLine($"Building with {language}");\n}`, fact: "C# has evolved rapidly with records, pattern matching, and async features." },
  { id: "go", name: "Go", subtitle: "Minimal and highly practical", designedBy: "Google", firstAppeared: "2009", typingDiscipline: "Static", paradigm: "Concurrent, procedural", family: "Systems", description: "Go is built for reliability and simplicity, making it a favorite for backend and cloud infrastructure.", features: ["Fast compilation", "Built-in concurrency", "Small language surface", "Static binaries"], useCases: ["Cloud services", "Microservices", "CLI tools", "Networking"], exampleLabel: "Example", exampleIntro: "Go favors straightforward loops and simple, explicit syntax.", exampleCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    languages := []string{"Go", "Rust", "Python"}\n    for _, language := range languages {\n        fmt.Println("Deploying with", language)\n    }\n}`, fact: "Docker and Kubernetes are written largely in Go." },
  { id: "rust", name: "Rust", subtitle: "Safety and speed together", designedBy: "Graydon Hoare", firstAppeared: "2010", typingDiscipline: "Static", paradigm: "Systems, functional", family: "Systems", description: "Rust helps developers write fast programs with strict memory safety and fearless concurrency.", features: ["Memory safety", "No GC required", "High performance", "Powerful type system"], useCases: ["Systems software", "Performance-critical APIs", "CLI tools", "WebAssembly"], exampleLabel: "Example", exampleIntro: "Rust examples usually highlight explicit variables and safe iteration.", exampleCode: `fn main() {\n    let languages = ["Rust", "Go", "C"];\n\n    for language in languages.iter() {\n        println!("Safe systems with {}", language);\n    }\n}`, fact: "Rust has topped developer 'most loved' surveys for multiple years." },
  { id: "cpp", name: "C++", subtitle: "High-performance systems language", designedBy: "Bjarne Stroustrup", firstAppeared: "1985", typingDiscipline: "Static", paradigm: "Procedural, object-oriented, generic", family: "Systems", description: "C++ offers low-level control and top performance, common in game engines and embedded systems.", features: ["Manual control", "Templates", "Performance tuning", "Wide platform support"], useCases: ["Game engines", "Embedded systems", "Compilers", "Trading systems"], exampleLabel: "Example", exampleIntro: "C++ can mix fast loops with standard library containers.", exampleCode: `#include <iostream>\n#include <vector>\n\nint main() {\n  std::vector<std::string> languages = {"C++", "Rust", "Go"};\n\n  for (const auto& language : languages) {\n    std::cout << "Building with " << language << "\\n";\n  }\n}`, fact: "Many AAA game engines use C++ at their core." },
  { id: "ruby", name: "Ruby", subtitle: "Developer happiness focused", designedBy: "Yukihiro Matsumoto", firstAppeared: "1995", typingDiscipline: "Dynamic", paradigm: "Object-oriented, functional", family: "Scripting", description: "Ruby emphasizes elegant code and productivity, best known for the Ruby on Rails web framework.", features: ["Clean syntax", "Everything is an object", "Rails ecosystem", "Rapid prototyping"], useCases: ["Web apps", "Prototypes", "Automation", "Developer tooling"], exampleLabel: "Example", exampleIntro: "Ruby often reads almost like plain English.", exampleCode: `languages = ["Ruby", "Rails", "Sinatra"]\n\nlanguages.each do |language|\n  puts "Building with #{language}"\nend`, fact: "Ruby on Rails popularized convention-over-configuration." },
  { id: "php", name: "PHP", subtitle: "Server-side web scripting staple", designedBy: "Rasmus Lerdorf", firstAppeared: "1995", typingDiscipline: "Dynamic", paradigm: "Imperative, object-oriented", family: "Scripting", description: "PHP powers a large portion of the web and is commonly used for backend websites and CMS platforms.", features: ["Easy deployment", "Huge web footprint", "Strong frameworks", "Built for server rendering"], useCases: ["CMS sites", "Web backends", "E-commerce", "APIs"], exampleLabel: "Example", exampleIntro: "PHP is often used to generate output directly on the server.", exampleCode: `<?php\n$languages = ["PHP", "Laravel", "WordPress"];\n\nforeach ($languages as $language) {\n    echo "Running with {$language}\\n";\n}\n?>`, fact: "WordPress, used by millions of sites, is written in PHP." },
  { id: "swift", name: "Swift", subtitle: "Apple's modern app language", designedBy: "Apple", firstAppeared: "2014", typingDiscipline: "Static", paradigm: "Protocol-oriented, functional, object-oriented", family: "General-purpose", description: "Swift is the main language for iOS and macOS apps, designed for safety and performance.", features: ["Safe syntax", "Great for Apple platforms", "Fast", "Modern tooling"], useCases: ["iOS apps", "macOS apps", "Server-side Swift", "Cross-platform Apple ecosystem"], exampleLabel: "Example", exampleIntro: "Swift code aims to be safe, expressive, and concise.", exampleCode: `let languages = ["Swift", "Objective-C", "Kotlin"]\n\nfor language in languages {\n    print("Building apps with \\(language)")\n}`, fact: "Swift replaced Objective-C as Apple's preferred language." },
  { id: "kotlin", name: "Kotlin", subtitle: "Concise and safe JVM language", designedBy: "JetBrains", firstAppeared: "2011", typingDiscipline: "Static", paradigm: "Object-oriented, functional", family: "General-purpose", description: "Kotlin runs on the JVM and is a primary language for Android development.", features: ["Null safety", "Concise code", "Java interop", "Modern syntax"], useCases: ["Android apps", "JVM backends", "Multiplatform projects", "Mobile apps"], exampleLabel: "Example", exampleIntro: "Kotlin keeps JVM syntax concise while staying strongly typed.", exampleCode: `fun main() {\n    val languages = listOf("Kotlin", "Java", "Swift")\n    languages.forEach { println("Mobile apps with $it") }\n}`, fact: "Google officially supports Kotlin for Android." },
  { id: "r", name: "R", subtitle: "Statistics and data analysis language", designedBy: "Ross Ihaka and Robert Gentleman", firstAppeared: "1993", typingDiscipline: "Dynamic", paradigm: "Procedural, functional", family: "Data Science", description: "R is specialized for statistical computing, visualizations, and research workflows.", features: ["Statistical packages", "Data visualization", "Research-friendly", "Powerful analytics"], useCases: ["Biostatistics", "Academic research", "Data analysis", "Statistical modeling"], exampleLabel: "Example", exampleIntro: "R is commonly used to summarize and inspect data quickly.", exampleCode: `languages <- c("R", "Python", "Julia")\n\nfor (language in languages) {\n  print(paste("Analyzing with", language))\n}`, fact: "R's CRAN repository hosts thousands of specialized statistics packages." },
  { id: "sql", name: "SQL", subtitle: "The language of relational data", designedBy: "IBM", firstAppeared: "1974", typingDiscipline: "Declarative", paradigm: "Declarative querying", family: "Declarative", description: "SQL is used to query and manage relational databases and remains foundational for backend systems.", features: ["Declarative syntax", "Powerful querying", "Standardized", "Data manipulation"], useCases: ["Database queries", "Analytics", "Data pipelines", "Backend services"], exampleLabel: "Example", exampleIntro: "SQL describes the data you want instead of step-by-step control flow.", exampleCode: `SELECT language_name, first_appeared\nFROM programming_languages\nWHERE family = 'Systems'\nORDER BY first_appeared ASC;`, fact: "SQL is one of the most universally used languages in software." },
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

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
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
