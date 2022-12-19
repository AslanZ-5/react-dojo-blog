import { useState, useEffect } from 'react';
import ItemList from './ItemList';
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'My new Website', body:'some randome text',author:'mario',id:1},
        {title:'Welcome to Party', body:'some randome text',author:'lore',id:2},
        {title:'Web dev top tips', body:'some randome text',author:'mario',id:3}
    ])
    const deleteBlog = (id) =>{
        const newArr = blogs.filter(item => item.id !== id)
        setBlogs(newArr)
    }
   useEffect(() => {
    console.log('this is useEffect hook has been initiated')
   })
    return ( 
        <div className="home">
            <ItemList deleteBlog={deleteBlog} blogs={blogs} title="All blogs"/>
            {/* <ItemList blogs={blogs.filter(item => item.author === 'mario')} title="All blogs"/> */}
        </div>
     );
}
 
export default Home;