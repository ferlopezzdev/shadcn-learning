"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
    <Button
    variant="outline"
    onClick={() =>
      toast("Event has been created", {
        duration: 5000,
        position: 'top-right',
        description: `${new Date()}`,
        action: {
          label: "Eliminar",
          onClick: () => console.log("Undo"),
        },
      })
    }
  >
    Show toast
  </Button>

  <Button
    variant="success"
    onClick={() =>
      toast.success("Event has been created", {
        className: "bg-green-500, text-white",
        duration: 5000,
        position: 'top-right',
        description: `${new Date()}`,
        action: {
          label: "Eliminar",
          onClick: () => console.log("Undo"),
        },
      })
    }
  >
    Show customs colors
  </Button>
  </div>
)
}