import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "maker",
      title: "Maker",
      type: "reference",
      to: [{ type: "maker" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Ready to Ship", value: "ready_to_ship" },
          { title: "Ready to Ship — Low Stock", value: "ready_to_ship_low" },
          { title: "Sold Out", value: "ready_to_ship_sold_out" },
          { title: "Made to Order", value: "made_to_order" },
          { title: "Made to Order — Sold Out", value: "made_to_order_sold_out" },
          { title: "Coming Soon", value: "coming_soon" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "medium",
      title: "Medium",
      type: "string",
      options: {
        list: [
          { title: "Clay", value: "clay" },
          { title: "Glass", value: "glass" },
          { title: "Wood", value: "wood" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(8),
      description: "Additional product images. First image is the main image.",
    }),
    defineField({
      name: "curator_note",
      title: "Curator's Note",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "process_note",
      title: "The Making",
      type: "text",
      rows: 4,
      description: "Process note displayed under \"The Making\" on the product page.",
    }),
    defineField({
      name: "materials",
      title: "Materials",
      type: "string",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "string",
    }),
    defineField({
      name: "care",
      title: "Care",
      type: "string",
    }),
    defineField({
      name: "stock_remaining",
      title: "Stock Remaining",
      type: "number",
      description: "Show remaining stock. Leave blank to hide.",
    }),
    defineField({
      name: "lead_time",
      title: "Lead Time",
      type: "string",
      description: "e.g. 4–6 weeks. Shown on made to order items.",
    }),
    defineField({
      name: "notify_when_available",
      title: "Show notify me option",
      type: "boolean",
      description: "Show a waitlist button when sold out.",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show in homepage carousel.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "maker.name", media: "image" },
  },
});
