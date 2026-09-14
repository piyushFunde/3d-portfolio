import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <a
          className="font-mono flex gap-2 no-underline"
          rel="noopener noreferrer"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
      {repo && repo !== "#" && (
        <a
          className="font-mono flex gap-2 no-underline"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  redux: {
    title: "Redux Toolkit",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Redux</span>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Java</span>,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Spring</span>,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MySQL</span>,
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JWT</span>,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Flask</span>,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CV</span>,
  },
  websockets: {
    title: "WebSockets",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">WS</span>,
  },
  apachepoi: {
    title: "Apache POI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">POI</span>,
  },
  llm: {
    title: "AI / LLM",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI</span>,
  },
  jira: {
    title: "Jira Webhooks",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Jira</span>,
  },
  spline: {
    title: "Spline 3D",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">3D</span>,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">GSAP</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "eva-crm",
    category: "Production CRM System",
    title: "EVA CRM System",
    src: "/assets/projects-screenshots/eva-crm.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.websockets,
        PROJECT_SKILLS.apachepoi,
      ],
    },
    live: "https://crm.evagroups.in/",
    github: "https://github.com/piyushFunde/eva-crm",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Production CRM system built for client Eva Groups.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed and built for a live client (Eva Groups) using React.js, Java, Spring Boot, MySQL, REST APIs, JWT, Apache POI, and WebSockets.
          </TypographyP>
          <ProjectsLinks
            live="https://crm.evagroups.in/"
            repo="https://github.com/piyushFunde/eva-crm"
          />
          <TypographyH3 className="my-4 mt-8">Core Contributions</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Built REST APIs in Spring Boot for authentication, customer management, collection tracking, and reporting.</li>
            <li>Implemented Excel data ingestion using Apache POI to parse and import daily customer records into MySQL — hands-on experience with data extraction and ingestion pipelines.</li>
            <li>Built JWT-based role-based access control so admins and executives access only authorized data and features.</li>
            <li>Added offline data handling and synchronization for mobile users, plus WebSocket-based real-time updates.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "visual-pipeline-engine",
    category: "Full-Stack Workflow Builder",
    title: "Visual Pipeline Engine",
    src: "/assets/projects-screenshots/visual-pipeline-engine.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.redux,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/piyushFunde/Visual-Pipeline-Engine",
    github: "https://github.com/piyushFunde/Visual-Pipeline-Engine",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Drag-and-drop workflow engine with DAG validation &amp; API simulation.
          </TypographyP>
          <TypographyP className="font-mono">
            Full-stack visual workflow engine built with React, Redux Toolkit, Node.js/Express.js, MongoDB, REST APIs, and Docker.
          </TypographyP>
          <ProjectsLinks
            live="https://github.com/piyushFunde/Visual-Pipeline-Engine"
            repo="https://github.com/piyushFunde/Visual-Pipeline-Engine"
          />
          <TypographyH3 className="my-4 mt-8">Key Achievements</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Built a full-stack drag-and-drop workflow engine with a Node.js/Express REST API backend and MongoDB for pipeline persistence.</li>
            <li>Implemented DAG validation, node-based workflow design, and API-driven execution simulation.</li>
            <li>Dockerized for deployment with GitHub Actions CI/CD pipeline integration.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "bedsidebot",
    category: "AI & Healthcare Tech",
    title: "Bedside Bot",
    src: "/assets/projects-screenshots/bedsidebot.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
      ],
    },
    live: "https://github.com/piyushFunde/Bedsidebot_app",
    github: "https://github.com/piyushFunde/Bedsidebot_app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-powered hospital assistant for bedridden patients.
          </TypographyP>
          <TypographyP className="font-mono">
            Built using Python, Flask, OpenCV, Mediapipe, and DeepFace to assist bedridden patients with gesture recognition, emotion detection, and voice commands.
          </TypographyP>
          <ProjectsLinks
            live="https://github.com/piyushFunde/Bedsidebot_app"
            repo="https://github.com/piyushFunde/Bedsidebot_app"
          />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Built an AI-powered hospital assistant for bedridden patients using gesture recognition, emotion detection, and voice commands.</li>
            <li>Implemented real-time hand gesture recognition with 94% accuracy using Mediapipe and OpenCV.</li>
            <li>Integrated DeepFace sentiment analysis and SpeechRecognition into a unified Flask web application.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "bug-fix-ai",
    category: "AI & Developer Tooling",
    title: "BugFix AI",
    src: "/assets/projects-screenshots/bug-fix-ai.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
      ],
      backend: [
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.llm,
        PROJECT_SKILLS.jira,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://bugfix-ai-backend-odli.onrender.com/",
    github: "https://github.com/piyushFunde/BugFix-AI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Jira Bug Analysis &amp; Fix Suggestions.
          </TypographyP>
          <TypographyP className="font-mono">
            Automated bug analysis system that integrates Jira Webhooks with Spring Boot and AI/LLM models to analyze stack traces and issue details, generating actionable fix suggestions and code patches.
          </TypographyP>
          <ProjectsLinks
            live="https://bugfix-ai-backend-odli.onrender.com/"
            repo="https://github.com/piyushFunde/BugFix-AI"
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Listens to real-time Jira ticket events via secure Webhook ingestion endpoints built with Spring Boot.</li>
            <li>Leverages LLM / AI prompt pipelines to analyze error logs, stack traces, and issue metadata.</li>
            <li>Stores issue analyses, fix logs, and historical resolutions in PostgreSQL.</li>
            <li>Reduces mean-time-to-resolution (MTTR) by delivering automated code fix recommendations directly into Jira tickets.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "smart-erp",
    category: "Cloud ERP & Accounting System",
    title: "SmartERP",
    src: "/assets/projects-screenshots/smart-erp.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/piyushFunde/TallyPrime",
    github: "https://github.com/piyushFunde/TallyPrime",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TallyPrime-Inspired Cloud ERP System.
          </TypographyP>
          <TypographyP className="font-mono">
            SmartERP is a modern, web-based Enterprise Resource Planning (ERP) platform designed for accounting, inventory management, billing, and financial reporting. Inspired by the interface and conventions of TallyPrime, it focuses on a keyboard-first workflow that allows users to navigate the system without a mouse.
          </TypographyP>
          <ProjectsLinks
            live="https://github.com/piyushFunde/TallyPrime"
            repo="https://github.com/piyushFunde/TallyPrime"
          />
          <TypographyH3 className="my-4 mt-8">Core Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Keyboard-first modal and voucher navigation tailored for rapid data entry without mouse reliance.</li>
            <li>Complete double-entry accounting ledger management with real-time trial balance and P&amp;L updates.</li>
            <li>Inventory tracking with batch tracking, reorder point alerts, and automated stock valuation.</li>
            <li>Multi-tenant architecture supported by Spring Boot REST services and PostgreSQL backend.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "3d-portfolio",
    category: "Interactive 3D Web App",
    title: "3D Personal Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.websockets,
      ],
    },
    live: "https://portfolio-piyush-funde.vercel.app",
    github: "https://github.com/piyushFunde/3d-portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Space-themed interactive 3D developer portfolio.
          </TypographyP>
          <TypographyP className="font-mono">
            A developer portfolio packed with an interactive 3D Spline keyboard skill showcase, smooth GSAP and Framer Motion animations, custom theme toggles, and optional real-time visitor features.
          </TypographyP>
          <ProjectsLinks
            live="https://portfolio-piyush-funde.vercel.app"
            repo="https://github.com/piyushFunde/3d-portfolio"
          />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Interactive 3D keyboard built using Spline Runtime, mapping keycaps to technical skill cards.</li>
            <li>Buttery smooth scroll-triggered animations powered by GSAP and Framer Motion.</li>
            <li>Responsive design with full light/dark mode support and Aceternity UI components.</li>
            <li>Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
