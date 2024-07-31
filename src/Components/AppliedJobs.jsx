import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <h3 className="text-3xl text-center font-bold my-24">Applied Jobs</h3>
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="btn m-1 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">Filter By <span><IoMdArrowDropdown className="text-2xl" /></span></summary>
                    <ul className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <div className="card card-side bg-base-100 border-2 my-6 flex flex-col md:flex-row">
                            <figure>
                                <img
                                    src={job.logo} className="p-4"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{job.job_title}</h2>
                                <p>{job.company_name}</p>
                                <div className="flex gap-6"><button className="btn btn-outline btn-primary">{job.remote_or_onsite}</button><button className="btn btn-outline btn-primary">{job.job_type}</button></div>
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <h2 className='flex items-center text-gray-600'><MdLocationOn className='text-2xl mr-2' />{job.contact_information.address}</h2>
                                    <h2 className='flex items-center text-gray-600'><AiOutlineDollar className='text-2xl mr-2' />Salary: {job.salary}</h2>
                                </div>
                            </div>
                            <div className="card-actions justify-center md:justify-end flex items-center mr-6 mb-4">
                                <Link
                                    to={`/job/${job.id}`} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</Link>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;