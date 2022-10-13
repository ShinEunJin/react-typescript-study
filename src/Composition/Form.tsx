import { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";

interface FormProps {
  title: string;
  type: string;
  name?: string;
  options?: string[];
  dependOn?: {
    dependOnName: string;
    dependOnValue: string;
  };
  value: any;
  dependList: any;
  setValue: Dispatch<SetStateAction<string>>;
  setDependList: Dispatch<SetStateAction<string>>;
}

const Form = (props: FormProps) => {
  const handleChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>, title: string, name?: string) => {
      if (name) {
        props.setDependList({ ...props.dependList, [name]: e.target.value });
      }
      props.setValue({ ...props.value, [title]: e.target.value });
    },
    [props]
  );

  const checkingDependList = (
    list: { [key: string]: string },
    dependOn: { dependOnName: string; dependOnValue: string }
  ) => {
    if (
      dependOn.dependOnName in list &&
      list[dependOn.dependOnName] === dependOn?.dependOnValue
    )
      return true;
  };

  return (
    <>
      {!props.dependOn && props.type === "text" && (
        <div className="step-container">
          <div className="step-container__title">
            {props.title}
            <input
              className="step-container__input"
              type={props.type}
              // props.value[props.title] = undefined 처리 하지 않으면 경고뜨는데 필독
              value={props.value[props.title] || ""}
              onChange={(e) => handleChangeInputValue(e, props.title)}
            />
          </div>
        </div>
      )}

      {props.type === "singleChoice" && (
        <div className="step-container">
          <div className="step-container__title">
            {props.title}
            {props.options &&
              props.options.map((v, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    name={props.name}
                    value={v}
                    onChange={(e) =>
                      handleChangeInputValue(e, props.title, props.name)
                    }
                  />
                  <label>{v}</label>
                </div>
              ))}
          </div>
        </div>
      )}

      {props.dependOn && checkingDependList(props.dependList, props.dependOn) && (
        <div className="step-container">
          <div className="step-container__title">
            {props.title}
            <input
              className="step-container__input"
              type={props.type}
              value={props.value[props.title] || ""}
              onChange={(e) => handleChangeInputValue(e, props.title)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
