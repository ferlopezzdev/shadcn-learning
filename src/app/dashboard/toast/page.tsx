"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function Page() {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-3 gap-3">
      <Button
        variant="ghost"
        onClick={() =>
          toast({
            description: "Your message has been sent.",
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }
      >
        Show Toast title/subtitle
      </Button>

      <Button
        variant="destructive"
        onClick={() =>
          toast({
            variant: 'destructive',
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: (
              <ToastAction
                altText="Try again"
                onClick={() => console.log("Try again")}
              >
                Try again
              </ToastAction>
            ),
          })
        }
      >
        Show Toast destructive
      </Button>

        {/* Variante personalizada */}
      <Button
        variant="success"
        onClick={() =>
          toast({
            variant: 'success',
            title: "Success! Your request was completed.",
            description: "Everything went smoothly with your request.",
          })
        }
      >
        Show Toast success
      </Button>

    </div>
  );
}
