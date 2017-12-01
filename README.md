# README

EventBike is an event planning tool designed for the motorcycle and bicycle communities. Inspired by Eventbrite, it shares many features such as user authentication, event search, an interactive map, and a user dashboard. 


## User Authentication

To improve user experience, the initial user authentication form is streamlined to a single input field. If the username they enter exists, they are directed to the login form. If they are a new user, they are asked for their email (optionally) and to enter a password for their account. 
| Existing User | New User |
| ------------  | -------- |
| ![User signin 1](https://media.giphy.com/media/3o6fIXGLPUNbG5BC12/giphy.gif) | ![User signin 2](https://media.giphy.com/media/xT0xeCMXhzeOicp2Io/giphy.gif) |

## Events

The database is seeded with sample events which are sorted into categories. Users can search through the events by entering key words on the splash page, or they can select *Browse Events* from the navigation bar to view a list of all the events, or events sorted by category. 

| Search bar | Map |
| ---------  | --- |
| ![Main Search](https://media.giphy.com/media/xT0xeJ1TXwuZKHUrSg/giphy.gif) | ![Map](https://media.giphy.com/media/3o6fJcbRMUoIlp26VW/giphy.gif) |


## Event Registration and Saving Events 

Users can saved events by clicking the 'Bookmark' icon at the lower right corner of the event card. They can then register for the event by going into the event's page and clicking the 'register' button. When a user registers for an event, the event's card is updated with the current number of attending users. The event will also show up on the user's dashboard under "Tickets." 
| User Dashboard |
| -------------- |
| ![User show page](https://media.giphy.com/media/l4Ep4I7DDZw1PWLiE/giphy.gif) |


## Event Creation

Any user with an account can create an event by filling in a few form fields. The location field helps the user find the venue using Google Maps Geocoding API. 

| Geocoded Locations |
| ------------------ |
| ![Geocoding](https://media.giphy.com/media/xT0xeqrUVqFASK0DnO/giphy.gif) |


### Development 

#### Setup:
+ `npm install`
+ `bundle install`
+ `rails db:reset`

#### Development:
+ `webpack --watch`
+ `sass --watch app/assets/stylesheets`
+ `rails s`

Version control:
+ `git push origin master`
+ `git push heroku master` 

+ `Open browser to localhost: 3000`

