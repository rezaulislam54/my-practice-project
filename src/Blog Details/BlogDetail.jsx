import { useLoaderData, useNavigate } from "react-router-dom";

const BlogDetail = () => {
     const Navigate = useNavigate();
    const details = useLoaderData();
    const handleNavigate = () =>{
        Navigate(-1);
    }
    const {id, title, body} = details;
    return (
      <div className="border-2 border-yellow-800 rounded-lg w-96 p-5 bg-gray-200 mx-auto mt-10">
        <h1 className="text-2xl font-semibold ">Id : {id} </h1>
        <h1 className="text-xl font-semibold my-3">Title : {title} </h1>
        <h1>Description : {body} </h1>
        <div className="text-center">
          <button onClick={handleNavigate} className="btn px-9 py-2.5 mt-4 btn-warning">
            Previous
          </button>
        </div>
      </div>
    );
};

export default BlogDetail;