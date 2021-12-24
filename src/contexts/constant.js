export const apiUrl =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/api" :
    "https://nameless-bayou-73962.herokuapp.com/";

export const LOCAL_STORAGE_TOKEN_NAME = "sarkshop-acesstoken";