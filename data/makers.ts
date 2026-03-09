export interface Maker {
  slug: string;
  name: string;
  medium: "Clay" | "Wood" | "Metal" | "Glass" | "Leather" | "Stone" | "Fiber";
  location: string;
  quote: string;
  story: string[];
  pullQuote: string;
  method: string[];
  materials: string;
  materialsImage?: string;
  craft?: string;
  storyLayout?: "editorial";
  homepage?: boolean;
  accentColor: string;
  portraitGradient: string;
  portraitImage: string;
  profileHeroImage?: string;
  storyImages: string[];
  storyImagePositions?: number[];
  storyImageCaptions?: string[];
  materialsCaption?: string;
  openingStatement?: string;
  bio?: string;
  profileIntro?: string;
}

export const makers: Maker[] = [
  {
    slug: "florian-gadsby",
    name: "Florian Gadsby",
    medium: "Clay",
    location: "London, England",
    homepage: true,
    quote: "The kiln decides. I just prepare.",
    openingStatement: "He has been doing this since he was nineteen. The kiln has never once done what he expected. He has never once stopped.",
    story: [
      "Most mornings he takes the Underground to a studio where no one is waiting. He fills a bucket. He sits down at the wheel. He has been doing this since he was nineteen and he has not yet made the piece he is trying to make.",
      "He trained under Lisa Hammond, then left for Mashiko, Japan \u2014 six months with Ken Matsuzaki, a man whose family has thrown pots for generations. The crackle glazes came from there. Thermal shock. Controlled violence. The glaze shattering into hairline fractures the width of a human hair. It is technically a defect. He has spent years learning to love what he cannot control.",
      "He fires to 1,295\u00B0C. Waits two days to open the kiln. Three million people follow his work. When a collection drops it sells in minutes. In the studio, none of that exists. There is only the clay, and whether today is the day he finally gets it right."
    ],
    pullQuote: "You cannot rush a kiln. You cannot argue with thermal shock. The clay remembers everything you did to it.",
    method: [
      "Wheel-thrown stoneware and porcelain",
      "Gas reduction firing to cone 10 (1,295°C)",
      "Feldspathic crackle glazes, hand-mixed",
      "High-iron stoneware clay body",
      "Each piece trimmed, glazed, and fired by hand",
      "2–3 month making cycles"
    ],
    materials: "His clay bodies are high-iron stoneware, dense and warm-toned, sourced from suppliers he has used for years. The glazes are his own formulations — feldspathic bases with additions of wood ash, silica, and trace minerals that shift in the kiln's reduction atmosphere. He mixes them in large batches, tests them obsessively, and still gets surprised by what the fire decides to do.",
    materialsImage: "/images/FGprocess4.webp",
    craft: "Gadsby works in reduction-fired stoneware, throwing each piece on the wheel before firing in a gas kiln to 1,295°C — cone 10 in the language of ceramics. His feldspathic crackle glazes are hand-mixed from feldspar, wood ash, silica, and trace minerals, formulations he has developed and refined over years. The clay bodies are high-iron stoneware, dense and warm-toned. Each piece is trimmed, glazed, and fired by hand over making cycles that stretch two to three months.",
    accentColor: "#b8a490",
    portraitGradient: "linear-gradient(145deg, #3d3229 0%, #5c4a3a 40%, #2a2420 100%)",
    portraitImage: "/images/FGHero.webp",
    profileHeroImage: "/images/FGhands.webp",
    storyLayout: "editorial",
    storyImages: [
      "/images/FGextra.webp",
      "/images/FGProcess2.webp",
    ],
    storyImagePositions: [1, 2],
    storyImageCaptions: [
      "Before the glaze, before the kiln, before the fire decides — there is only the maker and the morning.",
      "You cannot rush a kiln. You cannot argue with thermal shock. The clay remembers everything you did to it.",
    ],
    materialsCaption: "In the hands of a master, these are not tools. They are the last point of contact between intention and the irreversible.",
    bio: "British potter working in reduction-fired stoneware and porcelain. Apprenticed with Lisa Hammond MBE, studied in Mashiko, Japan. Author of By My Hands.",
    profileIntro: "London-based ceramicist trained under Lisa Hammond MBE and Ken Matsuzaki in Mashiko, Japan. He works in reduction-fired stoneware, throwing each piece by hand and firing in a gas kiln at 1,295\u00B0C. Over three million people follow his work. Form & Element is where you can own it.",
  },
  {
    slug: "hana-miura",
    name: "Hana Miura",
    medium: "Glass",
    location: "Toyama, Japan",
    homepage: true,
    quote: "Glass has no memory. You must give it one.",
    openingStatement: "The furnace has not been turned off in eleven years. She arrives before dawn, when the glass is quietest. She calls this hour the stillness before the shaping.",
    story: [
      "She arrives before the sun does. The furnace is already at 1,100 degrees \u2014 it has not been turned off in eleven years. She gathers the glass on the end of a blowpipe and begins to breathe. Everything that happens next takes less than a minute. Everything she has learned takes longer than that to explain.",
      "She trained in Toyama, then spent four years on Murano with maestros whose families had blown glass since the fifteenth century. They taught her that glass is not a material. It is a window \u2014 between liquid and solid, between possibility and permanence. Her job is to work inside that window before it closes. She has never once felt she was fast enough.",
      "The colors come from metallic oxides layered inside the glass itself. Cobalt for depth. Manganese for shadow. Iron for the pale green of river light. She makes perhaps two hundred pieces a year. Most of them she breaks. She keeps the broken ones on a shelf by the door. Not as trophies. As proof that she is still reaching.",
    ],
    pullQuote: "I break more than I keep. That is how I know I am still reaching for something.",
    method: [
      "Free-blown from a 1,100°C furnace gather",
      "Shaped with breath, gravity, and hand tools",
      "Colors layered using metallic oxide inclusions",
      "Annealed slowly over twenty-four hours",
      "Cold-worked and polished by hand",
      "Each piece inspected — most are rejected",
    ],
    materials: "Soda-lime glass gathered from a continuously burning furnace. Metallic oxides for color — cobalt for blue, manganese dioxide for violet, iron oxide for the pale green of river water. Each color is weighed to the gram, but the kiln chemistry shifts with temperature and atmosphere. No two melts produce the same result.",
    materialsImage: "/images/HMobjects.jpg",
    craft: "Miura works in free-blown soda-lime glass, gathering from a furnace that burns continuously at 1,100°C. Each piece is shaped on the blowpipe using breath, gravity, and hand tools — jacks, tweezers, blocks, and paddles — techniques unchanged since the Roman Empire. Colors are achieved through metallic oxide inclusions layered within the glass itself, trapping one hue inside another to create depth and movement. After blowing, each piece is annealed over twenty-four hours to relieve internal stress. The pontil mark is cold-worked and polished by hand. Every piece is inspected against her standards. Most are rejected.",
    storyLayout: "editorial",
    accentColor: "#7a9ea8",
    portraitGradient: "linear-gradient(145deg, #1e2d33 0%, #2a4a55 40%, #1a2228 100%)",
    portraitImage: "/images/HMhands.webp",
    profileHeroImage: "/images/glassblowinggloryhole.jpg",
    storyImages: [
      "/images/HMprocess.jpg",
      "/images/HMobject.webp",
    ],
    storyImagePositions: [1, 2],
    storyImageCaptions: [
      "Between liquid and solid, between possibility and permanence — the glassblower works inside a window that is always closing.",
      "Every color is a decision made in fire. Cobalt for depth. Manganese for shadow. Iron for the light that lives in river water.",
    ],
    materialsCaption: "She keeps the broken ones on a shelf by the door. Not as trophies. As teachers.",
    bio: "Japanese glass artist working in free-blown soda-lime glass. Trained at Toyama Institute of Glass Art and in Murano, Italy. Known for layered metallic oxide color work.",
    profileIntro: "Toyama-based glass artist trained at the Toyama Institute of Glass Art and on the island of Murano, where she studied under maestros whose families have blown glass since the fifteenth century. She works in free-blown soda-lime glass, layering metallic oxides to trap color inside color. She makes perhaps two hundred pieces a year. Most of them she breaks.",
  },
  {
    slug: "elias-brandt",
    name: "Elias Brandt",
    medium: "Wood",
    location: "Asheville, North Carolina",
    homepage: true,
    quote: "The tree was alive longer than I have been. I try to remember that.",
    openingStatement: "He does not harvest living wood. He walks salvage yards and storm sites, looking for timber that carries the marks of its life. Your job is to listen.",
    story: [
      "He builds from trees that have already fallen. He does not harvest living wood. He walks salvage yards and storm sites, looking for timber that carries the marks of its life \u2014 nail holes, weather checks, the grey patina of decades spent holding up a roof. He can tell you the species and approximate age of a board by looking at its end grain. He has never been wrong.",
      "He apprenticed under Mira Nakamura in the Nakashima tradition. Three years learning that a knot is not a flaw. A split is not a failure. The wood is telling you what it wants to be. Your job is to listen. He read boards the way a sailor reads water \u2014 the direction of the grain, the tension in a curve, the places where the tree fought against wind and won.",
      "Where most woodworkers discard a cracked board, he stabilizes it with a walnut bowtie inlaid across the fracture. The defect becomes the most beautiful part of the piece. He finishes with hand-rubbed oil, dozens of coats over weeks, until the surface feels like skin. He makes forty to fifty objects a year. Each one takes weeks. He is fine with that.",
    ],
    pullQuote: "Wood does not forgive. If you cut wrong, you cannot uncut. There is no undo. That discipline changes how you think.",
    method: [
      "Salvaged timber sourced from storm falls, old structures, and yards",
      "Air-dried for one to three years before use",
      "Milled and dimensioned with hand planes and jointers",
      "Joined with traditional joinery — no metal fasteners",
      "Hand-rubbed oil finish, twenty to thirty coats over weeks",
      "Final surface sanded to 2,000 grit and burnished",
    ],
    materials: "Reclaimed American hardwoods — walnut, white oak, cherry, maple. His butterfly keys are always cut from a contrasting species: dark walnut into pale oak, or cherry into maple. The oil is a blend of tung and linseed he mixes himself, thinned with citrus solvent so it penetrates deep into the grain before curing. No stains. No lacquers. The wood is the finish.",
    materialsImage: "/images/walnut.webp",
    craft: "Brandt works exclusively in salvaged American hardwoods — walnut, white oak, cherry, and maple — sourced from storm falls, old barns, and demolition sites across the southern Appalachians. Each board is air-dried for one to three years before he touches it. His signature is the butterfly key: a bowtie-shaped inlay of contrasting wood set across a natural crack, stabilizing the fracture while celebrating it. Every piece is joined with traditional joinery — mortise and tenon, dovetail, wedged through-tenon — and finished with twenty to thirty coats of hand-rubbed tung oil over several weeks.",
    storyLayout: "editorial",
    accentColor: "#a08060",
    portraitGradient: "linear-gradient(145deg, #2e2518 0%, #4a3828 40%, #1e1a14 100%)",
    portraitImage: "/images/Wood1.webp",
    profileHeroImage: "/images/walnut.jpg",
    storyImages: [
      "/images/Woodproduct.webp",
      "/images/woodproduct2.webp",
    ],
    storyImagePositions: [1, 2],
    storyImageCaptions: [
      "A butterfly key set across a natural crack — not hiding the flaw, but making it the most honest part of the piece.",
      "Objects that are meant to be used. Bread on the board, oil in the grain, a life measured in meals shared.",
    ],
    materialsCaption: "Black walnut. The grain remembers every year of drought, every season of rain. You can read a tree's autobiography in its end grain if you know the language.",
    bio: "American woodworker specializing in salvaged hardwoods. Apprenticed with Mira Nakamura in the Nakashima tradition. Known for butterfly key joinery and hand-rubbed oil finishes.",
    profileIntro: "Asheville-based woodworker who builds exclusively from salvaged American hardwoods \u2014 walnut, white oak, cherry, and maple sourced from storm falls and old barns. He apprenticed under George Nakashima\u2019s prot\u00E9g\u00E9, Mira Nakamura, and is known for his butterfly key joinery: a bowtie of contrasting wood set across a natural crack, turning a defect into the most beautiful part of the piece.",
  },
];

export function getMaker(slug: string): Maker | undefined {
  return makers.find((m) => m.slug === slug);
}

export function getHomepageMakers(): Maker[] {
  return makers.filter((m) => m.homepage).slice(0, 3);
}
