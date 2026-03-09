<script lang="ts">
  const steps = [
    {
      number: "01",
      title: "We Find Winners",
      description: "We research profitable startups doing $100K+ MRR with proven business models and strong demand."
    },
    {
      number: "02",
      title: "We Build 4 Niche Clones",
      description: "For each startup, we create 4 niche-adapted spin-offs — fully built, branded, and ready to launch."
    },
    {
      number: "03",
      title: "You Buy & Rebrand",
      description: "One-time payment of $467. You own the code, the brand assets, everything. Rebrand it and launch."
    }
  ];
</script>

<section class="how-it-works">
  <div class="container">
    <div class="header-wrapper">
      <span class="section-label">The Process</span>
      <h2 class="section-title">From Unicorn to <span class="highlight">Your Niche</span></h2>
    </div>
    
    <div class="steps-grid">
      {#each steps as step}
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">{step.number}</span>
            <div class="step-line"></div>
          </div>
          <h3 class="step-title">{step.title}</h3>
          <p class="step-description">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .how-it-works {
    padding: 6rem 1.5rem;
    background-color: var(--surface);
    position: relative;
    border-bottom: 1px solid var(--border);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header-wrapper {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-label {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin-bottom: 1rem;
    display: block;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .highlight {
    color: var(--accent);
    position: relative;
    display: inline-block;
  }

  .highlight::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(217, 70, 239, 0.2);
    z-index: -1;
    transform: skewX(-15deg);
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .step-card {
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .step-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-dim);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .step-number {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.05);
    line-height: 1;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }

  .step-line {
    height: 2px;
    width: 40px;
    background: var(--accent);
    margin-bottom: 1rem;
  }

  .step-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .step-description {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    .steps-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
</style>
