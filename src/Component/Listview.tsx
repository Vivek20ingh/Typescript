import { ListGroup } from "react-bootstrap";

const Listview =({d})=>{
    return(
        <ListGroup.Item
        as="li" className="d-flex justify-content-between align-items-start"react js >
            <div className="ms-2 me-auto">
                 <div className="fw-bold">NAME: {d.name}</div>
                 <div className="fw-bold">CITY: {d.city}</div>
                  <div className="fw-bold">AGE: {d.age}</div>
          </div>
       </ListGroup.Item>
    )
}

export default  Listview;