const USER_BASE =
  "https://osvaldo.dk/tomcat/eksamen/api";
const INFO_BASE =
  "https://osvaldo.dk.com/tomcat/eksamen/api/info";

const USER = {
  LOGIN: `${USER_BASE}/login`,
  SIGNUP: `${USER_BASE}/user`,
  HENT: `${USER_BASE}/user`,
}

const INFO = {
  USER: `${INFO_BASE}/user`,
  ADMIN: `${INFO_BASE}/admin`,
  FETCH_MANY: `${INFO_BASE}/fetchMany`,
  FETCH_ONE: `${INFO_BASE}/fetchData`,
}

export {USER, INFO}
