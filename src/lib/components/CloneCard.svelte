<script lang="ts">
  import type { Clone } from '$lib/data';

  interface Props {
    clone: Clone;
    onBuy: () => void;
  }

  let { clone, onBuy }: Props = $props();
</script>

<div class="clone-card">
  <div class="card-content">
    <div class="card-header">
      <h3 class="clone-name">{clone.name}</h3>
      <span class="audience-badge">{clone.audience}</span>
    </div>
    <p class="clone-niche">{clone.niche}</p>
    <p class="clone-description">{clone.description}</p>
  </div>
  
  <div class="card-footer">
    <div class="price-container">
      <span class="price-label">One-time</span>
      <span class="price">${clone.price}</span>
    </div>
    <button class="buy-button" onclick={onBuy}>
      Buy Clone
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>

<style>
  .clone-card {
    display: flex;
    flex-direction: column;
    background-color: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    height: 100%;
    position: relative;
  }

  .clone-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    flex-grow: 1;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
  }

  .clone-name {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .clone-niche {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  .clone-description {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .audience-badge {
    display: inline-block;
    font-family: monospace;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    background: var(--surface);
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    white-space: nowrap;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
  }

  .price-container {
    display: flex;
    flex-direction: column;
  }

  .price-label {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 600;
    text-transform: uppercase;
  }

  .price {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .buy-button {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 600;
    background-color: var(--accent);
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: 10px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .buy-button:hover {
    background-color: var(--accent-hover);
    transform: scale(1.02);
  }
</style>
