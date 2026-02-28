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
  accentColor: string;
  portraitGradient: string;
  portraitImage: string;
  profileHeroImage?: string;
  storyImages: string[];
  storyImagePositions?: number[];
  bio?: string;
}

export const makers: Maker[] = [
  {
    slug: "florian-gadsby",
    name: "Florian Gadsby",
    medium: "Clay",
    location: "London, England",
    quote: "The kiln decides. I just prepare.",
    story: [
      "Most mornings, Florian Gadsby takes the London Underground to a small studio where no one is waiting for him. He unlocks the door, fills a bucket, and sits down at the wheel. He has been doing this, more or less, since he was nineteen — first as an apprentice to Lisa Hammond MBE, the grande dame of British salt-glazed pottery, then for three years under her eye, learning to throw with the kind of patience that cannot be taught, *only endured*.",
      "At twenty-three he left for Mashiko, Japan, where he spent six months studying with Ken Matsuzaki, a Living National Treasure candidate whose family has made pottery for generations. In Mashiko he learned that a kiln is not a tool but *a collaborator* — unpredictable, temperamental, capable of ruining a month's work or transforming it into something no human hand could have planned. His feldspathic crackle glazes — those milky, fractured surfaces that look like frozen lightning — are the result of that collaboration: thermal shock, a kind of controlled violence, the glaze shattering into a web of hairline fractures. It is, technically, a defect. Gadsby has spent years making that defect *beautiful*.",
      "He fires his gas kiln to 1,295°C over fourteen hours, then waits two days to see what the fire has done. His making cycles stretch two to three months: weeks of throwing, then trimming, then the slow meditation of glazing each piece by hand. When a collection is ready, it sells out in minutes. Over three million people follow his work across platforms. *But in the studio, it is just him and the wheel.*"
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
    materialsImage: "/images/Potterytools.webp",
    craft: "Gadsby works in reduction-fired stoneware, throwing each piece on the wheel before firing in a gas kiln to 1,295°C — cone 10 in the language of ceramics. His feldspathic crackle glazes are hand-mixed from feldspar, wood ash, silica, and trace minerals, formulations he has developed and refined over years. The clay bodies are high-iron stoneware, dense and warm-toned. Each piece is trimmed, glazed, and fired by hand over making cycles that stretch two to three months.",
    accentColor: "#b8a490",
    portraitGradient: "linear-gradient(145deg, #3d3229 0%, #5c4a3a 40%, #2a2420 100%)",
    portraitImage: "/images/FGhands.webp",
    profileHeroImage: "/images/FGobject2.webp",
    storyImages: [
      "/images/FGprocess.webp",
      "/images/FGHero.webp",
    ],
    storyImagePositions: [1, 2],
    bio: "British potter working in reduction-fired stoneware and porcelain. Apprenticed with Lisa Hammond MBE, studied in Mashiko, Japan. Author of By My Hands.",
  },
  {
    slug: "hana-miura",
    name: "Hana Miura",
    medium: "Glass",
    location: "Toyama, Japan",
    quote: "Glass has no memory. You must give it one.",
    story: [
      "Hana Miura works with molten glass in a converted rice warehouse in Toyama Prefecture, where the Sea of Japan sends cold air through the valley and the furnace burns at 1,100 degrees year-round. *She has not turned it off in eleven years.*",
      "She trained at the Toyama Institute of Glass Art and then spent four years in Murano, Italy, learning from maestros who had blown glass since childhood. She returned to Japan carrying techniques that are five hundred years old and a conviction that glass should look like it *contains* light, not just transmits it.",
      "Her pieces are blown, not cast. Each one begins as a gather of molten glass on the end of a blowpipe — a glowing orange mass that she shapes with breath, gravity, and a handful of tools that have not changed in centuries. She works with an assistant who turns the pipe while she shapes, a choreography so practiced it looks like thought.",
      "The colors come from metallic oxides added to the melt: cobalt for blue, manganese for violet, iron for the pale green of river water. She layers them, trapping one color inside another so that the finished piece shifts in the light like *a memory you cannot quite hold*.",
      "She makes perhaps two hundred pieces a year. *Most of them she breaks.*"
    ],
    pullQuote: "I break more than I keep. That is how I know I am still reaching for something.",
    method: [
      "Free-blown from a 1,100°C furnace gather",
      "Shaped with breath, gravity, and hand tools",
      "Colors layered using metallic oxide inclusions",
      "Annealed slowly over twenty-four hours",
      "Cold-worked and polished by hand",
      "Each piece inspected — most are rejected"
    ],
    materials: "Soda-lime glass, metallic oxides (cobalt, manganese, iron), silica",
    accentColor: "#7a9ea8",
    portraitGradient: "linear-gradient(145deg, #1e2d33 0%, #2a4a55 40%, #1a2228 100%)",
    portraitImage: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=1920&q=80",
    storyImages: [
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1200&q=80",
    ],
  },
  {
    slug: "elias-brandt",
    name: "Elias Brandt",
    medium: "Wood",
    location: "Asheville, North Carolina",
    quote: "The tree was alive longer than I have been. I try to remember that.",
    story: [
      "Elias Brandt builds furniture from trees that have already fallen. He does not harvest living wood. He walks salvage yards and storm sites and old barns marked for demolition, looking for timber that carries the marks of its life — nail holes, weather checks, the grey patina of decades spent holding up a roof.",
      "His workshop sits on four acres outside Asheville, in a hollow where the morning fog pools like milk. He works with hand tools when he can and machines when he must, and he can tell you the species, approximate age, and likely origin of a piece of wood by looking at its end grain.",
      "He apprenticed under George Nakashima's protégé, Mira Nakamura, learning the Japanese concept of wabi-sabi through American hardwoods. A knot is not a flaw. A split is not a failure. The wood is telling you what it wants to be, and *your job is to listen*.",
      "His tables are joined without metal fasteners — mortise and tenon, dovetail, wedged through-tenon — joinery methods that have held buildings together for millennia. He finishes with hand-rubbed oil, dozens of coats applied and buffed over weeks, until the surface feels like *skin*.",
      "He makes perhaps eight to twelve pieces a year. Each one takes months. He has a waiting list measured in years, and *he is fine with that*."
    ],
    pullQuote: "Wood does not forgive. If you cut wrong, you cannot uncut. There is no undo. That discipline changes how you think.",
    method: [
      "Salvaged timber sourced from storm falls, old structures, and yards",
      "Air-dried for one to three years before use",
      "Milled and dimensioned with hand planes and jointers",
      "Joined with traditional joinery — no metal fasteners",
      "Hand-rubbed oil finish, twenty to thirty coats over weeks",
      "Final surface sanded to 2,000 grit and burnished"
    ],
    materials: "Reclaimed American hardwoods — walnut, white oak, cherry, maple",
    accentColor: "#a08060",
    portraitGradient: "linear-gradient(145deg, #2e2518 0%, #4a3828 40%, #1e1a14 100%)",
    portraitImage: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=1920&q=80",
    storyImages: [
      "https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?w=1200&q=80",
      "https://images.unsplash.com/photo-1605433246452-258b9e8a2e05?w=1200&q=80",
      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=1200&q=80",
    ],
  },
  {
    slug: "reva-solis",
    name: "Reva Solis",
    medium: "Metal",
    location: "Santa Fe, New Mexico",
    quote: "Fire does not care about your plan.",
    story: [
      "Reva Solis forges in a cinderblock studio at the edge of Santa Fe, where the high desert light makes metal look like it is still molten even after it has cooled. She works in bronze and iron, sometimes copper, heating billets in a coal forge until they glow the color of a summer sunset and then shaping them under a power hammer that shakes the floor.",
      "She studied sculpture at the Institute of American Indian Arts before turning to blacksmithing, drawn by the directness of it — no intermediary between intention and material. You heat the metal. You hit the metal. *The metal becomes something.* Or it does not, and you heat it again.",
      "Her work sits between function and sculpture. A candelabra that looks like desert brush after a fire. A set of cooking knives with handles forged from railroad spikes. A door pull shaped like a river stone, warm in the hand, heavy with intention.",
      "She fires her forge with coal she sources from a mine in Gallup. She prefers it to gas because the heat is uneven — hotter at the center, cooler at the edges — and that variation gives the metal a surface texture that gas cannot replicate. Every piece carries *the signature of its fire*.",
      "She has turned down gallery representation three times. She sells directly, from the studio, to people who drive out to see the work in person. She believes an object *should be held before it is bought*."
    ],
    pullQuote: "I want you to feel the weight before you decide. An object should earn its place in your life.",
    method: [
      "Coal-forged at temperatures up to 1,200°C",
      "Shaped under a power hammer and finished by hand",
      "Joined by forge welding — no modern adhesives",
      "Patinated with heat and chemical solutions",
      "Sealed with beeswax and linseed oil",
      "Each piece is unique — no molds, no casting"
    ],
    materials: "Wrought iron, bronze, copper, coal-forge fire, beeswax",
    accentColor: "#c47a50",
    portraitGradient: "linear-gradient(145deg, #2d1e16 0%, #5c3a28 40%, #1e1610 100%)",
    portraitImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
    storyImages: [
      "https://images.unsplash.com/photo-1530124566582-a45a7c79fd85?w=1200&q=80",
      "https://images.unsplash.com/photo-1602178506166-9a3d87917922?w=1200&q=80",
    ],
  },
  {
    slug: "maren-loft",
    name: "Maren Loft",
    medium: "Fiber",
    location: "Reykjavík, Iceland",
    quote: "Thread is just a line. Weaving is just crossing lines. And yet.",
    story: [
      "Maren Loft weaves on a loom her grandmother built in 1958, in a studio overlooking the harbor in Reykjavík where the light in winter lasts four hours and in summer never quite leaves. She works with Icelandic wool — the outer coat coarse and water-resistant, the inner coat soft as fog — spinning it herself on a wheel that predates her by decades.",
      "She learned to weave at seven, sitting beside her grandmother, who learned from her grandmother, who learned from hers. The patterns are not written down. They are carried in *muscle memory*, in the rhythm of the shuttle passing through the warp, in the sound the loom makes when the tension is right.",
      "Her textiles are functional. Blankets that will outlast their owners. Scarves that cut the North Atlantic wind. Table runners with patterns derived from Icelandic geological surveys — the contour lines of glaciers translated into thread. She does not make decorative objects. She makes things that work.",
      "She dyes with plants she forages herself: birch leaves for yellow, arctic thyme for green, crowberries for a violet so deep it looks black in low light. The colors shift with each harvest, each season, each rainfall. *No two batches are the same.*",
      "She produces slowly. A single blanket takes three weeks on the loom, and before that, months of spinning. She has no interest in speed. The wool, she says, *already waited a year on the sheep*."
    ],
    pullQuote: "My grandmother's hands knew patterns her mind had forgotten. The loom remembers what we cannot.",
    method: [
      "Icelandic wool hand-spun on a vintage spinning wheel",
      "Natural dyes foraged from birch, arctic thyme, and crowberry",
      "Woven on a 1958 counterbalance loom",
      "Patterns carried through four generations of oral tradition",
      "Finished with traditional Icelandic fulling process",
      "Each piece washed in geothermal spring water"
    ],
    materials: "Icelandic wool (þel and tog fibers), foraged botanical dyes, geothermal water",
    accentColor: "#8a7a6a",
    portraitGradient: "linear-gradient(145deg, #252220 0%, #3a3530 40%, #1a1816 100%)",
    portraitImage: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=1920&q=80",
    storyImages: [
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80",
      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=1200&q=80",
    ],
  },
];

export function getMaker(slug: string): Maker | undefined {
  return makers.find((m) => m.slug === slug);
}
