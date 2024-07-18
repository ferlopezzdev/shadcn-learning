"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [datePrev, setDatePrev] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = React.useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleString("es-Es", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      {/* Calendario limitado (no se pueden seleccionar los fin de semanas) */}
      <div>
        <span>Calendario semanal</span>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
      </div>
      {/* Calendario limitado (no se pueden seleccionar dias previos a la fecha actual) */}
      <div>
        <span>Deshabilitado fechas previas</span>
        <Calendar
          mode="single"
          selected={datePrev}
          onSelect={setDatePrev}
          className="rounded-md border"
          disabled={(date) => date < new Date()}
        />
      </div>
      <div><span>Fechas múltiples</span>
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
      />
      </div>

      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}</p>
      </div>
    </div>
  );
}
