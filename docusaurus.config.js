module.exports = {
  title: "Value DeFi Protocol",
  tagline: "Value DeFi",
  url: "https://docs.valuedefi.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "Value DeFi", // Usually your GitHub org/user name.
  projectName: "Value DeFi Protocol", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: "Value DeFi Protocol",
      logo: {
        alt: "Value DeFi Protocol",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://valuedefi.io/",
          label: "Home",
          position: "left",
        },
        {
          href: "https://valuedefi.io/value-vaults",
          label: "Value Vaults",
          position: "left",
        },
        {
          href: "https://valueliquid.io/",
          label: "Value Liquid",
          position: "left",
        },
        {
          href: "mailto:contact@valuedefi.io",
          label: "Contact",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Medium",
              href: "https://valuedefi.medium.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/valuedefi",
            },
          ],
        },
        {
          title: ".",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/value_defi",
            },
            {
              label: "Discord",
              href: "https://discord.gg/Dpvd7tp",
            },          ],
        },
        {
          title: ".",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/ValueDeFi",
            },
            {
              label: "Governance Forum",
              href: "https://gov.valuedefi.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Value DeFi Protocol.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    // 'https://fonts.gstatic.com',
    'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
  ],
};
