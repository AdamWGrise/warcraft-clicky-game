import React from 'react'

const style = {
  custom: {
    fontFamily: "Merienda",
    backgroundColor: "#150704"
  }
}

function Navbar() {
    return (<div style={style.custom}>
    <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet"></link>
    <nav className="navbar navbar-expand-lg navbar-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/AdamWGrise/warcraft-clicky-game" target="_blank">Code (GitHub)</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://adamwgrise.github.io/Portfolio/" target="_blank">About the Maker</a>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  </div>
  )
}

export default Navbar
