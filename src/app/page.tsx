import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleLogo from "@/components/google-logo";

export default function page() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <GoogleLogo />
      </div>
      <Footer />
    </div>
  );
}
