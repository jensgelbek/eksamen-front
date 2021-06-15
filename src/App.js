import * as React from "react"
import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnauthenticatedApp"
import * as facade from "./facades/userFacade"
import { fetchData,handleError} from "./apiUtils"
import {USER } from "./settings";

function App() {
  const [user, setUser] = React.useState(null)

  function login(userCredentials, setError, push) {
    facade
      .login(userCredentials)
      .then(user => {
        push("/")
        setUser({username: user.username})
      })
      .catch(error => handleError(error, setError))
  }

  function logout() {
    facade.logout()
    setUser(null)
  }
  //Check if user is logged in already
  React.useEffect(() => {
    fetchData(USER.LOGIN + "/validate-token").then((userLogged) =>
      setUser({username: userLogged.username})
    );
  }, []);

  // Whenever the user changes the app is rerendered
  return user ? (
    <AuthenticatedApp user={user} logout={logout} />
  ) : (
    <UnauthenticatedApp login={login} />
  )
}

export default App
