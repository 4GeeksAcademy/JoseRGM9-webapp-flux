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
    <div className="containerList">
      {store.contactos && store.contactos.map((contact, index) => (
        <li key={index} className="list-group-item">
          <div className="row align-items-center espacioFooter">
            <div className="col-md-2 col-sm-4 text-center">
              <img
                src="https://static.wikia.nocookie.net/esstarwars/images/d/de/Grievoushead.jpg/revision/latest?cb=20101204131756"
                alt="User"
                className="img-responsive rounded-circle"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className="col-md-3 col-sm-4 text-center mt-2">
              <Link to={`/contactCard/${contact.id}`}>
                <button className="botonContacto btn btn-primary">Contacto</button>
              </Link>
            </div>
            <div className="col-md-5 col-sm-4 text-center contenidoListContact mt-3">
              <h5>{contact.name}</h5>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
              <p>{contact.email}</p>
            </div>
            <div className="col-md-2 col-sm-12 text-md-right mt-md-0 mt-3 text-center mt-sm-3">
              <Link to={`/EditContact/${contact.id}`}>
                <button className="btn btn-primary mx-2">
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </Link>
              <button onClick={() => eliminarContacto(contact.id)}
                type="button"
                className="btn btn-danger mx-2">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </li>
      ))}
    </div>
  )
};