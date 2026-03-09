<script lang="ts">
  import { TOTAL_STARTUPS, TOTAL_CLONES, CLONE_PRICE } from '$lib/data';

  function scrollToStartups() {
    const element = document.getElementById('startups');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-container">
    <div class="eyebrow">Skip the guesswork. Buy what works.</div>
    
    <h1 class="headline">
      Why Build From Scratch<br/>
      When You Can <span class="highlight">Clone Success</span>
    </h1>
    
    <p class="subheadline">
      We took {TOTAL_STARTUPS} startups making real money, broke down exactly why they work, 
      and built {TOTAL_CLONES} niche spin-offs you can buy, rebrand, and launch as your own. 
      No validation needed. No wasted months. Just ship.
    </p>
    
    <div class="cta-wrapper">
      <button class="cta-button" onclick={scrollToStartups}>
        Browse the Clones
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <span class="cta-subtext">One payment. Full ownership. Launch this weekend.</span>
    </div>

    <div class="stats-row">
      <div class="stat">
        <span class="stat-value">{TOTAL_STARTUPS}</span>
        <span class="stat-label">Startups Cloned</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value">{TOTAL_CLONES}</span>
        <span class="stat-label">Ready to Buy</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value text-accent">${CLONE_PRICE}</span>
        <span class="stat-label">Per Clone</span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 8rem 1.5rem 6rem;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
  }

  .hero-container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 1.5rem;
    letter-spacing: 0.02em;
  }

  .headline {
    font-size: clamp(2.25rem, 5.5vw, 4rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.15;
    letter-spacing: -0.03em;
  }

  .highlight {
    color: var(--accent);
    position: relative;
  }

  .subheadline {
    font-size: clamp(1.05rem, 2.2vw, 1.25rem);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 2.5rem;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  .cta-button {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 600;
    background-color: var(--accent);
    color: white;
    padding: 1rem 2.25rem;
    border-radius: 12px;
    transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0 4px 20px rgba(176, 9, 255, 0.35);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(176, 9, 255, 0.45);
    background-color: var(--accent-hover);
  }
  
  .cta-button:active {
    transform: translateY(0);
  }

  .cta-subtext {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .stats-row {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 1.25rem 2.5rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .stat-value {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1;
  }
  
  .text-accent {
    color: var(--accent);
  }

  .stat-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
  }

  .stat-divider {
    width: 1px;
    height: 36px;
    background-color: var(--border);
  }

  @media (max-width: 600px) {
    .hero {
      padding-top: 6rem;
    }
    
    .stats-row {
      flex-direction: column;
      gap: 1.25rem;
      width: 100%;
      padding: 1.25rem;
    }
    
    .stat-divider {
      width: 40px;
      height: 1px;
    }
  }
</style>
