import React from 'react'


const DemoLogin = ({demouser}) => {
  const handleClick = (e) => {
    demouser({username: 'reidjs', password: '123456'})
  }
  return (
    <div className="demo-button">
      <button onClick={handleClick}>Demo User</button>
    </div>
  )
}

export default DemoLogin