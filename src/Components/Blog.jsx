import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../Css/blog.css";

function Blog() {
  const { slug } = useParams();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [blogdata, setblogdata] = useState([]);
  useEffect(() => {
    axios
      .get(ROOT_URL + `/api/v1/getblog/${slug}`)
      .then((blogdetail) => {
        setblogdata(blogdetail.data);

        console.log(blogdata);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <>
      <h5 className="heading text-center mt-5 fw-bold">News and Blog</h5> 
      {/* <p className='text-center fw-bold'>
Explore an array of captivating blogs on technology, science, arts, and more, offering valuable insights and knowledge for curious minds to delve into.
</p> */}
      {blogdata ? (
        <div className="container mb-5 py-5 ">
          <div className="container py-5 blogcard ">
            <h3 className=" fw-bold text-center ">{blogdata.blogtitle}</h3>
            <div className="row mt-3" key={blogdata._id}>
              <div className="col-lg-6">
                <img className=" img-fluid mt-5" src={blogdata.image} />
              </div>
              <div className="col-lg-6">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogdata.blogdescription,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No blogs available</div>
      )}
    </>
  );
}

export default Blog;
