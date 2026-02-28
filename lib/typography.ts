// ═══════════════════════════════════════════════
// Typography Tokens — The Forge
// Standardized Tailwind class strings for consistency
// ═══════════════════════════════════════════════

// ── Body Text ──
export const BODY = "font-sans text-[17px] font-light leading-[1.9]";
export const BODY_STORY = "font-sans text-[17px] md:text-[19px] font-light leading-[1.9]";

// ── Body on dark backgrounds (white text) ──
export const BODY_DARK_PRIMARY = `${BODY} text-forge-paper/90`;
export const BODY_DARK = `${BODY} text-forge-paper/80`;
export const BODY_DARK_SECONDARY = `${BODY} text-forge-paper/60`;

// ── Body on light backgrounds (dark text) ──
export const BODY_LIGHT_PRIMARY = `${BODY} text-forge-text/90`;
export const BODY_LIGHT = `${BODY} text-forge-text/80`;
export const BODY_LIGHT_SECONDARY = `${BODY} text-forge-text/60`;

// ── Story paragraphs (editorial, larger on desktop) ──
export const STORY_DARK = `${BODY_STORY} text-forge-paper/80`;
export const STORY_LIGHT = `${BODY_STORY} text-forge-text/80`;

// ── Section Labels ──
export const SECTION_LABEL = "font-mono text-[11px] tracking-[0.2em] uppercase";
export const SECTION_LABEL_ACCENT = `${SECTION_LABEL} text-forge-accent/60`;
export const SECTION_LABEL_DARK = `${SECTION_LABEL} text-forge-paper/40`;
export const SECTION_LABEL_LIGHT = `${SECTION_LABEL} text-forge-text/40`;

// ── Nav / Link Labels ──
export const NAV_LINK = "font-mono text-xs tracking-[0.08em]";
export const NAV_LINK_MUTED = `${NAV_LINK} text-forge-muted hover:text-forge-paper transition-colors duration-300`;
export const NAV_LINK_DARK = `${NAV_LINK} text-forge-paper/40 hover:text-forge-accent transition-colors duration-300`;
export const NAV_LINK_LIGHT = `${NAV_LINK} text-forge-text/60 hover:text-forge-text transition-colors duration-300`;

// ── Headings ──
export const H1 = "font-serif font-light leading-[1.2]";
export const H2 = "font-serif font-light leading-[1.3]";

// ── Heading sizes ──
export const H1_HERO = `${H1} text-4xl md:text-6xl lg:text-7xl`;
export const H1_PAGE = `${H1} text-4xl md:text-5xl lg:text-6xl`;
export const H1_MAKER = `${H1} text-5xl md:text-7xl lg:text-8xl`;
export const H2_SECTION = `${H2} text-3xl md:text-4xl`;
export const H2_QUOTE = `${H2} text-3xl md:text-5xl italic`;

// ── Blockquotes ──
export const QUOTE_LARGE = "font-serif font-light italic leading-[1.3] text-3xl md:text-5xl";
export const QUOTE_MEDIUM = "font-serif font-light italic leading-[1.3] text-2xl md:text-3xl lg:text-4xl";
export const QUOTE_SMALL = "font-serif font-light italic leading-[1.3] text-xl md:text-2xl";

// ── Small / Meta Text ──
export const META_LABEL = "font-mono text-[10px] tracking-[0.15em] uppercase";
export const META_HINT = "font-mono text-[10px] tracking-[0.08em]";

// ── Opacity-only helpers (append to existing classes) ──
export const OP_PRIMARY = "90";   // primary text
export const OP_BODY = "80";      // body text
export const OP_SECONDARY = "60"; // secondary / supporting
export const OP_TERTIARY = "40";  // tertiary / labels
export const OP_HINT = "20";      // hints / dividers

// ── Product Card ──
export const PRODUCT_NAME = "font-serif text-lg font-light";
export const PRODUCT_MAKER = "font-sans text-sm font-light mt-0.5";
export const PRODUCT_PRICE = "font-mono text-sm shrink-0";

// ── Method Step ──
export const METHOD_STEP = "font-sans text-[15px] font-light";
