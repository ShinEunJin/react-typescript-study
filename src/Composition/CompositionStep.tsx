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
  const handleInputChange = (e: any, title: any, name?: any) => {
    if (name)
      props.setSurveyResult({
        ...props.surveyResult,
        [title]: e.target.value + `[${name}]`,
      });
    else
      props.setSurveyResult({ ...props.surveyResult, [title]: e.target.value });
    console.log(props.surveyResult);
  };
  return (
    <div className="survey-steps-container">
      {props.dependOn ? (
        Object.values(props.surveyResult).includes(
          props.dependOn.dependOnValue + `[${props.dependOn.dependOnName}]`
        ) && (
          <>
            <div>{props.title}</div>
            <input
              type={props.type}
              onChange={(e) => handleInputChange(e, props.title)}
              value={props.surveyResult[props.title] || ""}
            />
          </>
        )
      ) : (
        <>
          <div>{props.title}</div>
          {props.type !== "singleChoice" && (
            <input
              type={props.type}
              onChange={(e) => handleInputChange(e, props.title)}
              value={props.surveyResult[props.title] || ""}
            />
          )}
          {props.options &&
            props.options.map((v, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={props.name}
                  value={v}
                  onChange={(e) =>
                    handleInputChange(e, props.title, props.name)
                  }
                />
                <label>{v}</label>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default CompositionStep;
