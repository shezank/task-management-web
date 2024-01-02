import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import { AuthContext } from '../../../Sharde/AuthProvider/AuthProvider';

const Mytask = () => {

    const {user} = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    const [tasks, setTasks] = useState(['']);
    console.log(tasks)
    useEffect(() => {
        // Fetch tasks from your API when the component mounts

        fetchTasks();

      }, []);
    
      const fetchTasks = async () => {
        try {
          const response = await axiosPublic.get(`/tasks?email=${user?.email}`);
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

      const onDeleteTask = async (taskId) => {
        try {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
              await axiosPublic.delete(`/tasks/${taskId}`);
              const remaining = tasks.filter(product => product._id !== taskId)
              setTasks(remaining);  
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };

      const handleDelete = (task) => {
        onDeleteTask(task._id)
        console.log(task)
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-4xl my-3'>My Task List</h2>
            <hr />
  <table className="table">
    {/* head */}
    <thead className=' table-header-group'>
      <tr>
        <th className='table-'>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.length > 0 ? tasks.map((task, index) => (
          <tr key={task._id}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td className='flex gap-4'>
              <button className="btn btn-danger btn-secondary btn-sm" onClick={() => handleDelete(task)}>Delete</button>
              <Link to={`/dashboard/update-task/${task._id}`} className="btn btn-accent btn-sm">Update</Link>
            </td>
          </tr>
        )) : <><h2>Task Not Available</h2></>
      }
    </tbody>
  </table>
  <ToastContainer />
</div>
    );
};

export default Mytask;