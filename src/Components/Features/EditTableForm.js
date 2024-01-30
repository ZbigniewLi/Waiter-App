import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom"
import { editTable, getTablebyId } from '../../Redux/tablesRedux';
import TableForm from './TableForm';

const EditTableForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const post = useSelector(state => getTablebyId(state, id));

    

    const handleSubmit = (e, tableData )=> {
        //e.preventDefault();
        const {bill,people,status, maxPeople } = tableData
        // Tutaj można wykorzystać dispatch, aby dodać post do magazynu za pomocą akcji Redux
        dispatch(editTable({ bill, people, status, id, maxPeople}));
        // Przekierowanie po dodaniu postu
        navigate('/');
    };


    return (
       <TableForm {...post} handleSubmit={handleSubmit}/>
    );
};

export default EditTableForm;