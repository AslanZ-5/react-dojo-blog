import { useState, useEffect } from 'react';
import ItemList from './ItemList';
const Home = () => {
    const [blogs,setBlogs] = useState(null)
    const [name,setName] = useState('musa')
  
   useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(data => data.json())
        .then(data => setBlogs(data))
   },[])
    return ( 
        <div className="home">
            { blogs && <ItemList  blogs={blogs} title="All blogs"/> }
       
            {/* <ItemList blogs={blogs.filter(item => item.author === 'mario')} title="All blogs"/> */}
        </div>
     );
}
 
export default Home;