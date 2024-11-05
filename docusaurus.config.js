// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");
const tailwindPlugin = require("./src/plugins/tailwind-config.cjs");
// const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");
module.exports = async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: "JavaScript Mastery Learning",
    url: "https://javascript-mastery.github.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    // favicon: "img/favicon.ico",
    favicon: "img/js.svg",
    organizationName: "javascript-mastery",
    projectName: "JavaScript Mastery",

    plugins: [          
      async function plugin(context, options) {
        return {
          name: "docusaurus-plugin-module-alias",
          configureWebpack() {
            return {
              resolve: {
                alias: {
                  "@src": path.resolve(__dirname, "src"),
                },
              },
            };
          },
        };
      },
      "docusaurus-plugin-sass",
      tailwindPlugin,
    ],
    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "#",
            remarkPlugins: [(await import("remark-math")).default],
            rehypePlugins: [(await import("rehype-katex")).default],
            // Equivalent to `enableUpdateBy`.
            showLastUpdateAuthor: true,
            // Equivalent to `enableUpdateTime`.
            showLastUpdateTime: true,
          },
          blog: {
            showReadingTime: true,
            editUrl:
              "#",
            remarkPlugins: [(await import("remark-math")).default],
            rehypePlugins: [(await import("rehype-katex")).default],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true,
          },
        },
        // algolia: {
        //   appId: "NIXA4HHO8S",
        //   apiKey: "0e434f5d05dd96ad91008f11f2903066",
        //   indexName: "our-index",
        // },
        navbar: {
          title: "JavaScript Mastery",
          hideOnScroll: true,
          logo: {
            alt: "My Site Logo",
            src: "img/js.svg",
            width: 32,
            height: 32,
            style: { borderRadius: "var(--ifm-global-radius)" },
          },
          items: [
            {
              to: "/docs",
              position: "left",
              label: "Docs",
            },
            { to: "/blog", label: "Blog", position: "left" },
            { to: "/about", label: "About", position: "right" },
            {
              href: "#",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Docs",
                  to: "/docs",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },

                {
                  label: "Resources",
                  href: "#",
                },
                {
                  label: "GitHub",
                  href: "#",
                },
                { to: "/about", label: "About" },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} JavaScript Mastery, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: darkCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["csharp", "nginx"],
        },
      }),
    stylesheets: [
      {
        href: "/katex/katex.min.css",
        type: "text/css",
      },
    ],
    themes: ["@docusaurus/theme-live-codeblock"],
    // i18n: {
    //   // 2020/08/19 (year/month/day)
    //   defaultLocale: "en",
    //   locales: ["en"],
    // },
    clientModules: [require.resolve("./src/aegis/init-script.js")],
    trailingSlash: false,
  };
  return config;
};
