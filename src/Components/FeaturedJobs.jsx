import { useEffect, useState } from "react";
import Job from "./Job";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <Link to='/job'>
            <div className="text-center space-y-3 my-20">
                <h2 className="text-4xl font-bold">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={`items-center flex flex-col justify-center my-6 ${dataLength === jobs.length && 'hidden'}`}>
                <button
                onClick={()=>setDataLength(jobs.length)}
                className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">See All Jobs</button>
            </div>
        </Link>
    );
};

export default FeaturedJobs;