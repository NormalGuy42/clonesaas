<script lang="ts">
  import { page } from '$app/stores';
  import { Hero, HowItWorks, StartupGrid, StartupDetail, PurchaseModal } from '$lib';
  import { getStartupById, type Startup, type Clone } from '$lib/data';
  import { SITE_CONFIG } from '../constants';

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
  <title>{selectedStartup ? `${selectedStartup.name} Clones - ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - Buy a Proven Business Model`}</title>
  <meta name="description" content={SITE_CONFIG.description} />
  <meta name="keywords" content="CloneSaaS, SaaS, clone, startup, business model, niche, entrepreneur" />
  <link rel="canonical" href={SITE_CONFIG.url} />

  <!-- Open Graph -->
  <meta property="og:site_name" content={SITE_CONFIG.name} />
  <meta property="og:title" content={selectedStartup ? `${selectedStartup.name} Clones - ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} | Copy What Works`} />
  <meta property="og:description" content={SITE_CONFIG.description} />
  <meta property="og:image" content={SITE_CONFIG.ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE_CONFIG.url} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
  <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
  <meta name="twitter:title" content={selectedStartup ? `${selectedStartup.name} Clones - ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} | Copy What Works`} />
  <meta name="twitter:description" content={SITE_CONFIG.description} />
  <meta name="twitter:image" content={SITE_CONFIG.ogImage} />
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
