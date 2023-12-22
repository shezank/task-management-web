import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import { AuthContext } from '../../../Sharde/AuthProvider/AuthProvider';

const BarHome = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm({ defaultValues: { email: user.email, status: 'todos' } });
    const axiosPublic = useAxiosPublic();
    const onSubmit = (data) => {
        axiosPublic.post('/tasks', data)
            .then(res => console.log(res.data))
    }
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold my-4'>Task List</h1>
            <div className='flex justify-between bg-white p-2'>
                <h1 className='text-3xl font-semibold'>Tasks</h1>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className='inline-flex text-xl items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none' onClick={() => document.getElementById('my_modal_3').showModal()}><FaPlus className='pr-2 text-2xl'></FaPlus>Add task</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Task Title</span>
                                </div>
                                <input
                                    {...register("title", { required: true })}
                                    type="text"
                                    placeholder="Enter Task Title"
                                    className="input input-bordered w-full" />

                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Task description</span>
                                </div>
                                <textarea
                                    {...register("description", { required: true })}
                                    type="text"
                                    placeholder="Enter Task description"
                                    className="input input-bordered w-full" />

                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Task deadlines</span>
                                </div>
                                <input
                                    {...register("deadlines", { required: true })}
                                    type="date"
                                    placeholder="Enter Task list"
                                    className="input input-bordered w-full" />

                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Task priority</span>
                                </div>

                                <select  {...register("priority", { required: true })} name="" id="" className="input input-bordered w-full">
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>

                            </label>


                            <button className='flex mt-3 text-xl items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none w-full' type='submit'><FaPlus className='pr-2 text-2xl'></FaPlus>Add task</button>
                        </form>

                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default BarHome;