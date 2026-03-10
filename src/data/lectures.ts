export interface LectureInfo {
  id: string;
  title: string;
  description: string;
  section: "HTML & CSS" | "CSS Layout" | "Tools" | "Exam" | "JavaScript";
}

export const lectures: LectureInfo[] = [
  {
    id: "01",
    title: "Introduction to Front-End & HTML Structure",
    description:
      "How the web works, HTTP, dev tools, HTML5 structure, tags, attributes, formatting, headings, hyperlinks",
    section: "HTML & CSS",
  },
  {
    id: "02",
    title: "Semantic HTML, Media & CSS Introduction",
    description:
      "Semantic tags, video/audio/YouTube embedding, CSS connection methods, CSS selectors",
    section: "HTML & CSS",
  },
  {
    id: "03",
    title: "Display Types, Box Model & Forms",
    description:
      "Block/inline/inline-block, CSS box-model, content-box vs border-box, form elements, Figma basics",
    section: "HTML & CSS",
  },
  {
    id: "04",
    title: "CSS Flexbox & Backgrounds",
    description:
      "Layout work with Flexbox, flex container/items, alignment, CSS background properties",
    section: "CSS Layout",
  },
  {
    id: "05",
    title: "CSS Grid, Pseudo-Classes & Animations",
    description:
      "CSS Grid layout, pseudo-classes, pseudo-elements, CSS animations and transitions",
    section: "CSS Layout",
  },
  {
    id: "06",
    title: "Responsive Design & Positioning",
    description:
      "Responsive web pages, @media queries, element positioning (static, relative, absolute, fixed, sticky)",
    section: "CSS Layout",
  },
  {
    id: "07",
    title: "Generative AI & Web Development",
    description:
      "What is Generative AI, prompts, AI code generation tools, ethical aspects",
    section: "Tools",
  },
  {
    id: "08",
    title: "Midterm Review",
    description:
      "Review of weeks 1-7, midterm exam preparation, practice exercises",
    section: "Exam",
  },
  {
    id: "09",
    title: "JavaScript Fundamentals",
    description:
      "What is JS, statements/expressions, variables, scope, data types, implicit/explicit coercion",
    section: "JavaScript",
  },
  {
    id: "10",
    title: "Objects, Arrays & Control Flow",
    description:
      "Objects, deep/shallow copying, arrays, array methods, operators, loops",
    section: "JavaScript",
  },
  {
    id: "11",
    title: "Functions & Closures",
    description:
      "Function declaration, expression, arrow functions, IIFE, closures, scope chain",
    section: "JavaScript",
  },
  {
    id: "12",
    title: "The DOM: Tree, Methods & Events",
    description:
      "What is the DOM, DOM tree, selecting/manipulating elements, events",
    section: "JavaScript",
  },
  {
    id: "13",
    title: "Promises & Asynchronous JavaScript",
    description:
      "Synchronous vs asynchronous, callbacks, promises, then/catch/finally",
    section: "JavaScript",
  },
  {
    id: "14",
    title: "Fetch API & Async/Await",
    description:
      "Fetching data from servers, async/await syntax, error handling, working with JSON APIs",
    section: "JavaScript",
  },
  {
    id: "15",
    title: "Web Storage: Cookies & Storage APIs",
    description:
      "Cookies, LocalStorage, SessionStorage, comparing storage methods, practical usage",
    section: "JavaScript",
  },
  {
    id: "16",
    title: "Form Handling, Validation & Course Summary",
    description:
      "HTML form handling with JS, input validation, regex basics, course review and summary",
    section: "JavaScript",
  },
];
