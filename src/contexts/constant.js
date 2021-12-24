export const apiUrl =
    process.env.NODE_ENV !== "production" ?
    "http://localhost:5000/api" :
    "https://git.heroku.com/nameless-bayou-73962.git";

export const LOCAL_STORAGE_TOKEN_NAME = "sarkshop-acesstoken";