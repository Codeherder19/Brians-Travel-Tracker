## Contributors:
- **Brian Forbes**
- **Johnny Cassidy**
- [**Brian Forbes**](https://github.com/Codeherder19)
- [**Johnny Cassidy**](https://github.com/pJanks)


## Technologies Used:
- *JavaScript*
- *HTML5*
- *CSS3*
- *Flex-box and Flex-grid*
- *Github*
- *Google Chrome - Developer Console*
- *Normalize*
- *Webpack*
- *Moment*

## Instructions for running/viewing the project:
Clone down this repo, as well as the repos for travel tracker api and webpack starter kit listed below. Follow instructions to get the travel tracker api up and running. Once you have done all of that, go into your terminal and CD into this projects directory. Run npm start and navigate to the site that pops up in your terminal, it should be localhost:8080. From here, you will want to enter a user name and password. The user name is formatted as username35 or username22 for example, with the number being the id of the user whose data will be recalled from the API and used to populate the DOM. The number must be from 1-50, as there are only 50 traveler's in the API. The password is always traveler2020. From here, you can select a trip start date, duration for trip in number of days, as well as a number of travelers. Next, browse the destinations and click the reserve button on a destination of your choice. You can now click calculate cost to view the estimated cost of this potential trip. Clicking the submit button will generate a trip card in the My Trips section on the left with a status of pending. Iteration 4, which I did not finish, would allow a travel agent/admin access at which point trips can be approved or deleted or modified.

![Screenshot of Travel by Brian application](https://i.imgur.com/HIhSUOd.png)
![Screenshot of Travel by Brian application](https://i.imgur.com/5cTAr61.png)

### GITHUB Links
[Find the project repo here](https://github.com/Codeherder19/Brians-Travel-Tracker)
[Find the travel tracker api repo here](https://github.com/turingschool-examples/travel-tracker-api)
[Find the travel webpack starter kit repo here](https://github.com/turingschool-examples/webpack-starter-kit)

### Future Additions
1. I wrote a dynamic function that could take in any year (2019, 2020, or 2021) and give back the amount of money spent on trips for that year. As of now, I have it set up with a default argument of 2021 so it only displays the current years travel expenses.
2. I would like to finish iteration for so there is a travel agent/admin access and a traveler's pending trips can be approved and trips can be deleted as necessary.
3. I would like a trip card to pop up when the calculate cost button is clicked, and this card would contain an ok button and a submit button. The ok button would take you back to main view and reset all of your input selections such as start date, number of travelers, etc. The submit button would take the place of the current submit button.
4. I would have liked to do more sad path testing but I ran out of time.

### WINS
1. Creating a login page that successfully passed an argument into the api calls which then populates the page with all of a travelers data.
2. Getting an accessibility score of 100.
3. Setting up normalize which I have never used before.
4. Adding multiple break points so the app is responsive across all screen sizes.
5. Utilizing SASS mix-ins and variables.

### Challenges
1. Figuring out the best way to determine whether a trip was current or not. I ended up using a combination of Date.now() and Moment syntax.
2. The login page took much longer than expected.
3. Normalize was a challenge. I realize I should have set that up at the beginning. A lot of html elements and CSS properties got all out of whack when this was applied and it took some time to hunt down where the issue was so elements weren't off center where they were originally centered just fine before normalize was applied.
