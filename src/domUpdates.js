import Traveler from './Traveler';

const domUpdates = {

displayNameOfCurrentUser(user) {
  const firstName = user.name.split(" ")[0];
  const welcomeMessage = document.querySelector('.welcome-msg');
  welcomeMessage.innerText = `Welcome, ${firstName}!`;
}



}

export default domUpdates;
