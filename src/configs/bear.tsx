import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a junior software engineer looking to break into the tech industry."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/munaciella/macos-portfolio/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://munaciella.github.io/macos-portfolio/"
      },
      {
        id: "3D-portfolio",
        title: "3D Portfolio",
        file: "https://raw.githubusercontent.com/munaciella/3d_portfolio/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My 3D portfolio website...",
        link: "https://francescovurchio-dev.netlify.app/"
      },
      {
        id: "portfolio",
        title: "Portfolio",
        file: "https://raw.githubusercontent.com/munaciella/portfolio-v2.0/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "My professional portfolio...",
        link: "https://francesco-dev.vercel.app"
      },
      {
        id: "github-portfolio",
        title: "Github Portfolio",
        file: "https://raw.githubusercontent.com/munaciella/munaciella.github.io/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My personal portfolio website using Github Pages...",
        link: "https://munaciella.github.io/"
      },
      {
        id: "networking-platform",
        title: "NetworEd",
        file: "https://raw.githubusercontent.com/munaciella/networking-platform-v2/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A social media platform for networking...",
        link: "https://networked.vercel.app/"
      },
      {
        id: "clarity",
        title: "Clarity",
        file: "https://raw.githubusercontent.com/munaciella/clarity-notes-capturer/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A note-taking app for capturing and organizing your thoughts...",
        link: "https://clarity-capture.com"
      },
      {
        id: "eventsphere",
        title: "EventSphere",
        file: "https://raw.githubusercontent.com/munaciella/events-platform/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A web app for creating and managing events...",
        link: "https://event-sphere-web.netlify.app/"
      },
      {
        id: "wax",
        title: "Wax",
        file: "https://raw.githubusercontent.com/munaciella/gatefold-frontend/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A social media platform for sharing and discovering music...",
        link: "https://github.com/munaciella/gatefold-frontend"
      },
      {
        id: "munaciella-news",
        title: "Munaciella News",
        file: "https://raw.githubusercontent.com/munaciella/munaciella_news_therevenge/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A news web app for exploring the latest news...",
        link: "https://munaciella.netlify.app"
      },
      {
        id: "velovegans",
        title: "VeloVegans",
        file: "https://raw.githubusercontent.com/munaciella/recipes-website/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A web app for sharing vegan recipes...",
        link: "https://velovegans.co.uk"
      },
      {
        id: "pair-sniper",
        title: "Pair Sniper",
        file: "https://raw.githubusercontent.com/munaciella/data-analytics-api/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A data analytics API for analyzing and visualizing data...",
        link: "https://github.com/munaciella/data-analytics-api"
      },
      {
        id: "devups",
        title: "DevUps Notes",
        file: "https://raw.githubusercontent.com/munaciella/devups-notes/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A resourceful web app for a collection of notes for developers...",
        link: "https://devups-notes.vercel.app/"
      },
    ]
  }
];

export default bear;
