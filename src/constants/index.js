// src/constants/index.js

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
} from "../assets";

import stockmarket from "../assets/stockmarket.png";
import supermarket from "../assets/supermarket.png";
import ecommerce from "../assets/ecommerce.png";
import socialmedia from "../assets/socialmedia.png";
import caranalysis from "../assets/caranalysis.png";

// Add these imports (create placeholder images or use existing ones temporarily)
import billingSystem from "../assets/supermarket.png"; // Temporary - use existing image
import smartHire from "../assets/stockmarket.png"; // Temporary - use existing image

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "SQL Developer",
    icon: web,
  },
  {
    title: "Data Visualizer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: "/icons/icons8-python-144.png",
  },
  {
    name: "Power BI",
    icon: "/icons/icons8-power-bi-144.png",
  },
  {
    name: "Tableau",
    icon: "/icons/icons8-tableau-software-144.png",
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "Freelance Projects",
    icon: "/icons/icons8-python-144.png",
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing data analysis applications using Python libraries like Pandas, NumPy, and Seaborn.",
      "Creating web scrapers and data processing pipelines for various projects.",
      "Building interactive dashboards and data visualization tools.",
      "Implementing machine learning models for predictive analysis.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Personal Projects",
    icon: "/icons/icons8-power-bi-144.png",
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Analyzing and interpreting complex datasets to provide actionable insights.",
      "Creating interactive dashboards using Power BI and Tableau.",
      "Performing data cleaning, transformation, and visualization.",
      "Developing reports and presentations for data-driven decision making.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing responsive websites using HTML, CSS, and JavaScript.",
      "Creating interactive web applications with React.js.",
      "Implementing modern UI/UX designs and principles.",
      "Collaborating on front-end development projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kishore transformed our raw data into meaningful insights that helped us make better business decisions.",
    name: "Project Client",
    designation: "Client",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "His data visualization skills are exceptional. The dashboards he created were both functional and visually appealing.",
    name: "Team Member",
    designation: "Client",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Working with Kishore was a great experience. He delivered the project on time with high quality results.",
    name: "Project Partner",
    designation: "client",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Realtime Stock Market Analysis",
    description:
      "Real-time stock market data analysis dashboard using yfinance API with interactive visualization for tracking market trends, stock performance, and investment insights.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "yfinance",
        color: "green-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: stockmarket,
    source_code_link: "https://github.com/kishorekumar114/",
  },
  {
    name: "Smart Supermarket Analysis",
    description:
      "Comprehensive web application for supermarket data analysis featuring inventory management, sales tracking, customer behavior insights, and predictive analytics.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web App",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: supermarket,
    source_code_link: "https://github.com/kishorekumar114/",
  },
  {
    name: "E-commerce Analysis Dashboard",
    description:
      "Advanced e-commerce analytics platform with product ratings analysis, sales trend tracking, pricing optimization, and customer sentiment analysis from reviews.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Power BI",
        color: "green-text-gradient",
      },
      {
        name: "Data Scraping",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/kishorekumar114/",
  },
  {
    name: "Social Media Aggregator",
    description:
      "Multi-platform social media content aggregator that collects, filters, and displays content from various platforms with advanced data structuring and visualization.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://github.com/kishorekumar114/",
  },
  {
    name: "Car Analysis & Prediction",
    description:
      "Vehicle specification analysis system with price prediction algorithms, sales pattern detection, fuel efficiency analysis, and market trend identification.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: caranalysis,
    source_code_link: "https://github.com/kishorekumar114/",
  },
  {
    name: "Smart Billing & Inventory System",
    description:
      "AI-powered billing solution with automated inventory tracking, invoice generation, customer management, and sales analytics. Features real-time stock alerts and predictive restocking.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
    ],
    image: billingSystem,
    source_code_link: "https://github.com/kishorekumar114/billing-system",
  },
  {
    name: "Smart Hire AI - Recruitment Platform",
    description:
      "Intelligent recruitment system using NLP for resume screening, candidate matching, automated interview scheduling, and skill gap analysis. Includes bias detection and candidate ranking algorithms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "FastAPI",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
    ],
    image: smartHire,
    source_code_link: "https://github.com/kishorekumar114/smart-hire-ai",
  },
];

// Export everything
export { services, technologies, experiences, testimonials, projects };