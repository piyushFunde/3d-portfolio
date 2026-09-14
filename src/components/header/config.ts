import { Link } from "@/types";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png',
    preview: { type: 'text', content: 'Full-Stack Developer | Java • Spring Boot • React • AWS' },
  },
  {
    title: 'Experience',
    href: '/#experience',
    thumbnail: '/assets/nav-link-previews/about.png',
    preview: { type: 'text', content: '4+ months · Java Developer Intern @ Labmentix' },
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png',
    preview: { type: 'text', content: 'Java • Spring Boot • React • AWS' },
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png',
    preview: { type: 'text', content: '6 projects shipped — CRM, ERP, AI & more' },
  },
  {
    title: 'Blogs',
    href: '/blogs',
    thumbnail: '/assets/nav-link-previews/blog.png',
    preview: { type: 'text', content: 'Thoughts on code & building' },
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact.png',
    preview: { type: 'text', content: 'fundepiyush18@gmail.com · reply within a day or two' },
  }
];

export { links };
