import React from "react"
import { Link } from "react-router-dom";
import {BsSearch } from "react-icons/bs";
const Header = () => {
  return (
  <>
 <header className= "heder-top-strip py-3">
    <div className='conteiner-xxl'>
     <div className='row'>
      <div className='col-6'>
      <p className="text-white mb-0 ">
        Envío gratis con su compra de un millón
        </p>
      </div>
      <div className='col-6'>
      <p className= "text-end text-white mb-0"> 
        Comunicate con nosotros al
         <a ClassName="text-white" href="08002225555">
          08002225555
          </a>
        </p>
      </div>
      </div>
      </div>
      </header>
      <header className="header-upper py-3">
<div className="container-xxl">
<div className="row align-items-center">
<div className="col-2">
 <h2> 
  <Link className="text-white">A.M.Creaciones</Link>
 </h2>
</div>
<div className="col-5">
  <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder= "Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic.addon2">
                  <BsSearch className="fs-6"/> 
                </span>
              </div>
             </div>
            <div className="col-5"> </div>
           </div>
         </div>
      </header>
   </> 
 );
};

export default Header;  

