import api from "./Api";

const list = async () => {
    return api
        .get("/api/chains")
        .then((response: any) => {
            return response.data;
        });
}


export default {
    list,
};