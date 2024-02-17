const Method = {
  Get: 'GET',
  Post: 'POST',
  Delete: 'DELETE',
  Put: 'PUT'
}


function getRequest(url) {
  return fetch(url).then(response => response.json()).catch(error => console.log(error))
}


function JSONRequest(url, method, body) {
  return fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json()).catch((e) => {})
}

 
function postRequest(url, body) {
  return JSONRequest(url, Method.Post, body)
}

function deleteRequest(url, body) {
  return JSONRequest(url, Method.Delete, body)
}

function putRequest(url, body) {
  return JSONRequest(url, Method.Put, body)
}


module.exports = {
  JSONRequest,
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
}