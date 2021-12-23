import { ListGroup } from "react-bootstrap";

const Listview = ({ masterData, handleDelete, handleUpdate }) => {
    return (

        <div className="split right">
            {masterData.map((d, idx) =>
                <ListGroup.Item key={d.unique_id}
                    as="li" className="d-flex justify-content-between align-items-start" react js >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">NAME: {d.name}</div>
                        <div className="fw-bold">CITY: {d.city}</div>
                        <div className="fw-bold">AGE:   {d.age}</div>
                    </div>
                    <button onClick={() => handleDelete(d.unique_id)}>Delete</button>
                    <button onClick={() => handleUpdate(d.unique_id)} >Update</button>
                </ListGroup.Item>)}
        </div>
    )
}

export default Listview;