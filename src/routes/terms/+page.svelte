<script lang="ts">
  import { SOCIAL_LINKS, SITE_CONFIG } from '../../constants';
  
  const pageDescription = `${SITE_CONFIG.name} Terms of Service - Read our terms and conditions for using our startup clone marketplace.`;
</script>

<svelte:head>
  <title>Terms of Service - {SITE_CONFIG.name}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={`${SITE_CONFIG.url}/terms`} />
  
  <meta property="og:title" content={`Terms of Service - ${SITE_CONFIG.name}`} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={`${SITE_CONFIG.url}/terms`} />
  <meta property="og:type" content="website" />
  
  <meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="legal-page">
  <div class="container">
    <a href="/" class="back-link">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back to Home
    </a>

    <div class="content">
      <h1 class="title">Terms of Service</h1>
      <p class="last-updated">Last updated: February 6, 2026</p>

      <div class="section">
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using CloneSaaS, you agree to be bound by these Terms of Service. 
          If you disagree with any part of these terms, you do not have permission to access 
          our services.
        </p>
      </div>

      <div class="section">
        <h2>2. Description of Service</h2>
        <p>
          CloneSaaS provides pre-built, niche-adapted software clones based on proven business 
          models. Each purchase includes source code, design assets, and documentation to help 
          you launch your own version of the product.
        </p>
      </div>

      <div class="section">
        <h2>3. Purchases and Payments</h2>
        <p>
          All purchases are one-time payments. Prices are listed in USD and are subject to 
          change without notice. Upon successful payment, you will receive access to download 
          your purchased clone.
        </p>
      </div>

      <div class="section">
        <h2>4. License and Ownership</h2>
        <p>Upon purchase, you receive:</p>
        <ul>
          <li>A perpetual, non-exclusive license to use, modify, and deploy the clone</li>
          <li>The right to rebrand and customize the product as your own</li>
          <li>The right to use the clone for commercial purposes</li>
        </ul>
        <p>You may NOT:</p>
        <ul>
          <li>Resell or redistribute the original clone files</li>
          <li>Claim the original code as your own creation for sale to others</li>
          <li>Use the clone to create a competing service that sells similar clones</li>
        </ul>
      </div>

      <div class="section">
        <h2>5. Intellectual Property</h2>
        <p>
          The original code, design, and documentation remain the intellectual property of 
          CloneSaaS. Your purchase grants you a license to use these materials, not ownership 
          of the underlying intellectual property.
        </p>
      </div>

      <div class="section">
        <h2>6. Disclaimer</h2>
        <p>
          CloneSaaS is provided "as is" without warranties of any kind. We do not guarantee 
          that the clones will generate revenue or achieve any specific business outcomes. 
          Success depends on your execution, market conditions, and many other factors outside 
          our control.
        </p>
      </div>

      <div class="section">
        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, CloneSaaS shall not be liable for any 
          indirect, incidental, special, consequential, or punitive damages resulting from 
          your use or inability to use our services.
        </p>
      </div>

      <div class="section">
        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on 
          this page with an updated date. Your continued use of CloneSaaS after changes 
          constitutes acceptance of the new terms.
        </p>
      </div>

      <div class="section">
        <h2>9. Contact</h2>
        <p>
          For questions about these Terms, contact us via 
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">X/Twitter</a>.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .legal-page {
    padding: 6rem 1.5rem 5rem;
    min-height: calc(100vh - 200px);
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: var(--text-primary);
  }

  .content {
    animation: fadeIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .last-updated {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
  }

  .section {
    margin-bottom: 2.5rem;
  }

  .section h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .section p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .section ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  .section li {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 0.5rem;
    list-style: disc;
  }

  .section a {
    color: var(--accent);
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .section a:hover {
    opacity: 0.8;
  }
</style>
