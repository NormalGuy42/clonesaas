<script lang="ts">
  // No script needed for simple anchor links
</script>

<nav class="nav">
  <div class="nav-container">
    <a href="/" class="logo">CloneSaaS</a>
    <a href="/#startups" class="nav-link">
      Browse Startups
    </a>
  </div>
</nav>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
    text-shadow: 0 0 20px rgba(176, 9, 255, 0.3);
    transition: all 0.2s ease;
  }

  .logo:hover {
    color: var(--accent-hover);
    text-shadow: 0 0 30px rgba(176, 9, 255, 0.5);
    transform: scale(1.02);
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-secondary);
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    color: var(--text-primary);
  }
</style>
