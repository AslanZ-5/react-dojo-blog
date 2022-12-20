import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('mario')
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
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
                <button>Add Blog</button>
                <p>Title:  {title}</p>
                <p>Body:  {body}</p>
                <p>Author:  {author}</p>
            </form>
        </div>
     );
}
 
export default Create;