export const services = [
  { number: "01", title: "Custom Software", description: "Business applications designed around your unique workflows.", detail: "We translate complex business needs into focused software that fits the way your teams actually work, with room to evolve as you grow.", icon: "brackets", slug: "custom-software", capabilities: ["Workflow platforms", "Internal tools", "Legacy modernization"], technologies: ["TypeScript", "Node.js", "PostgreSQL"] },
  { number: "02", title: "Web & Mobile", description: "Fast, responsive and engaging digital experiences.", detail: "From responsive web products to native-feeling mobile experiences, we create interfaces that are clear, quick and useful on every screen.", icon: "layers", slug: "web-mobile", capabilities: ["Web applications", "Mobile products", "Progressive web apps"], technologies: ["Next.js", "React", "React Native"] },
  { number: "03", title: "AI & Automation", description: "Intelligent systems that reduce manual work and unlock new possibilities.", detail: "We find practical places for AI to create leverage, then connect it to the workflows, data and safeguards your business needs.", icon: "sparkles", slug: "ai-automation", capabilities: ["AI copilots", "Process automation", "Intelligent search"], technologies: ["Python", "OpenAI", "Vector databases"] },
  { number: "04", title: "SaaS Platforms", description: "Scalable platforms designed for recurring growth.", detail: "We shape SaaS products around a strong core experience, dependable infrastructure and the flexibility to support many customers.", icon: "cloud", slug: "saas-platforms", capabilities: ["Product strategy", "Multi-tenant architecture", "Billing and subscriptions"], technologies: ["Next.js", "Node.js", "AWS"] },
  { number: "05", title: "APIs & Backend", description: "Secure, reliable and high-performance backend infrastructure.", detail: "The quiet foundation behind a great product: well-designed APIs, resilient services and data systems that stay understandable.", icon: "server", slug: "apis-backend", capabilities: ["API design", "Data architecture", "Authentication and security"], technologies: ["Node.js", "Laravel", "PostgreSQL"] },
  { number: "06", title: "E-commerce", description: "Powerful commerce experiences built to convert.", detail: "We connect brand, catalog, checkout and operations into an e-commerce experience that feels effortless for customers and teams.", icon: "shopping", slug: "e-commerce", capabilities: ["Storefronts", "Checkout journeys", "Commerce integrations"], technologies: ["Next.js", "Shopify", "Storefront API"] },
  { number: "07", title: "UI/UX & Product Design", description: "Intuitive product experiences that make complex things feel simple.", detail: "We use research, prototyping and visual systems to turn early ideas into interfaces people can understand and enjoy using.", icon: "palette", slug: "ui-ux-product-design", capabilities: ["User research", "Interface design", "Design systems"], technologies: ["Figma", "FigJam", "Prototyping"] },
  { number: "08", title: "Cloud & DevOps", description: "Reliable delivery and infrastructure built for momentum.", detail: "We make shipping software calmer with repeatable environments, observability and infrastructure that can scale with confidence.", icon: "cloudCog", slug: "cloud-devops", capabilities: ["Cloud architecture", "CI/CD pipelines", "Monitoring and observability"], technologies: ["AWS", "Docker", "GitHub Actions"] },
  { number: "09", title: "System Integration", description: "Connected systems that keep your business moving.", detail: "We help your tools communicate cleanly, reducing duplicate work and giving teams a more complete view of the business.", icon: "workflow", slug: "system-integration", capabilities: ["Third-party APIs", "Data synchronization", "Enterprise integrations"], technologies: ["REST", "GraphQL", "Webhooks"] },
  { number: "10", title: "Performance Optimization", description: "Faster products, better experiences and healthier systems.", detail: "We locate the bottlenecks that slow products down and improve the experience from first load through the most important workflows.", icon: "gauge", slug: "performance-optimization", capabilities: ["Core Web Vitals", "Backend profiling", "Conversion performance"], technologies: ["Lighthouse", "k6", "Datadog"] },
];

export const technologyGroups: [string, string[]][] = [
  ["Product & Experience", ["Figma", "FigJam", "React", "React Native", "Next.js", "TypeScript"]],
  ["Engineering & Data", ["PHP", "Laravel", "Node.js", "Python", "PostgreSQL", "MySQL", "MongoDB", "Prisma"]],
  ["AI & Automation", ["OpenAI", "Vector databases", "Workflow automation", "Intelligent search"]],
  ["Cloud & Delivery", ["AWS", "Docker", "GitHub Actions", "Datadog", "GraphQL", "REST"]],
];

export const technologies = technologyGroups.flatMap(([, items]) => items);

export const solutions = ["Business Automation", "AI-Powered Products", "Digital Transformation", "Scalable SaaS", "Enterprise Systems", "API Integrations"];

export const process = [
  ["01", "Discover", "Understand your goals, users and business challenges."],
  ["02", "Strategize", "Define the product architecture and technical roadmap."],
  ["03", "Design", "Create intuitive and modern user experiences."],
  ["04", "Develop", "Build scalable and secure technology."],
  ["05", "Launch", "Deploy, test and monitor the product."],
  ["06", "Optimize", "Continuously improve performance and business results."],
];

export type ProjectKind = "Web" | "SaaS" | "Mobile" | "Commerce";

export const projects = [
  {
    category: "Health & Wellness",
    title: "Warung Yoga",
    stage: { bg: "#3a2e24", tone: "light" as "light" | "dark" },
    year: "2025",
    kind: "Web" as ProjectKind,
    description: "Hot yoga studio website with booking, membership and community features.",
    tags: ["Web Design", "Booking System", "WordPress"],
    detail: "A full-featured digital presence for a hot yoga studio in Aachen — seamless class bookings, membership flows and a community hub in one polished experience.",
    image: "/assets/thumbnails/warungyoga-thumbnail.png",
    url: "https://warungyoga.de/",
  },
  {
    category: "Real Estate",
    title: "iRealtors",
    stage: { bg: "#e2d6c2", tone: "dark" as "light" | "dark" },
    year: "2024",
    kind: "Web" as ProjectKind,
    description: "Property listing platform built for speed, trust and conversion.",
    tags: ["Next.js", "React", "PostgreSQL"],
    detail: "A modern real estate platform that makes finding, listing and comparing properties fast and frictionless — designed for agents and buyers alike.",
    image: "/assets/thumbnails/irealtors-thumbnail.png",
    url: "https://i-realtors.com/",
  },
  {
    category: "Food & E-commerce",
    title: "Atlanta Meal Prep",
    stage: { bg: "#22304d", tone: "light" as "light" | "dark" },
    year: "2024",
    kind: "Commerce" as ProjectKind,
    description: "Meal prep delivery service with subscription ordering and custom plans.",
    tags: ["E-commerce", "Shopify", "Custom UI"],
    detail: "A high-conversion storefront for a meal prep delivery brand — tailored plans, subscription management and a checkout flow optimised for repeat orders.",
    image: "/assets/thumbnails/atlantamealprep-thumbnail.png",
    url: "https://atlantamealprep.com/",
  },
  {
    category: "EdTech / SaaS",
    title: "IQSpark",
    stage: { bg: "#1f3b36", tone: "light" as "light" | "dark" },
    year: "2025",
    kind: "SaaS" as ProjectKind,
    description: "Online IQ testing platform with instant results and downloadable certificates.",
    tags: ["React", "Node.js", "PDF Generation"],
    detail: "A scientifically-grounded IQ assessment platform delivering instant results, detailed score breakdowns and verified certificates — built to scale to millions of tests.",
    image: "/assets/thumbnails/iqspark-thumbnail.png",
    url: "https://iqspark.org/",
  },
  {
    category: "Media & Publishing",
    title: "League of Nations",
    stage: { bg: "#5a211c", tone: "light" as "light" | "dark" },
    year: "2023",
    kind: "Web" as ProjectKind,
    description: "Global freedom index and news platform tracking civil liberties by country.",
    tags: ["Next.js", "Data Viz", "CMS"],
    detail: "An editorial platform tracking civil liberties and freedom metrics across countries — live rankings, data visualisation and long-form journalism in one place.",
    image: "/assets/thumbnails/leagueofnations-thumbnail.png",
    url: "https://leagueofnations.co.uk/",
  },
  {
    category: "SaaS / Mobile App",
    title: "Shift2Go",
    stage: { bg: "#ccd3df", tone: "dark" as "light" | "dark" },
    year: "2025",
    kind: "SaaS" as ProjectKind,
    description: "Employee scheduling and workforce management platform with a companion app.",
    tags: ["React Native", "Node.js", "AWS"],
    detail: "A next-gen workforce platform combining intuitive shift scheduling, live attendance tracking and task delegation — available on web and iOS.",
    image: "/assets/thumbnails/shift2go-thumbnail.png",
    url: "https://www.shift2go.io/",
  },
  {
    category: "Marketplace / SaaS",
    title: "SplaShark",
    stage: { bg: "#133a52", tone: "light" as "light" | "dark" },
    year: "2026",
    kind: "Mobile" as ProjectKind,
    description: "All-in-one platform to sell services, take bookings and go live — get paid in one app.",
    tags: ["React Native", "Node.js", "Payments"],
    detail: "SplaShark is a storefront, booking desk and payment system in one — enabling creators and service providers to sell, book and go live from a single feed.",
    image: "/assets/thumbnails/splashark-thumbnail.png",
    url: "https://splashark.com/",
  },
  {
    category: "Mobile App / SaaS",
    title: "GenixDrive",
    stage: { bg: "#2b2b28", tone: "light" as "light" | "dark" },
    year: "2025",
    kind: "Mobile" as ProjectKind,
    description: "Smart driving companion app with real-time safety alerts and family location sharing.",
    tags: ["React Native", "Node.js", "Mobile"],
    detail: "GenixDrive combines real-time safety alerts, family location sharing and driving rewards into one complete companion app — with 10K+ active users and 50K+ downloads.",
    image: "/assets/thumbnails/genixdrive-thumbnail.png",
    url: "https://genix-drive.vercel.app/",
  },
  {
    category: "FinTech / SaaS",
    title: "Buzdy",
    stage: { bg: "#c5d6c8", tone: "dark" as "light" | "dark" },
    year: "2026",
    kind: "SaaS" as ProjectKind,
    description: "Financial comparison platform for 2,000+ credit cards and loans across 60+ countries.",
    tags: ["Next.js", "Data Platform", "FinTech"],
    detail: "Buzdy is an everyday money companion that lets users compare financial products, explore markets, manage card wallets and build better money habits — spanning 607+ banks in 62 countries.",
    image: "/assets/thumbnails/buzdy-thumbnail.png",
    url: "https://buzdy.com/",
  },
  {
    category: "E-commerce",
    title: "Rehmat Store",
    stage: { bg: "#b9a68b", tone: "dark" as "light" | "dark" },
    year: "2026",
    kind: "Commerce" as ProjectKind,
    description: "Multi-category e-commerce store built on Shopify for the Pakistani market.",
    tags: ["Shopify", "E-commerce", "Custom Theme"],
    detail: "A full-featured Shopify storefront for Rehmat Store Pakistan — spanning art supplies, camping gear, self-defence, perfumes and accessories with a striking dark editorial design.",
    image: "/assets/portfolio-rehmatstore.jpg",
    url: "https://rehmatstore.pk/",
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    quote: "Tecton completely transformed how our team operates. What used to take hours of manual coordination is now fully automated. Their code quality and speed of delivery were genuinely impressive — we couldn't ask for a better technology partner.",
    name: "Sarah Holman",
    role: "Head of Operations",
    company: "Meridian Group",
    avatar: "/assets/imgi_25_test.webp",
  },
  {
    quote: "We came to Tecton with a rough idea and left with a production-ready SaaS platform. They understood the business problem before writing a single line of code. That clarity is rare and incredibly valuable.",
    name: "James Park",
    role: "Co-Founder & CEO",
    company: "Elevate Ventures",
    avatar: "/assets/imgi_33_tm-3h2.webp",
  },
  {
    quote: "They ran discovery like a strategy partner and shipped like a seasoned product team. Checkout conversion rose 31% in the first quarter after launch.",
    name: "Lena Fischer",
    role: "Founder",
    company: "Northwind Commerce",
    avatar: "/assets/imgi_27_test1.webp",
  },
  {
    quote: "A rare mix: designers who understand systems and engineers who care about pixels. Tecton is now our default partner for anything customer-facing.",
    name: "Daniel Okafor",
    role: "VP Product",
    company: "Kinetic Health",
    avatar: "/assets/imgi_26_test3.webp",
  },
];

export const awards = [
  { category: "CLUTCH · BEST AGENCIES", title: "Top Software Development Company", year: "2025" },
  { category: "AWWWARDS · EXCELLENCE", title: "Best Digital Agency of the Year", year: "2024" },
  { category: "CSS DESIGN AWARDS", title: "Outstanding UI/UX — Technology Sector", year: "2024" },
  { category: "WEBBY AWARDS · DIGITAL", title: "Best Web Application Experience", year: "2023" },
  { category: "GOOD DESIGN AWARDS", title: "Innovation in Digital Product Design", year: "2023" },
];

export const team = [
  { name: "Alex Morgan", role: "CEO & Co-Founder", avatar: "/assets/imgi_33_tm-3h2.webp" },
  { name: "Ryan Foster", role: "CTO & Lead Architect", avatar: "/assets/imgi_35_tm-3h1.webp" },
  { name: "Priya Patel", role: "Head of Design", avatar: "/assets/imgi_34_tm-3h3.webp" },
  { name: "Jordan Ellis", role: "AI & Automation Lead", avatar: "/assets/imgi_25_test.webp" },
  { name: "Sam Rivera", role: "Product Manager", avatar: "/assets/imgi_26_test3.webp" },
  { name: "Casey Brooks", role: "Senior Developer", avatar: "/assets/imgi_27_test1.webp" },
];

export const clients = [
  "/assets/imgi_29_client1-1.webp",
  "/assets/imgi_30_client2-1.webp",
  "/assets/imgi_31_client3-1.webp",
  "/assets/imgi_5_client-logo5.webp",
  "/assets/imgi_6_client-logo1.webp",
  "/assets/imgi_7_client-logo2.webp",
  "/assets/imgi_8_client-logo3.webp",
  "/assets/imgi_9_client-logo4.webp",
  "/assets/imgi_42_image--100x50.webp",
  "/assets/imgi_29_client1-1.webp",
];

export const posts = [
  {
    category: "AI & TECHNOLOGY",
    date: "Oct 8, 2026",
    title: "How AI Is Reshaping Custom Software Development in 2026",
    excerpt: "Practical AI is about leverage, not hype. Here's where we're seeing the most meaningful impact in the products we build.",
    image: "/assets/imgi_36_bg-news6-672x448.webp",
    slug: "#",
  },
  {
    category: "PRODUCT DESIGN",
    date: "Sep 22, 2026",
    title: "The Case for Ruthless Simplicity in SaaS Products",
    excerpt: "The best SaaS products aren't the most feature-rich. They're the ones that make one thing feel effortless.",
    image: "/assets/imgi_37_bg-news5-672x448.webp",
    slug: "#",
  },
  {
    category: "ENGINEERING",
    date: "Sep 5, 2026",
    title: "Why Backend Architecture Matters More Than Your UI Stack",
    excerpt: "Good UI gets users in the door. Reliable, well-designed backend systems keep them there. Here's how we think about foundations.",
    image: "/assets/imgi_38_bg-news3-672x448.webp",
    slug: "#",
  },
];

export const serviceDetails: Record<string, { capabilities: string[]; experience: string[]; deliverables: string[]; bestFor: string }> = {
  "custom-software": { capabilities: ["Workflow and requirements mapping", "Role-based business applications", "Legacy system modernization", "Reporting and operational dashboards", "QA, documentation and handover"], experience: ["Turning manual spreadsheets into dependable internal tools", "Replacing fragmented workflows with one operational system", "Extending existing products without disrupting the business"], deliverables: ["Product requirements", "Technical architecture", "Production-ready application"], bestFor: "Teams with unique workflows that off-the-shelf software cannot handle well." },
  "web-mobile": { capabilities: ["Responsive web applications", "Mobile-first product experiences", "Progressive web apps", "Cross-platform mobile products", "Accessibility and interaction design"], experience: ["Launching a focused MVP across web and mobile", "Improving a product experience across every screen size", "Designing fast interfaces for customers and internal teams"], deliverables: ["UX flows and prototypes", "Responsive product interface", "Release-ready web or mobile app"], bestFor: "Companies creating a new digital touchpoint or improving an existing one." },
  "ai-automation": { capabilities: ["AI opportunity discovery", "AI copilots and assistants", "Document and knowledge automation", "Workflow orchestration", "Evaluation, guardrails and monitoring"], experience: ["Reducing repetitive research and operations work", "Making internal knowledge easier to find and use", "Adding useful AI to an existing product without hype"], deliverables: ["AI use-case roadmap", "Working automation or assistant", "Evaluation and improvement plan"], bestFor: "Teams that want practical leverage from AI with clear human oversight." },
  "saas-platforms": { capabilities: ["Product discovery and roadmap", "Multi-tenant architecture", "Account, roles and permissions", "Billing and subscription flows", "Usage analytics and admin tooling"], experience: ["Shaping an early product into a focused SaaS offer", "Preparing a platform for multiple customer organizations", "Improving activation, retention and everyday usability"], deliverables: ["SaaS product strategy", "Scalable platform foundation", "Customer-ready release"], bestFor: "Founders and product teams building a repeatable software business." },
  "apis-backend": { capabilities: ["API and service design", "Data modeling and migrations", "Authentication and authorization", "Background jobs and integrations", "Testing, logging and observability"], experience: ["Creating stable foundations for a new product", "Untangling a backend that has outgrown its first version", "Connecting services without creating fragile dependencies"], deliverables: ["API contract", "Backend services", "Operational documentation"], bestFor: "Products that need reliable foundations, integrations or a backend reset." },
  "e-commerce": { capabilities: ["Storefront and catalog design", "Checkout and payment flows", "Product and inventory integrations", "Search, merchandising and content", "Conversion and performance optimization"], experience: ["Creating a premium commerce storefront", "Connecting commerce operations across systems", "Removing friction from discovery through checkout"], deliverables: ["Commerce experience direction", "Conversion-ready storefront", "Integrated launch setup"], bestFor: "Brands and retailers that want commerce to feel as considered as the product." },
  "ui-ux-product-design": { capabilities: ["User research and stakeholder workshops", "Information architecture and user flows", "Wireframes and interactive prototypes", "Visual language and design systems", "Usability testing and iteration"], experience: ["Making complex products easier to understand", "Turning rough ideas into testable product directions", "Creating a cohesive design system for a growing product"], deliverables: ["Research synthesis", "Interactive prototype", "Developer-ready design system"], bestFor: "Teams that need clarity before investing heavily in development." },
  "cloud-devops": { capabilities: ["Cloud architecture and environments", "Infrastructure as code", "CI/CD and release automation", "Monitoring, alerts and incident readiness", "Security and cost-aware operations"], experience: ["Making releases repeatable and less risky", "Moving a product onto a clearer cloud foundation", "Adding visibility to system health and delivery"], deliverables: ["Cloud architecture plan", "Automated deployment pipeline", "Runbooks and observability setup"], bestFor: "Teams that need dependable delivery, scale and operational confidence." },
  "system-integration": { capabilities: ["Integration architecture", "REST, GraphQL and webhook connections", "Data synchronization and transformation", "Third-party service orchestration", "Failure handling and reconciliation"], experience: ["Connecting tools that were never designed to work together", "Removing duplicate data entry across teams", "Creating one dependable flow through a fragmented stack"], deliverables: ["Integration map", "Connected services", "Monitoring and failure recovery"], bestFor: "Businesses with multiple systems that need to share data and context." },
  "performance-optimization": { capabilities: ["Core Web Vitals improvement", "Frontend bundle and rendering analysis", "Backend and database profiling", "Load and stress testing", "Conversion-path performance review"], experience: ["Finding the bottleneck behind a slow experience", "Preparing a growing product for higher traffic", "Improving speed in the workflows that matter most"], deliverables: ["Performance baseline", "Prioritized optimization plan", "Measured improvement report"], bestFor: "Products where speed, reliability or conversion has become a business constraint." },
};

export const processSteps = [
  { number: "01", title: "Discover", duration: "Week 1", body: "Workshops with your team and users to map goals, constraints and the outcomes that actually matter." },
  { number: "02", title: "Strategize", duration: "Week 2", body: "Architecture, scope and a phased roadmap — so every decision after this point has a reason behind it." },
  { number: "03", title: "Design", duration: "Weeks 3–5", body: "Flows, prototypes and a visual system tested with real users before a line of production code is written." },
  { number: "04", title: "Develop", duration: "Weeks 5–12", body: "Two-week sprints, weekly demos and production-grade code reviewed, tested and documented as we go." },
  { number: "05", title: "Launch", duration: "Week 13", body: "Staged rollout, monitoring and a calm launch day — with the team that built it on call." },
  { number: "06", title: "Optimize", duration: "Ongoing", body: "Analytics, iteration and performance work that compounds the value of what we shipped together." },
];

export const contact = {
  email: "info@tectonsolutions.com",
  phone: "+1 (555) 234-5678",
  phoneHref: "tel:+15552345678",
  address: "350 Fifth Avenue, New York, NY 10118",
  timezone: "America/New_York",
};

// Placeholder profile URLs — replace with the real accounts before launch.
export const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Clutch", href: "#" },
];

export const faqs = [
  { q: "How soon can you start?", a: "Most engagements kick off within two to three weeks of a signed proposal. For urgent work we keep a small amount of capacity open each quarter — ask and we will be honest about what is possible." },
  { q: "Do you work with early-stage startups?", a: "Yes. Roughly a third of our work is with founders shipping a first version. We help shape a focused MVP, then stay on to scale it once it finds traction." },
  { q: "What does a typical engagement cost?", a: "Focused projects usually start around $25k; full product builds typically land between $75k and $250k. After a short discovery call we send a fixed-scope proposal, not an open-ended estimate." },
  { q: "Can you take over an existing codebase?", a: "Often. We start with a paid technical audit, share an honest assessment of what to keep, refactor or replace, and only then propose a plan." },
  { q: "Will you sign an NDA?", a: "Of course. We are happy to sign your NDA before any detailed conversation, or share ours." },
];
