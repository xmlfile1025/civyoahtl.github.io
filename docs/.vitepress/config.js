import { defineConfig } from "vitepress";

const ogUrl = "https://civyoahtl.github.io/";
const ogImage = "https://civyoahtl.github.io/yoahtl-flag.png";

export default defineConfig({
  title: "Yoahtl Gov",
  description: "The website for the Yoahtlan government",
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    // ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    // ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    [
      "link",
      { rel: "icon", href: "/favicon.ico", type: "image/png", sizes: "16x16" },
    ],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ffffff" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "Civ, Minecraft, Wiki, Government",
      },
    ],
    // open graph
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "The Government of Yoahtl" }],
    ["meta", { property: "og:image", content: ogImage }],
    [
      "meta",
      {
        property: "og:description",
        content: "The website for the Yoahtlan government",
      },
    ],
    ["meta", { property: "og:url", content: ogUrl }],
    // twitter's og because special
    [
      "meta",
      {
        name: "twitter:description",
        content: "The website for the Yoahtlan government",
      },
    ],
    ["meta", { name: "twitter:title", content: "The Government of Yoahtl" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:url", content: ogUrl }],
    // PWA manifest
    ["link", { rel: "preconnect", href: "/manifest.webmanifest" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    // register sw
    ["script", { async: true, src: "/registerSW.js" }],
  ],
  lastUpdated: true,
  themeConfig: {
    siteTitle: "The Government of Yoahtl",
    logo: "/yoahtl-flag.png",
    nav: [
      { text: "Culture & History", link: "/culture/index" },
      { text: "Constitution", link: "/constitution/charter" },
      { text: "Government", link: "/government/introduction" },
      {
        text: "Misc",
        items: [
          { text: "Dead Letters", link: "/deadLetters" },
          { text: "Edit Guide", link: "/editGuide" },
        ],
      },
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
        {
          text: "Gov Documents",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "Yoahtl Crimes Act",
              link: "/government/yoahtl-crimes-act",
            },
          ],
        },
      ],
    },
  },
});
