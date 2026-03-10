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

  let baseUrl = $derived($page.url.origin);
</script>

<svelte:head>
  <title>{selectedStartup ? `${selectedStartup.name} Clones - CloneSaaS` : 'CloneSaaS - Buy a Proven Business Model'}</title>
  <meta name="description" content="Clone proven startup business models and adapt them to your niche. Stop building from scratch — copy what already works." />
  <meta name="keywords" content="CloneSaaS, SaaS, clone, startup, business model, niche, entrepreneur" />
  <link rel="canonical" href={baseUrl} />

  <!-- Open Graph -->
  <meta property="og:site_name" content="CloneSaaS" />
  <meta property="og:title" content={selectedStartup ? `${selectedStartup.name} Clones - CloneSaaS` : 'CloneSaaS | Copy What Works'} />
  <meta property="og:description" content="Clone proven startup business models and adapt them to your niche. Stop building from scratch — copy what already works." />
  <meta property="og:image" content="{baseUrl}/main-og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={baseUrl} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@_madiou" />
  <meta name="twitter:creator" content="@_madiou" />
  <meta name="twitter:title" content={selectedStartup ? `${selectedStartup.name} Clones - CloneSaaS` : 'CloneSaaS | Copy What Works'} />
  <meta name="twitter:description" content="Clone proven startup business models and adapt them to your niche. Stop building from scratch — copy what already works." />
  <meta name="twitter:image" content="{baseUrl}/main-og-image.png" />
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
