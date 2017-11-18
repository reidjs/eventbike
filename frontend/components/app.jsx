import React from 'react'
import NavDropDown from './nav_drop_down'
const title = "User information"
const App = () => (
    <div>
        <NavDropDown title={title} />
        <section className="main">
            Main content here, nav above
        </section>
    </div>
)

export default App;