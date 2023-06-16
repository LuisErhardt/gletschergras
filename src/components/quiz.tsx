import { quizData } from "../quizData";
import QuizComponent from "react-quiz-component";
import "../quiz.css";

const renderCustomResultPage = (obj: any) => {
  const ratioPoints = obj.numberOfCorrectAnswers / obj.numberOfQuestions;

  if (ratioPoints > 0.5) {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        Glückwunsch, du das hast das Quiz erfolgreich mit {obj.numberOfCorrectAnswers} von {obj.numberOfQuestions}{" "}
        Punkten abgeschlossen. <br />
        Das solltest du feiern und auf dieses tolle Ergebnis mit einem Gletschergras anstoßen!
        <br />
        <br />
        <a className="underline" href="/quiz">
          Versuche es nochmal
        </a>
        <br />
        <br />
        <a className="underline" href="/">
          Zurück zur Homeseite
        </a>
      </div>
    );
  }
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
      Du hast das Quiz nur mit {obj.numberOfCorrectAnswers} von {obj.numberOfQuestions} möglichen Punkten abgeschlossen.
      <br />
      Da ist auf jeden Fall noch Luft nach oben.. <br />
      Vielleicht wird das nach ein paar Bechern Gletschergras besser!
      <br />
      <br />
      <a className="underline" href="/quiz">
        Versuche es nochmal
      </a>
      <br />
      <br />
      <a className="underline" href="/">
        Zurück zur Homeseite
      </a>
    </div>
  );
};

export interface IQuizProps {}

export default function Quiz(props: IQuizProps) {
  return (
    <>
      <QuizComponent quiz={quizData} showDefaultResult={false} customResultPage={renderCustomResultPage} />
    </>
  );
}
