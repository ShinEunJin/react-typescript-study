import { useEffect, useState } from "react";

interface CompositionStepProps {
  title: string;
  type: string;
  name?: string;
  options?: string[];
  dependOn?: {
    dependOnName: string;
    dependOnValue: string;
  };
  surveyResult: any;
  setSurveyResult: any;
}

const CompositionStep = (props: CompositionStepProps) => {
  const [isDependOn, setIsDependOn] = useState(false);

  useEffect(() => {
    const checkDepend =
      props.dependOn &&
      Object.values(props.surveyResult).includes(
        props.dependOn.dependOnValue + `[${props.dependOn.dependOnName}]`
      );
    if (checkDepend) setIsDependOn(true);
    else setIsDependOn(false);
  }, [props]);

  const handleInputChange = (e: any, title: any, name?: any) => {
    if (name)
      props.setSurveyResult({
        ...props.surveyResult,
        [title]: e.target.value + `[${name}]`,
      });
    else
      props.setSurveyResult({ ...props.surveyResult, [title]: e.target.value });
  };

  return (
    <>
      {props.dependOn ? (
        isDependOn && (
          <div className="step-container">
            <div className="step-container__title">{props.title}</div>
            <input
              className="step-container__input"
              type={props.type}
              onChange={(e) => handleInputChange(e, props.title)}
              value={props.surveyResult[props.title] || ""}
            />
          </div>
        )
      ) : (
        <div className="step-container">
          <div className="step-container__title">{props.title}</div>
          {props.type !== "singleChoice" && (
            <input
              className="step-container__input"
              type={props.type}
              onChange={(e) => handleInputChange(e, props.title)}
              value={props.surveyResult[props.title] || ""}
            />
          )}
          {props.options &&
            props.options.map((v, i) => (
              <div key={i} className="step-container__radios">
                <input
                  className="step-container__radios__item"
                  type="radio"
                  name={props.name}
                  value={v}
                  onChange={(e) =>
                    handleInputChange(e, props.title, props.name)
                  }
                />
                <label className="step-container__radios__label">{v}</label>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CompositionStep;
