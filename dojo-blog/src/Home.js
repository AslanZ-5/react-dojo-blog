import { useState, useEffect } from 'react';
import ItemList from './ItemList';
const Home = () => {
    const [blogs,setBlogs] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [errFetch,setError] = useState(null)
  
   useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(data => {
            if(!data.ok){
                throw Error("Couldn't fetch the data")
            }
            return data.json()
        } )
        .then(data => {
            setBlogs(data)
            setIsPending(false)
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        })
   },[])
    return ( 
        <div className="home">
            { errFetch && <div>{errFetch}</div>}
            { isPending && <div> Loading...</div>}
            { blogs && <ItemList  blogs={blogs} title="All blogs"/> }
       
            {/* <ItemList blogs={blogs.filter(item => item.author === 'mario')} title="All blogs"/> */}
        </div>
     );
}
 
export default Home;