# README 

EventBike is an event planning tool designed for the motorcycle and bicycle communities. Inspired by Eventbrite, it shares many features such as user authentication, event search, an interactive map, and a user dashboard. 

# Features :bicyclist:

### User Authentication

To improve user experience, the initial user authentication form is streamlined to a single input field. If the username they enter exists, they are directed to the login form. If they are a new user, they are asked for their email (optionally) and to enter a password for their account. 

| Existing User | New User | 
| ------------- | -------- |
| ![User signin 1](https://media.giphy.com/media/3o6fIXGLPUNbG5BC12/giphy.gif) | ![User signin 2](https://media.giphy.com/media/xT0xeCMXhzeOicp2Io/giphy.gif) |

### Events

The database is seeded with sample events which are sorted into categories. Users can search through the events by entering key words on the splash page, or they can select *Browse Events* from the navigation bar to view a list of all the events, or events sorted by category. 

| Search bar | Map | 
| ---------- | --- |
| ![Main Search](https://media.giphy.com/media/xT0xeJ1TXwuZKHUrSg/giphy.gif) | ![Map](https://media.giphy.com/media/3o6fJcbRMUoIlp26VW/giphy.gif) |


### Event Registration and Saving Events 

Users can saved events by clicking the 'Bookmark' icon at the lower right corner of the event card. They can then register for the event by going into the event's page and clicking the 'register' button. When a user registers for an event, the event's card is updated with the current number of attending users. The event will also show up on the user's dashboard under "Tickets." 

| User Dashboard |
| --------------- |
| ![User show page](https://media.giphy.com/media/l4Ep4I7DDZw1PWLiE/giphy.gif) |


### Event Creation

Any user with an account can create an event by filling in a few form fields. The location field helps the user find the venue using Google Maps Geocoding API. 

| Geocoded Locations |
| ------------------ |
| ![Geocoding](https://media.giphy.com/media/xT0xeqrUVqFASK0DnO/giphy.gif) |


# Technical Details :wrench:

### Frontend Technology 

---

#### React JavaScript Library with Redux

EventBike is a single page web app that uses React's hashrouter to simulate page navigation. React delegates most of the rendering to the user's browser which dramatically speeds up load time on complex pages. 

###### Frontend routes 

+ root `/`
  * Sign in `/signin`
    - Sign up `/signin/signup`
    - Sign in `/signin/login`
  * Events index `/events`
    - Event show page `/events/:id`
  * New Event `/create`
  * Category `/categories/:id`
  * User Dashboard
    - Tickets `/users/:id/tickets`
    - Bookmarks `/users/:id/bookmarks`
    - Created events `/users/:id/myevents`
    

#### Sass

Sass is used to streamline and organize the styling of EventBike's different components. 

#### jQuery

jQuery takes care of AJAX calls which connect the frontend to the backend. 

#### Webpack

Webpack processes and bundles the javascripts together.

---

### Backend Technology

---

#### Ruby on Rails 

Ruby on Rails is the framework used for generating models, database schema, controllers, and backend routes. 

###### Routes 

| Route | Index              | Create | Show | Destroy |  
| ----- | ------------------ | ------ | ---- | ------- | 
| Events| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Registrations | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: |
| Users | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
| Bookmarks | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: |
| Categories | :white_check_mark: | :x: | :white_check_mark: | :x: |
| Session | :x: | :white_check_mark: | :x: | :white_check_mark: |

###### Associations 

*Event*
  + belongs to creator 
  + has many registrations
  + has many attendees 
  
*User*
  + has many events 
  + has many registrations 
  + has many bookmarks 
  + has many attending events 
  + has many bookmarked events
  
*Bookmark* 
  + belongs to user 
  + belongs to event 
  
*Registration*
  + belongs to user 
  + belongs to event
 
#### PostgreSQL

Users, Events, Registrations, and Bookmarks are organized in a relational database powered by Postgres. 

Table Columns

+ Events

| title | details | creator_id | date | location | lat | lng |
| --- | --- | --- | --- | --- | --- | --- |

+ Users 

| username | password_digest | session_token |
| --- | --- | --- |

+ Bookmarks  

| user_id | event_id |
| --- | --- |

+ Registrations 

| user_id | event_id |
| --- | --- |

---

# Development :electric_plug:

#### Setup:
+ `npm install`
+ `bundle install`
+ `rails db:reset`

#### Environment:
+ `webpack --watch`
+ `sass --watch app/assets/stylesheets`
+ `rails s`
+ `Open browser to localhost: 3000`


#### Version control:
+ `git push origin master`
+ `git push heroku master` 


# Future improvements :checkered_flag:

+ ### Advanced search 
At the moment, search only indexes by title. It should also look into the event description, event organizer, and perhaps it should organize by category.

+ ### Tags (dynamic categories)
Users should be able to come up with their own categories when they create an event. 

+ ### Show page preview on the map
Hovering over a map marker should show a glimpse into the event's show page before directing the user into the page. 

+ ### Edit events and text markdown 
Users should be able to edit the events they made and add markdown to the description.

+ ### Oauth 2.0 
Users should be able to sign in using their facebook or google accounts. 

