import React, {  useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const Createtask = () => {

 const{userdata,setUserdata} =useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignto, setAssignto] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [task, setTask] = useState({});
  const handlesubmit = (e) => {
    e.preventDefault();
   // console.log('jhk');
    setTask({taskTitle, taskDate, assignto, category, taskDescription,active:true, newTask:true, completed:false, failed:false});
   // const data=JSON.parse(localStorage.getItem('employees'));
    const data=userdata;
    data.forEach((item)=>{
      if(assignto===item.firstName){
      //  console.log(task)
        item.tasks.push(task);
        item.taskCount.newTask++;
    }
  })
  setUserdata(data);
  console.log(data)
 // localStorage.setItem('employees', JSON.stringify(data));
  setTaskTitle('');
  setTaskDate('');
  setAssignto('');
  setCategory('');
  setTaskDescription('');
  
  }



   
    

  
  return (
    <div className='p-6 bg-[#1e1e1e] mt-6 rounded-xl shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4'>Create Task</h2>
      <form   onSubmit={(e)=>{handlesubmit(e)}}  className='grid md:grid-cols-2 gap-6'>
        <div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-400 mb-1'>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => { setTaskTitle(e.target.value) }}
              required
              type='text'
              placeholder='Enter task title'
              className='w-full py-2 px-3 text-sm rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-emerald-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-400 mb-1'>Date</label>
            <input
              value={taskDate}
              onChange={(e) => { setTaskDate(e.target.value) }}
              required
              type='date'
              className='w-full py-2 px-3 text-sm rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-emerald-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-400 mb-1'>Assign To</label>
            <input
              value={assignto}
              onChange={(e) => { setAssignto(e.target.value) }}
              type='text'
              placeholder='Employee name'
              className='w-full py-2 px-3 text-sm rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-emerald-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm text-gray-400 mb-1'>Category</label>
            <input
              value={category}
              onChange={(e) => { setCategory(e.target.value) }}
              required
              type='text'
              placeholder='Task category'
              className='w-full py-2 px-3 text-sm rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-emerald-500'
            />
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='mb-4'>
            <label className='block text-sm text-gray-400 mb-1'>Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => { setTaskDescription(e.target.value) }}
              required
              rows='6'
              placeholder='Describe the task in detail...'
              className='w-full py-2 px-3 text-sm rounded bg-[#2a2a2a] text-white border border-gray-600 resize-none focus:outline-none focus:border-emerald-500'
            ></textarea>
          </div>

          <div className='text-right'>
            <button
          
              type='submit'
              className='mt-4 bg-emerald-500 text-white font-semibold py-2 px-6 rounded hover:bg-emerald-600 transition duration-300 shadow-md'
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Createtask