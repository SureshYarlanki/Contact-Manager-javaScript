import * as contactService from "../../services/contactService.js"

/**
 * when the page is loaded get group data from server and display as server
*/

window.addEventListener("DOMContentLoaded" ,() => { 
    contactService.getAllGroups().then((groupResponse) => {
        const groups = groupResponse.data;
        populateDropdown(groups)
    }).catch((error) => {
        console.log(error)
    })
    
})

/**
 * populate dropdown
 */

let populateDropdown = (groups) => {
    const selectElement = document.querySelector("#group-select-input");
    let optionalElement = `<option value="">Select a group</option>;`
    for (let group of groups) {
        optionalElement+=`<option value="${group.id}">${group.name}</option>`
    }
    selectElement.innerHTML = optionalElement;
    // console.log(optionalElement);
}
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
const addContactForm = document.querySelector("#add-contact-form");
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

    //if create is success,redirect to homepage

    contactService.createContact(contact).then((response) => {
        if (response.data) {
            window.location.href="/contact-manager/index.html"
        }
    }).catch((error) => {
        
    })
})