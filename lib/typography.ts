// ═══════════════════════════════════════════════
// Typography Tokens — The Forge
// Standardized Tailwind class strings for consistency
// ═══════════════════════════════════════════════

// ── Body Text ──
// Dark bg: 19px desktop, 17px mobile, weight 300, line-height 1.75
// Light bg: 18px desktop, 17px mobile, weight 300, line-height 1.75
export const BODY = "font-sans text-[17px] md:text-[19px] font-light leading-[1.75]";
export const BODY_STORY = "font-sans text-[17px] md:text-[19px] font-light leading-[1.75]";

// ── Body on dark backgrounds (white text) ──
export const BODY_DARK_PRIMARY = `${BODY} text-forge-paper`;
export const BODY_DARK = `${BODY} text-forge-paper/[0.92]`;
export const BODY_DARK_SECONDARY = `${BODY} text-forge-paper/70`;

// ── Body on light backgrounds (dark text) ──
export const BODY_LIGHT_PRIMARY = `${BODY} text-forge-text`;
export const BODY_LIGHT = `${BODY} text-forge-text`;
export const BODY_LIGHT_SECONDARY = `${BODY} text-forge-text/70`;

// ── Story paragraphs (editorial) ──
export const STORY_DARK = `${BODY_STORY} text-forge-paper/[0.92]`;
export const STORY_LIGHT = `${BODY_STORY} text-forge-text/[0.85]`;

// ── Section Labels (13px min, JetBrains Mono, weight 400) ──
export const SECTION_LABEL = "font-mono text-[13px] font-normal tracking-[0.15em] uppercase";
export const SECTION_LABEL_DARK = `${SECTION_LABEL} text-forge-paper/70`;
export const SECTION_LABEL_LIGHT = `${SECTION_LABEL} text-forge-text/50`;

// ── Nav / Link Labels (14px, Outfit, weight 400) ──
export const NAV_LINK = "font-sans text-[14px] font-normal tracking-[0.04em]";
export const NAV_LINK_MUTED = `${NAV_LINK} text-forge-paper/80 hover:text-forge-paper transition-colors duration-300`;
export const NAV_LINK_DARK = `${NAV_LINK} text-forge-paper/80 hover:text-forge-paper transition-colors duration-300`;
export const NAV_LINK_LIGHT = `${NAV_LINK} text-forge-text/70 hover:text-forge-text transition-colors duration-300`;

// ── Headings (Cormorant Garamond, 40px+ desktop, 32px+ mobile) ──
export const H1 = "font-serif font-normal leading-[1.2]";
export const H2 = "font-serif font-normal leading-[1.3]";

export const H1_HERO = `${H1} text-4xl md:text-6xl lg:text-7xl`;
export const H1_PAGE = `${H1} text-[32px] md:text-[44px] lg:text-[56px]`;
export const H1_MAKER = `${H1} text-5xl md:text-7xl lg:text-8xl`;
export const H2_SECTION = `${H2} text-[32px] md:text-[40px]`;
export const H2_QUOTE = `${H2} text-[32px] md:text-[40px] italic`;

// ── Blockquotes (32-40px desktop, 26-32px mobile) ──
export const QUOTE_LARGE = "font-serif font-light italic leading-[1.3] text-[28px] md:text-[36px] lg:text-[40px]";
export const QUOTE_MEDIUM = "font-serif font-light italic leading-[1.3] text-[26px] md:text-[32px]";
export const QUOTE_SMALL = "font-serif font-light italic leading-[1.3] text-[24px] md:text-[28px]";

// ── Small / Meta Text (13px min, weight 400) ──
export const META_LABEL = "font-mono text-[12px] md:text-[13px] font-normal tracking-[0.15em] uppercase";
export const META_HINT = "font-mono text-[12px] md:text-[13px] font-normal tracking-[0.08em]";

// ── Product Card ──
export const PRODUCT_NAME = "font-serif text-[16px] md:text-[18px] font-medium";
export const PRODUCT_MAKER = "font-sans text-[15px] font-normal mt-0.5";
export const PRODUCT_PRICE = "font-sans text-[16px] font-medium shrink-0";

// ── Method Step ──
export const METHOD_STEP = "font-sans text-[16px] md:text-[17px] font-light";
