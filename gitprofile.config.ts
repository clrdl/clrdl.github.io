const CONFIG = {
  github: {
    username: 'clrdl', // Your GitHub username
  },
  base: '/', // Set this to '/' if deploying to https://<USERNAME>.github.io/
  projects: {
    github: {
      display: true, // Display GitHub projects
      header: 'Github Projects',
      mode: 'automatic', // Use 'automatic' to fetch projects automatically
      automatic: {
        sortBy: 'stars', // Sort by stars
        limit: 10, // Limit to 10 projects
        exclude: {
          forks: false, // Include forked projects
          projects: [], // List projects to exclude here
        },
      },
      manual: {
        projects: [], // List of specific projects to display manually
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description: 'Description of the project.',
          imageUrl: 'https://example.com/image.png',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jisoo',
    description: 'A brief description about your portfolio.',
    imageURL: 'https://example.com/image.png', // URL to an image to be used in SEO
  },
  introduction: {
    name: 'Jisoo Kim',
    description: `
      <h2>Hi! I am an undergraduate student at SKKU.</h2>
      <p> I am majoring in software.</p>
    `,
    contact: {
      email: 'qlqclrdln@gmail.com',
    },
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    // Add more skills here
  ],
  educations: [
    {
      institution: 'B.S., Software',
      degree: 'Sungkyunkwan University',
      from: '2022',
      to: ' ',
    },
    // Add more education details here
  ],
  certifications: [
    {
      name: 'International Academic Program',
      body: 'The State University of New York, Stony Brook',
      year: 'Fall 2021',
    },
    // Add more certifications here
  ],
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
