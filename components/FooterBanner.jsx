import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const FooterBanner = ({company}) => {
  return (
    <div className="FooterContainer">
      
      <div className="FeatureGrid align-items-center">

        <div className="col-3 px-5">

          <div className="row">
            <p className="footer-title">{company[0].name}</p>
            <p className="footer-description">{company[0].description}</p>
            <a href={`${company[0].facebookurl}`} className="fa fa-facebook">f</a>
          </div>
            
        </div>    

        <div className="col-3 px-5">

          <div className="row">
            <p className="footer-subtitle">Contacto</p>
            <p className="footer-field">Facebook</p>
            <p className="footer-description">{company[0].facebook}</p>
            <p className="footer-field">Tel.</p>
            <p className="footer-description">{company[0].phone}</p>
            <p className="footer-field">Whatsapp</p>
            <p className="footer-description">{company[0].whatsapp}</p>
            <p className="footer-field">Correo</p>
            <p className="footer-description">{company[0].email}</p>
          </div>
            
        </div>       
        
        <div className="col-6 px-5">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.5558050825452!2d-115.52450558471571!3d32.618019199382445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d77bab1820ec41%3A0xb6657125304f4d0a!2sM%26M%20Distribuidora!5e0!3m2!1ses!2smx!4v1677538484640!5m2!1ses!2smx" width="500" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>           
    
      </div>


    </div>
  )
}

export default FooterBanner