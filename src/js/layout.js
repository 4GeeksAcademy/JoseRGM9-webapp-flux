import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "/workspaces/JoseRGM9-webapp-flux/src/js/component/Navbar.js";
import { Footer } from "/workspaces/JoseRGM9-webapp-flux/src/js/component/Footer.js";
import { AddContact } from "/workspaces/JoseRGM9-webapp-flux/src/js/views/AddContact.js";
import { Contacts } from "/workspaces/JoseRGM9-webapp-flux/src/js/views/Contacts.js";
import { EditContact } from "/workspaces/JoseRGM9-webapp-flux/src/js/views/EditContact.js";
import { ContactCard } from "/workspaces/JoseRGM9-webapp-flux/src/js/component/ContactCard.js";

//import { UserContextProvider } from "./context/Users/UserContext.js";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/AddContact" element={<AddContact />} />
						<Route path="/EditContact/:id" element={<EditContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/contactCard/:id" element={<ContactCard />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
