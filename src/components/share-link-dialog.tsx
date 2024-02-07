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

const env = process.env.NODE_ENV;

const url =
  env === "development"
    ? "http://localhost:3000"
    : "https://lmgtfy8.vercel.app";

export default function ShareLinkDialog({
  isOpen,
  onOpenChange,
  searchQuery,
}: ShareLinkDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [shareLink, setShareLink] = useState(`${url}/?q=${searchQuery}`);

  useEffect(() => {
    if (isOpen) {
      setShareLink(`${url}/?q=${searchQuery}`);
    }
  }, [isOpen, searchQuery]);

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
              value={shareLink}
              onChange={(e) => setShareLink(e.target.value)}
              ref={inputRef}
            />
          </div>
          <CopyToClipboardButton
            type="submit"
            size="sm"
            className="px-3"
            textToCopy={shareLink}
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
