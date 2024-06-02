import * as contactService from "../../services/contactService.js";

// when the page is loaded,get contactId form url and ger service

window.addEventListener("DOMContentLoaded", () => {
  const contactId = document.baseURI.split("?")[1].split("=")[1];
  if (contactId && contactId.length > 0) {
    contactService.deleteContact(contactId).then((response) => {
          if (response.data) {
             window.location.href="/contact-manager/index.html"
         }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
