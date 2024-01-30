import { useSelector } from 'react-redux';

import Tables from '../../Components/Features/Tables'


const Home = () => {

    const tables = useSelector((state) => state.tables); 

    return (
        <div>
            <h1>Home</h1>
            <Tables tables={tables} />
        </div>

    )

}

export default Home;