import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function CopyToClipboardButton(props: any) {
  const [showSuccessCopy, setShowSuccessCopy] = useState(false);

  const { textToCopy, ...rest } = props;

  useEffect(() => {
    if (showSuccessCopy) {
      const timeout = setTimeout(() => {
        setShowSuccessCopy(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessCopy]);
  return (
    <Button
      {...rest}
      onClick={() => {
        navigator.clipboard.writeText(props.textToCopy);
        setShowSuccessCopy(true);
      }}
    >
      <span className="sr-only">Copy</span>
      {showSuccessCopy ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
