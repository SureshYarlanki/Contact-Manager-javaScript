import * as contactService from "../../services/contactService.js";

// when the page is loaded,get contactId form url and ger service

window.addEventListener("DOMContentLoaded", () => {
  const contactId = document.baseURI.split("?")[1].split("=")[1];
  if (contactId && contactId.length > 0) {
    contactService
      .getContact(contactId)
      .then((contactResponse) => {
        const contact = contactResponse.data;
        contactService
          .getGroup(contact)
          .then((groupResponse) => {
            const group = groupResponse.data;
            displayContactInfo(contact, group);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

//display contact information on ui

const displayContactInfo = (contact,group) => {
  const contactRowElement = document.querySelector("#contact-row");
  if (
    contact &&
    group &&
    Object.keys(contact).length > 0 &&
    Object.keys(group).length > 0
  ) {
    const contactInfoElement = `<div class="col-sm-3  d-flex justify-content-center align-item-center">
        <img src=${contact.photo} class="img-fluid rounded-circle" alt="">

     </div>
      <div class="col-sm-8 offset-1">
        <ul class="list-group">
            <li class="list-group-item">
                Name : <span class="fw-bold">${contact.name}</span>
            </li>
            <li class="list-group-item">
                Email : <span class="fw-bold">${contact.email}</span>
            </li>
            <li class="list-group-item">
                Mobile : <span class="fw-bold">${contact.mobile}</span>
            </li>
            <li class="list-group-item">
                Company : <span class="fw-bold">${contact.company}</span>
            </li>
            <li class="list-group-item">
                Tittle : <span class="fw-bold">${contact.title}</span>
            </li>
            <li class="list-group-item">
                Group : <span class="fw-bold">${group.name}</span>
            </li>
        </ul>
    </div>`;
    contactRowElement.innerHTML = contactInfoElement;
  }
};
