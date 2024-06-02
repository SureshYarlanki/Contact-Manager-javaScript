import * as contactService from "../../services/contactService.js";

//When the page loaded, get the data from server

window.addEventListener('DOMContentLoaded', () => {
  contactService
    .getAllContacts()
    .then((response) => {
        const contacts = response.data;
        displayCards(contacts)
    })
    .catch((error) => {
      console.log(error);
    });
});

// Display card on UI

const displayCards = (contacts) => {
    let cardRowElement=document.querySelector('#card-row')
    let cardsElement = " "
    for (let contact of contacts) {
        cardsElement+=`<div class="col-sm-6  mt-3">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <img class="img-fluid rounded" src=${contact.photo}>

                    </div>
                    <div class="col-sm-8">
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name : <span class="fw-bold">${contact.name}</span>
                            </li>
                            <li class="list-group-item">
                                Email : <span class="fw-bold">${contact.email} </span>
                            </li>
                            <li class="list-group-item">
                                Mobile : <span class="fw-bold">${contact.mobile} </span>
                            </li>
                        </ul>

                    </div>
                    <div class="col-sm-1 d-flex flex-column align-items-center">
                        <a class="btn btn-warning" href="../contact-manager/contacts-ui/view-contact.html?contactId=${contact.id}" >
                            <i class="bi bi-eye-fill"></i>
                        </a>
                        <a href="../contact-manager/contacts-ui/edit-contact.html?contactId=${contact.id}"
                            class="btn btn-primary mt-2">
                            <i class="bi bi-pencil-square"></i>
                        </a>
                        <a href="../contact-manager/contacts-ui/delete-contact.html?contactId=${contact.id}" class="btn btn-danger mt-2">
                            <i class="bi bi-trash-fill"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    cardRowElement.innerHTML = cardsElement;
}
