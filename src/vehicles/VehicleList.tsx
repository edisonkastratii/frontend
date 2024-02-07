import React, { useState } from "react";
import { vehicle } from "../interface/vehicle";
import { Button } from "semantic-ui-react";
import axios from "axios";

interface Props{
    vehicles: vehicle[];
    selectVehicle: (id: number) => void,
    openF: () => void;
    deleteVehicle: (id: number) => void,
    submitting: boolean;
}

export default function VehicleList({vehicles, selectVehicle, openF, deleteVehicle, submitting} : Props){
      
    return(
        <div style={{textAlign:"center"}}>
            <h1>Vehicle</h1>
        
            <button type="button" style={{ backgroundColor: "#B0C4DE" }}
                className="btn btn-primary m-2 float-end" onClick={openF}>
                Add Category
            </button>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Color</td>
                        <td>Year</td>
                        <td>Options</td>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.type}</td>
                            <td>{vehicle.color}</td>
                            <td>{vehicle.year}</td>
                            <td>
                                <Button  onClick={() => selectVehicle(vehicle.id)}
                                    content="view" color="blue" type="button"/>
                                    
                                <Button loading={submitting} onClick={() => deleteVehicle(vehicle.id)}
                                    type="button" color="red" content='Delete' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}