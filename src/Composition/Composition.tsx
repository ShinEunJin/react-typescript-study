import "./styles.scss";
import data from "./data1.json";
import { Link } from "react-router-dom";
import Template from "./Template";

const Composition = () => {
  return (
    <Template>
      {data.map((v, i) => (
        <Link className="survey-index" key={i} to={`/survey/${v.id}`}>
          {i + 1}. {v.title}
        </Link>
      ))}
    </Template>
  );
};

export default Composition;
