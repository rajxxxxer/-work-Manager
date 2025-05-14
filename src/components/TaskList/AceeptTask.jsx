import React from 'react';

const AceeptTask = ({ data, handleComplete, handleFail }) => {
  const handleComp = () => {
    console.log(data.id);
    handleComplete(data.id); // Call parent handler with task ID
  };

  const handlefailed = () => {
    console.log(data.id);
    handleFail(data.id); // Call parent handler with task ID
  };

  return (
    <div className="flex-shrink-0 w-[300px] p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer bg-yellow-400">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">{data.category}</span>
        <span className="text-xs text-gray-700">{data.taskDate}</span>
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-2">{data.taskTitle}</h2>
      <p className="text-sm text-gray-800">
        {data.taskDescription}
      </p>
      <div className="flex justify-between  mt-4">
        <button className="bg-green-500 mr-2 text-white px-4 py-2 rounded hover:bg-green-800" onClick={handleComp}>Mark COMPLTED</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800" onClick={handlefailed}>Mark FAILED</button>
      </div>
    </div>
  );
};

export default AceeptTask;
