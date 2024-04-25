import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="containerNavbar">
			<nav className="navbar navbar-light bg-light p-3">
				<Link to="/">
					<span className="tituloWeb navbar-brand mb-0 h1">React Flux</span>
				</Link>
				<div className="botonAgregarContacto ml-auto">
					<Link to="/AddContact">
						<button className="btn btn-primary">Agregar Contacto</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};