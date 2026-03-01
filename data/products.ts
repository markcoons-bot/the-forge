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
    slug: "bowtie-cutting-board",
    name: "Bowtie Joint Cutting Board",
    makerSlug: "elias-brandt",
    price: 245,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "This board tells you everything about how Elias works. A natural crack ran through the oak — most woodworkers would have discarded it. Brandt stabilized it with a walnut butterfly key inlaid across the fracture, turning the defect into the most beautiful part of the piece. The handle is carved from the same plank, the grain continuous from board to grip. It is a tool that happens to be art.",
    materials: "Salvaged white oak with walnut butterfly key, hand-rubbed tung oil finish",
    dimensions: "52cm × 30cm × 3cm (including handle)",
    care: "Hand wash with mild soap. Oil monthly with food-grade mineral oil or butcher block conditioner. Will darken with use and age. Do not submerge or dishwash.",
    bgGradient: "linear-gradient(145deg, #b8a080 0%, #8a7458 40%, #5c4830 100%)",
    image: "/images/Woodproduct.webp",
  },
  {
    slug: "barn-oak-serving-board",
    name: "Barn Oak Serving Board",
    makerSlug: "elias-brandt",
    price: 195,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "Cut from a beam that held up a tobacco barn in Madison County for the better part of a century. The worm channels and nail holes are left intact — they are the board's autobiography. Elias sanded the surface smooth enough to serve bread on but left the edges raw, the way the beam was hewn with a broadaxe a hundred years ago. You can feel the history in the texture.",
    materials: "Reclaimed barn oak, food-grade mineral oil and beeswax finish",
    dimensions: "48cm × 25cm × 2.5cm (including handle)",
    care: "Hand wash with warm water and mild soap. Re-oil every few weeks with mineral oil. The patina will deepen with every meal. Do not submerge.",
    bgGradient: "linear-gradient(145deg, #6e5840 0%, #4a3828 40%, #2e2018 100%)",
    image: "/images/woodproduct2.webp",
  },
  {
    slug: "hand-carved-spoon-set",
    name: "Hand-Carved Spoon Set (3)",
    makerSlug: "elias-brandt",
    price: 120,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "Three spoons carved from a single branch of salvaged cherry, each shaped with a hook knife and finished with sixty coats of walnut oil over two weeks. The bowls are thin enough to flex under your thumb — Elias tests every spoon by pressing the bowl until it gives, then shaving a little more. They are tools built for a lifetime of daily meals.",
    materials: "Salvaged cherry wood, hand-rubbed walnut oil finish",
    dimensions: "Large: 28cm, Medium: 24cm, Small: 20cm",
    care: "Hand wash and dry immediately. Oil occasionally with walnut or mineral oil. The wood will lighten with washing and darken with oiling — both are beautiful.",
    bgGradient: "linear-gradient(145deg, #c8a878 0%, #a08458 40%, #786040 100%)",
    image: "/images/woodproduct3.webp",
  },
  {
    slug: "live-edge-carving-board",
    name: "Live Edge Carving Board",
    makerSlug: "elias-brandt",
    price: 285,
    currency: "USD",
    status: "Made to Order",
    leadTime: "3–4 weeks",
    curatorNote: "A single slab of olive ash with one live edge preserved — the natural contour of the tree, bark removed but shape intact. The juice groove is routed by hand following the curve of the grain, not the edge of the board. A carved well at one end catches drippings. This is a board designed for the ritual of carving a roast at the table, where the object itself becomes part of the meal.",
    materials: "Salvaged olive ash, hand-rubbed tung and linseed oil blend",
    dimensions: "50cm × 35cm × 3.5cm",
    care: "Hand wash with mild soap. Oil monthly. The live edge will soften with handling over years. Keep away from sustained heat. Do not dishwash.",
    bgGradient: "linear-gradient(145deg, #d4b888 0%, #a89068 40%, #7a6848 100%)",
    image: "/images/woodproduct4.webp",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByMaker(makerSlug: string): Product[] {
  return products.filter((p) => p.makerSlug === makerSlug);
}
