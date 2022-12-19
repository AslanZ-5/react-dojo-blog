import { useState } from 'react';

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'My new Website', body:'some randome text',author:'mario',id:1},
        {title:'Welcome to Party', body:'some randome text',author:'mario',id:1},
        {title:'My new Website', body:'some randome text',author:'mario',id:1}
    ])
   
    return ( 
        <div className="home">
            {blogs.map(blog => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Writen by: {blog.author} </p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Home;