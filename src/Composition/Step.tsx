import { useState } from "react";
import Form from "./Form";

interface StepProps {
  list: {
    title: string;
    type: string;
    name?: string;
    options?: string[];
    dependOn?: {
      dependOnName: string;
      dependOnValue: string;
    };
  }[];
}

const Step = (props: StepProps) => {
  const [value, setValue] = useState<any>({});
  const [dependList, setDependList] = useState<any>({});

  return (
    <>
      {props.list &&
        props.list.length > 0 &&
        props.list.map((v) => (
          <Form
            key={v.title}
            {...v}
            value={value}
            setValue={setValue}
            dependList={dependList}
            setDependList={setDependList}
          />
        ))}
    </>
  );
};

export default Step;
