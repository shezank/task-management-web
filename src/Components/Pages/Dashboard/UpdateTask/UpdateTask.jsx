import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Sharde/AuthProvider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';

const UpdateTask = () => {



  const {user} = useContext(AuthContext);
  const [tasks, setTasks] = useState(['']);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {title, description, deadline, priority, _id} = useLoaderData()


  const { handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    try {
        const response = await axiosPublic.put(`/task-details/${_id}`, data); // Replace with your actual API endpoint
        setTasks([...tasks, response.data]);
        if(response.data.modifiedCount > 0) {
            Swal.fire({
                title: "Update Task!",
                text: "You clicked the button!",
                icon: "success"
              });
              navigate('/dashboard/my-added-task/')
        }
      } catch (error) {
        console.error('Error adding task:', error);
      }
  };


  return (

    <>
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Update Task</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <Controller
          name="title"
          control={control}
          defaultValue={title}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter title"
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue={description}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Enter description"
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
          Deadline
        </label>
        <Controller
          name="deadline"
          control={control}
          defaultValue={deadline}
          render={({ field }) => (
            <input
              {...field}
              type="date"
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
          Priority
        </label>
        <Controller
          name="priority"
          control={control}
          defaultValue={priority}
          render={({ field }) => (
            <select {...field} className="w-full p-2 border rounded-md">
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          )}
        />
      </div>


      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default UpdateTask;