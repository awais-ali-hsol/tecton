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

export const projects = [
  {
    category: "Digital Platform",
    title: "Northstar Operations",
    description: "A sharper command center for teams that need to move with clarity.",
    tags: ["Next.js", "TypeScript", "AI"],
    detail: "A connected operations concept for teams that need one clear view of their work, priorities and next action.",
    image: "/assets/imgi_15_project1-672x448.webp",
  },
  {
    category: "SaaS Product",
    title: "Vertex Workspace",
    description: "A thoughtful system for turning complex collaboration into momentum.",
    tags: ["React", "Node.js", "Postgres"],
    detail: "A collaborative workspace concept that brings planning, conversations and delivery into one focused product.",
    image: "/assets/imgi_20_project3-550x550.webp",
  },
  {
    category: "E-commerce",
    title: "Atelier Commerce",
    description: "A considered storefront built around discovery, speed and conversion.",
    tags: ["Next.js", "Shopify", "Storefront API"],
    detail: "A commerce concept pairing editorial product discovery with a fast, low-friction purchase journey.",
    image: "/assets/imgi_18_project5-550x550.webp",
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
