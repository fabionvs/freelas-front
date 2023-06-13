import api from "./Api";
const upload = async (id: any, file: any, businessId: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("business_id", businessId);
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

const search = async (data: any) => {
    return api
        .get("/api/search", {
            params: data
        })
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

export default {
    upload,
    show,
    search
};
