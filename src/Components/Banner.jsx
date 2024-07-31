import BannerImg from '../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-68px)] bg-base-200 mb-10 rounded-b-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-sm lg:max-w-xl lg:relative lg:top-[68px]' src={BannerImg} alt="" />
                <div className="max-w-xl">
                    <h1 className="text-3xl md:text-6xl font-bold">One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;