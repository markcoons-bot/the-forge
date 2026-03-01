export interface Product {
  slug: string;
  name: string;
  makerSlug: string;
  price: number;
  currency: string;
  status: "Ready to Ship" | "Made to Order";
  leadTime?: string;
  curatorNote: string;
  materials: string;
  dimensions: string;
  care: string;
  bgGradient: string;
  image: string;
  alternateImages?: string[];
}

export const products: Product[] = [
  // Florian Gadsby — Clay
  {
    slug: "large-bottle-vase-iron-oxide",
    name: "Large Bottle Vase — Iron Oxide",
    makerSlug: "florian-gadsby",
    price: 1600,
    currency: "USD",
    status: "Made to Order",
    leadTime: "8–12 weeks",
    curatorNote: "This is the form Florian has been refining for the better part of a decade — a tall, narrow-necked bottle thrown in a single pull, its surface coated in iron oxide that blooms unpredictably in the gas reduction kiln. The feldspathic crackle glaze pools at the shoulder and breaks over the body in a web of hairline fractures. No two firings produce the same result. This piece is the kiln's decision as much as the potter's.",
    materials: "Reduction-fired stoneware, feldspathic glaze, high-iron clay body",
    dimensions: "16cm diameter × 38cm tall",
    care: "Dishwasher safe. Microwave safe. Will develop character over years of use.",
    bgGradient: "linear-gradient(145deg, #6e5c4c 0%, #4a3c30 40%, #3a2e24 100%)",
    image: "/images/FGproductvase.webp",
    alternateImages: ["/images/FGproduct2.webp"],
  },
  {
    slug: "crackle-glaze-jar",
    name: "Crackle Glaze Jar",
    makerSlug: "florian-gadsby",
    price: 250,
    currency: "USD",
    status: "Made to Order",
    leadTime: "8–12 weeks",
    curatorNote: "A generous lidded jar in Florian's signature feldspathic crackle — milky white fractured by a web of fine lines that will darken with use as tea, oil, or just the passing of time stains the crazing. The form is quiet and utilitarian. The surface is anything but.",
    materials: "Reduction-fired stoneware, feldspathic crackle glaze, high-iron clay body",
    dimensions: "14cm diameter × 16cm tall",
    care: "Dishwasher safe. Microwave safe. The crackle pattern will evolve with use — this is intentional and beautiful.",
    bgGradient: "linear-gradient(145deg, #d4ccc0 0%, #b8a898 40%, #a09080 100%)",
    image: "/images/FGobject1webp.webp",
  },
  {
    slug: "feldspathic-white-yunomi",
    name: "Feldspathic White Yunomi",
    makerSlug: "florian-gadsby",
    price: 200,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "A tea cup in the Japanese yunomi tradition — handleless, meant to be cradled in both hands. The feldspathic white glaze is soft and tactile, with a subtle crackle that will absorb tea over months and years, developing a patina unique to the way you drink. This is an object that ages with you.",
    materials: "Reduction-fired stoneware, feldspathic crackle glaze, high-iron clay body",
    dimensions: "8cm diameter × 9cm tall, ~200ml",
    care: "Dishwasher safe. Microwave safe. Will develop character over years of use.",
    bgGradient: "linear-gradient(145deg, #c8bfb0 0%, #a89888 40%, #887868 100%)",
    image: "/images/FGobject2.webp",
  },

  // Hana Miura — Glass
  {
    slug: "sea-glass-tumbler",
    name: "Sea Glass Tumbler",
    makerSlug: "hana-miura",
    price: 120,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "Blown in a single breath, this tumbler holds the pale green of river water. The base is deliberately thick and heavy — it grounds the glass on a table and catches light in a way that makes it glow. Hana rejected over thirty before keeping these six.",
    materials: "Soda-lime glass, iron oxide inclusion for color",
    dimensions: "8cm diameter × 10cm tall, ~300ml",
    care: "Hand wash only. Do not microwave. Each tumbler is slightly different in weight and color — this is inherent to hand-blown glass.",
    bgGradient: "linear-gradient(145deg, #c0d4d8 0%, #8ab0b8 40%, #6a9098 100%)",
    image: "/images/HMproduct1.webp",
  },
  {
    slug: "cobalt-sake-set",
    name: "Cobalt Sake Set",
    makerSlug: "hana-miura",
    price: 340,
    currency: "USD",
    status: "Made to Order",
    leadTime: "10–12 weeks",
    curatorNote: "A tokkuri and two ochoko cups in layered cobalt blue that shifts from midnight to ice depending on the light. The blue comes from cobalt oxide, a material that has colored glass since the Bronze Age. This is an ancient color made new.",
    materials: "Soda-lime glass, cobalt oxide, hand-polished pontil mark",
    dimensions: "Tokkuri: 8cm × 14cm, 260ml. Cups: 5cm × 4cm, 45ml each",
    care: "Hand wash only. Store upright. The sake set is lead-free and food safe.",
    bgGradient: "linear-gradient(145deg, #2a3a50 0%, #1a2a40 40%, #0e1a28 100%)",
    image: "/images/HMproduct%202.webp",
  },
  {
    slug: "light-vessel",
    name: "Light Vessel",
    makerSlug: "hana-miura",
    price: 480,
    currency: "USD",
    status: "Made to Order",
    leadTime: "12–14 weeks",
    curatorNote: "A sculptural piece designed to hold light, not flowers. Place it on a windowsill and watch it change through the day — morning sun reveals the manganese violet interior, afternoon light turns it amber, and evening makes it glow like an ember. Hana considers this her most personal form.",
    materials: "Layered soda-lime glass, manganese and iron oxide inclusions",
    dimensions: "15cm diameter × 20cm tall",
    care: "Display piece. Clean with a soft dry cloth. Avoid direct sustained sunlight which may cause uneven heating.",
    bgGradient: "linear-gradient(145deg, #4a3850 0%, #3a2840 40%, #2a1a30 100%)",
    image: "/images/HMobject.webp",
  },
  {
    slug: "studio-vessels-trio",
    name: "Studio Vessels (Set of 3)",
    makerSlug: "hana-miura",
    price: 580,
    currency: "USD",
    status: "Made to Order",
    leadTime: "12–14 weeks",
    curatorNote: "Three vessels from a single session — each blown within minutes of the others, sharing the same gather, the same furnace temperature, the same afternoon light. Yet no two are alike. The variations in wall thickness, color density, and form are the fingerprint of the process itself. Hana considers these trios her most honest work — they show what the glass wanted to be, not what she planned.",
    materials: "Soda-lime glass, mixed metallic oxide inclusions",
    dimensions: "Varies — tallest approximately 18cm, widest approximately 12cm",
    care: "Hand wash only. Display together or separately. Each vessel is unique and may not sit perfectly level — this is intentional.",
    bgGradient: "linear-gradient(145deg, #a0b0b8 0%, #708898 40%, #506878 100%)",
    image: "/images/HMobjects.jpg",
  },

  // Elias Brandt — Wood
  {
    slug: "walnut-cutting-board",
    name: "Black Walnut Cutting Board",
    makerSlug: "elias-brandt",
    price: 185,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "Cut from a single plank of salvaged black walnut that spent forty years as a barn beam in western North Carolina. The sapwood edge — the lighter strip along one side — is left intentional. It's the tree's growth rings made visible, a calendar written in wood.",
    materials: "Salvaged American black walnut, food-grade mineral oil and beeswax finish",
    dimensions: "45cm × 28cm × 3cm",
    care: "Hand wash with mild soap. Oil monthly with food-grade mineral oil. Will darken beautifully with age. Do not submerge or dishwash.",
    bgGradient: "linear-gradient(145deg, #5c4830 0%, #3e3020 40%, #2a2018 100%)",
    image: "https://images.unsplash.com/photo-1605433246452-258b9e8a2e05?w=800&q=80",
  },
  {
    slug: "live-edge-side-table",
    name: "Live Edge Side Table",
    makerSlug: "elias-brandt",
    price: 1400,
    currency: "USD",
    status: "Made to Order",
    leadTime: "4–6 months",
    curatorNote: "A slab of white oak with one live edge preserved — the natural contour of the tree, bark removed but shape intact. The base is a single tapered leg joined with a wedged through-tenon, visible from the top like a small wooden island in the grain. No screws. No glue. Just wood holding wood.",
    materials: "Salvaged white oak, hand-rubbed tung oil finish, wedged through-tenon joinery",
    dimensions: "55cm × 45cm × 52cm tall",
    care: "Dust with a soft cloth. Re-oil annually with tung oil. Keep away from heat sources and direct sunlight to prevent checking.",
    bgGradient: "linear-gradient(145deg, #6a5540 0%, #4a3a28 40%, #2e2218 100%)",
    image: "https://images.unsplash.com/photo-1635983358099-5765e4671435?w=800&q=80",
  },

  // Reva Solis — Metal
  {
    slug: "forged-steak-knives",
    name: "Forged Steak Knives (Set of 4)",
    makerSlug: "reva-solis",
    price: 520,
    currency: "USD",
    status: "Made to Order",
    leadTime: "8–10 weeks",
    curatorNote: "Each knife is forged from a single billet of high-carbon steel — no welding, no assembly. The handles are shaped from reclaimed railroad spikes, their original stampings still faintly visible beneath the forge scale. These knives have two histories: the rail they came from, and the table they go to.",
    materials: "High-carbon steel blade, reclaimed railroad spike handle, beeswax finish",
    dimensions: "22cm total length, 10cm blade",
    care: "Hand wash and dry immediately. Oil the blade monthly with food-grade mineral oil. The handle patina will deepen with use. Will take a razor edge with a whetstone.",
    bgGradient: "linear-gradient(145deg, #4a3828 0%, #6e4e38 40%, #2e2018 100%)",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "bronze-door-pull",
    name: "Bronze Door Pull",
    makerSlug: "reva-solis",
    price: 280,
    currency: "USD",
    status: "Made to Order",
    leadTime: "6–8 weeks",
    curatorNote: "Shaped like a river stone, warm in the hand, heavy with purpose. Reva heats the bronze until it glows and then shapes it under the hammer, working the metal until it feels organic — like something you might pick up on a riverbank. The mounting hardware is hidden. The pull appears to float on the door.",
    materials: "Cast bronze, hand-patinated, concealed stainless steel mounting hardware",
    dimensions: "14cm × 6cm × 4cm deep",
    care: "The patina will evolve with touch — high-contact areas will brighten to gold while recesses remain dark. This is the piece aging beautifully. Clean only with a soft dry cloth.",
    bgGradient: "linear-gradient(145deg, #8a6a48 0%, #6e5038 40%, #4a3428 100%)",
    image: "https://images.unsplash.com/photo-1530124566582-a45a7c79fd85?w=800&q=80",
  },
  {
    slug: "iron-candelabra",
    name: "Desert Brush Candelabra",
    makerSlug: "reva-solis",
    price: 680,
    currency: "USD",
    status: "Made to Order",
    leadTime: "10–12 weeks",
    curatorNote: "Inspired by the skeletal remains of desert brush after a wildfire — branches that have been stripped to their essential form. Each arm is forged separately and then joined by forge welding at the central trunk. Holds five tapers. Throws shadows on the wall like a small, quiet forest.",
    materials: "Wrought iron, coal-forge fire, beeswax and linseed oil finish",
    dimensions: "40cm wide × 35cm tall",
    care: "Wipe with a dry cloth. Re-wax annually with beeswax paste. Keep away from sustained moisture. Will develop a warm brown patina over decades.",
    bgGradient: "linear-gradient(145deg, #3a2a1e 0%, #5c4030 40%, #2a1e16 100%)",
    image: "https://images.unsplash.com/photo-1602178506166-9a3d87917922?w=800&q=80",
  },

  // Maren Loft — Fiber
  {
    slug: "glacier-throw-blanket",
    name: "Glacier Contour Throw",
    makerSlug: "maren-loft",
    price: 420,
    currency: "USD",
    status: "Made to Order",
    leadTime: "6–8 weeks",
    curatorNote: "The pattern on this blanket is not decorative — it's derived from an Icelandic geological survey of Vatnajökull glacier. The contour lines of the ice sheet, translated into warp and weft. Maren spun the wool herself from Icelandic sheep raised less than fifty kilometers from her studio.",
    materials: "Hand-spun Icelandic wool (þel outer coat and tog inner coat), undyed natural grey and white",
    dimensions: "140cm × 200cm",
    care: "Spot clean or hand wash in cold water with wool detergent. Lay flat to dry. Will felt slightly with washing, becoming denser and warmer. This is by design.",
    bgGradient: "linear-gradient(145deg, #a09890 0%, #787068 40%, #5a5248 100%)",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800&q=80",
  },
  {
    slug: "crowberry-scarf",
    name: "Crowberry Dyed Scarf",
    makerSlug: "maren-loft",
    price: 195,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "Dyed with crowberries foraged from the highlands east of Reykjavík, this scarf is a violet so deep it looks black in low light and reveals its true color only in sun. The dye lot is singular — when these berries are gone, this exact color will not exist again.",
    materials: "Hand-spun Icelandic tog wool, crowberry dye, alum mordant",
    dimensions: "30cm × 180cm",
    care: "Hand wash in cold water. The color will soften very slightly over years, shifting from deep violet toward a warm plum. This is the nature of botanical dye — it is alive.",
    bgGradient: "linear-gradient(145deg, #3a2840 0%, #2a1a30 40%, #1e1420 100%)",
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=80",
  },
  {
    slug: "birch-table-runner",
    name: "Birch Leaf Table Runner",
    makerSlug: "maren-loft",
    price: 310,
    currency: "USD",
    status: "Made to Order",
    leadTime: "4–6 weeks",
    curatorNote: "The warm yellow of this runner comes from birch leaves collected in September, when the Icelandic birch forests turn gold for two brief weeks before the wind takes everything. Maren dyes in small batches, and the color varies with the year — wetter autumns produce deeper gold, dry ones a softer honey.",
    materials: "Hand-spun Icelandic wool, birch leaf dye, alum mordant",
    dimensions: "35cm × 150cm",
    care: "Spot clean preferred. If washing, use cold water and wool-safe detergent. Roll in a towel to remove excess water, lay flat to dry.",
    bgGradient: "linear-gradient(145deg, #b8a060 0%, #8a7848 40%, #5c5030 100%)",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByMaker(makerSlug: string): Product[] {
  return products.filter((p) => p.makerSlug === makerSlug);
}
