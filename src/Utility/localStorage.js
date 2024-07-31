const getStoredJobApplication = () =>{
    const storedJObApplication = localStorage.getItem('job-applications');
    if (storedJObApplication) {
        return JSON.parse(storedJObApplication);
    }
    return [];
}

const saveJobApplication = (id) =>{
    const storedJObApplication = getStoredJobApplication();
    const exists = storedJObApplication.find(jobId => jobId === id);
    if(!exists){
        storedJObApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJObApplication));
    }
}

export {getStoredJobApplication, saveJobApplication};