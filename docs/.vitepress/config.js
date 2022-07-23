export default {
  title: "Yoahtl Gov",
  description: "The website for the Yoahtlan government",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "The Government of Yoahtl",
    logo: "/yoahtl-flag.png",
    nav: [
      { text: "Culture & History", link: "/culture/index" },
      { text: "Constitution", link: "/constitution/charter" },
      { text: "Government", link: "/government" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/CivYoahtl" }],
    editLink: {
      pattern:
        "https://github.com/civyoahtl/civyoahtl.github.io/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: {
      "/constitution/": [
        {
          text: "Constitution",
          items: [
            { text: "The Third Charter", link: "/constitution/charter" },
            { text: "Treaties", link: "/constitution/treaties" },
          ],
        },
        {
          text: "Historical",
          items: [
            {
              text: "The First Charter",
              link: "/constitution/first-charter",
            },
            {
              text: "The First Charter (Revised)",
              link: "/constitution/first-charter-revised",
            },
            {
              text: "The Second Charter",
              link: "/constitution/secound-charter",
            },
          ],
        },
      ],
    },
  },
};
