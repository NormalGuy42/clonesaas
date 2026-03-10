<script lang="ts">
  import { page } from '$app/stores';
  import { SOCIAL_LINKS } from '../../constants';
  
  let baseUrl = $derived($page.url.origin);
</script>

<svelte:head>
  <title>Privacy Policy - CloneSaaS</title>
  <meta name="description" content="CloneSaaS Privacy Policy - Learn how we collect, use, and protect your personal information." />
  <link rel="canonical" href="{baseUrl}/privacy" />
  
  <meta property="og:title" content="Privacy Policy - CloneSaaS" />
  <meta property="og:description" content="CloneSaaS Privacy Policy - Learn how we collect, use, and protect your personal information." />
  <meta property="og:url" content="{baseUrl}/privacy" />
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
      <h1 class="title">Privacy Policy</h1>
      <p class="last-updated">Last updated: February 6, 2026</p>

      <div class="section">
        <h2>1. Information We Collect</h2>
        <p>
          When you purchase a clone from CloneSaaS, we collect information necessary to process 
          your transaction, including:
        </p>
        <ul>
          <li>Name and email address</li>
          <li>Payment information (processed securely by our payment provider)</li>
          <li>Any communications you send us</li>
        </ul>
      </div>

      <div class="section">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and deliver your purchase</li>
          <li>Send you updates about your order</li>
          <li>Respond to your questions and support requests</li>
          <li>Improve our products and services</li>
        </ul>
      </div>

      <div class="section">
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may 
          share information with trusted service providers who assist us in operating our 
          business (e.g., payment processors), but only to the extent necessary to provide 
          our services.
        </p>
      </div>

      <div class="section">
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your 
          personal information against unauthorized access, alteration, disclosure, or 
          destruction.
        </p>
      </div>

      <div class="section">
        <h2>5. Cookies</h2>
        <p>
          We use essential cookies to ensure our website functions properly. We do not use 
          tracking cookies or share cookie data with third parties for advertising purposes.
        </p>
      </div>

      <div class="section">
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
      </div>

      <div class="section">
        <h2>7. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or want to exercise your rights, 
          please contact us via <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">X/Twitter</a>.
        </p>
      </div>

      <div class="section">
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any 
          changes by posting the new policy on this page and updating the "Last updated" date.
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
