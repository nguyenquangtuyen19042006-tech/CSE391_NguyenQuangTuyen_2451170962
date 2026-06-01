const api = {

    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {

        const response =
            await fetch(`${this.baseURL}/users`);

        if (!response.ok) {
            throw new Error("Không tải được users");
        }

        return await response.json();
    },

    async getUser(id) {

        const response =
            await fetch(`${this.baseURL}/users/${id}`);

        if (!response.ok) {
            throw new Error("Không tìm thấy user");
        }

        return await response.json();
    },

    async createUser(data) {

        const response =
            await fetch(`${this.baseURL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        return await response.json();
    },

    async updateUser(id, data) {

        const response =
            await fetch(`${this.baseURL}/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

        return await response.json();
    },

    async deleteUser(id) {

        const response =
            await fetch(`${this.baseURL}/users/${id}`, {
                method: "DELETE"
            });

        if (!response.ok) {
            throw new Error("Xóa thất bại");
        }

        return true;
    }
    
};