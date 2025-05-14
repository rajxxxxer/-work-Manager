import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer bg-emerald-300">
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">{data.category}</span>
      <span className="text-xs text-gray-700">{data.taskDate}</span>
    </div>
    <h2 className="text-lg font-bold text-gray-900 mb-2">{data.taskTitle}</h2>
    <p className="text-sm text-gray-800">
     {data.taskDescription}
    </p>
    <div className='mt-2'>
    <button className="px-4 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition-colors duration-300">
  FAILED
</button>
    </div>
  </div>
  )
}

export default FailedTask