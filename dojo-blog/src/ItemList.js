const ItemList = ({blogs,title,deleteBlog}) => {
    return ( 
        <div className="blog-list">
        {blogs.map(blog => {
            return (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by: {blog.author} </p>
                    <button onClick={() => deleteBlog(blog.id)}>Delete blog</button>
                </div>
            )
        })}
    </div> );
}
 
export default ItemList;