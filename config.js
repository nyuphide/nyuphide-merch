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
  priceDisclaimer: "Prices are estimates and may change. The more people order, the lower they go — but some may not come down.",

  sizes: ["XS", "S", "M", "L", "XL", "XXL"],

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
        { name: "Dark Grey",  low: 41, high: 53, imgs: ["images/mission-zip-darkgrey-1.jpg","images/mission-zip-darkgrey-2.jpg"] },
        { name: "Light Grey", low: 41, high: 53, imgs: ["images/mission-zip-lightgrey-1.jpg","images/mission-zip-lightgrey-2.jpg"] }
      ] },
    { id: "boxy-fleece", name: "PhiDE Washed Boxy Fleece Hoodie",
      desc: "Washed boxy zip hoodie with a star varsity print on the back.",
      colors: [
        { name: "Washed Grey", low: 41, high: 51, imgs: ["images/boxy-fleece-washedgrey-1.jpg","images/boxy-fleece-washedgrey-2.jpg"] }
      ] },
    { id: "sweatpants", name: "PhiDE Essential Sweatpants",
      desc: "Open-hem sweatpants with the caduceus crest on the leg.",
      colors: [
        { name: "Grey", low: 27, high: 33, imgs: ["images/sweatpants-grey-1.jpg","images/sweatpants-grey-2.jpg"] }
      ] }
  ]
};
