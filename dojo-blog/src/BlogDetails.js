import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams()
    const history = useHistory()
    const {data:blog,isPending,errFetch} = useFetch('http://localhost:8000/blogs/'+id)
    const deleteHandle = () => {
        fetch('http://localhost:8000/blogs/'+id,{
            method:"DELETE"
        }).then(
            history.push('/')
        )
    }
    return ( 
        <div className="blog-details">
            {isPending && <div> Loading...</div>}
            {errFetch && <div>errFetch</div>}
           {blog &&  <article>
            <h2>{blog.title}</h2>
            <p>Writen by: {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={deleteHandle}>Delete</button>
            </article>}
            
        </div>
     );
}
 
export default BlogDetails;