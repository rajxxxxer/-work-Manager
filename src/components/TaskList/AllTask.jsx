import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const {userdata,setUserdata} = useContext(AuthContext);

  return (
    <div className='bg-[#1e1e1e] p-5 rounded-xl mt-6 shadow-lg'>
      {/* Table Header */}
      <div className='flex justify-between bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded font-semibold'>
        <h2 className='w-1/5 text-center'>Employee Name</h2>
        <h3 className='w-1/5 text-center'>NEWTask</h3>
        <h5 className='w-1/5 text-center'>ACTIVE TASK</h5>
        <h5 className='w-1/5 text-center'>Completed</h5>
        <h5 className='w-1/5 text-center'>Failed</h5>
      </div>

      {/* Task Rows */}
      <div className='overflow-x-auto h-[300px] mt-4 space-y-2 pr-2 custom-scroll'>
        {userdata.map((elem, index) => (
          <div
            key={index}
            className='flex justify-between items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-xl'
          >
            <h2 className='w-1/5 text-center'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-center text-blue-100'>{elem.taskCount.newTask}</h3>
            <h5 className='w-1/5 text-center text-yellow-100'>{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-center text-green-100'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 text-center text-red-100'>{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
