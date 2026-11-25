// ============================================================
//  EDIT THIS FILE to change products, prices, dates, and text.
//  You never need to touch index.html.
//  Prices are LOW–HIGH ranges (estimates). Keep each item's `id`
//  the SAME here and in apps-script/Code.gs (ALLOWED_IDS).
// ============================================================
window.SITE = {
  chapterName: "NY Theta Chapter",
  instagram: "nyuphide",

  // Google Apps Script web app URL (ends in /exec). Already set.
  orderScriptUrl: "https://script.google.com/macros/s/AKfycbxY6RaN8g_fHQ2947kb3etWBUDEihS13f8DZKp9nUzKOFxATRJGFw6KPhV3RczxEA5mPA/exec",

  // Interest deadline (local NY time) and pickup line.
  deadline: "2026-12-01T23:59:00-05:00",
  deadlineLabel: "Tuesday, December 1 · 11:59 PM",
  pickupLine: "Pick up at the first general meeting next semester (or earlier).",
  priceDisclaimer: "Prices are estimates and may change. The more people order, the lower they go — but some may not come down.",

  sizes: ["XS", "S", "M", "L", "XL", "XXL"],

  // Each product has one or more colors. Each color has its own image
  // and its own low/high price (same range if they don't differ).
  products: [
    { id: "mission-hoodie", name: "PhiDE Mission Hoodie",
      desc: "Heavyweight hoodie. Small ΦΔΕ 1905 on the chest, mission statement on the back.",
      colors: [
        { name: "Grey",  img: "images/mission-hoodie-grey.jpg",  low: 32, high: 39 },
        { name: "Black", img: "images/mission-hoodie-black.jpg", low: 32, high: 39 }
      ] },
    { id: "backbone-hoodie", name: "PhiDE Backbone Hoodie",
      desc: "Skeleton spine graphic on the back with ΦΔΕ down the vertebrae.",
      colors: [
        { name: "Black",  img: "images/backbone-black.jpg",  low: 32, high: 39 },
        { name: "Washed", img: "images/backbone-washed.jpg", low: 42, high: 52 }
      ] },
    { id: "classic-hoodie", name: "PhiDE Classic Hoodie",
      desc: "PHIDE / NY Theta Chapter print on the back, small letters on the chest.",
      colors: [
        { name: "Black", img: "images/classic-black.jpg", low: 32, high: 39 },
        { name: "Grey",  img: "images/classic-grey.jpg",  low: 32, high: 39 }
      ] },
    { id: "love-top", name: "Women's I ❤ PhiDE Top",
      desc: "Fitted off-shoulder baby tee.",
      colors: [
        { name: "White", img: "images/love-top-white.jpg", low: 17, high: 23 },
        { name: "Grey",  img: "images/love-top-grey.jpg",  low: 17, high: 23 }
      ] },
    { id: "love-sweatshirt", name: "Women's I ❤ PhiDE Sweatshirt",
      desc: "Cropped crewneck sweatshirt.",
      colors: [
        { name: "Grey", img: "images/love-sweat-grey.jpg", low: 26, high: 32 }
      ] },
    { id: "mission-zip", name: "PhiDE Mission Zip-Up",
      desc: "Full-zip hoodie. ΦΔΕ 1905 on the chest, mission statement on the back.",
      colors: [
        { name: "Dark Grey",  img: "images/zip-darkgrey.jpg",  low: 41, high: 53 },
        { name: "Light Grey", img: "images/zip-lightgrey.jpg", low: 41, high: 53 }
      ] },
    { id: "boxy-fleece", name: "PhiDE Washed Boxy Fleece Hoodie",
      desc: "Washed boxy zip hoodie with a star varsity print on the back.",
      colors: [
        { name: "Washed Grey", img: "images/boxy-washed.jpg", low: 41, high: 51 }
      ] },
    { id: "sweatpants", name: "PhiDE Essential Sweatpants",
      desc: "Open-hem sweatpants with the caduceus crest on the leg.",
      colors: [
        { name: "Grey", img: "images/sweatpants-grey.jpg", low: 27, high: 33 }
      ] }
  ]
};
