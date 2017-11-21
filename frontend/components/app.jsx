import React from 'react'
import EventItem from './event_item'
import NavDropDown from './test_dropdown/nav_drop_down'
const title = "User information"

const event = {
    //state props
    title: "Event title goes here",
    description: "A short descript of the event",
    image_url: "",
    datetime: "",
    location: "",
    category: "",
    //dispatch functions
    register: () => {console.log("User registered")},
    bookmark: () => {console.log("Event saved")}
  };

const App = () => (
    <div>
        <NavDropDown title={title} />
        <section className="main">
            Main content here, nav above
            <EventItem event={event}/>
        </section>
    </div>
)

export default App;