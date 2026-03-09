<script lang="ts">
  import type { Startup } from '$lib/data';

  interface Props {
    startup: Startup;
  }

  let { startup }: Props = $props();

  function getLogoUrl(domain: string) {
    return `https://logo.clearbit.com/${domain}?size=64&format=png`;
  }

  // Using a screenshot service for "OG Image" feel
  // using thum.io or screenshotapi.net or micralink
  // thum.io is reliable for free tier
  function getPreviewUrl(domain: string) {
    return `https://image.thum.io/get/width/600/crop/600/noanimate/https://${domain}`;
  }
</script>

<a href={`?startup=${startup.id}`} class="startup-card" aria-label={`View clones for ${startup.name}`}>
  <div class="card-cover">
    <img 
      src={getPreviewUrl(startup.domain)} 
      alt={`${startup.name} preview`} 
      class="preview-image"
      loading="lazy"
    />
    <div class="cover-overlay"></div>
  </div>

  <div class="card-content">
    <div class="card-header">
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
        <div class="logo-fallback">{startup.name[0]}</div>
      </div>
      <span class="category-badge">{startup.category}</span>
    </div>
    
    <h3 class="startup-name">{startup.name}</h3>
    <p class="startup-description">{startup.description}</p>
    
    <div class="card-footer">
      <div class="mrr-badge">
        <span class="mrr-value">{startup.mrr}</span>
      </div>
      <span class="clones-link">
        4 clones
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </div>
  </div>
</a>

<style>
  .startup-card {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    overflow: hidden;
    height: 100%;
    text-decoration: none;
  }

  .startup-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 12px 40px -10px rgba(176, 9, 255, 0.25);
  }

  .card-cover {
    height: 140px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: var(--surface-raised);
  }

  .preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.5s ease;
    filter: grayscale(100%) brightness(0.7);
  }

  .startup-card:hover .preview-image {
    transform: scale(1.05);
    filter: grayscale(0%) brightness(1);
  }

  .cover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%);
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0.75rem;
    margin-top: -3rem; /* Pull up over cover */
    position: relative;
    z-index: 2;
  }

  .logo-wrapper {
    width: 56px;
    height: 56px;
    background: var(--surface);
    border-radius: 12px;
    padding: 6px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }

  .startup-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 6px;
  }

  .logo-fallback {
    display: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: var(--text-secondary);
    background: var(--surface);
    border-radius: 4px;
  }

  .category-badge {
    font-family: monospace;
    font-size: 0.7rem;
    color: var(--text-secondary);
    background: var(--surface-raised);
    border: 1px solid var(--border);
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 1.5rem; /* Push down to align visually */
    backdrop-filter: blur(4px);
  }

  .startup-name {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .startup-description {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }

  .mrr-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .mrr-value {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--accent);
  }

  .clones-link {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: transform 0.2s ease;
  }

  .startup-card:hover .clones-link {
    transform: translateX(2px);
    color: var(--accent);
  }
</style>
