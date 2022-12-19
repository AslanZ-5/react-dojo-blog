const ItemList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
        {blogs.map(blog => {
            return (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by: {blog.author} </p>
                   
                </div>
            )
        })}
    </div> );
}
 
export default ItemList;