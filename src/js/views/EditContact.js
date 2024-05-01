import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const EditContact = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [userInputTwo, setUserInputTwo] = useState({
        nombredos: "",
        correodos: "",
        telefonodos: "",
        direcciondos: ""
    });

    const EnviarFormulario = (e) => {
        e.preventDefault();
        actions.EditContact(id, userInputTwo);
        window.location.href = "/";
    };

    useEffect(() => {
        const contact = store.contactos.find(contact => contact.id === parseInt(id));  //// Busco el contacto en la tienda por la id

        if (contact) { // Verifico si se encontro el contacto
            setUserInputTwo({  // Si se encuentra actualizar el estado con los datos del contacto
                nombredos: contact.name,
                correodos: contact.email,
                telefonodos: contact.phone,
                direcciondos: contact.address
            });
        }
    }, [id, store.contactos]);

    return (
        <div className="container">
            <form onSubmit={e => EnviarFormulario(e)}>
                <div className="container mt-5">
                    <div className="mt-5">

                        <label className="form-label d-flex text-start">
                            <i className="fa fa-user bigicon mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                            Nombre:
                        </label>
                        <input type="text"
                            className="form-control"
                            minLength={3}
                            required={true}
                            value={userInputTwo.nombredos}
                            onChange={(e) => setUserInputTwo({ ...userInputTwo, nombredos: e.target.value })}
                            placeholder="nombre" />
                    </div>
                    <div className="my-3">
                        <label className="form-label d-flex text-start">
                            <i className="fas fa-phone-square mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                            Telefono:
                        </label>
                        <input type="text"
                            className="form-control"
                            minLength={3}
                            required={true}
                            value={userInputTwo.telefonodos}
                            onChange={(e) => setUserInputTwo({ ...userInputTwo, telefonodos: e.target.value })}
                            placeholder="+34-666-66-66-66" />
                    </div>
                    <div className="my-3">
                        <label className="form-label d-flex text-start">
                            <i className="fas fa-map-marker-alt mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                            Direccion:
                        </label>
                        <input type="text"
                            className="form-control"
                            minLength={3}
                            required={true}
                            value={userInputTwo.direcciondos}
                            onChange={(e) => setUserInputTwo({ ...userInputTwo, direcciondos: e.target.value })}
                            placeholder="Direccion" />
                    </div>
                    <div className="my-3">
                        <label className="form-label d-flex text-start">
                            <i className="fas fa-envelope mx-2" style={{ color: "#B197FC", fontSize: 24 }}></i>
                            Email:
                        </label>
                        <input type="email"
                            className="form-control"
                            minLength={3}
                            required={true}
                            value={userInputTwo.correodos}
                            onChange={(e) => setUserInputTwo({ ...userInputTwo, correodos: e.target.value })}
                            placeholder="email@example.com" />
                    </div>
                </div>

                <input type="submit" value={"Guardar"} className="botonGuardar btn btn-primary"></input>
            </form>

        </div>

    )
}