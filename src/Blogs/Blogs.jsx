import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
        const blogs = useLoaderData();

    return (
      <>
        <div>
          <h2 className="text-2xl font-bold text-center my-8"> Total Blogs : {blogs.length}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
          </div>
        </div>
      </>
    );
};

export default Blogs;