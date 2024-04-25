const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],
		},

		actions: {

			Contacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/josergm9/contacts", {
					method: "GET"
				})
					.then((response) => response.json())
					.then((result) => {
						setStore({ contactos: result.contacts });
					}
					)
					.catch((error) => console.error(error));
			},


			CreateContact: ({ nombre, direccion, telefono, correo }) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": nombre,
					"phone": telefono,
					"email": correo,
					"address": direccion
				});

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/josergm9/contacts", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result.contacts))
					.catch((error) => console.error(error));
			},


			DeleteContact: (id) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
				});

				const requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`https://playground.4geeks.com/contact/agendas/josergm9/contacts/${id}`, requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error("Error al eliminar el contacto");
						}
						return response;
					})
					.then(() => {
						return getActions().Contacts(); // Actualizo la lista de contactos después de eliminar uno con la función Contacts
					})
					.catch(error => {
						console.error(error);
						throw error;
					});
			},


			EditContact: (idtwo, userInputTwo) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": userInputTwo.nombredos,
					"phone": userInputTwo.telefonodos,
					"address": userInputTwo.direcciondos,
					"email": userInputTwo.correodos
				});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`https://playground.4geeks.com/contact/agendas/josergm9/contacts/${idtwo}`, requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error("Error");
						}
						return response;
					})
					.then(result => {
						return result;
					})
					.catch(error => console.error(error));
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
