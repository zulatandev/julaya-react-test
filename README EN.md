# Installation of the project

```
$ npm install
$ npm start
```

# Test data

## User

```javascript
[
  {
    firstname: "Kwadwo",
    lastname: "Busumtwi",
    countryCode: "0033",
    phone: "12345678",
    password: "1234",
  },
];
```

## Liste des index

```javascript
[
  {
    firstname: "Agent",
    lastname: "1",
    countryCode: "0033",
    phone: "12345678",
    geo: {
      lat: 48.82947097610185,
      lng: 2.3665683586914383,
    },
    comments: [
      {
        sender: "Bernard Dupond",
        score: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra quis nibh aliquam porta. Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla.",
      },
      {
        sender: "Bernard Dupond",
        score: 4,
        text: "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla.",
      },
      {
        sender: "Bernard Dupond",
        score: 1,
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    firstname: "Agent",
    lastname: "2",
    countryCode: "0033",
    phone: "12345678",
    geo: {
      lat: 48.83110952310031,
      lng: 2.336184294970735,
    },
    comments: [
      {
        sender: "Bernard Dupond",
        score: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra quis nibh aliquam porta. Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla.",
      },
      {
        sender: "Bernard Dupond",
        score: 2,
        text: "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla.",
      },
    ],
  },
  {
    firstname: "Agent",
    lastname: "3",
    countryCode: "0033",
    phone: "12345678",
    geo: {
      lat: 48.869966923991065,
      lng: 2.3655383904297196,
    },
    comments: [
      {
        sender: "Bernard Dupond",
        score: 0,
        text: "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla.",
      },
      {
        sender: "Bernard Dupond",
        score: 1,
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
  {
    firstname: "Agent",
    lastname: "4",
    countryCode: "0033",
    phone: "12345678",
    geo: {
      lat: 48.856867216840485,
      lng: 2.293440612109407,
    },
    comments: [
      {
        sender: "Bernard Dupond",
        score: 5,
        text: "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla.",
      },
      {
        sender: "Bernard Dupond",
        score: 4,
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
];
```

# Exercise

## Pages

The application must have 2 pages, a login page and a map page containing a Google Map and only accessible to logged in users.

### Login page

This page must contain a login form with 3 fields:

- the countryCode field: corresponding to the country code (+33/0033 for France)
- the phone field: corresponding to the user's phone number
- the password field: corresponding to the user's password

If the user enters the information below, he/she will be redirected to the secure Card page:

Translated with www.DeepL.com/Translator (free version)

```javascript
{
  "countryCode": "0033",
  "phone": "12345678",
  "password": "1234"
}
```

### Map page (secure page)

**Reminder:** This page is only accessible to logged-in users, otherwise the user will be redirected to the login page.

The Map page must contain a Google Map centred on the browser's geolocation (navigator.geolocation.getCurrentPosition), display markers at the positions where the index are located (see Test Data) and contain a button to log out.

\*\*The agent with the highest average score should have a marker of a different colour.

When a marker is clicked, a pop-up window should appear. It will contain :

- The agent's surname + first name
- Phone number
- His/her average score
- A list of comments the agent has received
- A form to add a new comment (note + text + submit button)

## Instructions

This test is to be done, of course, in ReactJs and the mockups you will have to integrate are in the `design/`.\'' folder.
The only technical constraint I give you is to use a reducer to load the test data, as with a real API, otherwise, you are free :D
\
\
Good luck!!!

Translated with www.DeepL.com/Translator (free version)
