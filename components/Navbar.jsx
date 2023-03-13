import React from 'react'
import { urlFor } from '../lib/client';

const Navbar = ({company}) => {
  return (
    <div>
      
      <div className="customNavbar">

        <div className="row">
          <div className="col-6">
            <a className=" " href="#">
              <img src={urlFor(company[0].logo)}  width="75" height="75" className="d-inline-block align-top" alt=""/>
            </a>
          </div>
          <div className="col">
            <a className="right active" aria-current="page" href="#">Inicio</a>
          </div>
          <div className="col">
            <a className="right" href="#">Contacto</a>
          </div>
          <div className="col">
            <a className="right" href="#">Productos</a>
          </div>
          <div className="col">
            <a className="right" href="#">Nosotros</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar