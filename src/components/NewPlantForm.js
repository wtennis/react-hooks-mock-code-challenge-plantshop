import React, {useState} from "react";

function NewPlantForm({onFormSubmit, plants}) {
  const [formData, setFormData] = useState(
            {
            id: null,
            name: "",
            image: "",
            price: ""
          })

  function handleFormData(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      id: plants.length +1
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input onChange = {handleFormData} type="text" name="name" placeholder="Plant name" />
        <input onChange = {handleFormData} type="text" name="image" placeholder="Image URL" />
        <input onChange = {handleFormData} type="number" name="price" step="0.01" placeholder="Price" />
        <button onClick = {() => onFormSubmit(formData)} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
