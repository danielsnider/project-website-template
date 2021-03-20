/**  
 * TODO: Change the 2 parameters below according to this:
 * 
 * - url:  "https://<orgName>.github.io/"  (where <orgName> is your username or
 *                                          the new organisation you made)
 * - baseUrl: 
 *      - If you chose option 1 from the instructions: "/"
 *      - If you chose option 2 from the instructions: "/customRepo/"
 */

const url = "https://mustafaquraish.github.io/";
const baseUrl = "/project-website-template/"


////////////////////////////////////////////////////////////////////////////////

module.exports = {
  title: "Skyline",
  tagline: "Interactive in-editor computational performance profiling, visualization, and debugging for PyTorch deep neural networks.",
  url: url,
  baseUrl: baseUrl,
  favicon: "img/favicon.ico",
  themeConfig: {
    navbar: {
      title: "Skyline",
      image: "img/skyline_social.png",
      logo: {
        alt: "Skyline Logo",
        src: "img/skyline.svg",
      },
      links: [
        /**************************************************/
        /* NOTE: Uncomment the block below to enable Docs */
        /**************************************************/
        
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        {
          to: "paper",
          activeBasePath: "paper",
          label: "Research Paper",
          position: "left",
        },
        {
          href: "https://github.com/skylineprof/skyline/",
          label: "GitHub",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        /**************************************************/
        /* NOTE: Uncomment the block below to enable Docs */
        /**************************************************/

        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "About Skyline",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Getting Started",
        //       to: "docs/getting-started/",
        //     },
        //     {
        //       label: "Skyline Paper",
        //       to: "paper",
        //     },
        //   ],
        // },

        {
          title: "More",
          items: [
            {
              label: "Visit on GitHub",
              href: "https://github.com/skylineprof/skyline/",
            },
            {
              label: "EcoSystem Research Group",
              href: "https://www.cs.toronto.edu/ecosystem/",
            },
            {
              label: "University of Toronto",
              href: "https://web.cs.toronto.edu",
            },
          ],
        },
      ],
    },
    gtag: {
      trackingID: "UA-156567771-2",
      anonymizeIP: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/palenight"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/skylineprof/skyline/edit/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
