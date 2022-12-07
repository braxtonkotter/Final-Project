/*let btn_create = document.getElementById('form-create-button')
let btn_clear = document.getElementById('form-delete')*/

function formDelete() {
    document.getElementById('submit-form').classList.add('d-none')
    document.getElementById('create-form-div').classList.remove('d-none')
}

function formCreate() {
    document.getElementById('submit-form').classList.remove('d-none')
    document.getElementById('create-form-div').classList.add('d-none')
}