"use client";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <AlertDialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      {/* Disparador del Dialog */}
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          Show Dialog
        </Button>
      </AlertDialogTrigger>

      {/* Todo el contendio Dialog */}
      <AlertDialogContent>
        {/* Cabecera del Dialog */}
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Pie del Dialog */}
        <AlertDialogFooter>
          {/* Acciones del Dialog */}
          <AlertDialogCancel onClick={() => console.log("Cancel")}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => console.log("Continue")}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
