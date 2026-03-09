<script lang="ts">
  import { SOCIAL_LINKS } from '../../constants';
</script>

<svelte:head>
  <title>Refund Policy - CloneSaaS</title>
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
      <h1 class="title">Refund Policy</h1>
      <p class="last-updated">Last updated: February 6, 2026</p>

      <div class="section">
        <h2>Our Commitment</h2>
        <p>
          We want you to be completely satisfied with your purchase. If a clone doesn't meet 
          your expectations, we're here to help.
        </p>
      </div>

      <div class="section">
        <h2>14-Day Refund Window</h2>
        <p>
          You have <strong>14 days</strong> from the date of purchase to request a refund. 
          If you're not happy with your clone for any reason, reach out and we'll process 
          your refund — no questions asked.
        </p>
      </div>

      <div class="section">
        <h2>How to Request a Refund</h2>
        <p>To request a refund:</p>
        <ul>
          <li>Contact us via <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">X/Twitter</a></li>
          <li>Include your order number or email used for purchase</li>
          <li>Let us know the reason (optional, but helps us improve)</li>
        </ul>
        <p>
          We typically process refunds within 5-7 business days. The refund will be credited 
          to the original payment method.
        </p>
      </div>

      <div class="section">
        <h2>After Your Refund</h2>
        <p>
          Once a refund is processed, your license to use the clone is revoked. Please delete 
          any downloaded files and do not deploy or use the clone commercially.
        </p>
      </div>

      <div class="section">
        <h2>Exceptions</h2>
        <p>
          We reserve the right to deny refunds in cases of clear abuse, such as:
        </p>
        <ul>
          <li>Requesting refunds on multiple purchases repeatedly</li>
          <li>Already deploying and monetizing the clone publicly</li>
          <li>Requests made after the 14-day window</li>
        </ul>
      </div>

      <div class="section">
        <h2>Questions?</h2>
        <p>
          If you have questions about our refund policy, don't hesitate to reach out via 
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">X/Twitter</a>. 
          We're always happy to help.
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

  .section p strong {
    color: var(--text-primary);
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
