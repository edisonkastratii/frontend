import React from "react";
import { vehicle } from "../interface/vehicle";
import { Button } from "semantic-ui-react";

interface Props{
    veh: vehicle;
    cancelSelectVehicle: () => void;
    openForm: (id: number) => void;
}

export default function VehicleDetail({veh, cancelSelectVehicle, openForm}: Props){
    return (
        <>
            <div className="card" style={{ width: "20rem" }}>
                <div className="modal-header">
                    <p style={{ textAlign: "center" }}>Vehicle</p>
                    <hr />
                </div>
                <div className="modal-header">
                <div className="input-group mb-3">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Id: {veh.id}</li>
                        <li className="list-group-item">Name: {veh.name}</li>
                        <li className="list-group-item">Type: {veh.type}</li>
                        <li className="list-group-item">Price: {veh.price}</li>
                        <li className="list-group-item">Kilometers: {veh.kilometers}</li>
                        <li className="list-group-item">First Registration: {veh.firstRegistration}</li>
                        <li className="list-group-item">Year: {veh.year}</li>
                    </ul>
                </div>
                </div>
                <div className="modal-footer">
                <button onClick={cancelSelectVehicle} >Cancel</button>
                <Button onClick={() => openForm(veh.id)} className="btn btn-primary" content='edit' />
                </div>
            </div>
        </>
    )
}