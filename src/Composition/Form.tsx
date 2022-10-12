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
  setValue: Dispatch<SetStateAction<string>>;
}

const Form = (props: FormProps) => {
  const handleChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>, title: string) => {
      props.setValue({ ...props.value, [title]: e.target.value });
    },
    [props]
  );

  return (
    <div className="step-container">
      <div className="step-container__title">{props.title}</div>

      {props.type === "text" && (
        <input
          className="step-container__input"
          type={props.type}
          // props.value[props.title] = undefined 처리 하지 않으면 경고뜨는데 필독
          value={props.value[props.title] || ""}
          onChange={(e) => handleChangeInputValue(e, props.title)}
        />
      )}

      {props.type === "singleChoice" &&
        props.options &&
        props.options.map((v, i) => (
          <div key={i}>
            <input
              type="radio"
              name={props.name}
              value={v}
              onChange={(e) => handleChangeInputValue(e, props.title)}
            />
            <label>{v}</label>
          </div>
        ))}
    </div>
  );
};

export default Form;
