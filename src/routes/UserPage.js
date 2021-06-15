import * as React from "react"
import {fetchData, handleError} from "../apiUtils"
import CenteredContainer from "../components/CenteredContainer"
import {INFO,USER} from "../settings"

function UserPage() {
  const [userData, setUserData] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetchData(USER.HENT)
      .then(data => setUserData(data))
      .catch(error => handleError(error, setError))
  }, [])

  return (
    <CenteredContainer>
      <h1>Hello user 🚀🙊</h1>
      ${console.log(userData)}
      {userData && <h4>{userData}</h4>}
    </CenteredContainer>
  )
}

export default UserPage
