import React from "react";
import { ListContact } from "../component/ListContact";
import { Link } from "react-router-dom";
export const Contacts = () => {

    
    return (
<div className="container mt-5">
        <div className="container mt-4">
            <h1 className="text-center">Contact List</h1>
            <ul className="list-group">
                <ListContact/>
            </ul>
        
        </div>
</div>
    )
}