import ItemList from './ItemList';
import useFetch from './useFetch';
const Home = () => {
    const {data:blogs,isPending,errFetch} = useFetch( 'http://localhost:8000/blogs')
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