
 const BASE ="https://osvaldo.dk/tomcat/eksamen/api";

//const BASE="http://localhost:8080/jpareststarter/api";
const USER_BASE =BASE;
const INFO_BASE =`${BASE}/info`;
const DOG_BASE=`${BASE}/dog`;

  
const USER = {
  LOGIN: `${USER_BASE}/login`,
  SIGNUP: `${USER_BASE}/user`,
  HENT: `${USER_BASE}/user`,
}

const DOG = {
  ADD: `${DOG_BASE}/add`,
  ALL: `${DOG_BASE}/all`,
  DEL: `${DOG_BASE}`,
  GET:`${DOG_BASE}`,
  EDIT:`${DOG_BASE}/edit`,
}
const INFO = {
  USER: `${INFO_BASE}/user`,
  ADMIN: `${INFO_BASE}/admin`,
  FETCH_MANY: `${INFO_BASE}/fetchMany`,
  FETCH_ONE: `${INFO_BASE}/fetchData`,
}

export {USER, INFO,DOG}
