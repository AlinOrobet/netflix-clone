# Netflix Clone 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

The movies database is taken from the [TMDB](https://www.themoviedb.org/) as endpoints.

[Demo Live](https://netflix-clone-ao.web.app/)

# Table of contents
- About project
- Features
- Languages and Tools

# About project
The free API from [TMDB](https://www.themoviedb.org/) is used for data access.

I chose this project to learn new functionalities and more aspects, tips and tricks in React.js. In the project code I used the following hooks: useState, useEffect, useParams, useContext, useNavigate (React Router),useDispatch,useSelector(React Redux) and to work with Axios. The data we receive it through Fetch we pass it through the created adapter, so we extract only the information that we still use in the project.Data from users (for accounts) will be stored in Cloud Firestore.

As a user you can create a new user account, log in and buy a subscription.More you can watch movies in various categories (just as a presentation title) , just like in the original Netflix application

# Features
Among the main features are:

- Log In and Log Out Authentication Flow with Google
- Home Screen with all the movies looking just like Netflix
- Subscription page where you can see your active monthly subscription and any recurring subscriptions
- Complete Stripe Payments Checkout Flow for the paid monthly Netflix Subscriptions
- Firebase extension for synchronising Stripe Recurring Payments with Users
- Build and host using Firebase Hosting

# Languages and Tools
- [ReactJS](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [React Redux](https://stripe.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://www.digitalocean.com/community/tutorials/react-axios-react)
- [Stripe](https://stripe.com/)
- [Cloud Firestore](https://firebase.google.com/)
- [Firebase](https://firebase.google.com/)
- Credits : [Sonny Sangha](https://www.youtube.com/c/SonnySangha) 
