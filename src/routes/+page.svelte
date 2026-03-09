<script lang="ts">
  import { page } from '$app/stores';
  import { Hero, HowItWorks, StartupGrid, StartupDetail, PurchaseModal } from '$lib';
  import { getStartupById, type Startup, type Clone } from '$lib/data';

  // State derived from URL
  let startupId = $derived($page.url.searchParams.get('startup'));
  let selectedStartup: Startup | undefined = $derived(startupId ? getStartupById(startupId) : undefined);

  // Modal State
  let selectedClone: Clone | null = $state(null);

  function handleBuyClone(clone: Clone) {
    selectedClone = clone;
  }

  function handleCloseModal() {
    selectedClone = null;
  }
</script>

<svelte:head>
  <title>{selectedStartup ? `${selectedStartup.name} Clones - CloneSaaS` : 'CloneSaaS - Buy a Proven Business Model'}</title>
</svelte:head>

{#if selectedStartup}
  <!-- The back link is handled inside StartupDetail now -->
  <StartupDetail 
    startup={selectedStartup} 
    onBuyClone={handleBuyClone} 
  />
{:else}
  <Hero />
  <HowItWorks />
  <!-- Grid links are now handled inside StartupGrid/StartupCard -->
  <StartupGrid />
{/if}

{#if selectedClone}
  <PurchaseModal clone={selectedClone} onClose={handleCloseModal} />
{/if}
