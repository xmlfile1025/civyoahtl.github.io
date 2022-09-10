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
      { text: "Misc", items: [{ text: "Dead Letters", link: "/deadLetters" }] },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CivYoahtl/civyoahtl.github.io",
      },
      {
        icon: {
          svg: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
        },
        link: "https://www.reddit.com/r/CivYoahtl/",
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
              link: "/government/ololtic-proposals",
            },
          ],
        },
        {
          text: "Court System",
          items: [
            {
              text: "Cases and Precedents",
              link: "/government/court-cases-precedents/index",
            },
          ],
        },
        {
          text: "Gov Documents",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "Docs Introduction",
              link: "/government/documents/docs-intro",
            },
            {
              text: "Yoahtl Crimes Act",
              link: "/government/documents/yoahtl-crimes-act",
            },
            {
              text: "Treaty of Siccufrigus",
              link: "/government/documents/siccufrigus",
            },
          ],
        },
      ],
    },
  },
});
