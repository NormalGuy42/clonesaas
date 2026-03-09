<script lang="ts">
  import { startups, type Startup } from '$lib/data';
  import StartupCard from './StartupCard.svelte';
</script>

<section id="startups" class="startup-grid-section">
  <div class="container">
    <h2 class="section-title">Browse Startups & Their Clones</h2>
    <p class="section-subtitle">Click any startup to see the 4 niche spin-offs available for purchase.</p>
    <div class="startups-grid">
      {#each startups as startup (startup.id)}
        <StartupCard {startup} />
      {/each}
    </div>
  </div>
</section>

<style>
  .startup-grid-section {
    padding: 4rem 1.5rem 5rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 3rem;
  }

  .startups-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .startups-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .startups-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
