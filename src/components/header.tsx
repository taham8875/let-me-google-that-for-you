import React from "react";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Grip, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-end">
      <ul className="justify-self-end flex gap-6 items-center p-4">
        <li>
          <ThemeToggler />
        </li>
        <li>
          <Link
            className="hover:underline"
            href="https://mail.google.com/mail/&ogbl"
          >
            Gmail
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            href="https://www.google.com/imghp?hl=en&ogbl"
          >
            Images
          </Link>
        </li>
        <li className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-2 transition-colors cursor-pointer">
          <Grip />
        </li>
        <li className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-2 transition-colors cursor-pointer">
          <User />
        </li>
      </ul>
    </header>
  );
}
