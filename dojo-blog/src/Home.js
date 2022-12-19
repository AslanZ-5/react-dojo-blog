import { useState } from 'react';

const Home = () => {
    const [name,setName] = useState('aslan')
    const changeName = () => {
        if (name === 'aslan'){
            setName('isa')
        }else{
            setName('aslan')
        }
    }
    return ( 
        <div className="home">
            <h1>Welcome to Home Dear {name}!!!!</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
     );
}
 
export default Home;