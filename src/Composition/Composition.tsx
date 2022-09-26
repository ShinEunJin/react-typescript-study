import "./styles.scss";
import data from "./data1.json";
import { Link } from "react-router-dom";

const Composition = () => {
  return (
    <div className="container">
      <div className="survey-container">
        {data.map((v, i) => (
          <Link className="survey-index" key={i} to={`/survey/${v.id}`}>
            {v.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Composition;
