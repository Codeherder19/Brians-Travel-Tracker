const fetchRequests = {
  getDestinations() {
    return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  getTrips() {
    return fetch("http://localhost:3001/api/v1/trips")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  // postIngredient(user, ingredient) {
  //   fetch("http://localhost:3001/api/v1/users", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "userID": user.id,
  //       "ingredientID": ingredient.ingredient,
  //       "ingredientModification": ingredient.modification
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(data => data)
  //   .catch(error => console.log(error));
  // }
};

export default fetchRequests;
