console.log('FrontEnd JS ishga tushdi');

function itemTemplate(item) {
    return ` <li class="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
        <span class="item-text">
            ${item.reja}
        </span>
        <div>
            <button data-id="${item._id}" class="edit-me btn btn-danger btn-sm mr-1">
                O'chirish</button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
                O'chirish</button>
        </div>
    </li>`;
}

let createField = document.getElementById("create-field")

document
    .getElementById("create-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        axios
            .post('/create-item', { reja: createField.value })
            .then((response) => {
                document
                .getElementById("item-list")
                .insertAdjacentElement("beforeend", itemTemplate(response.data));
                createField.value = "";
                createField.focus();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling");
            });
    });