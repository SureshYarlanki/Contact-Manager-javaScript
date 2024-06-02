const serverUrl = "http://localhost:9000";

/*
@usage : to get all contacts 
@method : GET
@params : no-params
@url : http://localhost:9000/contacts
*/

export const getAllContacts = () => {
    let dataUrl = `${serverUrl}/contacts/`
    return axios.get(dataUrl);
}

/*
@usage : get a contact
@method : GET
@params : no-params
@url : http://localhost:9000/contacts/:contactId
*/
export const getContact = (contactId) => {
    let dataUrl = `${serverUrl}/contacts/${contactId}`
    return axios.get(dataUrl);
}

/*
@usage : create a contact 
@method : POST 
@params : name,imageUrl, email, mobile, company, title, groupId
@url : http://localhost:9000/contacts/
*/
export const createContact = (contact) => {
    let dataUrl = `${serverUrl}/contacts/`
    return axios.post(dataUrl,contact);
}

/*
@usage: update a contact 
@method : PUT
@params :  name,imageUrl, email, mobile, company, title, groupId
@url : http://localhost: 9000/contacts/: contactId
*/

export const updateContact = (contact,contactId) => {
    let dataUrl = `${serverUrl}/contacts/${contactId}`
    return axios.put(dataUrl,contact);
}

/*
@usage: Delete a contact 
@method : DELETE
@params : no-params
@url : http://localhost: 9000/contacts/: contactId
*/
export const deleteContact = (contactId) => {
    let dataUrl = `${serverUrl}/contacts/${contactId}`
    return axios.delete(dataUrl);
}

/*
@usage : Get all groups 
@method : GET
@params : no-params
@url : http://localhost:9000/groups/
*/
export const getAllGroups = ( ) => {  
    let dataUrl = `${serverUrl}/groups/`
    return axios.get(dataUrl);
}
/*
@usage : Get a group 
@method : GET
@params : no-params
@url : http://localhost:9000/groups/:groupId
*/
export const getGroup = (contact) => {
    const {groupId} = contact;
    let dataUrl = `${serverUrl}/groups/${groupId}`
    return axios.get(dataUrl);
}