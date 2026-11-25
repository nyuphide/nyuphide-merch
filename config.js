// ============================================================
//  EDIT THIS FILE to change products, prices, dates, and text.
//  You never need to touch index.html.
//  Prices are LOW–HIGH ranges (estimates). Keep each item's `id`
//  the SAME here and in apps-script/Code.gs (ALLOWED_IDS).
//  Each color has an `imgs` array (first image shows by default).
// ============================================================
window.SITE = {
  chapterName: "NY Theta Chapter",
  instagram: "nyuphide",
  creditName: "Ammar Malik",

  // Google Apps Script web app URL (ends in /exec). Already set.
  orderScriptUrl: "https://script.google.com/macros/s/AKfycbxY6RaN8g_fHQ2947kb3etWBUDEihS13f8DZKp9nUzKOFxATRJGFw6KPhV3RczxEA5mPA/exec",

  deadline: "2026-12-01T23:59:00-05:00",
  deadlineLabel: "Tuesday, December 1 · 11:59 PM",
  pickupLine: "Pick up at the first general meeting next semester (or earlier).",
  priceDisclaimer: "Prices are subject to change. By placing interest now, you're confirming your order based on the listed price range. Items with minimal orders will be dropped from the group order.",

  // Default size run (applies to any item without its own `sizes`).
  sizes: ["S", "M", "L", "XL"],

  products: [
    { id: "mission-hoodie", name: "PhiDE Mission Hoodie",
      desc: "Heavyweight hoodie. Small ΦΔΕ 1905 on the chest, mission statement on the back.",
      colors: [
        { name: "Grey",  low: 32, high: 39, imgs: ["images/mission-hoodie-grey-1.jpg","images/mission-hoodie-grey-2.jpg"] },
        { name: "Black", low: 32, high: 39, imgs: ["images/mission-hoodie-black-1.jpg","images/mission-hoodie-black-2.jpg"] }
      ] },
    { id: "backbone-hoodie", name: "PhiDE Backbone Hoodie",
      desc: "Skeleton spine graphic on the back with ΦΔΕ down the vertebrae.",
      colors: [
        { name: "Black",  low: 32, high: 39, imgs: ["images/backbone-hoodie-black-1.jpg","images/backbone-hoodie-black-2.jpg"] },
        { name: "Washed", low: 42, high: 52, imgs: ["images/backbone-hoodie-washed-1.jpg","images/backbone-hoodie-washed-2.jpg"] }
      ] },
    { id: "classic-hoodie", name: "PhiDE Classic Hoodie",
      desc: "PHIDE / NY Theta Chapter print on the back, small letters on the chest.",
      colors: [
        { name: "Black", low: 32, high: 39, imgs: ["images/classic-hoodie-black-1.jpg","images/classic-hoodie-black-2.jpg"] },
        { name: "Grey",  low: 32, high: 39, imgs: ["images/classic-hoodie-grey-1.jpg","images/classic-hoodie-grey-2.jpg"] }
      ] },
    { id: "love-top", name: "Women's I ❤ PhiDE Top",
      desc: "Fitted off-shoulder baby tee.",
      colors: [
        { name: "White", low: 17, high: 23, imgs: ["images/love-top-white-1.jpg","images/love-top-white-2.jpg"] },
        { name: "Grey",  low: 17, high: 23, imgs: ["images/love-top-grey-1.jpg","images/love-top-grey-2.jpg"] }
      ] },
    { id: "love-sweatshirt", name: "Women's I ❤ PhiDE Sweatshirt",
      desc: "Cropped crewneck sweatshirt.",
      colors: [
        { name: "Grey", low: 26, high: 32, imgs: ["images/love-sweatshirt-grey-1.jpg","images/love-sweatshirt-grey-2.jpg"] }
      ] },
    { id: "mission-zip", name: "PhiDE Mission Zip-Up",
      desc: "Full-zip hoodie. ΦΔΕ 1905 on the chest, mission statement on the back.",
      colors: [
        { name: "Black",      low: 41, high: 53, imgs: ["images/mission-zip-black-1.jpg","images/mission-zip-black-2.jpg"] },
        { name: "Dark Grey",  low: 41, high: 53, imgs: ["images/mission-zip-darkgrey-1.jpg","images/mission-zip-darkgrey-2.jpg"] },
        { name: "Light Grey", low: 41, high: 53, imgs: ["images/mission-zip-lightgrey-1.jpg","images/mission-zip-lightgrey-2.jpg"] }
      ] },
    { id: "boxy-fleece", name: "PhiDE Washed Boxy Fleece Hoodie",
      desc: "Washed boxy zip hoodie with a star varsity print on the back.",
      colors: [
        { name: "Washed Grey", low: 41, high: 51, imgs: ["images/boxy-fleece-washedgrey-1.jpg","images/boxy-fleece-washedgrey-2.jpg"] }
      ] },
    { id: "balance-denim", name: "PhiDE Balance Denim Jacket",
      desc: "Washed denim jacket with the winged ΦΔΕ caduceus-and-scales crest on the back.",
      colors: [
        { name: "Washed Black", low: 47, high: 55, imgs: ["images/balance-denim-1.jpg","images/balance-denim-2.jpg"] }
      ] },
    { id: "balance-hoodie", name: "PhiDE Balance Washed Hoodie",
      desc: "Washed hoodie with the winged ΦΔΕ caduceus-and-scales crest on the back.",
      colors: [
        { name: "Washed Black", low: 43, high: 53, imgs: ["images/balance-hoodie-1.jpg","images/balance-hoodie-2.jpg"] }
      ] },
    { id: "windbreaker", name: "PhiDE Embroidered Windbreaker",
      desc: "Lightweight hooded windbreaker with ΦΔΕ embroidered on the chest.",
      colors: [
        { name: "Black", low: 47, high: 55, imgs: ["images/windbreaker-black-1.jpg"] }
      ] },
    { id: "classic-qzip", name: "PhiDE Classic Embroidered Q-Zip",
      desc: "Embroidered quarter-zip. PHI DELTA EPSILON · EST. 1904 on the chest.",
      colors: [
        { name: "Black", low: 33, high: 38, imgs: ["images/classic-qzip-black-1.jpg"] },
        { name: "Grey",  low: 33, high: 38, imgs: ["images/classic-qzip-grey-1.jpg"] }
      ] },
    { id: "sweatpants", name: "PhiDE Essential Sweatpants",
      desc: "Open-hem sweatpants with the caduceus crest on the leg.",
      colors: [
        { name: "Grey", low: 27, high: 33, imgs: ["images/sweatpants-grey-1.jpg","images/sweatpants-grey-2.jpg"] }
      ] }
  ]
};
