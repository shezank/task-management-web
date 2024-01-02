import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';

const TaskList = ({ title, tasks, status, onDeleteTask, onEditTask }) => {

    const handleDelete = (task) => {
        onDeleteTask(task._id)
    }

  return (
    <div className="w-full p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <Droppable droppableId={status} key={status}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`bg-gray-100 p-4 rounded-md ${
              snapshot.isDraggingOver ? 'border-dashed border-2' : ''
            }`}
          >
            {tasks.map((task, index) => (
               <Draggable draggableId={task._id} index={index}>
               {(provided, snapshot) => (
                 <div
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   ref={provided.innerRef}
                   className={`p-2 bg-white rounded-md shadow-md mb-2 ${
                     snapshot.isDragging ? 'opacity-50' : ''
                   }`}
                 >
                   <h3 className="text-lg font-semibold">{task.title}</h3>
                   <p className="text-sm">{task.description}</p>
                   <p className="text-xs mt-2"><strong>Priority</strong>: {task.priority}</p>
                   <p className="text-xs mb-2"><strong>Deadline</strong>: {task.deadline}</p>
                   <button className='btn btn-sm mr-2 btn-accent text-white' onClick={()=> handleDelete(task)}>Delete</button>
                   <Link to={`/dashboard/update-task/${task._id}`} className='btn btn-sm  btn-primary text-white'>Edit</Link>
                 </div>
               )}
             </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};


export default TaskList;
