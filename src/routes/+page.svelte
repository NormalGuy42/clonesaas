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
	<meta name="description" content="A website that allows you to clone profitable startups and adapt them to your own niches. Stop wasting time shipping and just copy what works." />
	<meta name="keywords" content="CloneSAAS, SAAS, Clone, " />
	<link rel="canonical" href="https://clonesaas.io" />
	<link rel="canonical" href={baseUrl} />

	<!-- Open Graph -->
	<meta property="og:site_name" content="CloneSAAS" />
@@ -23,7 +27,7 @@
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://clonesaas.io" />
	<meta property="og:url" content={baseUrl} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
@@ -32,7 +36,7 @@
	<meta name="twitter:creator" content="@_madiou" />
	<meta name="twitter:title" content="CloneSAAS | Copy what works" />
	<meta name="twitter:description" content="A website that allows you to clone profitable startups and adapt them to your own niches. Stop wasting time shipping and just copy what works." />
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
