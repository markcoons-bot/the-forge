import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import MakersPageContent from "@/components/MakersPageContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Independent Makers — Studio Pottery, Glass, Wood & More",
  description:
    "Meet the makers behind Form & Element. Every maker is selected by hand. Every object made by theirs.",
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
