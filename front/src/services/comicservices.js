import httpClient from "./httpClient";

const END_POINT = "/api/comics"

const getAllComics = () => httpClient.get(END_POINT);

export{
    getAllComics
}