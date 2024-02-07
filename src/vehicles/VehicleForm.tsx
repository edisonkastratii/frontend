import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { vehicle } from "../interface/vehicle";


interface Props{
    v: vehicle | undefined;
    closeForm: () => void;
    submitting: boolean;
    createOrEdit: (Vehicle: vehicle) => void;
}

export default function VehicleForm({v: selectedVehicle, closeForm, submitting, createOrEdit}: Props){

    const initialState = selectedVehicle ??{
        id: 0,
        type: '',
        name: '',
        year: 0,
        color: '',
        price: 0,
        kilometers: 0,
        firstRegistration: 0
    }

    const [v, setVehicles] = useState(initialState);

    function handleSubmit() {
        createOrEdit(v);
    }

    function handleInputChange(event:any) {
        const { name, value } = event.target;
        setVehicles({ ...v, [name]: value })
    }


return (
    <div className="card" style={{ width: "18rem" }}>
        <div onSubmit={handleSubmit}/*  autoComplete="off" */>
            <input type="hidden" value={v.id}/>

            <span className="input-group-text">Name </span>
            <input placeholder="Emri" value={v.name} name="name" onChange={handleInputChange} />

            <span className="input-group-text">Type </span>
            <input placeholder="Type" value={v.type} name="type" onChange={handleInputChange} />
            
            <span className="input-group-text">Price </span>
            <input placeholder="Price" value={v.price} name="price" onChange={handleInputChange} />

            <span className="input-group-text">Color </span>
            <input placeholder="Color" value={v.color} name="color" onChange={handleInputChange} />

            <span className="input-group-text">Year </span>
            <input placeholder="Year" value={v.year} name="year" onChange={handleInputChange} />

            <span className="input-group-text">Kilometers </span>
            <input placeholder="Kilometers" value={v.kilometers} name="kilometers" onChange={handleInputChange} />

            <span className="input-group-text">First Registration </span>
            <input placeholder="First Registration" value={v.firstRegistration} name="firstRegistration" onChange={handleInputChange} />
        </div>
        <div className="modal-footer">
        <Button onClick={handleSubmit} loading={submitting} className="btn btn-primary" positive type='submit' content='submit' />
        <Button onClick={closeForm} floated='right' type='button' className="btn btn-secondary" content='cancel' />
        </div>
    </div>
)
}