import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { type InstructionsType } from "@/components/search-form";

type InstructionsProps = {
  instructions: InstructionsType;
};

export default function Instructions({ instructions }: InstructionsProps) {
  return (
    <Alert className="min-h-20">
      <Terminal className="h-4 w-4" />
      <AlertTitle>{instructions.heading}</AlertTitle>
      <AlertDescription>
        {instructions.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </AlertDescription>
    </Alert>
  );
}
