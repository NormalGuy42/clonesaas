<script lang="ts">
  import '../app.css';
  import { Nav, Footer } from '$lib';

  let { children } = $props();
</script>

<div class="layout">
  <Nav />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>
