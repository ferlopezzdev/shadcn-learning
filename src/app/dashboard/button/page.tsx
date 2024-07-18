"use client";

import { Button } from "@/components/ui/button";
import { Mail, Loader2, ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {/* Todas las variantes de los botones */}
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disable</Button>

      {/* Variante personalizada desde el ui/button.tsx */}
      <Button variant="succes">success</Button>

      {/* Los componentes de shadcn/ui actuan de forma natural como en el HTML */}
      <Button onClick={() => console.log("Hola Mundo")}>Click Me!</Button>

      {/* Props personalizado desde el ui/button.tsx */}
      <Button capitalize={false}>capitalize false</Button>

      {/* Botón con icono */}
      <Button variant="outline">
        <Mail className="h-4 w-4" /> Login with Email
      </Button>

      {/* Botón ícono */}
      <Button variant="outline" size={"icon"}>
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Botón cargando */}
      <Button>
        <Loader2 className="mr-2 h-4-w4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
