import PropTypes from 'prop-types';

const Category = ({category}) => {
    const {logo, availability, category_name} = category;
    return (
        <div className='border rounded-xl shadow-xl bg-base-200 p-6 space-y-3'>
            <img src={logo} alt="" />
            <h3 className='text-xl font-bold'>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;