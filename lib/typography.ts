// ═══════════════════════════════════════════════
// Typography Tokens — Form & Element
// Cormorant Garamond: body copy, narrative, quotes (reading)
// Tenor Sans: nav, labels, buttons, prices (scanning/UI)
// ═══════════════════════════════════════════════

// ── Body Text (Cormorant Garamond — reading font) ──
export const BODY = "font-serif text-[18px] md:text-[19px] font-normal leading-[1.8]";
export const BODY_STORY = "font-serif text-[18px] md:text-[19px] font-normal leading-[1.8]";

// ── Body on dark backgrounds ──
export const BODY_DARK_PRIMARY = `${BODY} text-forge-paper`;
export const BODY_DARK = `${BODY} text-forge-paper`;
export const BODY_DARK_SECONDARY = `${BODY} text-forge-paper`;

// ── Body on light backgrounds ──
export const BODY_LIGHT_PRIMARY = `${BODY} text-forge-text`;
export const BODY_LIGHT = `${BODY} text-forge-text`;
export const BODY_LIGHT_SECONDARY = `${BODY} text-forge-text`;

// ── Story paragraphs ──
export const STORY_DARK = `${BODY_STORY} text-forge-paper`;
export const STORY_LIGHT = `${BODY_STORY} text-forge-text`;

// ── Section Labels (Tenor Sans — UI font) ──
export const SECTION_LABEL = "font-sans text-[13px] font-normal tracking-[0.15em] uppercase";
export const SECTION_LABEL_DARK = `${SECTION_LABEL} text-forge-paper`;
export const SECTION_LABEL_LIGHT = `${SECTION_LABEL} text-forge-text`;

// ── Nav / Link Labels (Tenor Sans) ──
export const NAV_LINK = "font-sans text-[14px] font-normal tracking-[0.15em] uppercase";
export const NAV_LINK_MUTED = `${NAV_LINK} text-forge-paper hover:text-forge-paper transition-colors duration-300`;
export const NAV_LINK_DARK = `${NAV_LINK} text-forge-paper hover:text-forge-paper transition-colors duration-300`;
export const NAV_LINK_LIGHT = `${NAV_LINK} text-forge-text hover:text-forge-text transition-colors duration-300`;

// ── Headings (Cormorant Garamond — display) ──
export const H1 = "font-serif font-light leading-[1.2] tracking-[0.02em]";
export const H2 = "font-serif font-light leading-[1.3] tracking-[0.02em]";

export const H1_HERO = `${H1} text-4xl md:text-6xl lg:text-7xl`;
export const H1_PAGE = `${H1} text-[32px] md:text-[44px] lg:text-[56px]`;
export const H1_MAKER = `${H1} text-5xl md:text-7xl lg:text-8xl`;
export const H2_SECTION = `${H2} text-[32px] md:text-[40px]`;
export const H2_QUOTE = `${H2} text-[32px] md:text-[40px]`;

// ── Blockquotes (Cormorant Garamond) ──
export const QUOTE_LARGE = "font-serif font-light leading-[1.3] tracking-[0.02em] text-[28px] md:text-[36px] lg:text-[40px]";
export const QUOTE_MEDIUM = "font-serif font-light leading-[1.3] tracking-[0.02em] text-[26px] md:text-[32px]";
export const QUOTE_SMALL = "font-serif font-light leading-[1.3] tracking-[0.02em] text-[24px] md:text-[28px]";

// ── Small / Meta Text (Tenor Sans) ──
export const META_LABEL = "font-sans text-[12px] md:text-[13px] font-normal tracking-[0.15em] uppercase";
export const META_HINT = "font-sans text-[12px] md:text-[13px] font-normal tracking-[0.1em]";

// ── Product Card (Tenor Sans — UI) ──
export const PRODUCT_NAME = "font-sans text-[16px] md:text-[18px] font-normal tracking-[0.02em]";
export const PRODUCT_MAKER = "font-sans text-[15px] font-normal tracking-[0.05em] mt-0.5";
export const PRODUCT_PRICE = "font-sans text-[16px] font-normal tracking-[0.05em] shrink-0";

// ── Method Step (Cormorant — reading) ──
export const METHOD_STEP = "font-serif text-[16px] md:text-[17px] font-normal leading-[1.8]";
