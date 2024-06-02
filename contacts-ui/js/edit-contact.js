import * as contactService from "../../services/contactService.js";

// when the page is loaded,get contactId form url and ger service

window.addEventListener("DOMContentLoaded", () => {
  /**
   * when the page is loaded get group data from server and display as server
   */

  contactService
    .getAllGroups()
    .then((groupResponse) => {
      const groups = groupResponse.data;
      populateDropdown(groups);
    })
    .catch((error) => {
      console.log(error);
    });

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
              populateFormData(contact,group)
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

/**
 * populate dropdown
 */

let populateDropdown = (groups) => {
  const selectElement = document.querySelector("#group-select-input");
  let optionalElement = `<option value="">Select a group</option>;`;
  for (let group of groups) {
    optionalElement += `<option value="${group.id}">${group.name}</option>`;
  }
  selectElement.innerHTML = optionalElement;
  // console.log(optionalElement);
};

/**
 * populate form data in the form
 */
const populateFormData = (contact, group) => {
    document.querySelector("#name-input").value = contact.name;
    document.querySelector("#company-input").value = contact.company;
    document.querySelector("#email-input").value = contact.email;
    document.querySelector("#title-input").value = contact.title;
    document.querySelector("#mobile-input").value = contact.mobile;
    document.querySelector("#photo-input").value = contact.photo;
    document.querySelector("#group-select-input").value = contact.groupId;
    document.querySelector('#display-image').setAttribute('src', contact.photo);
};
 
/**change on image url for image display */
const imageUrlElement = document.querySelector("#photo-input")
imageUrlElement.addEventListener('change', () => {
    const imageUrl = imageUrlElement.value;
    const displayImageElement = document.querySelector("#display-image")
    displayImageElement.setAttribute('src', imageUrl)
})


/**
 * when the form is submitted
 */
const addContactForm = document.querySelector("#edit-contact-form");
addContactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //read from data
    const contact = {
        name: document.querySelector("#name-input").value,
        company: document.querySelector("#company-input").value,
        email: document.querySelector("#email-input").value,
        title: document.querySelector("#title-input").value,
        mobile: document.querySelector("#mobile-input").value,
        photo: document.querySelector("#photo-input").value,
        groupId: document.querySelector("#group-select-input").value

        
    }
    //  console.log(contact)

  
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (Object.keys(contact).length > 0 && contactId && contactId.length > 0) {
        //if create is success,redirect to homepage
        contactService.updateContact(contact,contactId).then((response) => {
            if (response.data) {
                window.location.href="/contact-manager/index.html"
            }
        }).catch((error) => {
            
        })
    }
    })
    
    
