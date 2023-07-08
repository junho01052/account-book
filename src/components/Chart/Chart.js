import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return <div className="chart">{props.dataPoints}</div>;
};

export default Chart;
