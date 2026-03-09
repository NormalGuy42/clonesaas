<script lang="ts">
  import { SOCIAL_LINKS, SITE_CONFIG } from '../../constants';
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-main">
      <!-- Left: Brand -->
      <div class="brand-section">
        <a href="/" class="footer-logo">CloneSaaS</a>
        <p class="footer-tagline">{SITE_CONFIG.tagline}</p>
        <div class="social-links">
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter/X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Link Columns -->
      <div class="links-section">
        <div class="link-column">
          <h4 class="column-title">Explore</h4>
          <nav class="column-links">
            <a href="/#startups">Startups</a>
          </nav>
        </div>

        <div class="link-column">
          <h4 class="column-title">Connect</h4>
          <nav class="column-links">
            <a href="/about">About</a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">Contact</a>
          </nav>
        </div>

        <div class="link-column">
          <h4 class="column-title">Legal</h4>
          <nav class="column-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/refund">Refund Policy</a>
          </nav>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <span class="copyright">© 2026 CloneSaaS. All rights reserved.</span>
      <span class="credit">
        Built with care by <a href={SITE_CONFIG.authorUrl} target="_blank" rel="noopener noreferrer">{SITE_CONFIG.author}</a>
      </span>
    </div>
  </div>
</footer>

<style>
  .footer {
    /* background-color: #f5f5f0; */
    padding: 4rem 1.5rem 0;
    margin-top: auto;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-main {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding-bottom: 3rem;
  }

  .brand-section {
    max-width: 320px;
  }

  .footer-logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    /* color: #1a1a1a; */
    color: var(--accent);
    display: block;
    margin-bottom: 0.75rem;
  }

  .footer-tagline {
    font-size: 0.95rem;
    /* color: #666; */
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    background-color: #2a2a2a;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    transition: all 0.2s ease;
  }

  .social-icon:hover {
    background-color: #444;
    transform: translateY(-2px);
  }

  .links-section {
    display: flex;
    gap: 5rem;
  }

  .link-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .column-title {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .column-links {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .column-links a {
    font-size: 0.9rem;
    color: var(--text-secondary);
    transition: color 0.2s ease;
  }

  .column-links a:hover {
    color: var(--accent);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    border-top: 1px solid #e0e0dc;
  }

  .copyright {
    font-size: 0.85rem;
    color: #888;
  }

  .credit {
    font-size: 0.85rem;
    color: #888;
  }

  .credit a {
    color: #888;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .credit a:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    .footer-main {
      flex-direction: column;
      gap: 3rem;
    }

    .links-section {
      gap: 3rem;
      flex-wrap: wrap;
    }

    .brand-section {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .footer-bottom {
      flex-direction: column;
      gap: 0.75rem;
      text-align: center;
    }

    .links-section {
      gap: 2rem;
    }

    .link-column {
      min-width: 100px;
    }
  }
</style>
