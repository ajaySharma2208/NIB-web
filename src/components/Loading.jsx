import React from "react";
import { Progress } from "@material-tailwind/react";
import { MdOutlineErrorOutline as AlertCircle } from "react-icons/md";
import { BiBarChartAlt2 as BarChart2 } from "react-icons/bi";

const Loading = ({
  type = "spinner",
  message = "Loading...",
  error = null,
  height = "h-64",
  iconSize = "h-12 w-12",
  colSpan = 1,
}) => {
  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center ${height} text-red-600`}
      >
        <AlertCircle className={`${iconSize} mb-2`} />
        <p>{error}</p>
      </div>
    );
  }

  if (type === "spinner") {
    return (
      <div className={`flex justify-center items-center ${height}`}>
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (type === "chart") {
    const [progress, setProgress] = React.useState(0);


    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((p) => (p < 90 ? p + 10 : p));
      }, 400);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full text-center">
        <div className="animate-pulse flex justify-center gap-2 h-64 items-end">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-4 bg-gray-300 rounded-t-md"
              style={{ height: `${Math.random() * 100 + 30}px` }}
            ></div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">{message}</p>
        <div className="w-48 mx-auto mt-2">
          <Progress value={progress} color="blue" />
          <p className="text-xs text-gray-500 mt-1">{progress}% Loaded</p>
        </div>
      </div>
    );
  }

  if (type === "table") {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((p) => (p < 90 ? p + 10 : p));
      }, 400);
      return () => clearInterval(interval);
    }, []);

    return (
      <tr>
        <td colSpan={colSpan} className="p-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-3"></div>
            <p className="text-sm text-gray-600">{message}</p>
            <div className="w-48 mt-3">
              <Progress value={progress} color="blue" />
              <p className="text-xs text-gray-500 mt-1">{progress}% Loaded</p>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  if (type === "no-data") {
    return (
      <div
        className={`flex flex-col items-center justify-center ${height} text-gray-500`}
      >
        <BarChart2 className={`${iconSize} mb-2`} />
        <p>No data available</p>
      </div>
    );
  }

  return null;
};

export default Loading;
