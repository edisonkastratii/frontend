import React from "react";
import VehicleList from "./VehicleList";
import { vehicle } from "../interface/vehicle";
import VehicleDetail from "./VehicleDetail";
import VehicleForm from "./VehicleForm";

interface Props{
    vehicles: vehicle[];
    selectedVehicle: vehicle | undefined,
    selectVehicle: (id: number) => void,
    cancelSelectVehicle: () => void;
    editMode: boolean;
    openForm: (id: number) => void;
    closeForm: () => void;
    openF: () => void;
    submitting: boolean; 
    createOrEdit: (Vehicle: vehicle) => void;
    deleteVehicle: (id: number) => void;
}

export default function VehicleDashborad({vehicles, selectedVehicle, selectVehicle,
     cancelSelectVehicle, editMode, closeForm, openForm, openF, submitting, createOrEdit, deleteVehicle}:Props){
    return(
        <>
            <div>
            <VehicleList vehicles={vehicles} selectVehicle={selectVehicle} 
                openF={openF} deleteVehicle={deleteVehicle} submitting={submitting}/>
        </div>
        <div>
            {selectedVehicle && !editMode &&
            <VehicleDetail veh={selectedVehicle} 
                            cancelSelectVehicle={cancelSelectVehicle}
                            openForm={openForm}/>}
            {editMode && 
            <VehicleForm closeForm={closeForm} v={selectedVehicle} submitting={submitting} createOrEdit={createOrEdit}/>}
        </div>
        </>
    )
}