import { Button, Form } from "react-bootstrap";
import React from "react";
import CenteredContainer from "../components/CenteredContainer";
import { useHistory } from "react-router";
import { fetchData,handleError } from "../apiUtils";
import { DOG,OWNER } from "../settings";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const initialValues = {
  "id": "1",
  "name": "",
  "breed": "",
  "image": "",
  "gender":"",
  "birthDate":"",
  "OwnerId":"",
  "OwnerName":"",
};

function AddDog() {
  const [dogData, setDogData] = React.useState(initialValues);
  const [ownerList,setOwnerList]=React.useState();
  const [serverError, setServerError] = React.useState(null);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();    
    fetchData(DOG.ADD, "POST", dogData)
    .then(data => setDogData(data))
   .catch(error => handleError(error, setServerError));//   error handling .....
    setDogData(initialValues);
  }

  function handleChange(event) {
    setDogData({
      ...dogData,
      [event.target.name]: event.target.value,
    });
    setServerError(null);// error handling
  }
  
  React.useEffect(() => {
    fetchData(OWNER.ALL,"GET")
      .then(data => setOwnerList(data))
      .catch(error => handleError(error, setServerError))//.then(setDogData({birthDate:"2021-06-10"}))
  }, [])

  return (
    <CenteredContainer>
    <h1>Dog to add:</h1>
    <Form style={{ width: "400px" }} onSubmit={handleSubmit}>
      {serverError ? (
        <h3 className="text-danger">{serverError.message}</h3>
      ) : null}
      <Form.Group controlId="Name">
        <Form.Label>Dog name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={dogData.name}
          onChange={handleChange}
          placeholder="Enter dog name"
        />
      </Form.Group>
      <Form.Group controlId="Breed">
        <Form.Label>Dog breed</Form.Label>
        <Form.Control
          type="text"
          name="breed"
          value={dogData.breed}
          onChange={handleChange}
          placeholder="Enter breed"
        />
      </Form.Group>
      <Form.Group controlId="Gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          name="gender"
          value={dogData.gender}
          onChange={handleChange}
          placeholder="Enter gender"
        />
      </Form.Group>
     
      <Form.Group controlId="Image">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={dogData.image}
          onChange={handleChange}
          placeholder="Enter image link"
        />
      </Form.Group>
     
       
        <Form.Group controlId="BirthDate">
          <Form.Label>Birth date</Form.Label>
          <Form.Control
            type="date"
            name="birthDate"
            onChange={handleChange}
            value={dogData.birthDate}
            required
           
          />
        
        </Form.Group>
<Form.Group controlId="Owner Id">
      <select class="custom-select" name="OwnerId" value={dogData.OwnerId}
          onChange={handleChange}>
    {ownerList && ownerList.map((owner) => {
            return (
    <option value={owner.id}>{owner.name}</option>
  
            )
    })}
  </select>
    </Form.Group> 
     
      <Button block type="submit">
        Add Dog.
      </Button>
    </Form>
  
  </CenteredContainer>
);
}


export default AddDog
