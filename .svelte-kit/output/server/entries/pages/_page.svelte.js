import { e as ensure_array_like, g as getContext, h as head, d as derived, a as store_get, u as unsubscribe_stores } from "../../chunks/index3.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
/* empty css                                                       */
import { e as escape_html, a as attr } from "../../chunks/attributes.js";
const CLONE_PRICE = 467;
const TOTAL_STARTUPS = 20;
const TOTAL_CLONES = 80;
const startups = [
  {
    id: "calendly",
    name: "Calendly",
    category: "Scheduling",
    description: "Scheduling tool used by millions to book meetings without the back-and-forth.",
    mrr: "$230M+ ARR",
    domain: "calendly.com",
    clones: [
      { name: "InkSlot", niche: "Tattoo Studio Booking", description: "Booking system built for tattoo artists with deposit collection, style preference intake, and portfolio showcase.", audience: "Tattoo Studios", price: 467 },
      { name: "DogCal", niche: "Pet Grooming Scheduling", description: "Appointment scheduler for groomers with breed-specific service menus, recurring visit reminders, and pet profiles.", audience: "Pet Groomers", price: 467 },
      { name: "CoachSync", niche: "Personal Trainer Booking", description: "Session booking for personal trainers with package management, progress tracking links, and availability sync.", audience: "Fitness Trainers", price: 467 },
      { name: "GlowBook", niche: "Med Spa Appointments", description: "Scheduling for med spas with treatment menus, consent form collection, and before/after photo workflows.", audience: "Med Spas", price: 467 }
    ]
  },
  {
    id: "intercom",
    name: "Intercom",
    category: "Customer Support",
    description: "AI-first customer service platform with live chat, bots, and help center.",
    mrr: "$300M+ ARR",
    domain: "intercom.com",
    clones: [
      { name: "ShopTalk", niche: "E-commerce Chat Support", description: "Live chat built for Shopify stores with order lookup, return handling, and product recommendation bots.", audience: "E-commerce Stores", price: 467 },
      { name: "DentChat", niche: "Dental Practice Chat", description: "Patient chat widget for dental offices with appointment booking, insurance Q&A, and emergency triage.", audience: "Dental Practices", price: 467 },
      { name: "PropChat", niche: "Real Estate Agent Chat", description: "Website chat for realtors with listing-aware AI, showing scheduling, and mortgage calculator integration.", audience: "Real Estate Agents", price: 467 },
      { name: "EduHelp", niche: "Online Course Support", description: "Student support chat for course creators with lesson-aware FAQ bot, enrollment help, and refund handling.", audience: "Course Creators", price: 467 }
    ]
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, docs, projects, and wikis used by millions.",
    mrr: "$100M+ ARR",
    domain: "notion.so",
    clones: [
      { name: "WedSpace", niche: "Wedding Planner Workspace", description: "All-in-one planning hub for wedding planners with vendor management, timelines, guest lists, and budget tracking.", audience: "Wedding Planners", price: 467 },
      { name: "WriteDesk", niche: "Freelance Writer Hub", description: "Workspace for freelance writers with pitch tracking, client briefs, invoice drafts, and editorial calendars.", audience: "Freelance Writers", price: 467 },
      { name: "RentOps", niche: "Property Manager Dashboard", description: "Tenant and property management workspace with lease tracking, maintenance requests, and rent collection.", audience: "Property Managers", price: 467 },
      { name: "ChurchBase", niche: "Church Admin Platform", description: "Church management workspace with sermon notes, volunteer scheduling, member directory, and event planning.", audience: "Churches", price: 467 }
    ]
  },
  {
    id: "typeform",
    name: "Typeform",
    category: "Forms & Surveys",
    description: "Beautifully designed conversational forms and surveys with high completion rates.",
    mrr: "$70M+ ARR",
    domain: "typeform.com",
    clones: [
      { name: "PatientForm", niche: "Clinic Intake Forms", description: "Medical intake form builder with HIPAA-friendly fields, insurance upload, and symptom checkers.", audience: "Medical Clinics", price: 467 },
      { name: "VendorOnboard", niche: "Restaurant Vendor Forms", description: "Vendor onboarding forms for restaurants with supply catalogs, pricing sheets, and compliance docs.", audience: "Restaurants", price: 467 },
      { name: "LeadQualify", niche: "Agency Lead Forms", description: "Lead qualification forms for agencies with budget selectors, project scope builders, and auto-scoring.", audience: "Marketing Agencies", price: 467 },
      { name: "FitForm", niche: "Gym Membership Forms", description: "Membership signup and health questionnaire forms for gyms with waiver signing and goal tracking.", audience: "Gyms & Studios", price: 467 }
    ]
  },
  {
    id: "canva",
    name: "Canva",
    category: "Design Tools",
    description: "Visual design platform that makes graphic design accessible to everyone.",
    mrr: "$200M+ MRR",
    domain: "canva.com",
    clones: [
      { name: "RealtorKit", niche: "Real Estate Design Tool", description: "Template-based design tool for realtors with listing flyers, open house invites, and social media posts.", audience: "Real Estate Agents", price: 467 },
      { name: "MenuMaker", niche: "Restaurant Menu Designer", description: "Drag-and-drop menu builder for restaurants with seasonal templates, QR code menus, and print-ready exports.", audience: "Restaurants", price: 467 },
      { name: "GymGraphics", niche: "Fitness Content Creator", description: "Design tool for gyms and trainers with workout cards, transformation posts, and class schedule graphics.", audience: "Fitness Businesses", price: 467 },
      { name: "ChurchCanvas", niche: "Church Media Designer", description: "Design tool for churches with sermon slides, event posters, bulletin templates, and social media graphics.", audience: "Churches", price: 467 }
    ]
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Email Marketing",
    description: "Email marketing and automation platform serving millions of small businesses.",
    mrr: "$150M+ MRR",
    domain: "mailchimp.com",
    clones: [
      { name: "PewMail", niche: "Church Email Platform", description: "Email tool for churches with sermon recap templates, prayer request follow-ups, and event announcement flows.", audience: "Churches", price: 467 },
      { name: "TableDrop", niche: "Restaurant Email Marketing", description: "Email platform for restaurants with reservation reminders, seasonal menu drops, and loyalty reward emails.", audience: "Restaurants", price: 467 },
      { name: "SaaSdrip", niche: "SaaS Onboarding Emails", description: "Email drip builder specifically for SaaS companies with trial nurture sequences, feature announcement templates, and churn prevention flows.", audience: "SaaS Founders", price: 467 },
      { name: "StudioMail", niche: "Salon & Spa Emails", description: "Email marketing for salons with appointment reminders, rebooking nudges, birthday offers, and referral campaigns.", audience: "Salons & Spas", price: 467 }
    ]
  },
  {
    id: "freshbooks",
    name: "FreshBooks",
    category: "Invoicing",
    description: "Cloud accounting and invoicing software built for small business owners.",
    mrr: "$80M+ ARR",
    domain: "freshbooks.com",
    clones: [
      { name: "PlumbBill", niche: "Plumber Invoicing", description: "Invoicing for plumbers with job-based billing, parts markup calculator, and service call templates.", audience: "Plumbers", price: 467 },
      { name: "LensBill", niche: "Photographer Invoicing", description: "Invoice and contract tool for photographers with package pricing, shot list tracking, and deposit management.", audience: "Photographers", price: 467 },
      { name: "DevInvoice", niche: "Developer Invoicing", description: "Invoicing for freelance devs with hourly tracking, GitHub commit summaries, and milestone-based billing.", audience: "Freelance Developers", price: 467 },
      { name: "CleanBill", niche: "Cleaning Service Invoicing", description: "Invoicing for cleaning businesses with recurring job billing, supply cost tracking, and crew pay splits.", audience: "Cleaning Companies", price: 467 }
    ]
  },
  {
    id: "buffer",
    name: "Buffer",
    category: "Social Media",
    description: "Social media scheduling and analytics platform for brands and creators.",
    mrr: "$30M+ ARR",
    domain: "buffer.com",
    clones: [
      { name: "ReelQueue", niche: "Instagram Reels Scheduler", description: "Instagram-only scheduler focused on Reels with AI caption writer, hashtag optimizer, and posting time suggestions.", audience: "IG Creators", price: 467 },
      { name: "LinkedPost", niche: "LinkedIn Carousel Scheduler", description: "LinkedIn-focused scheduler with carousel builder, engagement analytics, and connection growth tracking.", audience: "LinkedIn Creators", price: 467 },
      { name: "TokPlan", niche: "TikTok Content Planner", description: "TikTok-only content planner with trend discovery, sound library, and cross-posting to Reels and Shorts.", audience: "TikTok Creators", price: 467 },
      { name: "LocalPost", niche: "Local Business Social Manager", description: "Social scheduler for local businesses with Google Business integration, review response, and local hashtag suggestions.", audience: "Local Businesses", price: 467 }
    ]
  },
  {
    id: "gong",
    name: "Gong",
    category: "Revenue Intelligence",
    description: "AI-powered conversation intelligence that records and analyzes sales calls.",
    mrr: "$28M+ MRR",
    domain: "gong.io",
    clones: [
      { name: "DealEar", niche: "Real Estate Call Analysis", description: "Call recording and analysis for real estate agents with objection tracking, lead scoring, and follow-up reminders.", audience: "Real Estate Teams", price: 467 },
      { name: "ClinicCall", niche: "Healthcare Call Analytics", description: "Call analytics for clinics with patient sentiment tracking, appointment conversion rates, and staff coaching.", audience: "Medical Practices", price: 467 },
      { name: "AgencyEar", niche: "Agency Sales Calls", description: "Call intelligence for agencies with proposal discussion tracking, scope creep detection, and win/loss analysis.", audience: "Agencies", price: 467 },
      { name: "RecruiterIQ", niche: "Recruiting Call Intelligence", description: "Interview and screening call analysis for recruiters with candidate scoring, culture fit signals, and hiring velocity.", audience: "Recruiters", price: 467 }
    ]
  },
  {
    id: "clay",
    name: "Clay",
    category: "Sales & Leads",
    description: "AI-powered data enrichment and outbound sales platform doing $100M+ ARR.",
    mrr: "$8M+ MRR",
    domain: "clay.com",
    clones: [
      { name: "AgencyLeads", niche: "Web Design Lead Finder", description: "Find local businesses that need a new website by scanning for outdated sites, no mobile version, and slow load times.", audience: "Web Design Agencies", price: 467 },
      { name: "ReviewScout", niche: "Reputation Lead Finder", description: "Find businesses with bad Google reviews or no reviews at all and sell them reputation management services.", audience: "Reputation Agencies", price: 467 },
      { name: "HireLeads", niche: "Recruiting Lead Finder", description: "Find companies actively hiring on LinkedIn and Indeed and pitch them recruiting or HR services.", audience: "Recruiting Firms", price: 467 },
      { name: "MenuLeads", niche: "Restaurant Tech Lead Finder", description: "Find restaurants without online ordering, poor Yelp pages, or no website and sell them digital solutions.", audience: "Restaurant Tech", price: 467 }
    ]
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AI Dev Tools",
    description: "AI-powered code editor that hit $1.2B ARR — the fastest growing SaaS ever.",
    mrr: "$100M+ MRR",
    domain: "cursor.com",
    clones: [
      { name: "ShopCode", niche: "Shopify Theme AI Editor", description: "AI code editor specifically for Shopify Liquid themes with store-aware suggestions and one-click deploy.", audience: "Shopify Devs", price: 467 },
      { name: "WPCopilot", niche: "WordPress AI Builder", description: "AI code assistant for WordPress with plugin-aware completions, PHP/hook suggestions, and theme customization.", audience: "WordPress Devs", price: 467 },
      { name: "SQLPilot", niche: "Database Query AI Tool", description: "AI-powered SQL editor with schema-aware query generation, optimization suggestions, and visual explain plans.", audience: "Data Analysts", price: 467 },
      { name: "EmailCode", niche: "Email Template AI Builder", description: "AI editor for HTML email templates with client-safe code generation, preview across 50+ clients, and ESP integration.", audience: "Email Developers", price: 467 }
    ]
  },
  {
    id: "rezi",
    name: "Rezi",
    category: "Career Tools",
    description: "AI resume builder with 1M+ users per year, verified $288K MRR on TrustMRR.",
    mrr: "$288K MRR",
    domain: "rezi.ai",
    clones: [
      { name: "DevResume", niche: "Developer Resume Builder", description: "Resume builder for software engineers with GitHub integration, skills matrix, and ATS-optimized templates.", audience: "Software Engineers", price: 467 },
      { name: "NurseCV", niche: "Healthcare Resume Builder", description: "Resume builder for nurses and healthcare workers with certification tracking, shift experience, and clinical templates.", audience: "Healthcare Workers", price: 467 },
      { name: "CreativeCV", niche: "Designer Portfolio Resume", description: "Visual resume builder for designers with portfolio embeds, case study sections, and Dribbble/Behance integration.", audience: "Designers", price: 467 },
      { name: "ExecBrief", niche: "Executive Resume Builder", description: "Executive resume and bio builder with board experience formatting, P&L highlights, and leadership narrative templates.", audience: "Executives", price: 467 }
    ]
  },
  {
    id: "cometly",
    name: "Cometly",
    category: "Marketing Analytics",
    description: "Marketing attribution and ad analytics for SaaS companies, $233K MRR verified.",
    mrr: "$233K MRR",
    domain: "cometly.com",
    clones: [
      { name: "ShopAttrib", niche: "Shopify Ad Attribution", description: "Ad attribution tool built for Shopify stores with ROAS tracking per product, Facebook/TikTok pixel deduplication.", audience: "E-commerce Brands", price: 467 },
      { name: "LeadTrack", niche: "Lead Gen Attribution", description: "Attribution for service businesses tracking which ads generate phone calls, form fills, and booked appointments.", audience: "Service Businesses", price: 467 },
      { name: "AppAttrib", niche: "Mobile App Attribution", description: "Install and in-app event attribution for mobile apps with deep link tracking and cohort analysis.", audience: "App Developers", price: 467 },
      { name: "CourseTrack", niche: "Course Sales Attribution", description: "Attribution tool for online course creators tracking which content, ads, and funnels drive enrollments.", audience: "Course Creators", price: 467 }
    ]
  },
  {
    id: "seobot",
    name: "SEOBOT",
    category: "SEO Tools",
    description: "AI agent for SEO — keywords, research, blog generation, and programmatic SEO. $84K MRR.",
    mrr: "$84K MRR",
    domain: "seobotai.com",
    clones: [
      { name: "LocalSEO", niche: "Local Business SEO Tool", description: "SEO tool for local businesses with Google Business optimization, local keyword tracking, and citation building.", audience: "Local Businesses", price: 467 },
      { name: "ShopSEO", niche: "Shopify SEO Optimizer", description: "SEO tool for Shopify stores with product page optimization, collection page SEO, and automated meta descriptions.", audience: "Shopify Stores", price: 467 },
      { name: "PodSEO", niche: "Podcast SEO Tool", description: "SEO tool for podcasters with episode transcript optimization, show notes generator, and podcast directory submissions.", audience: "Podcasters", price: 467 },
      { name: "LegalSEO", niche: "Law Firm SEO Tool", description: "SEO tool for lawyers with practice area page optimization, legal directory management, and local ranking tracking.", audience: "Law Firms", price: 467 }
    ]
  },
  {
    id: "postiz",
    name: "Postiz",
    category: "Social Media",
    description: "Agentic social media scheduling tool with 182% MoM growth, $70K MRR verified.",
    mrr: "$70K MRR",
    domain: "postiz.com",
    clones: [
      { name: "FoodGram", niche: "Restaurant Social Scheduler", description: "Social media scheduler for restaurants with food photo templates, daily special posts, and review highlight sharing.", audience: "Restaurants", price: 467 },
      { name: "FitPost", niche: "Fitness Social Scheduler", description: "Social scheduler for gyms with workout-of-the-day templates, transformation post builders, and class schedule sharing.", audience: "Fitness Businesses", price: 467 },
      { name: "HomeSocial", niche: "Realtor Social Scheduler", description: "Social scheduler for realtors with listing post templates, open house countdowns, and market update graphics.", audience: "Real Estate Agents", price: 467 },
      { name: "SalonGram", niche: "Salon Social Scheduler", description: "Social scheduler for salons with before/after post templates, appointment slot promotions, and stylist spotlights.", audience: "Salons", price: 467 }
    ]
  },
  {
    id: "teachable",
    name: "Teachable",
    category: "Online Courses",
    description: "Platform for creators to build and sell online courses and coaching programs.",
    mrr: "$100M+ ARR",
    domain: "teachable.com",
    clones: [
      { name: "ChefClass", niche: "Cooking Course Platform", description: "Course platform for chefs with recipe cards, ingredient shopping lists, video timers, and cook-along mode.", audience: "Cooking Instructors", price: 467 },
      { name: "FretBoard", niche: "Music Lesson Platform", description: "Course platform for music teachers with embedded tuners, practice trackers, sheet music viewer, and play-along audio.", audience: "Music Teachers", price: 467 },
      { name: "CodeCamp", niche: "Coding Bootcamp Platform", description: "Course platform for coding instructors with embedded IDE, auto-graded challenges, and project-based curriculum.", audience: "Coding Teachers", price: 467 },
      { name: "YogaFlow", niche: "Yoga & Wellness Courses", description: "Course platform for yoga instructors with pose libraries, sequence builders, and meditation timer integration.", audience: "Yoga Instructors", price: 467 }
    ]
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "AI App Builder",
    description: "AI-powered app builder doing $300M ARR — build full-stack apps from prompts.",
    mrr: "$25M+ MRR",
    domain: "lovable.dev",
    clones: [
      { name: "SiteForge", niche: "AI Landing Page Builder", description: "AI page builder focused only on high-converting landing pages with copy generation and A/B testing built in.", audience: "Marketers", price: 467 },
      { name: "FormForge", niche: "AI Form Builder", description: "AI-powered form builder that generates complex multi-step forms from natural language descriptions.", audience: "Businesses", price: 467 },
      { name: "DashForge", niche: "AI Dashboard Builder", description: "AI tool that builds data dashboards from natural language — connect your data and describe what you want to see.", audience: "Data Teams", price: 467 },
      { name: "BotForge", niche: "AI Chatbot Builder", description: "AI chatbot builder that creates customer support bots from your docs, FAQ, and knowledge base automatically.", audience: "Support Teams", price: 467 }
    ]
  },
  {
    id: "stan",
    name: "Stan",
    category: "Creator Monetization",
    description: "Creator monetization platform, #1 on TrustMRR with $3.5M MRR verified via Stripe.",
    mrr: "$3.5M MRR",
    domain: "stan.store",
    clones: [
      { name: "FitLink", niche: "Fitness Creator Store", description: "Link-in-bio store for fitness creators with workout plan sales, supplement affiliate links, and coaching bookings.", audience: "Fitness Creators", price: 467 },
      { name: "ArtLink", niche: "Artist Creator Store", description: "Creator store for artists with print-on-demand integration, commission request forms, and digital download delivery.", audience: "Artists", price: 467 },
      { name: "ChefLink", niche: "Food Creator Store", description: "Creator store for food influencers with recipe ebook sales, cooking class bookings, and kitchen gear affiliates.", audience: "Food Creators", price: 467 },
      { name: "TechLink", niche: "Tech Creator Store", description: "Creator store for tech reviewers with affiliate link management, digital product sales, and consulting bookings.", audience: "Tech Creators", price: 467 }
    ]
  },
  {
    id: "dm-champ",
    name: "DM Champ",
    category: "AI Sales",
    description: "AI sales agent that closes deals via DMs 24/7. $181K MRR verified on TrustMRR.",
    mrr: "$181K MRR",
    domain: "dmchamp.com",
    clones: [
      { name: "DentBot", niche: "Dental Practice AI Closer", description: "AI DM agent for dental practices that handles inquiries, books consultations, and follows up on treatment plans.", audience: "Dental Practices", price: 467 },
      { name: "GymBot", niche: "Gym Membership AI Closer", description: "AI DM agent for gyms that qualifies leads, offers trial passes, and books facility tours automatically.", audience: "Gyms", price: 467 },
      { name: "HomeBot", niche: "Real Estate AI Closer", description: "AI DM agent for realtors that qualifies buyers, schedules showings, and follows up on listing inquiries.", audience: "Real Estate Agents", price: 467 },
      { name: "CoachBot", niche: "Coaching Program AI Closer", description: "AI DM agent for coaches that qualifies prospects, handles objections, and books discovery calls 24/7.", audience: "Coaches", price: 467 }
    ]
  },
  {
    id: "prosp",
    name: "PROSP",
    category: "LinkedIn Automation",
    description: "LinkedIn outreach automation with AI. $128K MRR verified on TrustMRR.",
    mrr: "$128K MRR",
    domain: "prosp.ai",
    clones: [
      { name: "RecruiterPilot", niche: "Recruiter LinkedIn Outreach", description: "LinkedIn automation built for recruiters with candidate pipeline tracking, InMail sequences, and job-match scoring.", audience: "Recruiters", price: 467 },
      { name: "AgencyPilot", niche: "Agency LinkedIn Outreach", description: "LinkedIn outreach for agencies with case study sharing sequences, social proof automation, and lead scoring.", audience: "Agency Owners", price: 467 },
      { name: "ConsultPilot", niche: "Consultant LinkedIn Outreach", description: "LinkedIn automation for consultants with thought leadership scheduling, connection nurture sequences, and call booking.", audience: "Consultants", price: 467 },
      { name: "SaaSPilot", niche: "SaaS Founder LinkedIn Outreach", description: "LinkedIn outreach for SaaS founders with product demo sequences, beta user recruiting, and investor connection workflows.", audience: "SaaS Founders", price: 467 }
    ]
  }
];
function getStartupById(id) {
  return startups.find((s) => s.id === id);
}
function Hero($$renderer) {
  $$renderer.push(`<section class="hero svelte-1q37ri0"><div class="hero-bg svelte-1q37ri0"></div> <div class="hero-container svelte-1q37ri0"><div class="eyebrow svelte-1q37ri0">Skip the guesswork. Buy what works.</div> <h1 class="headline svelte-1q37ri0">Why Build From Scratch<br/> When You Can <span class="highlight svelte-1q37ri0">Clone Success</span></h1> <p class="subheadline svelte-1q37ri0">We took ${escape_html(TOTAL_STARTUPS)} startups making real money, broke down exactly why they work, 
      and built ${escape_html(TOTAL_CLONES)} niche spin-offs you can buy, rebrand, and launch as your own. 
      No validation needed. No wasted months. Just ship.</p> <div class="cta-wrapper svelte-1q37ri0"><button class="cta-button svelte-1q37ri0">Browse the Clones <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></button> <span class="cta-subtext svelte-1q37ri0">One payment. Full ownership. Launch this weekend.</span></div> <div class="stats-row svelte-1q37ri0"><div class="stat svelte-1q37ri0"><span class="stat-value svelte-1q37ri0">${escape_html(TOTAL_STARTUPS)}</span> <span class="stat-label svelte-1q37ri0">Startups Cloned</span></div> <div class="stat-divider svelte-1q37ri0"></div> <div class="stat svelte-1q37ri0"><span class="stat-value svelte-1q37ri0">${escape_html(TOTAL_CLONES)}</span> <span class="stat-label svelte-1q37ri0">Ready to Buy</span></div> <div class="stat-divider svelte-1q37ri0"></div> <div class="stat svelte-1q37ri0"><span class="stat-value text-accent svelte-1q37ri0">$${escape_html(CLONE_PRICE)}</span> <span class="stat-label svelte-1q37ri0">Per Clone</span></div></div></div></section>`);
}
function HowItWorks($$renderer) {
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
  $$renderer.push(`<section class="how-it-works svelte-1e6pjgp"><div class="container svelte-1e6pjgp"><div class="header-wrapper svelte-1e6pjgp"><span class="section-label svelte-1e6pjgp">The Process</span> <h2 class="section-title svelte-1e6pjgp">From Unicorn to <span class="highlight svelte-1e6pjgp">Your Niche</span></h2></div> <div class="steps-grid svelte-1e6pjgp"><!--[-->`);
  const each_array = ensure_array_like(steps);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let step = each_array[$$index];
    $$renderer.push(`<div class="step-card svelte-1e6pjgp"><div class="step-header svelte-1e6pjgp"><span class="step-number svelte-1e6pjgp">${escape_html(step.number)}</span> <div class="step-line svelte-1e6pjgp"></div></div> <h3 class="step-title svelte-1e6pjgp">${escape_html(step.title)}</h3> <p class="step-description svelte-1e6pjgp">${escape_html(step.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function StartupCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { startup } = $$props;
    function getLogoUrl(domain) {
      return `https://logo.clearbit.com/${domain}?size=64&format=png`;
    }
    function getPreviewUrl(domain) {
      return `https://image.thum.io/get/width/600/crop/600/noanimate/https://${domain}`;
    }
    $$renderer2.push(`<a${attr("href", `?startup=${startup.id}`)} class="startup-card svelte-1aidvif"${attr("aria-label", `View clones for ${startup.name}`)}><div class="card-cover svelte-1aidvif"><img${attr("src", getPreviewUrl(startup.domain))}${attr("alt", `${startup.name} preview`)} class="preview-image svelte-1aidvif" loading="lazy"/> <div class="cover-overlay svelte-1aidvif"></div></div> <div class="card-content svelte-1aidvif"><div class="card-header svelte-1aidvif"><div class="logo-wrapper svelte-1aidvif"><img${attr("src", getLogoUrl(startup.domain))}${attr("alt", `${startup.name} logo`)} class="startup-logo svelte-1aidvif" onerror="this.__e=event"/> <div class="logo-fallback svelte-1aidvif">${escape_html(
      // @ts-ignore
      // @ts-ignore
      startup.name[0]
    )}</div></div> <span class="category-badge svelte-1aidvif">${escape_html(startup.category)}</span></div> <h3 class="startup-name svelte-1aidvif">${escape_html(startup.name)}</h3> <p class="startup-description svelte-1aidvif">${escape_html(startup.description)}</p> <div class="card-footer svelte-1aidvif"><div class="mrr-badge svelte-1aidvif"><span class="mrr-value svelte-1aidvif">${escape_html(startup.mrr)}</span></div> <span class="clones-link svelte-1aidvif">4 clones <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></span></div></div></a>`);
  });
}
function StartupGrid($$renderer) {
  $$renderer.push(`<section id="startups" class="startup-grid-section svelte-t6vsjh"><div class="container svelte-t6vsjh"><h2 class="section-title svelte-t6vsjh">Browse Startups &amp; Their Clones</h2> <p class="section-subtitle svelte-t6vsjh">Click any startup to see the 4 niche spin-offs available for purchase.</p> <div class="startups-grid svelte-t6vsjh"><!--[-->`);
  const each_array = ensure_array_like(startups);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let startup = each_array[$$index];
    StartupCard($$renderer, { startup });
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function CloneCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { clone } = $$props;
    $$renderer2.push(`<div class="clone-card svelte-1amu1qz"><div class="card-content svelte-1amu1qz"><div class="card-header svelte-1amu1qz"><h3 class="clone-name svelte-1amu1qz">${escape_html(clone.name)}</h3> <span class="audience-badge svelte-1amu1qz">${escape_html(clone.audience)}</span></div> <p class="clone-niche svelte-1amu1qz">${escape_html(clone.niche)}</p> <p class="clone-description svelte-1amu1qz">${escape_html(clone.description)}</p></div> <div class="card-footer svelte-1amu1qz"><div class="price-container svelte-1amu1qz"><span class="price-label svelte-1amu1qz">One-time</span> <span class="price svelte-1amu1qz">$${escape_html(clone.price)}</span></div> <button class="buy-button svelte-1amu1qz">Buy Clone <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button></div></div>`);
  });
}
function StartupDetail($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { startup } = $$props;
    function getLogoUrl(domain) {
      return `https://logo.clearbit.com/${domain}?size=128&format=png`;
    }
    function getPreviewUrl(domain) {
      return `https://image.thum.io/get/width/800/crop/600/noanimate/https://${domain}`;
    }
    $$renderer2.push(`<section class="startup-detail svelte-76iedc"><div class="detail-container svelte-76iedc"><a href="/" class="back-button svelte-76iedc"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg> Back to Startups</a> <div class="split-layout svelte-76iedc"><div class="original-startup svelte-76iedc"><div class="startup-cover svelte-76iedc"><img${attr("src", getPreviewUrl(startup.domain))}${attr("alt", `${startup.name} website preview`)} class="cover-image svelte-76iedc"/> <div class="cover-overlay svelte-76iedc"></div></div> <div class="startup-content svelte-76iedc"><div class="startup-header svelte-76iedc"><div class="logo-wrapper svelte-76iedc"><img${attr("src", getLogoUrl(startup.domain))}${attr("alt", `${startup.name} logo`)} class="startup-logo svelte-76iedc" onerror="this.__e=event"/> <div class="logo-fallback svelte-76iedc" style="display: none;">${escape_html(
      // @ts-ignore
      // @ts-ignore
      startup.name[0]
    )}</div></div> <div class="header-text svelte-76iedc"><h1 class="startup-name svelte-76iedc">${escape_html(startup.name)}</h1> <a${attr("href", `https://${startup.domain}`)} target="_blank" rel="noopener noreferrer" class="startup-domain svelte-76iedc">${escape_html(startup.domain)} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"></path></svg></a></div></div> <div class="stat-badge svelte-76iedc"><span class="stat-label svelte-76iedc">Verified Revenue</span> <span class="stat-value svelte-76iedc">${escape_html(startup.mrr)}</span></div> <p class="startup-description svelte-76iedc">${escape_html(startup.description)}</p> <div class="category-pill svelte-76iedc">${escape_html(startup.category)}</div> <div class="divider svelte-76iedc"></div> <p class="original-note svelte-76iedc"><span class="note-highlight svelte-76iedc">Analysis:</span> We've deconstructed their business model, tech stack, and growth channels to build the 4 niche-adapted clones on the right.</p></div></div> <div class="clones-section svelte-76iedc"><div class="section-header svelte-76iedc"><h2 class="clones-title svelte-76iedc">Available Spin-Offs <span class="count-badge svelte-76iedc">4</span></h2> <p class="clones-subtitle svelte-76iedc">Ready-to-launch clones adapted for specific niches.</p></div> <div class="clones-grid svelte-76iedc"><!--[-->`);
    const each_array = ensure_array_like(startup.clones);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let clone = each_array[$$index];
      CloneCard($$renderer2, { clone });
    }
    $$renderer2.push(`<!--]--></div></div></div></div></section>`);
  });
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let startupId = derived(() => store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("startup"));
    let selectedStartup = derived(() => startupId() ? getStartupById(startupId()) : void 0);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(selectedStartup() ? `${selectedStartup().name} Clones - CloneSaaS` : "CloneSaaS - Buy a Proven Business Model")}</title>`);
      });
    });
    if (selectedStartup()) {
      $$renderer2.push("<!--[0-->");
      StartupDetail($$renderer2, { startup: selectedStartup() });
    } else {
      $$renderer2.push("<!--[-1-->");
      Hero($$renderer2);
      $$renderer2.push(`<!----> `);
      HowItWorks($$renderer2);
      $$renderer2.push(`<!----> `);
      StartupGrid($$renderer2);
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
