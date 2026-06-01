const userList = document.getElementById("userList");
const loading = document.getElementById("loading");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

const saveBtn = document.getElementById("saveBtn");
const searchInput = document.getElementById("searchInput");

let users = [];
let editingId = null;

const ui = {

    renderUsers(users) {

        userList.innerHTML = users.map(user => `
            <div class="card">

                <h3>${user.name}</h3>

                <p>${user.email}</p>

                <div class="actions">

                    <button
                        onclick="editUser(${user.id})">
                        Edit
                    </button>

                    <button
                        onclick="removeUser(${user.id})">
                        Delete
                    </button>

                </div>

            </div>
        `).join("");
    },

    showLoading() {

        loading.innerHTML = `
            <div class="skeleton"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
        `;
    },

    hideLoading() {
        loading.innerHTML = "";
    },

    showError(message) {
        alert(message);
    },

    showSuccess(message) {
        alert(message);
    }
};

async function loadUsers() {

    try {

        ui.showLoading();
        await new Promise(resolve =>
            setTimeout(resolve, 5000)
        );
        users = await api.getUsers();

        ui.renderUsers(users);

    } catch (error) {

        ui.showError(error.message);

    } finally {

        ui.hideLoading();
    }
}

saveBtn.addEventListener("click", async () => {

    const userData = {
        name: nameInput.value,
        email: emailInput.value
    };

    try {

        if (editingId) {

            const updated =
                await api.updateUser(
                    editingId,
                    userData
                );

            users = users.map(user =>
                user.id === editingId
                    ? updated
                    : user
            );

            editingId = null;

            ui.showSuccess("Cập nhật thành công");

        } else {

            const newUser =
                await api.createUser(userData);

            users.unshift(newUser);

            ui.showSuccess("Thêm thành công");
        }

        ui.renderUsers(users);

        nameInput.value = "";
        emailInput.value = "";

    } catch (error) {

        ui.showError(error.message);
    }
});

async function editUser(id) {

    try {

        const user =
            await api.getUser(id);

        editingId = id;

        nameInput.value = user.name;
        emailInput.value = user.email;

    } catch (error) {

        ui.showError(error.message);
    }
}

async function removeUser(id) {

    const ok =
        confirm("Bạn có chắc muốn xóa?");

    if (!ok) return;

    try {

        await api.deleteUser(id);

        users =
            users.filter(
                user => user.id !== id
            );

        ui.renderUsers(users);

        ui.showSuccess("Đã xóa");

    } catch (error) {

        ui.showError(error.message);
    }
}

searchInput.addEventListener("input", e => {

    const keyword =
        e.target.value.toLowerCase();

    const filtered =
        users.filter(user =>
            user.name
                .toLowerCase()
                .includes(keyword)
            ||
            user.email
                .toLowerCase()
                .includes(keyword)
        );

    ui.renderUsers(filtered);
});

loadUsers();