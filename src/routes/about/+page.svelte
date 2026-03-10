<script lang="ts">
  import { page } from '$app/stores';
  import { SOCIAL_LINKS, SITE_CONFIG } from '../../constants';
  
  let baseUrl = $derived($page.url.origin);
</script>

<svelte:head>
  <title>About - CloneSaaS</title>
  <meta name="description" content="Learn about CloneSaaS - we help founders skip validation and launch faster with pre-built, niche-adapted clones of proven business models." />
  <link rel="canonical" href="{baseUrl}/about" />
  
  <meta property="og:title" content="About - CloneSaaS" />
  <meta property="og:description" content="Learn about CloneSaaS - we help founders skip validation and launch faster with pre-built, niche-adapted clones of proven business models." />
  <meta property="og:image" content="{baseUrl}/main-og-image.png" />
  <meta property="og:url" content="{baseUrl}/about" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About - CloneSaaS" />
  <meta name="twitter:description" content="Learn about CloneSaaS - we help founders skip validation and launch faster with pre-built, niche-adapted clones of proven business models." />
  <meta name="twitter:image" content="{baseUrl}/main-og-image.png" />
</svelte:head>

<section class="about-page">
  <div class="container">
    <a href="/" class="back-link">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Home
    </a>

    <div class="content">
      <h1 class="title">About CloneSaaS</h1>
      
      <div class="intro">
        <p class="lead">
          We help founders skip the validation phase and launch faster by providing 
          pre-built, niche-adapted clones of proven business models.
        </p>
      </div>

      <div class="section">
        <h2>The Problem</h2>
        <p>
          Most founders spend months (or years) trying to validate an idea, only to discover 
          it doesn't work. Meanwhile, thousands of SaaS companies have already proven their 
          business models work — they have paying customers, predictable revenue, and clear 
          product-market fit.
        </p>
      </div>

      <div class="section">
        <h2>Our Solution</h2>
        <p>
          We reverse-engineer successful startups, understand what makes them work, and build 
          4 niche-adapted versions of each. These aren't generic templates — they're fully 
          thought-out spin-offs designed for specific audiences that the original startup 
          doesn't serve.
        </p>
        <p>
          You get the code, the brand assets, and the business model blueprint. Rebrand it, 
          customize it, and launch it as your own.
        </p>
      </div>

      <div class="section">
        <h2>Why $467?</h2>
        <p>
          It's a one-time payment that's affordable enough for most founders to take a bet, 
          but high enough to ensure only serious buyers. No subscriptions, no hidden fees. 
          You own everything outright.
        </p>
      </div>

      <div class="section">
        <h2>Who's Behind This?</h2>
        <p>
          CloneSaaS is built by <a href={SITE_CONFIG.authorUrl} target="_blank" rel="noopener noreferrer">{SITE_CONFIG.author}</a> — 
          a founder who's been in the trenches, building products and helping others launch theirs.
        </p>
      </div>

      <div class="cta-section">
        <h2>Got Questions?</h2>
        <p>Reach out on X/Twitter. I respond to every message.</p>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" class="cta-button">
          Message on X
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .about-page {
    padding: 6rem 1.5rem 5rem;
    min-height: calc(100vh - 200px);
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: var(--text-primary);
  }

  .content {
    animation: fadeIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  .intro {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
  }

  .lead {
    font-size: 1.25rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  .section {
    margin-bottom: 2.5rem;
  }

  .section h2 {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .section p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .section p:last-child {
    margin-bottom: 0;
  }

  .section a {
    color: var(--accent);
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .section a:hover {
    opacity: 0.8;
  }

  .cta-section {
    margin-top: 3rem;
    padding: 2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    text-align: center;
  }

  .cta-section h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .cta-section p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .cta-button {
    display: inline-block;
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--accent);
    color: white;
    padding: 0.9rem 2rem;
    border-radius: 10px;
    transition: all 0.2s ease;
  }

  .cta-button:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
  }
</style>
