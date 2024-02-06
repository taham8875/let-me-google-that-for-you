import React from "react";
import { Command } from "lucide-react";
import Link from "next/link";

const linkClasses = "font-semibold underline";

export default function Footer() {
  return (
    <footer className="min-w-fill text-sm sm:flex sm:flex-row sm:items-center gap-2 p-6 flex flex-col text-center items-center">
      <Command />
      <p className="max-sm:max-w-80 ">
        Build by{" "}
        <Link className={linkClasses} href="https://github.com/taham8875">
          Taha
        </Link>
        . Hosted on{" "}
        <Link className={linkClasses} href="https://vercel.com">
          Vercel
        </Link>
        . The source code is available on{" "}
        <Link
          className={linkClasses}
          href="https://github.com/taham8875/let-me-google-that-for-you"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
}
