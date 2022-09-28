import "./styles.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./data2.json";
import CompositionStep from "./CompositionStep";
import Template from "./Template";

interface DataTypes {
  id: string;
  title: string;
  steps: {
    title: string;
    type: string;
    name?: string;
    options?: string[];
    dependOn?: {
      dependOnName: string;
      dependOnValue: string;
    };
  }[][];
}

const CompositionForm = () => {
  const [data, setData] = useState<DataTypes | null>(null);
  const [page, setPage] = useState(0);

  // 하위 컴포넌트에서 input 가지고 놀다가 망함. 상위 컴포넌트 항상 생각
  const [surveyResult, setSurveyResult] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    if (id) setData(Data[Number(id)]);
  }, [id]);

  const handleClickBtn = (e: "back" | "next") => {
    if (e === "back" && page !== 0) return setPage((prev) => prev - 1);
    if (e === "next" && data && page !== data.steps.length - 1)
      return setPage((prev) => prev + 1);
  };

  return (
    <Template>
      {data && (
        <div className="form-container">
          <h1 className="form-container__title">{data.title}</h1>
          <main className="form-container__content">
            {data.steps[page].map((v, i) => (
              <CompositionStep
                key={i}
                {...v}
                surveyResult={surveyResult}
                setSurveyResult={setSurveyResult}
              />
            ))}
          </main>
        </div>
      )}
      <div className="btn-container">
        <button
          style={{ visibility: page === 0 ? "hidden" : "visible" }}
          onClick={() => handleClickBtn("back")}
        >
          이전
        </button>
        <button onClick={() => handleClickBtn("next")}>
          {data && page === data.steps.length - 1 ? "제출" : "다음"}
        </button>
      </div>
    </Template>
  );
};

export default CompositionForm;
