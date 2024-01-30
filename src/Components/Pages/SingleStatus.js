import { useSelector } from 'react-redux/es/hooks/useSelector';
import Tables from '../../Components/Features/Posts'
import { useParams } from 'react-router-dom';


const SingleStatus = () => {

    const {id} = useParams()
    
    const tables = useSelector((state) => state.tables.filter(table => table.status === id)); 

    return (
        <div>
            <h1>{id}</h1>
            <Tables tables={tables} />
        </div>

    )

}

export default SingleStatus;