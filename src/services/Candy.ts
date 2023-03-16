import api from "./Api";
const upload = async (id: any, file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    return api
        .post("/api/file/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response: any) => {
            return { id: id, success: response.data.success, token: response.data.token };
        });
}
const create = async (data: any) => {
    return api
        .post("/api/candy/create", data)
        .then((response: any) => {
            return response.data;
        });
}


const show = async (id: any, data: any) => {
    return api
        .get("/api/candy/show/" + id, {
            params: data
        })
        .then((response: any) => {
            return response.data;
        });
}


const transactions = async (id: any, data: any) => {
    return api
        .get("/api/candy/transactions/" + id, {
            params: data
        })
        .then((response: any) => {
            return response.data;
        });
}

const complete = async (id: any) => {
    return api
        .get("/api/candy/complete/" + id)
        .then((response: any) => {
            return response.data;
        });
}

export default {
    upload,
    create,
    show,
    transactions,
    complete
};
