import { Dispatch, SetStateAction } from "react";
import "./styles.scss";

interface ButtonProps {
  numberOfPage: number;
  stepIdx: number;
  setStepIdx: Dispatch<SetStateAction<number>>;
}

const Button = (props: ButtonProps) => {
  const onClickBtn = (act: "prev" | "next") => {
    if (act === "prev" && props.stepIdx) {
      props.setStepIdx((prev) => prev - 1);
    }
    if (act === "next" && props.stepIdx < props.numberOfPage - 1) {
      props.setStepIdx((prev) => prev + 1);
    }
    if (act === "next" && props.stepIdx === props.numberOfPage - 1) {
      console.log("제출");
    }
  };

  return (
    <div className="button-container">
      {props.stepIdx === 0 ? (
        <div></div>
      ) : (
        <button onClick={() => onClickBtn("prev")}>이전</button>
      )}
      <button onClick={() => onClickBtn("next")}>
        {props.stepIdx === props.numberOfPage - 1 ? "제출" : "다음"}
      </button>
    </div>
  );
};

export default Button;
