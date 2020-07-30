const api =  'http://localhost:3001'

var myInit = { method: 'GET',
    mode: 'no-cors'
 };

    export const getAll = () => 

        fetch(`${api}/persons`, myInit)
        // .then(res => res.json())
        .then(data => data.people)

// export const remove = (contact) =>
//   fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
//     .then(res => res.json())
//     .then(data => data.contact)

// export const create = (body) =>
//   fetch(`${api}/contacts`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then(res => res.json())