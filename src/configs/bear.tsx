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
        file: "https://github.com/munaciella/macos-portfolio/blob/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://munaciella.github.io/macos-portfolio/"
      },
      {
        id: "oh-my-cv",
        title: "Oh, My CV!",
        file: "https://raw.githubusercontent.com/Renovamen/oh-my-cv/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "Write your curriculum vitae / resume in Markdown online...",
        link: "https://ohmycv.app"
      },
    ]
  }
];

export default bear;
