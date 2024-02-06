import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEffect, useRef, useState } from "react";

import CopyToClipboardButton from "@/components/copy-to-clipboard-button";

type ShareLinkDialogProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  searchQuery: string;
};

export default function ShareLinkDialog({
  isOpen,
  onOpenChange,
  searchQuery,
}: ShareLinkDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={`https://lmgtfy8.vercel.app/?q=${searchQuery}`}
              ref={inputRef}
            />
          </div>
          <CopyToClipboardButton
            type="submit"
            size="sm"
            className="px-3"
            textToCopy={inputRef.current?.value || ""}
          />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
