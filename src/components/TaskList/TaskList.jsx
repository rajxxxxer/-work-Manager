import React, { useState } from 'react';
import AceeptTask from './AceeptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks);

  const handleComplete = (taskId) => {
    console.log('Completing task:', taskId);
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: true, active: false, newTask: false, failed: false }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleFail = (taskId) => {
    console.log('Failing task:', taskId);
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, failed: true, active: false, newTask: false, completed: false }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold mb-4">Your Tasks</h1>
      <div
        className="flex overflow-x-auto gap-6 p-4 bg-gray-900 rounded-xl scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        style={{ scrollBehavior: 'smooth' }}
      >
        {
          tasks.map((elem) => {
            if (elem.active) {
              return (
                <AceeptTask
                  key={elem.id}
                  handleComplete={handleComplete}
                  handleFail={handleFail}
                  data={elem}
                />
              );
            }
            if (elem.newTask) {
              return <NewTask key={elem.id} data={elem} />;
            }
            if (elem.completed) {
              return <CompleteTask key={elem.id} data={elem} />;
            }
            if (elem.failed) {
              return <FailedTask key={elem.id} data={elem} />;
            }
            return null;
          })
        }
      </div>
    </div>
  );
};

export default TaskList;
