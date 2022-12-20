import {Link} from 'react-router-dom'
const ItemList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
        {blogs.map(blog => {
            return (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blog/${blog.id}`}><h2>{blog.title}</h2></Link>
                    <p>Writen by: {blog.author} </p>
                   
                </div>
            )
        })}
    </div> );
}
 
export default ItemList;