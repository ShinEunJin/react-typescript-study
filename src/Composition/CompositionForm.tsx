import "./styles.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./data2.json";
import CompositionSteps from "./CompositionStep";

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

  return (
    <div className="container">
      {data && (
        <div>
          <h1 className="title">{data.title}</h1>
          <div>
            {data.steps[page].map((v, i) => (
              <CompositionSteps
                key={i}
                {...v}
                surveyResult={surveyResult}
                setSurveyResult={setSurveyResult}
              />
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>다음</button>
    </div>
  );
};

export default CompositionForm;
