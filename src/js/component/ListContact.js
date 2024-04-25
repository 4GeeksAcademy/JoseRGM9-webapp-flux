import React, { useContext, useEffect, } from "react";
import { Context } from "../store/appContext";
import { Link, } from "react-router-dom";

export const ListContact = () => {
  const { store, actions } = useContext(Context);

  const eliminarContacto = (id) => {
    actions.DeleteContact(id)
      .then(() => actions.Contacts());
  };

  useEffect(() => {
    actions.Contacts()
    console.log(store)
  }, [])


  return (
    <div>
      {store.contactos.map((contact, index) => (
        <li key={index} className="list-group-item">
          <div className="row align-items-center">
            <div className="col-3">
              <img src="https://static.wikia.nocookie.net/esstarwars/images/d/de/Grievoushead.jpg/revision/latest?cb=20101204131756" alt="User" className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px" }} />
              <Link to={`/contactCard/${contact.id}`}>
                <button className="botonContacto btn btn-primary">Contacto</button>
              </Link>
            </div>
            <div className="col-6">
              <h5>{contact.name}</h5>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
              <p>{contact.email}</p>
            </div>
            <div className="col-3 text-right">
              <button onClick={() => eliminarContacto(contact.id)}
                type="button"
                className="btn btn-danger float-end">
                <i className="fas fa-trash-alt"></i>
              </button>
              <Link to={`/EditContact/${contact.id}`}>
                <button className="btn btn-primary float-end">
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </div>
  )
};