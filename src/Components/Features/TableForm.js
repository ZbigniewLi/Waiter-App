import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';


import { getAllStatuses } from "../../Redux/statusesRedux";


const TableForm = ({ handleSubmit, ...props }) => {

    const statuses = useSelector(getAllStatuses);

    console.log(statuses); // Dodaj tę linię





    const [bill, setBill] = useState(props.bill || '');
    const [people, setPeople] = useState(props.people || '');
    const [status, setStatus] = useState(props.status || '');
    const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
    const [loading, setLoading] = useState(false);

    const validate = (handler) => (e) => {
        e.preventDefault();
        // Dodaj walidację, jeśli to konieczne
        handler(e, { bill, people, status, maxPeople });
    };

    useEffect(() => {
        if (maxPeople < 0)
            setMaxPeople(0)
        if (maxPeople > 10)
            setMaxPeople(10)
        if (people < 0)
            setPeople(0)
        if (people > maxPeople)
            setPeople(maxPeople)
    }, [people, maxPeople])

    useEffect(() => {
        if (status === 'Busy') {
            // Jeśli status jest "Busy", ustawiamy kwotę rachunku na zero
            setBill(0);
        }
    }, [status]);

    useEffect(() => {
        // Jeśli status zmieni się na "Cleaning" lub "Free", zeruj zawartość pola "People amount"
        if (status === 'Cleaning' || status === 'Free') {
            setPeople(0);
        }
    }, [status]);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false); 
        },300); 
      }, []);



    return (
        <div>
        {loading && <Button variant="tuned-light">
                <Spinner animation="border" variant="primary" size="lg" />
                Loading ...
            </Button>}




        <form onSubmit={validate(handleSubmit)}>

            


            {status === "Busy" && (
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Bill $</Form.Label>
                    <Form.Control
                        value={bill}
                        onChange={e => setBill(e.target.value)}
                        type="text" placeholder="Enter Bill"
                    />

                </Form.Group>
            )}



            <Form.Group className="mb-3 px-1">
                <Form.Label className="px-0">Statuses</Form.Label>
                <Form.Select
                    value={status} onChange={e => setStatus(e.target.value)}>
                    <option>Select Status</option>
                    {statuses.map((status, index) => (
                        <option key={index} value={status}>
                            {status}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail" style={{ gap: '8px' }}>
                <Form.Label>People</Form.Label>
                <Form.Control style={{ width: '45px' }}
                    id="People"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                />
                /
                <Form.Control style={{ width: '45px' }}
                    id="People"
                    value={maxPeople}
                    onChange={(e) => setMaxPeople(e.target.value)}
                />
            </Form.Group>


            <Button variant="primary" type="submit">Update</Button>


        </form>
        </div>




    );

};
export default TableForm;