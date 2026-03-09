import { h as head } from "../../../chunks/index3.js";
import { S as SITE_CONFIG, a as SOCIAL_LINKS } from "../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("cwls5q", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>About - CloneSaaS</title>`);
      });
    });
    $$renderer2.push(`<section class="about-page svelte-cwls5q"><div class="container svelte-cwls5q"><a href="/" class="back-link svelte-cwls5q"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg> Back to Home</a> <div class="content svelte-cwls5q"><h1 class="title svelte-cwls5q">About CloneSaaS</h1> <div class="intro svelte-cwls5q"><p class="lead svelte-cwls5q">We help founders skip the validation phase and launch faster by providing 
          pre-built, niche-adapted clones of proven business models.</p></div> <div class="section svelte-cwls5q"><h2 class="svelte-cwls5q">The Problem</h2> <p class="svelte-cwls5q">Most founders spend months (or years) trying to validate an idea, only to discover 
          it doesn't work. Meanwhile, thousands of SaaS companies have already proven their 
          business models work — they have paying customers, predictable revenue, and clear 
          product-market fit.</p></div> <div class="section svelte-cwls5q"><h2 class="svelte-cwls5q">Our Solution</h2> <p class="svelte-cwls5q">We reverse-engineer successful startups, understand what makes them work, and build 
          4 niche-adapted versions of each. These aren't generic templates — they're fully 
          thought-out spin-offs designed for specific audiences that the original startup 
          doesn't serve.</p> <p class="svelte-cwls5q">You get the code, the brand assets, and the business model blueprint. Rebrand it, 
          customize it, and launch it as your own.</p></div> <div class="section svelte-cwls5q"><h2 class="svelte-cwls5q">Why $467?</h2> <p class="svelte-cwls5q">It's a one-time payment that's affordable enough for most founders to take a bet, 
          but high enough to ensure only serious buyers. No subscriptions, no hidden fees. 
          You own everything outright.</p></div> <div class="section svelte-cwls5q"><h2 class="svelte-cwls5q">Who's Behind This?</h2> <p class="svelte-cwls5q">CloneSaaS is built by <a${attr("href", SITE_CONFIG.authorUrl)} target="_blank" rel="noopener noreferrer" class="svelte-cwls5q">${escape_html(SITE_CONFIG.author)}</a> — 
          a founder who's been in the trenches, building products and helping others launch theirs.</p></div> <div class="cta-section svelte-cwls5q"><h2 class="svelte-cwls5q">Got Questions?</h2> <p class="svelte-cwls5q">Reach out on X/Twitter. I respond to every message.</p> <a${attr("href", SOCIAL_LINKS.twitter)} target="_blank" rel="noopener noreferrer" class="cta-button svelte-cwls5q">Message on X</a></div></div></div></section>`);
  });
}
export {
  _page as default
};
