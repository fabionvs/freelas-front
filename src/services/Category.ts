import api from "./Api";
const getCategories = async () => {
    return api
        .get("/api/categories")
        .then((response: any) => {
            return response.data;
        });
}
export default {
    getCategories,
};