import classes from "./PendingList.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

const PendingList = ({ status }) => {
  const color = (status) => {
    if (status === "Rejected") {
      return "bg-red-200 text-red-600 ";
    } else if (status === "Accepted") {
      return "bg-green-200 text-green-600";
    } else {
      return "bg-yellow-100 text-yellow-500"; 
    }
  };

  return (
    <div className="max-h-full" id="PendingList">
      
      <div className={classes.container}>
        <h2>My Applications</h2>
        <div className="rounded-md border-[1px] border-gray-300">
          <table className={classes.table}>
            <thead className="bg-blue-200">
              <tr>
                <td className="rounded-tl-md w-[25%]">COMPANY</td>
                <td className="w-[25%]">PROFILE</td>
                <td className="w-[15%]">APPLIED ON</td>
                <td className="w-[15%]">NUMBER OF APPLICANTS</td>
                <td className="rounded-tr-md w-[20%]">APPLICATION STATUS</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-gray-100">
                <td>Google</td>
                <td className="flex items-center justify-between gap-2">
                  <h1>Position</h1>
                  <span>
                    <BsBoxArrowUpRight
                      size={13}
                      className="text-blue-500"
                      strokeWidth={0.6}
                    />
                  </span>
                </td>
                <td>14 Oct'23</td>
                <td>3124</td>
                <td>
                  <span className={`p-2 rounded-2xl ` + color(status)}>
                    {status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingList;