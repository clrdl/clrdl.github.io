// gitprofile.config.d.ts

declare module 'gitprofile.config' {
    interface GitHubProjects {
      display: boolean;
      header: string;
      mode: 'automatic' | 'manual';
      automatic: {
        sortBy: string;
        limit: number;
        exclude: {
          forks: boolean;
          projects: string[];
        };
      };
      manual: {
        projects: string[];
      };
    }
  
    interface ExternalProjects {
      header: string;
      projects: {
        title: string;
        description: string;
        imageUrl: string;
        link: string;
      }[];
    }
  
    interface Projects {
      github: GitHubProjects;
      external: ExternalProjects;
    }
  
    interface SEO {
      title: string;
      description: string;
      imageURL: string;
    }
  
    interface Introduction {
      name: string;
      description: string;
      contact: {
        email: string;
      };
    }
  
    interface Education {
      institution: string;
      degree: string;
      from: string;
      to: string;
    }
  
    interface Certification {
      name: string;
      body: string;
      year: string;
    }
  
    interface ThemeConfig {
      defaultTheme: string;
      disableSwitch: boolean;
      respectPrefersColorScheme: boolean;
      displayAvatarRing: boolean;
      themes: string[];
      customTheme: {
        primary: string;
        secondary: string;
        accent: string;
        neutral: string;
        'base-100': string;
        '--rounded-box': string;
        '--rounded-btn': string;
      };
    }
  
    interface Config {
      github: {
        username: string;
      };
      base: string;
      projects: Projects;
      seo: SEO;
      introduction: Introduction;
      skills: string[];
      educations: Education[];
      certifications: Certification[];
      themeConfig: ThemeConfig;
      footer: string;
      enablePWA: boolean;
    }
  
    const config: Config;
    export default config;
  }
  