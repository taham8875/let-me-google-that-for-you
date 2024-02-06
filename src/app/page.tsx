import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleLogo from "@/components/google-logo";
import { SearchForm } from "@/components/search-form";

export default function page() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center gap-6">
        <GoogleLogo />
        <SearchForm />
      </div>
      <Footer />
    </div>
  );
}
