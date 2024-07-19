"use client";
import verifySiret from "@/lib/verifySiret";
import { Input } from "@/components/ui/input"

import { useState } from "react";

export default function SiretInput() {
  const [siret, setSiret] = useState<string>("");

  // const siret = "12345678901234";  // Remplacez par le numéro de SIRET à tester
  const apiKey = "3fe4b20d-fdef-3511-adb0-6b14630a1d44"; // Remplacez par votre clé API obtenue sur le portail de l'Insee

 

  return (
    <div className="grid grid-cols-12 ml-10">
        <div className="col-span-2">

      <label htmlFor="siret">Numéro de Siret</label>
      <Input
        type="text"
        id="siret"
        onChange={(e) => {
          setSiret(e.target.value);
        }}
      />
      <button
        onClick={() => { verifySiret(siret, apiKey).then((result) => {
            if (result) {
              console.log("SIRET valide :");
              console.log(result);
            } else {
              console.log("Numéro de SIRET invalide ou problème d'authentification.");
            }
          });
            console.log(siret);
            console.log(apiKey);
            
            
        }}
      >
        cliquer ici
      </button>
        </div>
      <br />
      <p>{siret}</p>
    </div>
  );
}
