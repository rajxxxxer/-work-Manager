import Header from "../../other/Header";
import Taskno from "../../other/Taskno";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data,changeuser }) => {
  console.log("EmployeeDashboard data", data.tasks);
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-gray-100">
      <div className="max-w-6xl mx-auto rounded-xl shadow-xl bg-[#1f2937]/80 backdrop-blur-md p-6 sm:p-10 space-y-8">
        <Header changeuser={changeuser} data={data} />
        <Taskno data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
