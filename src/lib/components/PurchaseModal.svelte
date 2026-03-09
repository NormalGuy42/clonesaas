<script lang="ts">
  import type { Clone } from '$lib/data';

  interface Props {
    clone: Clone;
    onClose: () => void;
  }

  let { clone, onClose }: Props = $props();

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  function openTwitter() {
    window.open('https://x.com/REPLACE_WITH_YOUR_HANDLE', '_blank');
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="modal-overlay" onclick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-content" onclick={(e) => e.stopPropagation()}>
    <button class="icon-close-button" onclick={onClose} aria-label="Close modal">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>

    <h2 id="modal-title" class="modal-title">Coming Soon</h2>
    <p class="modal-body">
      <strong>{clone.name}</strong> hasn't been built yet — but it's on our roadmap. 
      Drop us a message and we'll notify you when it's ready, or we can fast-track it for you.
    </p>
    <div class="modal-actions">
      <button class="message-button" onclick={openTwitter}>
        Message Us on X
      </button>
      <button class="text-close-button" onclick={onClose}>
        Close
      </button>
    </div>
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    padding: 1.5rem;
    animation: fadeIn 0.15s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal-content {
    background-color: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 3rem 2.5rem;
    max-width: 450px;
    width: 100%;
    text-align: center;
    animation: slideUp 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: relative;
    box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .icon-close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: var(--text-muted);
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-close-button:hover {
    color: var(--text-primary);
    background-color: var(--surface);
  }

  .modal-title {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .modal-body {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  .modal-body strong {
    color: var(--accent);
  }

  .modal-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  .message-button {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--accent);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    width: 100%;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(176, 9, 255, 0.3);
  }

  .message-button:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(176, 9, 255, 0.4);
  }

  .text-close-button {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-muted);
    padding: 0.5rem 1rem;
    transition: color 0.2s ease;
  }

  .text-close-button:hover {
    color: var(--text-primary);
  }
</style>
