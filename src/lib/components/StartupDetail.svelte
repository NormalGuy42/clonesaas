<script lang="ts">
  import type { Startup, Clone } from '$lib/data';
  import CloneCard from './CloneCard.svelte';

  interface Props {
    startup: Startup;
    onBuyClone: (clone: Clone) => void;
  }

  let { startup, onBuyClone }: Props = $props();

  function getLogoUrl(domain: string) {
    return `https://logo.clearbit.com/${domain}?size=128&format=png`;
  }

  function getPreviewUrl(domain: string) {
    return `https://image.thum.io/get/width/800/crop/600/noanimate/https://${domain}`;
  }
</script>

<section class="startup-detail">
  <div class="detail-container">
    <a href="/" class="back-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Startups
    </a>

    <div class="split-layout">
      <!-- Left Column: Original Startup Info -->
      <div class="original-startup">
        <div class="startup-cover">
          <img 
            src={getPreviewUrl(startup.domain)} 
            alt={`${startup.name} website preview`}
            class="cover-image"
          />
          <div class="cover-overlay"></div>
        </div>

        <div class="startup-content">
          <div class="startup-header">
            <div class="logo-wrapper">
              <img 
                src={getLogoUrl(startup.domain)} 
                alt={`${startup.name} logo`} 
                class="startup-logo"
                onerror={(e) => {
                  // @ts-ignore
                  e.currentTarget.style.display='none'; 
                  // @ts-ignore
                  e.currentTarget.nextElementSibling.style.display='flex';
                }}
              />
              <div class="logo-fallback" style="display: none;">{startup.name[0]}</div>
            </div>
            <div class="header-text">
              <h1 class="startup-name">{startup.name}</h1>
              <a href={`https://${startup.domain}`} target="_blank" rel="noopener noreferrer" class="startup-domain">
                {startup.domain}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="stat-badge">
            <span class="stat-label">Verified Revenue</span>
            <span class="stat-value">{startup.mrr}</span>
          </div>

          <p class="startup-description">{startup.description}</p>
          
          <div class="category-pill">{startup.category}</div>
          
          <div class="divider"></div>
          
          <p class="original-note">
            <span class="note-highlight">Analysis:</span> 
            We've deconstructed their business model, tech stack, and growth channels to build the 4 niche-adapted clones on the right.
          </p>
        </div>
      </div>

      <!-- Right Column: Clones Grid -->
      <div class="clones-section">
        <div class="section-header">
          <h2 class="clones-title">Available Spin-Offs <span class="count-badge">4</span></h2>
          <p class="clones-subtitle">Ready-to-launch clones adapted for specific niches.</p>
        </div>
        
        <div class="clones-grid">
          {#each startup.clones as clone (clone.name)}
            <CloneCard {clone} onBuy={() => onBuyClone(clone)} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .startup-detail {
    padding: 6rem 1.5rem 6rem;
    min-height: 100vh;
    animation: fadeIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .detail-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    transition: all 0.2s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: transparent;
    border: 1px solid transparent;
    text-decoration: none;
  }

  .back-button:hover {
    color: var(--text-primary);
    background: var(--surface);
    border-color: var(--border);
  }

  .split-layout {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 3rem;
    align-items: start;
  }

  /* Left Column Styles */
  .original-startup {
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    position: sticky;
    top: 6rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .startup-cover {
    height: 200px;
    width: 100%;
    position: relative;
    background: var(--surface-raised);
    overflow: hidden;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .cover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.8) 100%);
  }

  .startup-content {
    padding: 2rem;
    position: relative;
  }

  .startup-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    margin-top: -3.5rem; /* Overlap cover */
    position: relative;
    z-index: 2;
  }

  .logo-wrapper {
    width: 80px;
    height: 80px;
    background: var(--surface);
    border-radius: 16px;
    padding: 0.75rem;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .startup-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  .logo-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-secondary);
    background: var(--surface);
    border-radius: 8px;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    padding-top: 2rem; /* Account for overlap */
  }

  .startup-name {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.1;
  }

  .startup-domain {
    font-size: 0.9rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
    transition: color 0.2s;
  }

  .startup-domain:hover {
    color: var(--accent);
  }

  .stat-badge {
    background: var(--accent-dim);
    border: 1px solid rgba(176, 9, 255, 0.2);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-weight: 600;
  }

  .stat-value {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--accent);
  }

  .startup-description {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .category-pill {
    display: inline-block;
    font-family: monospace;
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: var(--surface-raised);
    border: 1px solid var(--border);
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .divider {
    height: 1px;
    background: var(--border);
    margin: 1.5rem 0;
  }

  .original-note {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
    font-style: italic;
  }

  .note-highlight {
    color: var(--accent);
    font-weight: 600;
    font-style: normal;
  }

  /* Right Column Styles */
  .clones-section {
    width: 100%;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .clones-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .count-badge {
    font-size: 1rem;
    background: var(--accent);
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clones-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }

  .clones-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .split-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .original-startup {
      position: relative;
      top: 0;
    }
  }

  @media (max-width: 640px) {
    .clones-grid {
      grid-template-columns: 1fr;
    }

    .startup-detail {
      padding-top: 5rem;
    }
    
    .startup-header {
      margin-top: -2.5rem;
    }
    
    .header-text {
      padding-top: 1rem;
    }
  }
</style>
