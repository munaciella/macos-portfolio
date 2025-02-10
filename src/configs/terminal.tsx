import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I'm Francesco, a junior software engineer with a passion for building things. I'm also interested in learning more about machine learning and how it can be used to improve the user experience.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "I'm interested in learning more about full-stack development, and how to use them to improve the user experience."
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for a job that will allow me to learn more about full-stack development, and to build applications that will help people."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:francesco.vurchio82@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                francesco.vurchio82@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/munaciella"
                target="_blank"
                rel="noreferrer"
              >
                @munaciella
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/francesco-vurchio/"
                target="_blank"
                rel="noreferrer"
              >
                @francesco-vurchio
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://francescovurchio-dev.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://francescovurchio-dev.netlify.app/
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
