"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShareLinkDialog from "@/components/share-link-dialog";
import Instructions from "@/components/instructions";

import Cursor from "@/components/cursor";

import { useRouter } from "next/navigation";

import { useState, useRef, useEffect } from "react";

type SearchFormProps = {
  query?: string;
};

export type InstructionsType = {
  heading: string;
  content: string;
};

export function SearchForm({ query }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [isShareLinkDialogOpen, setIsShareLinkDialogOpen] = useState(false);

  let initialInstructions: InstructionsType;

  if (!query) {
    initialInstructions = {
      heading: "Hi, I'm lmgtfy",
      content:
        "1. Type a search query in the search box.\n" +
        "2. Click the Google Search button.\n" +
        "3. Share the link with whoever you want to help.",
    };
  } else {
    initialInstructions = {
      heading: "",
      content: "",
    };
  }

  const [instructions, setInstructions] =
    useState<InstructionsType>(initialInstructions);

  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current?.value) return;

    if (document.querySelector(".cursor")) {
      setTimeout(() => {
        router.push(
          `https://www.google.com/search?q=${inputRef.current?.value}`
        );
      }, 2000);
      return;
    }

    setIsShareLinkDialogOpen(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-col w-full max-w-lg items-center space-x-2 gap-6"
    >
      {query && (
        <Cursor
          query={query}
          cursorRef={cursorRef}
          inputRef={inputRef}
          buttonRef={buttonRef}
          formRef={formRef}
          setInstructions={setInstructions}
        />
      )}
      <Input type="text" ref={inputRef} placeholder="" />
      <div className="flex gap-6">
        <Button type="submit" className="search-button" ref={buttonRef}>
          Google Search
        </Button>
        <Button type="button">I&apos;m Feeling Lucky</Button>
      </div>
      <ShareLinkDialog
        isOpen={isShareLinkDialogOpen}
        onOpenChange={setIsShareLinkDialogOpen}
        searchQuery={inputRef.current?.value || ""}
      />
      <Instructions instructions={instructions} />
    </form>
  );
}
