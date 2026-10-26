# 🌌 Piyush Funde — 3D Personal Developer Portfolio

An interactive, space-themed 3D developer portfolio showcasing full-stack projects, core technical skills, and software engineering experience. Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Spline 3D**, and **GSAP**.

🌐 **Live Website:** [https://3d-portfolio-ten-pink.vercel.app/](https://3d-portfolio-ten-pink.vercel.app/)

---
## System Architecture


```mermaid
flowchart TD

subgraph group_portfolio["Portfolio experience"]
  node_home["Portfolio page<br/>[page.tsx]"]
  node_hero["3D skill showcase<br/>[hero.tsx]"]
  node_projects["Project showcase<br/>[projects.tsx]"]
  node_motion["Animations and theme"]
end

subgraph group_content["Content and résumé"]
  node_blogroute["Blog listing route<br/>[page.tsx]"]
  node_blogdata["MDX post reader<br/>[mdx.ts]"]
  node_bloglist["Blog listing UI"]
  node_article["Article page<br/>[page.tsx]"]
  node_resume["Résumé page<br/>[page.tsx]"]
end

subgraph group_communications["Communications and analytics"]
  node_contact["Contact form<br/>[ContactForm.tsx]"]
  node_send["Contact API<br/>[route.ts]"]
  node_emailtemplate["Email template<br/>[email-template.tsx]"]
  node_resend["Resend email service"]
  node_collect["Analytics collection API<br/>[route.ts]"]
  node_umami["Umami analytics<br/>[umami.ts]"]
end

subgraph group_realtime["Realtime visitor features"]
  node_realtimeui["Realtime visitor UI<br/>[online-users.tsx]"]
  node_socketcontext["Socket state and events<br/>[socketio.tsx]"]
  node_chat["Visitor chat"]
  node_radial["Radial interaction menu<br/>[index.tsx]"]
  node_socketserver["WebSocket service"]
end

node_visitor(("Visitor"))

node_visitor -->|"opens"| node_home
node_visitor -->|"browses"| node_blogroute
node_visitor -.->|"views"| node_resume
node_visitor -->|"submits"| node_contact
node_home -.->|"presents"| node_hero
node_home -.->|"showcases"| node_projects
node_home -->|"uses"| node_motion
node_blogroute -->|"loads posts"| node_blogdata
node_blogroute -->|"renders"| node_bloglist
node_visitor -->|"opens article"| node_article
node_contact -->|"posts message"| node_send
node_send -->|"renders email"| node_emailtemplate
node_send -->|"sends email"| node_resend
node_collect -->|"uses origin"| node_umami
node_realtimeui -.->|"uses state"| node_socketcontext
node_chat -.->|"uses events"| node_socketcontext
node_radial -->|"emits events"| node_socketcontext
node_socketcontext -->|"connects"| node_socketserver

click node_home "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/page.tsx"
click node_hero "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/sections/hero.tsx"
click node_projects "https://github.com/piyushfunde/3d-portfolio/blob/main/src/data/projects.tsx"
click node_motion "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/animated-background.tsx"
click node_blogroute "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/blogs/page.tsx"
click node_blogdata "https://github.com/piyushfunde/3d-portfolio/blob/main/src/lib/mdx.ts"
click node_bloglist "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/blogs/blog-list-client.tsx"
click node_article "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/blogs/%5Bslug%5D/page.tsx"
click node_resume "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/resume/page.tsx"
click node_contact "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/ContactForm.tsx"
click node_send "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/api/send/route.ts"
click node_emailtemplate "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/email-template.tsx"
click node_collect "https://github.com/piyushfunde/3d-portfolio/blob/main/src/app/api/collect/route.ts"
click node_umami "https://github.com/piyushfunde/3d-portfolio/blob/main/src/lib/umami.ts"
click node_realtimeui "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/realtime/online-users.tsx"
click node_socketcontext "https://github.com/piyushfunde/3d-portfolio/blob/main/src/contexts/socketio.tsx"
click node_chat "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/realtime/components/chat-message-list.tsx"
click node_radial "https://github.com/piyushfunde/3d-portfolio/blob/main/src/components/radial-menu/index.tsx"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_home,node_hero,node_projects,node_motion toneBlue
class node_blogroute,node_blogdata,node_bloglist,node_article,node_resume toneAmber
class node_contact,node_send,node_emailtemplate,node_resend,node_collect,node_umami toneMint
class node_realtimeui,node_socketcontext,node_chat,node_radial,node_socketserver toneRose
class node_visitor toneIndigo

## ✨ Features

- **Interactive 3D Skill Keyboard** — Custom 3D mechanical keyboard built with Spline where keycaps map directly to technical skills and detailed descriptions.
- **Featured Full-Stack Projects** — Interactive showcase cards with smooth modal previews for production systems, AI tools, and enterprise cloud applications.
- **Buttery Animations** — Scroll-triggered smooth transitions and micro-interactions powered by GSAP and Framer Motion.
- **Space Theme & Dark Mode** — Cosmic visual aesthetics with custom particle canvases, glassmorphic UI panels, and seamless theme toggling.
- **Responsive Layout** — Tailored design optimized across desktop, tablet, and mobile displays.
- **Contact & Communications** — Built-in contact form powered by Resend API integration.

---

## 🛠️ Tech Stack

| Layer | Technologies & Tools |
|---|---|
| **Frontend Framework** | Next.js 15, React 19, TypeScript |
| **Styling & UI** | Tailwind CSS, Shadcn UI, Aceternity UI, Glassmorphic Styling |
| **Animation & 3D** | Spline 3D Runtime, GSAP, Framer Motion |
| **Backend & APIs** | Java, Spring Boot, Node.js, Express.js, REST APIs, WebSockets |
| **Database & Persistence** | PostgreSQL, MySQL, MongoDB |
| **DevOps & Tools** | Docker, Git, GitHub Actions, Vercel |

---

## 🚀 Featured Projects

1. **EVA CRM System** — Production CRM system built for Eva Groups with Spring Boot, React, MySQL, JWT, Apache POI data ingestion, and WebSockets.
2. **Visual Pipeline Engine** — Full-stack visual workflow engine featuring DAG validation, node-based pipeline simulation, Node.js/Express, MongoDB, and Docker.
3. **Bedside Bot** — AI-powered hospital assistant for bedridden patients built with Python, Flask, OpenCV, Mediapipe hand gesture tracking, and DeepFace emotion analysis.
4. **BugFix AI** — Automated developer tool integrating Spring Boot with AI/LLM models and Jira Webhooks to analyze stack traces and generate code patches.
5. **SmartERP** — TallyPrime-inspired web ERP system designed for keyboard-first double-entry accounting, stock valuation, and PostgreSQL multi-tenancy.
6. **3D Personal Portfolio** — Space-themed interactive portfolio featuring an interactive 3D Spline keyboard, GSAP scroll animations, and dark mode UI.

---

## 💻 Local Development Setup

### Prerequisites

- Node.js (v18+)
- npm, pnpm, or yarn

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/piyushFunde/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**

   Create a `.env.local` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

---

## 📄 License

This project is licensed under the MIT License.
