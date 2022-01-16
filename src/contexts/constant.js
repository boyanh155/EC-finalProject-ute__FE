export const apiUrl =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/api" //   "https://fierce-ocean-17268.herokuapp.com/api"
    :
    "https://fierce-ocean-17268.herokuapp.com/api";

export const LOCAL_STORAGE_TOKEN_NAME = "sarkshop-acesstoken";