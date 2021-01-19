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

  postTrip(trip) {
    fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": trip.id,
        "userID": trip.userID,
        "destinationID": trip.destinationID,
        "travelers": trip.travelers,
        "date": trip.date,
        "duration": trip.duration,
        "status": trip.status,
        "suggestedActivities": trip.suggestedActivities
      }),
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
  }

};

export default fetchRequests;
