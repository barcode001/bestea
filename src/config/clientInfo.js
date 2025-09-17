// src/config/clientInfo.js
const clientInfo = {
  businessName: "Bestea",
  tagline: "Bubble Tea • Coffee • Snacks & Desserts",
  ownerName: "Bestea Team",

  location: {
    city: "Jacinto City",
    state: "Texas"
  },

  contact: {
    phone: "(832) 703-1210",
    email: "info@bestea.cafe", // confirm with owner
    address: "10705 Market St, Ste B, Houston, TX 77029"
  },

  social: {
    instagram: "https://www.instagram.com/besteatx/",
    facebook: "https://www.facebook.com/61573248324362",
    tiktok: ""
  },

  hours: {
    sun: "11:00 AM – 8:30 PM",
    mon: "10:00 AM – 8:30 PM",
    tue: "10:00 AM – 8:30 PM",
    wed: "10:00 AM – 8:30 PM",
    thu: "10:00 AM – 8:30 PM",
    fri: "10:00 AM – 8:30 PM",
    sat: "10:00 AM – 8:30 PM"
  },

  specials: {
    window: "11:00 AM – 3:00 PM",
    items: [
      { day: "Monday", text: "1 medium drink + 1 sandwich", price: "$11" },
      { day: "Tuesday", text: "1 medium drink + 1 pastry", price: "$7" },
      { day: "Wednesday", text: "1 medium drink + spring rolls", price: "$10" },
      { day: "Thursday", text: "Upsize on drinks", price: "Free" }
    ]
  },

  categories: [
    { key: "milk-tea", label: "Milk Tea" },
    { key: "fruit-tea", label: "Fruit Tea" },
    { key: "smoothies", label: "Smoothies" },
    { key: "matcha", label: "Matcha" },
    { key: "coffee", label: "Coffee" },
    { key: "snacks", label: "Snacks" }
  ],

  gallery: [
    // add image paths once you have them, e.g.
    // "/images/gallery/1.webp",
    // "/images/gallery/2.webp"
  ],

  map: {
    embed:
      "https://www.google.com/maps?q=10705+Market+St+Ste+B+Houston+TX+77029&output=embed"
  },

  navLinks: [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/contact", label: "Contact" },
    { to: "/photo-gallery", label: "Photos" }
  ],

  seo: {
    title: "Bestea | Bubble Tea, Coffee & Snacks in Jacinto City, TX",
    description:
      "Fresh bubble tea, coffee, smoothies, bánh mì, and snacks. Lunch specials 11am–3pm. Visit us in Jacinto City, TX.",
    ogImage: "/images/og/hero-1200x630.jpg"
  },

  googleAnalyticsID: "" // add GA4 later
};

export default clientInfo;