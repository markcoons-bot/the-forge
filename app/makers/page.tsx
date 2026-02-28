import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import MakersPageContent from "@/components/MakersPageContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Makers — The Forge",
  description:
    "Browse the makers of The Forge. Ceramicists, woodworkers, blacksmiths, glassblowers, and fiber artists — each invited, each extraordinary.",
};

export default function MakersPage() {
  return (
    <>
      <Navigation />
      <MakersPageContent />
      <Footer />
    </>
  );
}
