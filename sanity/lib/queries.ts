import { groq } from "next-sanity";

// ── Makers ────────────────────────────────────────────────────

export const allMakersQuery = groq`
  *[_type == "maker"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    medium,
    location,
    quote,
    bio,
    featured,
    portrait,
    studioImages
  }
`;

export const makerBySlugQuery = groq`
  *[_type == "maker" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    medium,
    location,
    quote,
    bio,
    featured,
    portrait,
    studioImages,
    "products": *[_type == "product" && maker._ref == ^._id] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      price,
      status,
      medium,
      image,
      gallery,
      curator_note,
      process_note,
      materials,
      dimensions,
      care,
      stock_remaining,
      lead_time,
      featured
    }
  }
`;

export const featuredMakersQuery = groq`
  *[_type == "maker" && featured == true] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    medium,
    location,
    quote,
    bio,
    featured,
    portrait,
    studioImages
  }
`;

// ── Products ──────────────────────────────────────────────────

export const allProductsQuery = groq`
  *[_type == "product"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    price,
    status,
    medium,
    image,
    gallery,
    curator_note,
    process_note,
    materials,
    dimensions,
    care,
    stock_status,
    stock_remaining,
    lead_time,
    notify_when_available,
    featured,
    maker->{
      _id,
      name,
      "slug": slug.current,
      medium,
      location
    }
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    price,
    status,
    medium,
    image,
    gallery,
    curator_note,
    process_note,
    materials,
    dimensions,
    care,
    stock_status,
    stock_remaining,
    lead_time,
    notify_when_available,
    featured,
    maker->{
      _id,
      name,
      "slug": slug.current,
      medium,
      location,
      quote,
      bio,
      portrait
    }
  }
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    price,
    status,
    medium,
    image,
    gallery,
    curator_note,
    process_note,
    materials,
    dimensions,
    care,
    stock_status,
    stock_remaining,
    lead_time,
    notify_when_available,
    featured,
    maker->{
      _id,
      name,
      "slug": slug.current,
      medium,
      location
    }
  }
`;

export const productsByMakerQuery = groq`
  *[_type == "product" && maker->slug.current == $makerSlug] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    price,
    status,
    medium,
    image,
    gallery,
    curator_note,
    process_note,
    materials,
    dimensions,
    care,
    stock_status,
    stock_remaining,
    lead_time,
    notify_when_available,
    featured,
    maker->{
      _id,
      name,
      "slug": slug.current,
      medium,
      location
    }
  }
`;
