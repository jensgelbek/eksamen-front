import { Button, Card, CardColumns, Container, Form,Table } from "react-bootstrap";
import React from "react";
import CenteredContainer from "../components/CenteredContainer";
import { useHistory } from "react-router";
import { fetchData,handleError } from "../apiUtils";
import { DOG } from "../settings";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import {Nav, Navbar} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import EditDog from "./EditDogPage";
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

function ShowDog() {
  const [dogData, setDogData] = React.useState(initialValues);
  const [serverError, setServerError] = React.useState(null);
  const history = useHistory();
  const [refresh,setrefresh]=React.useState(0);
  const [edit,setEdit]=React.useState(null);
  

    React.useEffect(() => {
        fetchData(DOG.ALL, "GET").then((data)=>setDogData(data));
  },[edit,dogData,refresh]);

  function HandleDelete(id){
    fetchData(DOG.DEL+"/"+id,"DELETE").then(setrefresh(refresh+1))
}
 

  return (
     <Container>
       
       {edit &&( <EditDog setEdit={setEdit} edit={edit} setrefresh={setrefresh} refresh={refresh}/>)}
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
                      </Button>
                </td>
                      <td>
                      <Button
                        variant="outline-secondary"
                        onClick={() => setEdit(dog.id)}
                      >
                        Edit
                      </Button>
                      </td>

                  
                
           
            </tr>

           
            )}
            )}
    
    </Table>

    </Container>
  )
}


export default ShowDog
