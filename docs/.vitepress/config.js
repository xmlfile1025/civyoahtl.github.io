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
      { text: "Government", link: "/government/introduction" },
      { text: "Misc", items: [{ text: "Dead Letters", link: "/deadLetters" }] },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CivYoahtl/civyoahtl.github.io",
      },
    ],
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
      "/government/": [
        {
          text: "Government",
          items: [
            {
              text: "Introduction",
              link: "/government/introduction",
            },
            {
              text: "Procedures",
              link: "/government/procedures",
            },
            {
              text: "Conventions",
              link: "/government/conventions",
            },
          ],
        },
        {
          text: "Council",
          items: [
            {
              text: "Acts",
              link: "/government/council-acts",
            },
          ],
        },
        {
          text: "Olotic",
          items: [
            {
              text: "Preposals",
              link: "/government/olotic-preposals",
            },
          ],
        },
        {
          text: "Court System",
          items: [
            {
              text: "Cases and Precedents",
              link: "/government/court-cases-precedents",
            },
          ],
        },
      ],
    },
  },
};
