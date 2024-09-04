import { Link } from "react-router-dom";

const Blog = ({blog}) => {

        const {id, title, body} = blog;

    return (
      <div className="border-2 border-yellow-600 border-opacity-30 shadow-lg rounded-lg p-5">
        <h1 className="text-xl font-medium mb-3">id : {id} </h1>
        <h2 className="text-xl font-semibold "> Title : {title} </h2>
        <p className="mt-3">Description : {body} </p>
        <div className="text-center">
          <Link to={`/blogs/${id}`}>
            <button className="bg-pink-300 mt-4 font-semibold py-2.5 px-5 rounded-lg border border-blue-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Blog;