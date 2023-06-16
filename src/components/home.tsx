import * as React from "react";
import "../quiz.css";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const style = "border-2 border-white rounded-md p-[30px] m-10 text-2xl block";
  return (
    <>
      <div className="text-2xl m-10 rounded-md p-[30px] bg-slate-600">
        Willkommen auf Gletschergras.de, dem Online-Auftritt eines der exklusivsten und legendärsten Getränke aus dem
        Schwarzwald
      </div>
      <div className={style}>
        <a href="/rezept">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
          Entdecke jetzt das geheime Gletschergras Rezept!
        </a>
      </div>
      <div className={style}>
        <a href="/quiz">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
          Teste dein Wissen rund um den SVA!
        </a>
      </div>
    </>
  );
}
