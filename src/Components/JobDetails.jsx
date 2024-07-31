import { AiOutlineDollar, AiTwotoneMail } from "react-icons/ai";
import { FaPhone, FaRegKeyboard } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title } = job;
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied successfully');
    }
    return (
        <div>
            <div className="flex items-center justify-center mt-32 mb-10">
                <h2 className="text-4xl font-bold">Job Details</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
                <div className="md:col-span-3 space-y-6">
                    <p><span className="font-bold">Job Description: </span>{job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements: </span> <br />{educational_requirements}</p>
                    <p><span className="font-bold">Experiences: </span> <br />
                        {experiences}</p>
                </div>
                <div>
                    <div className="bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-xl p-4">
                        <h3 className="font-bold">Job Details</h3>
                        <hr className="my-4 mx-5" />
                        <h2 className='flex items-center text-gray-600'><AiOutlineDollar className='text-2xl mr-2' />Salary: {salary}</h2>
                        <h2 className='flex items-center text-gray-600 my-3'><FaRegKeyboard className='text-2xl mr-2' />Job Title: {job_title}</h2>
                        <h3
                            className="font-bold">Contact Information</h3>
                        <hr className="my-4 mx-5" />
                        <h2 className='flex items-center text-gray-600 my-3'><FaPhone className='mr-2' />Phone: {contact_information.phone}</h2>
                        <h2 className='flex items-center text-gray-600 my-3'><AiTwotoneMail className='text-xl mr-2' />Email: {contact_information.email}</h2>
                        <h2 className='flex items-center text-gray-600 my-3'><MdLocationOn className='text-4xl mr-2' />Address: {contact_information.address}</h2>
                    </div>
                    <div>
                        <button onClick={handleApplyJob}
                         className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  w-full mt-4">APPLY NOW</button>
                         {/* <Link to='/appliedJobs' className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  w-full mt-4 text-white">
                         Apply Now
                         </Link> */}
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default JobDetails;

// 7.39