import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link, } from "react-router-dom";

export const ContactCard = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);

    const contact = store.contactos.find(contact => contact.id === parseInt(id)); // Busco el contacto con el ID proporcionado en los parametros de la URL

    useEffect(() => {
        actions.Contacts()
        console.log(store)
    }, [id])
    if (!contact) {  // con esto verifico si contact esta definido
        return <div>Contacto no encontrado</div>;
    };

    return (
        <div className="container mt-5">
            <div className="container mt-4">
                <h1 className="text-center">Contacto</h1>
            </div>
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img src="https://static.wikia.nocookie.net/esstarwars/images/d/de/Grievoushead.jpg/revision/latest?cb=20101204131756" alt="User" className="img-fluid rounded-circle"
                            style={{ width: "150px", height: "150px" }} />
                    </div>
                    <div className="col-6">
                        <h5>{contact.name}</h5>
                        <p>{contact.phone}</p>
                        <p>{contact.address}</p>
                        <p>{contact.email}</p>
                    </div>
                </div>
            </li>
            <div className="row">
                <div className="BotonVolver col text-center">
                    <Link to="/">
                        <button className="btn btn-primary">Volver a Lista de Contactos</button>
                    </Link>
                </div>
            </div>
        </div>

    )
};