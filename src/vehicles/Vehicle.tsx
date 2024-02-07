import React, { useEffect, useState } from "react";
import VehicleDashborad from "./VehicleDashborad";
import { vehicle } from "../interface/vehicle";
import agent from "../agent";



function Vehicle(){
  const [vehicles, setVehicles] = useState<vehicle[]>([]);
  const [selectedVhecile, setSelectedVehicle] = useState<vehicle | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    agent.Vehciles.list().then(response => {
      setVehicles(response);
    })
  }, [])

  function handleSelectedVehicle(id: number){
    setSelectedVehicle(vehicles.find(x => x.id === id))
  }

  function handleCancelSelectedVehicle(){
    setSelectedVehicle(undefined);
  }

  function handleFormOpen(id?: number) {
    id ? handleSelectedVehicle(id) : handleCancelSelectedVehicle();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEdit(Vehicle: vehicle) {
    setSubmitting(true);
    if (Vehicle.id) {
      agent.Vehciles.update(Vehicle).then(() => {
        setVehicles([...vehicles.filter(x => x.id !== Vehicle.id), Vehicle])
        setSelectedVehicle(Vehicle);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      //Category.Id = uuid();
      agent.Vehciles.create(Vehicle).then(() => {
        setVehicles([...vehicles, Vehicle]);
        setSelectedVehicle(Vehicle);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteVehicle(Id: number) {
    if (window.confirm('Are you sure?')) {
      setSubmitting(true);
      agent.Vehciles.delete(Id).then(() => {
        setVehicles([...vehicles.filter(x => x.id !== Id)]);
        setSubmitting(false);
      })
    }
  }

  function findbyAnything(query: any){
    setSubmitting(true);
      agent.Vehciles.findByAnything(query).then(() => {
        setVehicles([...vehicles.filter(x => x.color !== query)]);
        setVehicles([...vehicles.filter(x => x.name !== query)]);
        setVehicles([...vehicles.filter(x => x.type !== query)]);
        setVehicles([...vehicles.filter(x => x.year !== query)]);
        setVehicles([...vehicles.filter(x => x.firstRegistration !== query)]);
        setVehicles([...vehicles.filter(x => x.price !== query)]);
        setVehicles([...vehicles.filter(x => x.kilometers !== query)]);
        setSubmitting(false);
      })
  }

  return(
    <div>
      <VehicleDashborad vehicles={vehicles}
      openF={handleFormOpen}
      selectedVehicle={selectedVhecile}
      selectVehicle={handleSelectedVehicle}
      cancelSelectVehicle={handleCancelSelectedVehicle}
      editMode={editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose}
      submitting={submitting} 
      createOrEdit={handleCreateOrEdit}
      deleteVehicle={handleDeleteVehicle}
      />
    </div>
  )
  }

  export default Vehicle;