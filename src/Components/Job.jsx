import PropTypes from 'prop-types';
import { AiOutlineDollar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='border rounded-xl p-8 space-y-3'>
            <img src={logo} alt="" />
            <h3 className='text-xl font-semibold'>{job_title}</h3>
            <h3 className='text-xl '>{company_name}</h3>
            <div className='flex gap-4'>
                <button className='btn btn-outline btn-primary'>{remote_or_onsite}</button>
                <button className='btn btn-outline btn-primary'>{job_type}</button>
            </div>
            <div className='flex gap-6'>
                <h2 className='flex items-center text-gray-600'><MdLocationOn className='text-2xl mr-2' />{location}</h2>
                <h2 className='flex items-center text-gray-600'><AiOutlineDollar className='text-2xl mr-2' />Salary: {salary}</h2>
            </div>
            <Link to={`/job/${id}`}>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-3'>View Details</button>
            </Link>
        </div>
    );
}

Job.propTypes = {
    job: PropTypes.object
};

export default Job;