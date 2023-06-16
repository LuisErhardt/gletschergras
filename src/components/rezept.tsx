import * as React from "react";

export interface IRezeptProps {}

export default function Rezept(props: IRezeptProps) {
  return (
    <div className="max-w-screen-lg p-10">
      <p>
        Jahrhundertelang wurde das Rezept für Gletschergras geheim gehalten und sorgfältig von Generation zu Generation
        Appenweirern weitergegeben. Der Tradition nach wurde dem Erben erst am Sterbebett die magische Formel ins Ohr
        geflüstert. Im Laufe der Zeit wurde das Rezept immer wieder verfeinert und verbessert. <br />
        Im Zeitalter von Getränkekonzernen, die ihre Rezepturen verschlossen halten , um ihren Profit zu erhöhen, haben
        sich die Appenweirer entschlossen, ihren lange gehegten Schatz mit der Welt zu teilen. Dabei steht das leibliche
        Wohl der Weltgemeinschaft im Mittelpunkt, die selbst in die Lage versetzt werden soll, Gletschergras zubereiten
        zu können (Schließlich kann der Weg nach Appenweier trotz Autobahnausfahrt doch relativ lang sein).
      </p>
      <h2 className="text-xl mt-4">Die Zutaten:</h2>
      <ul className="list-disc">
        <li className="mt-2">
          Klares Quellwasser, das aus den Tiefen der Schweizer Alpen gefördert wurde. Das Wasser muss mit Ochsenkarren
          nach Appenweier transportiert werden, weil beim LKW-Transport die molekulare Struktur der enthaltenen
          Mineralien zerstört werden könnte.
        </li>
        <li className="mt-2">
          Frisch gepresster Orangensaft aus spanischen Orangen. Hier ist wichtig, dass zwischen dem Pressen der Frucht
          und dem Genießen des Getränks keine 20 Minuten vergehen dürfen, damit keine kostbaren Aromen verloren gehen.
        </li>
        <li className="mt-2">
          Frisch gepresster Maracujasaft. Die Früchte werden handverlesen aus einem bolivianischen Dorf namens
          "Appenweiros" eingekauft.
        </li>
        <li className="mt-2">
          Edler finnischer Vodka. Dieser wird aus feiner Gerste in einem monatelangen Verfahren nach alter Tradition
          gebrannt, bis absolut reiner und geschmackneutraler Vodka übrig ist.
        </li>
        <li className="mt-2 mb-5">
          Sind die rohen Zutaten alle beisammen, dann werden diese in einem rituellen Akt gemischt. Dabei muss von jeder
          beteiligten Person ein SVA-Shirt getragen werden. Während des Vorgangs wird der SVA-Song gesummt bis
          schließlich alle Zutaten vermischt sind. Dann wird abschließend der Fangesang "1925, hey, hey!" zum Besten
          gegeben. Die Erfahrung hat gezeigt, dass sich nur so die ganz charakteristische blau-grüne Farbe herausbildet.
        </li>
      </ul>
      <a className="underline" href="/">
        Zurück zur Homeseite
      </a>
    </div>
  );
}
