import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleLogo from "@/components/google-logo";
import { SearchForm } from "@/components/search-form";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center gap-6">
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleLogo />
          <SearchForm query={searchParams?.q as string} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
