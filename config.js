// ============================================================
//  EDIT THIS FILE to change prices, items, Zelle info and dates.
//  You never need to touch index.html.
// ============================================================
window.SITE = {
  chapterName: "NYU Chapter",
  instagram: "nyuphide",
  sponsor: "",                       // e.g. "VidaNovaCrafts" — leave "" to hide the line

  // Paste your Google Apps Script web app URL here (README step 2).
  // Until you do, the site works as a demo and orders are NOT saved.
  orderScriptUrl: "https://script.google.com/macros/s/AKfycbxY6RaN8g_fHQ2947kb3etWBUDEihS13f8DZKp9nUzKOFxATRJGFw6KPhV3RczxEA5mPA/exec",

  // Who people pay at checkout
  zelleName: "Ammar",                 // name that shows up in Zelle
  zelleContact: "(518) 982-9855",

  // Group order days (YYYY-MM-DD). The site counts down to the next one.
  orderDays: ["2026-11-17"],
  // Months shown on the calendar (YYYY-MM)
  calendarMonths: ["2026-11", "2026-12", "2027-01", "2027-02"],

  // Items for sale. price is in dollars. Delete or add items freely.
  // Keep ids and prices the SAME in apps-script/Code.gs (PRICES).
  products: [
    { id: "windbreaker", name: "ΦΔΕ Windbreaker", price: 0, img: "images/windbreaker.jpg",
      desc: "Black half-zip pullover with hood, embroidered letters.", sizes: ["XS","S","M","L","XL","XXL"] },
    { id: "hoodie", name: "ΦΔΕ Hoodie", price: 0, img: "images/hoodie.jpg",
      desc: "Black hoodie with the NYU Chapter crest on the upper back.", sizes: ["XS","S","M","L","XL","XXL"] },
    { id: "polo", name: "Alumna Polo", price: 0, img: "images/polo.jpg",
      desc: "Black polo with the Phi Delta Epsilon Alumna crest.", sizes: ["XS","S","M","L","XL","XXL"] },
    { id: "shorts", name: "ΦΔΕ Sweat Shorts", price: 0, img: "images/shorts.jpg",
      desc: "Heather grey fleece shorts with ΦΔΕ on the leg.", sizes: ["XS","S","M","L","XL","XXL"] },
    { id: "socks", name: "ΦΔΕ Crew Socks", price: 0, img: "images/socks.jpg",
      desc: "White ribbed crew socks with purple letters.", sizes: ["One size"] }
  ]
};
