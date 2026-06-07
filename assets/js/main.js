const data = window.profileData;

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const link = (href, text, className) => {
  const node = el("a", className, text);
  node.href = href;
  if (href.startsWith("http")) {
    node.target = "_blank";
    node.rel = "noreferrer";
  }
  return node;
};

const renderTextList = (selector, items) => {
  const root = document.querySelector(selector);
  items.forEach((item) => {
    const paragraph = el("p", "");
    paragraph.innerHTML = item;
    root.append(paragraph);
  });
};

const renderStats = () => {
  const stats = document.querySelector("#stats");
  const snapshot = data.scholarSnapshot;
  [
    ["Citations", snapshot.citations],
    ["h-index", snapshot.hIndex],
    ["i10-index", snapshot.i10Index]
  ].forEach(([label, value]) => {
    const item = el("div", "stat");
    item.append(el("span", "stat-value", value));
    item.append(el("span", "stat-label", label));
    stats.append(item);
  });
  document.querySelector("#stats-note").textContent = `${snapshot.label}, ${snapshot.date}`;
};

const renderAuthors = (authors) => {
  if (typeof authors === "string") return authors;
  return authors.map((author) => {
    const name = author.me ? `<strong>${author.name}</strong>` : author.name;
    const marks = author.marks?.length ? `<sup>${author.marks.join("")}</sup>` : "";
    return `${name}${marks}`;
  }).join(", ");
};

const renderNews = () => {
  const root = document.querySelector("#news-list");
  data.news.forEach((item) => {
    const row = el("li", "news-item");
    row.append(el("time", "", item.date));
    row.append(el("span", "", item.text));
    root.append(row);
  });
};

const renderInterests = () => {
  const root = document.querySelector("#interest-grid");
  data.interests.forEach((item) => {
    const card = el("article", "interest-card");
    card.append(el("h3", "", item.name));
    card.append(el("p", "", item.text));
    root.append(card);
  });
};

const renderHeroHighlights = () => {
  const root = document.querySelector("#hero-highlights");
  root.append(el("h2", "hero-highlights-title", "Education & Appointments"));

  const list = el("ol", "hero-highlight-list");
  data.heroHighlights.forEach((entry) => {
    const item = el("li", "hero-highlight");
    if (entry.logo) {
      const logo = el("img", "hero-highlight-logo");
      logo.src = entry.logo;
      logo.alt = entry.logoAlt || "";
      item.append(logo);
    }
    const copy = el("div", "hero-highlight-copy");
    copy.append(el("span", "hero-highlight-period", entry.period));
    copy.append(el("strong", "", entry.title));
    copy.append(el("span", "hero-highlight-place", entry.place));
    item.append(copy);
    list.append(item);
  });
  root.append(list);
};

const renderFeaturedPublications = () => {
  const root = document.querySelector("#featured-publications");
  data.featuredPublications.forEach((paper) => {
    const card = el("article", "featured-paper");

    const media = el("a", "paper-media");
    media.href = paper.link;
    media.target = "_blank";
    media.rel = "noreferrer";

    const img = el("img");
    img.src = paper.image;
    img.alt = paper.title;
    img.loading = "lazy";
    media.append(img);

    const body = el("div", "paper-body");
    body.append(el("span", "venue-badge", paper.badge));
    const title = el("h3");
    title.append(link(paper.link, paper.title));
    body.append(title);
    const authors = el("p", "authors");
    authors.innerHTML = renderAuthors(paper.authors);
    body.append(authors);
    body.append(el("p", "summary", paper.summary));

    card.append(media);
    card.append(body);
    root.append(card);
  });
};

const renderPublications = () => {
  const root = document.querySelector("#publication-list");
  data.publications.forEach((paper) => {
    const item = el("li", "publication-item");
    const main = el("div", "publication-main");
    const title = el("h3");
    title.append(link(paper.link, paper.title));
    main.append(title);
    const authors = el("p", "authors");
    authors.innerHTML = renderAuthors(paper.authors);
    main.append(authors);
    main.append(el("p", "venue", `${paper.venue}, ${paper.year}`));

    const meta = el("div", "publication-meta");
    meta.append(el("span", "year", paper.year));
    if (paper.citations) {
      meta.append(el("span", "citation", `${paper.citations} cites`));
    }

    item.append(main);
    item.append(meta);
    root.append(item);
  });
};

const renderEducation = () => {
  const root = document.querySelector("#education-list");
  data.education.forEach((entry) => {
    const item = el("li", "timeline-item");
    item.append(el("time", "", entry.period));
    const body = el("div", "timeline-body");
    if (entry.logo) {
      const logo = el("img", "institution-logo");
      logo.src = entry.logo;
      logo.alt = entry.logoAlt || "";
      body.append(logo);
    }
    const copy = el("div", "timeline-copy");
    copy.append(el("h3", "", entry.title));
    copy.append(el("p", "", entry.place));
    if (entry.detail) {
      const detail = el("p", "timeline-detail");
      detail.innerHTML = entry.detail;
      copy.append(detail);
    }
    body.append(copy);
    item.append(body);
    root.append(item);
  });
};

const renderExperience = () => {
  const root = document.querySelector("#experience-list");
  data.experience.forEach((entry) => {
    const item = el("li", "timeline-item");
    item.append(el("time", "", entry.period));
    const body = el("div", "timeline-body");
    if (entry.logo) {
      const logo = el("img", "institution-logo");
      logo.src = entry.logo;
      logo.alt = entry.logoAlt || "";
      body.append(logo);
    }
    const copy = el("div", "timeline-copy");
    copy.append(el("h3", "", entry.title));
    copy.append(el("p", "", entry.place));
    body.append(copy);
    item.append(body);
    root.append(item);
  });
};

const renderHeader = () => {
  const p = data.person;
  document.title = `${p.name} - Academic homepage`;
  document.querySelector("#name").textContent = `${p.name} (${p.chineseName})`;
  document.querySelector("#role").textContent = p.title;
  document.querySelector("#affiliation").textContent = p.affiliation;
  document.querySelector("#location").textContent = p.location;
  document.querySelector("#avatar").src = p.avatar;
  document.querySelector("#avatar").alt = p.name;
  document.querySelector("#email-link").href = `mailto:${p.email}`;
  document.querySelector("#email-link").textContent = p.email;
  document.querySelector("#scholar-link").href = p.scholar;
  document.querySelector("#github-link").href = p.github;

  const tags = document.querySelector("#tags");
  data.scholarSnapshot.fields.forEach((field) => tags.append(el("span", "tag", field)));
};

const init = () => {
  renderHeader();
  renderTextList("#intro", data.intro);
  renderStats();
  renderNews();
  renderInterests();
  renderHeroHighlights();
  renderFeaturedPublications();
  renderPublications();
  renderExperience();
  renderEducation();
};

init();
