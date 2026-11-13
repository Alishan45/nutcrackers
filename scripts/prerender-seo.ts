import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serviceDetails } from '../src/data/serviceData.js';
import { blogPosts } from '../src/data/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

function replaceMeta(html: string, options: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  schemaJson?: object | object[];
  prerenderedBody?: string;
}): string {
  let result = html;

  // 1. Replace Title
  result = result.replace(/<title>.*?<\/title>/is, `<title>${options.title}</title>`);
  result = result.replace(/<meta name="title" content=".*?" \/>/is, `<meta name="title" content="${options.title}" />`);

  // 2. Replace Meta Description
  result = result.replace(/<meta name="description" content=".*?" \/>/is, `<meta name="description" content="${options.description}" />`);

  // 3. Replace Canonical
  result = result.replace(/<link rel="canonical" href=".*?" \/>/is, `<link rel="canonical" href="${options.canonicalUrl}" />`);

  // 4. Replace OG Meta
  result = result.replace(/<meta property="og:title" content=".*?" \/>/is, `<meta property="og:title" content="${options.title}" />`);
  result = result.replace(/<meta property="og:description" content=".*?" \/>/is, `<meta property="og:description" content="${options.description}" />`);
  result = result.replace(/<meta property="og:url" content=".*?" \/>/is, `<meta property="og:url" content="${options.canonicalUrl}" />`);
  if (options.ogType) {
    result = result.replace(/<meta property="og:type" content=".*?" \/>/is, `<meta property="og:type" content="${options.ogType}" />`);
  }

  // 5. Replace Twitter Meta
  result = result.replace(/<meta name="twitter:title" content=".*?" \/>/is, `<meta name="twitter:title" content="${options.title}" />`);
  result = result.replace(/<meta name="twitter:description" content=".*?" \/>/is, `<meta name="twitter:description" content="${options.description}" />`);
  result = result.replace(/<meta name="twitter:url" content=".*?" \/>/is, `<meta name="twitter:url" content="${options.canonicalUrl}" />`);

  // 6. Inject Schema if provided
  if (options.schemaJson) {
    const schemaScript = `\n    <script type="application/ld+json">\n${JSON.stringify(options.schemaJson, null, 2)}\n    </script>\n  </head>`;
    result = result.replace('</head>', schemaScript);
  }

  // 7. Inject Semantic Static Body inside root div for non-JS scrapers & bot indexing
  if (options.prerenderedBody) {
    result = result.replace('<div id="root"></div>', `<div id="root">${options.prerenderedBody}</div>`);
  }

  return result;
}

console.log('--- Starting Technical SEO Static Prerender Process ---');

// 1. Prerender 8 Services Landing Pages
for (const service of serviceDetails) {
  const serviceDir = path.join(distDir, service.slug);
  fs.mkdirSync(serviceDir, { recursive: true });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Nutcrackers',
      url: 'https://nutcrackers.tech',
      telephone: '+923125355078',
      sameAs: [
        'https://wa.me/923125355078',
        'https://alishanai.vercel.app',
        'https://muzammilshabbir.vercel.app/'
      ]
    },
    description: service.metaDescription,
    url: service.canonicalUrl
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  const semanticBody = `
    <header style="padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a> &gt;</li>
          <li><a href="/#services">Services</a> &gt;</li>
          <li aria-current="page">${service.title}</li>
        </ol>
      </nav>
      <span>${service.number} • ${service.category}</span>
      <h1>${service.h1}</h1>
      <p>${service.tagline}</p>
      <p><a href="https://wa.me/923125355078">WhatsApp Engineering Consultation: +92 312 5355078</a></p>
    </header>
    <main>
      ${service.overview ? `
        <section>
          <h2>Service Overview</h2>
          ${service.overview.map(o => `<p>${o}</p>`).join('')}
        </section>
      ` : ''}
      <section>
        <h2>Industry Challenges and How Nutcrackers Solves Them</h2>
        ${service.problemsAndSolutions.map(p => `
          <article>
            <h3>Challenge</h3>
            <p>${p.problem}</p>
            <h3>Engineering Fix</h3>
            <p>${p.solution}</p>
          </article>
        `).join('')}
      </section>
      <section>
        <h2>Strategic Advantages & Benefits</h2>
        <ul>
          ${service.benefits.map(b => `
            <li>
              <strong>${b.title}</strong>: ${b.description}
            </li>
          `).join('')}
        </ul>
      </section>
      ${service.deliverables ? `
        <section>
          <h2>Guaranteed Deliverables</h2>
          <ul>
            ${service.deliverables.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </section>
      ` : ''}
      <section>
        <h2>Production Technology Stack</h2>
        <p>${service.techStack.join(', ')}</p>
      </section>
      <section>
        <h2>Real-World Industry Use Cases</h2>
        ${service.useCases.map(u => `
          <div>
            <h3>${u.industry} — ${u.title}</h3>
            <p>${u.description}</p>
          </div>
        `).join('')}
      </section>
      <section>
        <h2>Frequently Asked Questions</h2>
        ${service.faqs.map(f => `
          <details open>
            <summary><strong>${f.question}</strong></summary>
            <p>${f.answer}</p>
          </details>
        `).join('')}
      </section>
      <section>
        <h2>Related Digital Services</h2>
        <ul>
          ${service.relatedServices.map(r => `
            <li><a href="${r.path}"><strong>${r.title}</strong></a> — ${r.tagline}</li>
          `).join('')}
        </ul>
      </section>
    </main>
    <footer style="margin-top: 40px; padding: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
      <p>&copy; ${new Date().getFullYear()} Nutcrackers. All rights reserved. Canonical: <a href="https://nutcrackers.tech/">https://nutcrackers.tech</a></p>
      <p>Direct WhatsApp: <a href="https://wa.me/923125355078">+92 312 5355078</a> | Serving Taxila, Wah Cantt, Islamabad, Rawalpindi & Worldwide.</p>
    </footer>
  `;

  const rendered = replaceMeta(templateHtml, {
    title: service.metaTitle,
    description: service.metaDescription,
    canonicalUrl: service.canonicalUrl,
    schemaJson: [serviceSchema, faqSchema],
    prerenderedBody: semanticBody
  });

  fs.writeFileSync(path.join(serviceDir, 'index.html'), rendered, 'utf8');
  console.log(`[Generated Service] /${service.slug}/index.html`);
}

// 2. Prerender /blog Hub
const blogDir = path.join(distDir, 'blog');
fs.mkdirSync(blogDir, { recursive: true });

const blogHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Nutcrackers Engineering & Technology Insights',
  description: 'In-depth engineering guides, tech agency hiring frameworks, AI automation blueprints, and data analytics case studies.',
  url: 'https://nutcrackers.tech/blog'
};

const blogHubBody = `
  <header>
    <nav aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a> &gt;</li>
        <li aria-current="page">Blog</li>
      </ol>
    </nav>
    <h1>Engineering Playbooks, AI Blueprints & Strategy Guides</h1>
    <p>Practical, in-depth architectural guides written by senior developers and technology strategists for founders, CTOs, and product leaders.</p>
  </header>
  <main>
    <section>
      <h2>Articles & Guides</h2>
      <ul>
        ${blogPosts.map(p => `
          <li>
            <article>
              <h3><a href="/blog/${p.slug}">${p.title}</a></h3>
              <p>Category: ${p.category} | Reading Time: ${p.readingTime} | Author: ${p.author.name}</p>
              <p>${p.summary}</p>
            </article>
          </li>
        `).join('')}
      </ul>
    </section>
  </main>
`;

const renderedBlogHub = replaceMeta(templateHtml, {
  title: 'Technology, Engineering & AI Insights Blog | Nutcrackers',
  description: 'In-depth engineering guides, tech agency hiring frameworks, AI automation blueprints, and data analytics case studies by Nutcrackers.',
  canonicalUrl: 'https://nutcrackers.tech/blog',
  schemaJson: blogHubSchema,
  prerenderedBody: blogHubBody
});
fs.writeFileSync(path.join(blogDir, 'index.html'), renderedBlogHub, 'utf8');
console.log(`[Generated Blog Hub] /blog/index.html`);

// 3. Prerender 5 Blog Articles
for (const post of blogPosts) {
  const postDir = path.join(blogDir, post.slug);
  fs.mkdirSync(postDir, { recursive: true });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.metaDescription,
    url: post.canonicalUrl,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nutcrackers',
      url: 'https://nutcrackers.tech'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  const semanticArticleBody = `
    <header>
      <nav aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a> &gt;</li>
          <li><a href="/blog">Blog</a> &gt;</li>
          <li aria-current="page">${post.title}</li>
        </ol>
      </nav>
      <span>${post.category} • ${post.readingTime}</span>
      <h1>${post.title}</h1>
      <p>${post.summary}</p>
      <p>By <strong>${post.author.name}</strong> (${post.author.role}) — Updated: ${post.modifiedDate}</p>
    </header>
    <main>
      <nav aria-label="Table of Contents">
        <h2>Table of Contents</h2>
        <ul>
          ${post.tableOfContents.map(t => `<li><a href="#${t.id}">${t.title}</a></li>`).join('')}
        </ul>
      </nav>
      <article>
        ${post.sections.map(s => `
          <section id="${s.id}">
            <h2>${s.heading}</h2>
            ${s.paragraphs.map(p => `<p>${p}</p>`).join('')}
            ${s.bulletPoints ? `<ul>${s.bulletPoints.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
            ${s.keyTakeaway ? `<blockquote><strong>Key Takeaway:</strong> ${s.keyTakeaway}</blockquote>` : ''}
          </section>
        `).join('')}
      </article>
      ${post.faqs.length > 0 ? `
        <section>
          <h2>Frequently Asked Questions</h2>
          ${post.faqs.map(f => `
            <details open>
              <summary><strong>${f.question}</strong></summary>
              <p>${f.answer}</p>
            </details>
          `).join('')}
        </section>
      ` : ''}
      <section>
        <h2>Related Engineering Services</h2>
        <ul>
          ${post.relatedServices.map(r => `
            <li><a href="${r.path}"><strong>${r.title}</strong></a> — ${r.description}</li>
          `).join('')}
        </ul>
      </section>
    </main>
  `;

  const renderedPost = replaceMeta(templateHtml, {
    title: post.metaTitle,
    description: post.metaDescription,
    canonicalUrl: post.canonicalUrl,
    ogType: 'article',
    schemaJson: [articleSchema, faqSchema],
    prerenderedBody: semanticArticleBody
  });

  fs.writeFileSync(path.join(postDir, 'index.html'), renderedPost, 'utf8');
  console.log(`[Generated Article] /blog/${post.slug}/index.html`);
}

console.log('--- Technical SEO Static Prerender Process Completed Successfully (14 Route Pages Generated) ---');
