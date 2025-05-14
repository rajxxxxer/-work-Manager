import React from 'react';
import Header from '../../other/Header';
import AllTask from '../TaskList/AllTask';
import Createtask from '../TaskList/Createtask';

const AdminDashboard = ({ data,changeuser }) => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-[#1f1f1f] via-[#121212] to-black p-6 text-white'>
      
      <Header changeuser={changeuser} data={data} />

     
<Createtask></Createtask>

  <AllTask />
    
    </div>
  );
};

export default AdminDashboard;
