import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('mario')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()
    const handler = (e) => {
        e.preventDefault()
        const blog = {title,body,author}
        setIsPending(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
            method: "POST",
            headers: {"Content-Type":'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            // history.go(-1) 
            history.push('/')
        }
            
        )
        },1000)
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handler}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)} >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            
            </form>
        </div>
     );
}
 
export default Create;