import { useState } from "react";
import { useParams } from "react-router-dom";

import Template from "./Template";
import FetchData from "./data2.json";
import Step from "./Step";

export interface FetchDataTypes {
  id: string;
  title: string;
  steps: {
    title: string;
    value: string;
    type: string;
    name?: string;
    options?: string[];
    dependOn?: {
      dependOnName: string;
      dependOnValue: string;
    };
  }[][];
}

const Page = () => {
  const [stepIdx, setStepIdx] = useState(0);

  const { id } = useParams();

  return (
    <Template>
      <div className="form-container">
        <h1 className="form-container__title">{FetchData[Number(id)].title}</h1>
        <section className="form-container__content">
          <Step list={FetchData[Number(id)].steps[stepIdx]} />
        </section>
      </div>
    </Template>
  );
};

export default Page;
