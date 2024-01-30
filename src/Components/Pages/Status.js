import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { getAllStatuses } from "../../Redux/statusRedux";

const Statuses = () => {

  const statuses = useSelector(getAllStatuses);

  return (
    <section>
      <h1>Statuses</h1>
      <ListGroup className="mt-5">
        {statuses.map((status,index) => (
          <ListGroup.Item key={index}>
            <Link to={`/status/${status}`}>{status}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

export default Statuses;