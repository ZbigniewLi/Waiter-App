import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTablebyId } from '../../Redux/tablesRedux';
import { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { editTable } from '../../Redux/tablesRedux';

const SingleTable = () => {
  const { id } = useParams(); // Pobranie id z adresu URL
  const table = useSelector(state => getTablebyId(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dodaj definicję stanu dla selectedStatus
  const [selectedStatus, setSelectedStatus] = useState(table.status);
  const [updatedBill, setUpdatedBill] = useState(table.bill);
  const [updatedPeople, setUpdatedPeople] = useState(table.people);

  const handleStatusChange = () => {
    dispatch(editTable({ id: table.id, status: selectedStatus, bill: updatedBill, people: updatedPeople }));
  };
  const handleBillChange = (newBill) => {
    dispatch(editTable({ id: table.id, status: table.status, bill: newBill, people: table.people }));
  };

  const handlePeopleChange = (newPeople) => {
    dispatch(editTable({ id: table.id, status: table.status, bill: table.bill, people: newPeople }));
  };
  if (!table) {
    return <div>Table not found</div>;
  }

  return (
    <div>
      <h1 className='fs-4'>{table.name}</h1> 
      <p dangerouslySetInnerHTML={{ __html: table.content }} />
      
  
      <Row className="mb-3">
        <Col>
          <Form.Label className='fs-5'><b>Bill</b> $</Form.Label>
          <Form.Control
            type="text"
            value={table.bill}
            onChange={(e) => handleBillChange(e.target.value)}
            size="sm" // Dodajemy klasę 'size="sm"' dla mniejszego rozmiaru
          />
        </Col>
        <Col>
          <Form.Label className='fs-5'><b>People:</b></Form.Label>
          <Form.Control
            type="text"
            value={table.people}
            onChange={(e) => handlePeopleChange(e.target.value)}
            size="sm" // Dodajemy klasę 'size="sm"' dla mniejszego rozmiaru
          />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formStatus">
        <Form.Label className='fs-5'><b>Status</b>:</Form.Label>
        <Form.Select
          value={table.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          size="sm" // Dodajemy klasę 'size="sm"' dla mniejszego rozmiaru
        >
          {['Free', 'Reserved', 'Busy', 'Cleaning'].map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    

      <Link to={`/table/edit/${table.id}`}>
        <Button variant="primary">Update</Button>
      </Link>
    </div>
  );
};

export default SingleTable;
