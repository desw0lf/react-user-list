const package = require("./package.json");

const title = "React User List";
const baseUrl = "/"; // "/react-user-list/";

module.exports = {
  title: title,
  tagline: "Expandable user avatar list library component for React",
  url: package.homepage,
  baseUrl: baseUrl,
  favicon: "img/favicon.ico",
  organizationName: package.author, // Usually your GitHub org/user name.
  projectName: package.name, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: title,
      logo: {
        alt: "Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/installation", label: "Docs", position: "left" },
        { to: "examples", label: "Examples", position: "left"},
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: package.repository.url,
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      // style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Style Guide",
      //         to: "docs/doc1"
      //       },
      //       {
      //         label: "Second Doc",
      //         to: "docs/doc2"
      //       }
      //     ]
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus"
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus"
      //       }
      //     ]
      //   },
      //   {
      //     title: "Social",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog"
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus"
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus"
      //       }
      //     ]
      //   }
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} ${title}. Docs built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${package.repository.url}/tree/master/example/`
          // editUrl: `${package.repository.url.split(".git")[0]}/edit/master/example/`
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
