"use client"
import React, { useMemo } from 'react';
import { Conponet } from "@workspace/ui-lib";

// Define y exporta tu componente de función de React
export default function Index() {
  // Usa useMemo aquí si es necesario
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const memoizedValue = useMemo(() => {
    // Lógica para calcular el valor memoizado
    return 'memoized value';
  }, []);

  return (
    <>
      <div className="">
        <h1>Hello Mundo Con lib</h1>
        <br />

        <Conponet />

        <h4>Add pendientes</h4>
      </div>
    </>
  );
}
