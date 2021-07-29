import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searched, setSearch] = useState('')

useEffect(() => {
  console.log('useEffect fired')
  //fetch plants from API and set state of plants
  fetch('http://localhost:6001/plants')
  .then(r => r.json())
  .then(data => setPlants(data))
}, [])

const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searched))

//callback passed as props to newPlantForm
//this function will take in formData and use it to update plants state
function onFormSubmit(submission) {
  console.log('onFormSubmit fired')
  console.log(submission)
  let newPlant = submission
  setPlants([...plants, newPlant])
  // fetch POST newPlant first, then setPlants([...plants, returnedPlant])
  //Is this best practice?^^^post to JSON, then update state?
}


  return (
    <main>
      <NewPlantForm onFormSubmit = {onFormSubmit} plants = {plants}/>
      <Search setSearch = {setSearch} searched ={searched}/>
      {plants.length >0? <PlantList plants = {filteredPlants} /> : <h1>Loading...</h1>}
    </main>
  );
}

export default PlantPage;
