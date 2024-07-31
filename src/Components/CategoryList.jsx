import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-3 mb-10">
                <h3 className="text-3xl md:text-4xl font-bold">Job Category List</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    categories.map(category => <Category category={category} key={category.id}/>)
                }
            </div>
        </div>
    );
};

export default CategoryList;