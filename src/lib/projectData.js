const projectData = [
  {
    title: "myKombucha",
    slug: "mykombucha",
    type: "Personal",
    description: "Online Kombucha Resource and Community",
    overview:
      "An online resource and community for enthusiasts who are passionate about kombucha beverages. Registered users are able to browse top rated kombuchas, submit their own ratings and reviews, save their favorite kombucha and more.",
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652226895/Portfolio/myKombucha/mykombucha-cover_maoqxh.png",

    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1652322907/Portfolio/myKombucha/mykombucha-details_2_wsqocb.png",
      width: 1000,
      height: 1200,
    },
    links: [
      { title: "Repository", href: "https://github.com/jamesikjo" },
      { title: "Visit Site", href: "http://mykombucha.net" },
    ],
    projectLink: "http://mykombucha.net/",
    githubLink: "https://github.com/jamesikjo",
    category: "Social",
    chipColor: "#BBDEFB",
    stacks: [
      {
        name: "Next.js",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366494/Portfolio/Stack/next_cxgxpb.svg",
        link: "https://nextjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Node.js",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366617/Portfolio/Stack/Nodejs_kqlqm5.svg",
      },
      {
        name: "MongoDB",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Mongodb_pqduyn.svg",
      },
    ],
    highlights: [
      "Fullstack application built with Next.js, Material-UI, Node.js, MongoDB.",
      `Backend implementation with  <a class="innerLink" href="https://nextjs.org/blog/next-9#api-routes" alt="Next API Routes" target="_blank">Next API Routes</a> and MongoDB used as the database.`,
      `Session-based authentication with  <a class="innerLink" href="https://next-auth.js.org/" alt="Next Auth" target="_blank">NextAuth.</a>`,
      "Dynamic search bar.",
      "Update user profile, and edit account settings.",
      `<i>Coming soon</i> : Authentication via OAuth, Browse local breweries by current location, and mobile app with React Native.`,
    ],
  },
  {
    title: "jamesjo.dev",
    slug: "personal-portfolio",
    type: "Personal",
    description: "My Dev Portfolio",
    overview:
      "This is my developer portfolio, which includes both freelance work and personal projects, along with a curated list of tools/resources I've found useful during my studies. In addition, this website is a platform for anyone interested in contacting me regarding projects or work.",
    stacks: [
      {
        name: "Next.js",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366494/Portfolio/Stack/next_cxgxpb.svg",
        link: "https://nextjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Vercel",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Vercel_bcpqyd.svg",
        link: "https://vercel.com",
      },
    ],
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652315374/Portfolio/Dev%20Portfolio/portfolio-cover_dckyup.png",
    category: "Portfolio",
    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1652413116/Portfolio/Dev%20Portfolio/portfolio-preview_1_gpipwf.png",

      width: 3000,
      height: 2250,
    },
    links: [
      { title: "Repository", href: "https://github.com/jamesikjo/jamesjo.dev" },
      { title: "Visit Site", href: "https://jamesjo.dev" },
    ],
    projectLink: "https://jamesjo.dev",
    githubLink: "https://github.com/jamesikjo/jamesjo.dev",
    chipColor: "#FFECB3",
    highlights: [
      "Built with Next.js, Material-UI for styling and deployed with Vercel.",
    ],
  },
  {
    title: "PowerTek",
    slug: "powertek",
    type: "Freelance",
    description: "Website for Automotive Parts Company",
    overview: `A previous client for whom I built <a class="innerLink" href="/portfolio/choi-smog" alt="choi smog" target="_blank">choismog.com</a>, referred me to build this company's website. Based in Southern California, Powertek parts supply engine management and brake parts for the automotive industry. This website features information about the company's products and services.`,
    innerHTML: true,
    stacks: [
      {
        name: "Next.js",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366494/Portfolio/Stack/next_cxgxpb.svg",
        link: "https://nextjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Vercel",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Vercel_bcpqyd.svg",
        link: "https://vercel.com",
      },
    ],
    purpose:
      "I found that the best way to implement these 3 phases without having separate versions saved was to incorporate a feature flag that will pass the current state that should be displayed and then render content conditionally.",
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652224294/Portfolio/powertek/powertek-cover_hjrey1.png",
    category: "Buisness",
    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1652906316/Portfolio/powertek/powertek-preview_1_oxnjng.png",

      width: 1500,
      height: 1650,
    },
    links: [
      { title: "Repository", href: "https://github.com/jamesikjo" },
      { title: "Visit Site", href: "https://powertek.vercel.app" },
    ],
    projectLink: "https://powertek.vercel.app/",
    githubLink: "https://github.com/jamesikjo",
    chipColor: "#C8E6C9",
    highlights: [
      "Built with Next.js, Material-UI for styling and deployed with Vercel.",
      "Product pages statically generated to improve loading times and for enhanced SEO capabilities.",
      `<a class="innerLink" href="https://nextjs.org/docs/api-reference/next/image" alt="Next API Routes" target="_blank">Next Image</a> is used to automatically serve optimize product images and enables lazy loading.`,
    ],
  },
  {
    title: "ArmonVan Photography",
    slug: "armonvan-photography",
    type: "Freelance",
    description: "Photography Portfolio",
    overview: `A photography portfolio showcasing the work of an independent photographer. Client can upload, create, delete, and edit own content using <a class="innerLink" href="https://strapi.io/" alt="Strapi" target="_blank">Strapi</a>, a headless Content Management System (CMS) which is connected to the application's front-end.`,
    stacks: [
      {
        name: "Next.js",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366494/Portfolio/Stack/next_cxgxpb.svg",
        link: "https://nextjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Strapi",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Strapi_vlgtxu.svg",
        link: "https://strapi.io",
      },
      {
        name: "Heroku",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1651532903/Portfolio/Stack/heroku_ngyeee.svg",
        link: "https://heroku.com",
      },
      {
        name: "Vercel",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Vercel_bcpqyd.svg",
        link: "https://vercel.com",
      },
    ],
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652226975/Portfolio/Armon%20Van%20Photography/armonvan-cover_bvo0ii.png",
    category: "Portfolio",
    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1651875365/Portfolio/Armon%20Van%20Photography/armonvan-details_liql7k.png",

      width: 3000,
      height: 1500,
    },
    links: [
      {
        title: "Repository",
        href: "https://github.com/jamesikjo/armonvan-photography-next",
      },
      { title: "Visit Site", href: "https://armonvanphoto.com" },
    ],
    projectLink: "https://www.armonvanphoto.com/",
    githubLink: "https://github.com/jamesikjo/armonvan-photography-next",
    chipColor: "#FFECB3",
    highlights: [
      "Built with Next.js, Strapi, Material-UI for styling and deployed with Vercel (client) & Heroku (server).",
      "Responsive photo gallery with thumbnails that automatically reposition on smaller screens.",
      "Client access to Strapi admin panel with custom credentials to manage own content.",
      "Static pages are dynamically generated with data fetched from Strapi API endpoints during build.",
    ],
  },

  {
    title: "Quiz of Luchador",
    slug: "quiz-of-luchador",
    type: "Personal",
    description: "Quiz App for Nacho Libre Movie Enthusists",
    overview:
      "As part of my continuous effort to improve my understanding of React fundamentals, I created this simple quiz app. It was also created for a friend of mine who is an avid fan of the film. Working on this project was an excellent way to get more experience with managing local and global states and conditional rendering. In this app, the quiz taker's scores are tracked, and at the end of the test, the final score determines the quiz taker's ranking. Later on, I decided to store the quiz data on an external server to get some experience with setting up and connecting to servers and databases.",
    stacks: [
      {
        name: "React",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366041/Portfolio/Stack/React_rpjiw5.svg",
        link: "https://reactjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Node.js",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366617/Portfolio/Stack/Nodejs_kqlqm5.svg",
        link: "https://nodejs.org/en/",
      },
      {
        name: "MongoDB",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Mongodb_pqduyn.svg",
      },
      {
        name: "Heroku",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1651532903/Portfolio/Stack/heroku_ngyeee.svg",
        link: "https://heroku.com",
      },
    ],
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652315592/Portfolio/Quiz%20of%20Luchador/nachoquiz-cover_ejhqxe.png",
    category: "Web App",
    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1652320992/Portfolio/Quiz%20of%20Luchador/nachoquiz-details_5_pachgj.png",

      width: 3000,
      height: 4600,
    },
    links: [
      {
        title: "Repository",
        href: "https://github.com/jamesikjo/nacho-libre-quiz-of-luchador",
      },
      { title: "Visit Site", href: "https://mykombucha.net" },
    ],
    projectLink: "https://nacho-libre-quiz.herokuapp.com",
    githubLink: "https://github.com/jamesikjo/nacho-libre-quiz-of-luchador",
    chipColor: "#C8E6C9",
    highlights: [
      "Built with React, Material-UI, Node.js, Express.",
      "Quiz data stored externally using MongoDB.",
      "Both client and server side files are deployed with Heroku.",
    ],
  },
  {
    title: "Choi Smog",
    slug: "choi-smog",
    type: "Freelance",
    description: "Website for Smog Testing Buisness",
    overview:
      "I built this website as my first freelance assignment for a smog test station in Koreatown, Los Angeles. The site features information about services offered, areas of expertise, and business details. Visitors can select either English or Korean as the site's language with the language button in the main header.",
    stacks: [
      {
        name: "React",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366041/Portfolio/Stack/React_rpjiw5.svg",
        link: "https://reactjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Netlify",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Netlify_qq0vst.svg",
        link: "https://netlify.com",
      },
    ],
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652226524/Portfolio/Choi%20Smog/choismog-cover_wwjhfp.png",
    category: "Buisness",
    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1651805491/Portfolio/Choi%20Smog/choismog-details_yhtjm2.png",

      width: 2048,
      height: 1707,
    },
    links: [
      { title: "Repository", href: "https://github.com/jamesikjo/choi-smog" },
      { title: "Visit Site", href: "https://choismog.com" },
    ],
    projectLink: "https://www.choismog.com/",
    githubLink: "https://github.com/jamesikjo/choi-smog",
    chipColor: "#C8E6C9",
    highlights: [
      "Built with React, Material-UI for styling and deployed with Netlify.",
      "Toggle between English and Korean as the site's language.",
      "React Context API is used to share language state across multiple components.",
      "Contact form submissions are handled with Netlify's built-in form handling.",
    ],
  },
  {
    title: "Kush Bowl",
    slug: "kush-bowl",
    type: "Freelance",
    description: "Promotional Landing Page for a Restaurant",
    overview:
      "A landing page for a small family run restaurant in Orange County, California. Square Online platform was utilized to build a standalone ordering page for the restaurant, which enables online payment and access to orders through the restaurant's existing Square POS system.",
    stacks: [
      {
        name: "React",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366041/Portfolio/Stack/React_rpjiw5.svg",
        link: "https://reactjs.org",
      },
      {
        name: "MUI",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366562/Portfolio/Stack/MUI_wqakpb.svg",
        link: "https://mui.com",
      },
      {
        name: "Netlify",
        icon: "https://res.cloudinary.com/jjo/image/upload/v1649366766/Portfolio/Stack/Netlify_qq0vst.svg",
        link: "https://netlify.com",
      },
    ],
    preview: {
      image:
        "https://res.cloudinary.com/jjo/image/upload/v1649539944/Portfolio/Kush%20Bowl/Project_Details_4_dmlrig.png",

      width: 1500,
      height: 2350,
    },
    links: [
      { title: "Repository", href: "https://github.com/jamesikjo/kush-bowl" },
      { title: "Visit Site", href: "https://kushbowl.net" },
    ],
    projectLink: "https://www.kushbowl.net/",
    githubLink: "https://github.com/jamesikjo/kush-bowl",
    cover:
      "https://res.cloudinary.com/jjo/image/upload/v1652226650/Portfolio/Kush%20Bowl/kush-cover_leep75.png",
    category: "Buisness",
    chipColor: "#C8E6C9",
    highlights: [
      "Built with React, Material-UI for styling and deployed with Netlify.",
      "Mobile reponsive design.",
      "Custom order page built with Square Online to take online orders and payments.",
    ],
  },
];

export default projectData;
