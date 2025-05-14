const Taskno=({data})=>{
return(
<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
  <div className='rounded-xl py-6 px-6 bg-blue-500 shadow-md text-white transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-blue-600'>
    <h2 className='text-4xl font-bold mb-1'>{data.taskCount.newTask}</h2>
    <h3 className='text-lg font-medium'>New Task</h3>
  </div>

  <div className='rounded-xl py-6 px-6 bg-green-500 shadow-md text-white transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-green-600'>
    <h2 className='text-4xl font-bold mb-1'>{data.taskCount.completed}</h2>
    <h3 className='text-lg font-medium'>Completed Task</h3>
  </div>

  <div className='rounded-xl py-6 px-6 bg-yellow-400 shadow-md text-gray-900 transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-500'>
    <h2 className='text-4xl font-bold mb-1'>{data.taskCount.active}</h2>
    <h3 className='text-lg font-medium'>Accepted Task</h3>
  </div>

  <div className='rounded-xl py-6 px-6 bg-red-500 shadow-md text-white transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-red-600'>
    <h2 className='text-4xl font-bold mb-1'>{data.taskCount.failed}</h2>
    <h3 className='text-lg font-medium'>Failed Task</h3>
  </div>
</div>


)
}
export default Taskno