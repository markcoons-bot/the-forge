import { defineField, defineType } from "sanity";

export default defineType({
  name: "maker",
  title: "Maker",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
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
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "string",
      description: "The maker's signature quote.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "studioImages",
      title: "Studio Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this maker on the homepage.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "medium", media: "portrait" },
  },
});
