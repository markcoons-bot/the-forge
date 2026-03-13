/**
 * One-time migration script: imports existing maker and product data into Sanity.
 *
 * Usage:
 *   npx tsx sanity/migrate.ts
 *
 * Requires:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID  — in .env.local
 *   NEXT_PUBLIC_SANITY_DATASET     — in .env.local (defaults to "production")
 *   SANITY_WRITE_TOKEN             — in .env.local (API token with editor/write access)
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing environment variables. Ensure NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN are set in .env.local"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Source data (copied from local TS files to avoid import/transpile issues)
// ---------------------------------------------------------------------------

interface SourceMaker {
  slug: string;
  name: string;
  medium: string;
  location: string;
  quote: string;
  bio?: string;
  homepage?: boolean;
  story: string[];
}

interface SourceProduct {
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
  process_note?: string;
}

const makers: SourceMaker[] = [
  {
    slug: "nathan-coons",
    name: "Nathan Coons",
    medium: "Clay",
    location: "Phoenix, Arizona",
    quote: "Every piece begins as nothing. That is the part that never gets old.",
    bio: "Self-taught ceramicist working in wheel-thrown stoneware. Based in Phoenix, Arizona. Known for two signature glazes: a deep forest teal and a brushed iron oxide white.",
    homepage: true,
    story: [
      "Nathan Coons works out of a converted brick room in Phoenix, where the heat outside makes the studio feel like its own kind of kiln. He started at seventeen — not because someone told him he was gifted, but because the wheel required his complete attention. Six years later, he has not left.",
      "He is self-taught. No apprenticeship, no lineage — only hours. Thousands of them. He has absorbed the Japanese conviction that the foot of a bowl is as considered as its lip, that restraint is not absence but precision. Two glazes define his work: a deep forest teal, quiet and resolved, and a white ground shattered with iron oxide — gestural, almost violent, every piece unrepeatable. The structure he controls. The glaze he releases.",
      "He throws for hours and keeps only what meets a standard he has not yet fully named. The rest goes back. He is twenty-four, and he already knows what takes most makers decades to learn — that the perfect vessel is not a destination. It is the reason you come back tomorrow.",
    ],
  },
  {
    slug: "florian-gadsby",
    name: "Florian Gadsby",
    medium: "Clay",
    location: "London, England",
    quote: "The kiln decides. I just prepare.",
    bio: "British potter working in reduction-fired stoneware and porcelain. Apprenticed with Lisa Hammond MBE, studied in Mashiko, Japan. Author of By My Hands.",
    homepage: true,
    story: [
      "Most mornings he takes the Underground to a studio where no one is waiting. He fills a bucket. He sits down at the wheel. He has been doing this since he was nineteen and he has not yet made the piece he is trying to make.",
      "He trained under Lisa Hammond, then left for Mashiko, Japan — six months with Ken Matsuzaki, a man whose family has thrown pots for generations. The crackle glazes came from there. Thermal shock. Controlled violence. The glaze shattering into hairline fractures the width of a human hair. It is technically a defect. He has spent years learning to love what he cannot control.",
      "He fires to 1,295°C. Waits two days to open the kiln. Three million people follow his work. When a collection drops it sells in minutes. In the studio, none of that exists. There is only the clay, and whether today is the day he finally gets it right.",
    ],
  },
  {
    slug: "hana-miura",
    name: "Hana Miura",
    medium: "Glass",
    location: "Toyama, Japan",
    quote: "Glass has no memory. You must give it one.",
    bio: "Japanese glass artist working in free-blown soda-lime glass. Trained at Toyama Institute of Glass Art and in Murano, Italy. Known for layered metallic oxide color work.",
    homepage: true,
    story: [
      "She arrives before the sun does. The furnace is already at 1,100 degrees — it has not been turned off in eleven years. She gathers the glass on the end of a blowpipe and begins to breathe. Everything that happens next takes less than a minute. Everything she has learned takes longer than that to explain.",
      "She trained in Toyama, then spent four years on Murano with maestros whose families had blown glass since the fifteenth century. They taught her that glass is not a material. It is a window — between liquid and solid, between possibility and permanence. Her job is to work inside that window before it closes. She has never once felt she was fast enough.",
      "The colors come from metallic oxides layered inside the glass itself. Cobalt for depth. Manganese for shadow. Iron for the pale green of river light. She makes perhaps two hundred pieces a year. Most of them she breaks. She keeps the broken ones on a shelf by the door. Not as trophies. As proof that she is still reaching.",
    ],
  },
  {
    slug: "elias-brandt",
    name: "Elias Brandt",
    medium: "Wood",
    location: "Asheville, North Carolina",
    quote: "The tree was alive longer than I have been. I try to remember that.",
    bio: "American woodworker specializing in salvaged hardwoods. Apprenticed with Mira Nakamura in the Nakashima tradition. Known for butterfly key joinery and hand-rubbed oil finishes.",
    homepage: false,
    story: [
      "He builds from trees that have already fallen. He does not harvest living wood. He walks salvage yards and storm sites, looking for timber that carries the marks of its life — nail holes, weather checks, the grey patina of decades spent holding up a roof. He can tell you the species and approximate age of a board by looking at its end grain. He has never been wrong.",
      "He apprenticed under Mira Nakamura in the Nakashima tradition. Three years learning that a knot is not a flaw. A split is not a failure. The wood is telling you what it wants to be. Your job is to listen. He read boards the way a sailor reads water — the direction of the grain, the tension in a curve, the places where the tree fought against wind and won.",
      "Where most woodworkers discard a cracked board, he stabilizes it with a walnut bowtie inlaid across the fracture. The defect becomes the most beautiful part of the piece. He finishes with hand-rubbed oil, dozens of coats over weeks, until the surface feels like skin. He makes forty to fifty objects a year. Each one takes weeks. He is fine with that.",
    ],
  },
];

const products: SourceProduct[] = [
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
    process_note: "Built over several sessions on the wheel, allowed to dry slowly, then fired twice. The iron oxide wash is applied by hand before the final firing. The surface variation you see is the kiln's contribution.",
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
    process_note: "Wheel-thrown and fired to cone 10. The crackle glaze is a centuries-old technique — the crazing develops as the glaze cools faster than the clay body beneath it. Every crack is a record of that moment.",
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
    process_note: "Thrown on the wheel and trimmed by hand. Fired twice in a reduction kiln. The feldspathic glaze is mixed in-studio from raw materials — no two pieces fire identically.",
  },
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
  },
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
  },
  {
    slug: "forest-bowl",
    name: "Forest Bowl",
    makerSlug: "nathan-coons",
    price: 85,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "A generous bowl in Nathan's signature forest teal — a glaze he has spent years refining until it holds the quiet of deep water. The form is simple, the foot considered, the weight deliberate. This is a bowl meant to be held in both hands.",
    materials: "Wheel-thrown stoneware, forest teal glaze",
    dimensions: "15cm diameter × 8cm tall",
    care: "Dishwasher safe. Microwave safe. The glaze will deepen slightly with use.",
  },
  {
    slug: "ink-brush-mug",
    name: "Ink Brush Mug",
    makerSlug: "nathan-coons",
    price: 65,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "White ground shattered with brushed iron oxide — gestural, almost violent, every mug different from the last. Nathan applies the oxide with a loaded brush in a single pass. He does not correct. The marks are the piece.",
    materials: "Wheel-thrown stoneware, white glaze with brushed iron oxide",
    dimensions: "9cm diameter × 10cm tall, ~350ml",
    care: "Dishwasher safe. Microwave safe. The iron oxide brushwork will not fade.",
  },
  {
    slug: "teal-studio-cup",
    name: "Teal Studio Cup",
    makerSlug: "nathan-coons",
    price: 75,
    currency: "USD",
    status: "Ready to Ship",
    curatorNote: "A handleless cup in the deep forest teal that has become Nathan's signature. Thrown thin, trimmed clean, meant to be cradled. The glaze pools at the foot and breaks at the lip, revealing the warm stoneware body beneath.",
    materials: "Wheel-thrown stoneware, forest teal glaze",
    dimensions: "8cm diameter × 9cm tall, ~250ml",
    care: "Dishwasher safe. Microwave safe. Will develop character with daily use.",
  },
];

// ---------------------------------------------------------------------------
// Migration
// ---------------------------------------------------------------------------

function statusToSanity(status: string): string {
  return status === "Made to Order" ? "made_to_order" : "ready_to_ship";
}

function mediumToSanity(medium: string): string {
  return medium.toLowerCase();
}

async function migrate() {
  console.log(`Migrating to project "${projectId}", dataset "${dataset}"...\n`);

  // --- Makers ---
  const makerIdMap: Record<string, string> = {};

  for (const maker of makers) {
    const _id = `maker-${maker.slug}`;
    try {
      await client.createOrReplace({
        _id,
        _type: "maker",
        name: maker.name,
        slug: { _type: "slug", current: maker.slug },
        medium: mediumToSanity(maker.medium),
        location: maker.location,
        quote: maker.quote,
        bio: maker.story.join("\n\n"),
        featured: maker.homepage ?? false,
      });
      makerIdMap[maker.slug] = _id;
      console.log(`  ✓ Maker: ${maker.name}`);
    } catch (err: any) {
      console.error(`  ✗ Maker: ${maker.name} — ${err.message}`);
    }
  }

  console.log("");

  // --- Products ---
  for (const product of products) {
    const _id = `product-${product.slug}`;
    const makerId = makerIdMap[product.makerSlug];

    if (!makerId) {
      console.error(`  ✗ Product: ${product.name} — maker "${product.makerSlug}" not found`);
      continue;
    }

    const makerMedium = makers.find((m) => m.slug === product.makerSlug)?.medium;

    const doc: any = {
      _id,
      _type: "product",
      title: product.name,
      slug: { _type: "slug", current: product.slug },
      maker: { _type: "reference", _ref: makerId },
      price: product.price,
      status: statusToSanity(product.status),
      medium: makerMedium ? mediumToSanity(makerMedium) : "clay",
      curator_note: product.curatorNote,
      materials: product.materials,
      dimensions: product.dimensions,
      care: product.care,
      featured: false,
    };

    if (product.process_note) doc.process_note = product.process_note;
    if (product.leadTime) doc.lead_time = product.leadTime;

    try {
      await client.createOrReplace(doc as any);
      console.log(`  ✓ Product: ${product.name}`);
    } catch (err: any) {
      console.error(`  ✗ Product: ${product.name} — ${err.message}`);
    }
  }

  console.log("\nMigration complete.");
}

migrate();
