"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShareLinkDialog from "@/components/share-link-dialog";

import { useState, useRef } from "react";

export function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isShareLinkDialogOpen, setIsShareLinkDialogOpen] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    setIsShareLinkDialogOpen(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-lg items-center space-x-2 gap-6"
    >
      <Input type="text" ref={inputRef} placeholder="" />
      <div className="flex gap-6">
        <Button type="submit">Google Search</Button>
        <Button type="button">I&apos;m Feeling Lucky</Button>
      </div>
      <ShareLinkDialog
        isOpen={isShareLinkDialogOpen}
        onOpenChange={setIsShareLinkDialogOpen}
        searchQuery={inputRef.current?.value || ""}
      />
    </form>
  );
}
