import { Button, Card, CardColumns, Container, Form,Table } from "react-bootstrap";
import React from "react";
import CenteredContainer from "../components/CenteredContainer";
import { useHistory } from "react-router";
import { fetchData,handleError } from "../apiUtils";
import { DOG } from "../settings";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const initialValues = [{
  "id": "1",
  "name": "",
  "breed": "",
  "image": "",
  "gender":"",
  "birthDate":"",
  "OwnerId":"",
  "OwnerName":"",
}];

function EditDog() {
  const [dogData, setDogData] = React.useState(initialValues);
  const [serverError, setServerError] = React.useState(null);
  const history = useHistory();
  const [refresh,setrefresh]=React.useState(0);

  

    React.useEffect(() => {
        fetchData(DOG.ALL, "GET").then((data)=>setDogData(data));
  });

  function HandleDelete(id){
    fetchData(DOG.DEL+"/"+id,"DELETE").then(setrefresh(refresh+1))
}
 

  return (
      <Container>
          <Table>
              <tr>
                  <th>Dog ID </th>
                  <th>Dog Name</th>
                  <th>Owner Name</th>
              </tr>
    {dogData &&
        dogData.map((dog)=>{
            return(
                <tr>
                <td>{dog.id}</td>
                <td>{dog.name}</td>
                <td>{dog.OwnerName}</td>
                <td> <Button
                        variant="outline-secondary"
                        onClick={() => HandleDelete(dog.id)}
                      >
                        Delete
                      </Button></td>
            </tr>
            )}
    )}
    </Table>
    </Container>
  )
}


export default EditDog
