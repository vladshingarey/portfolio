import '../styles/Contact.css';
import MapIcon from '../assets/icons/map-icon.png';
import EmailIcon from '../assets/icons/email-icon.png';


const Contact = () => {

  const emailAddress = 'vladshingarey@gmail.com';

  return (
    <div className="contact-container" id = "contact">
      <p className = "p1 contact-shift">Contact</p>
      <p className = "p2 contact-shift">Lets connect and grab a coffee!</p>
      <div className = "email-map-container contact-shift">
        <div className = "map-container">
          <a href="bingmaps:?where=Spokane, WA">
              <img src = {MapIcon} alt="Map" className="map-icon" />
          </a>
          <div className = "loc-mail-container">
            <p className = "location"> Location</p>
            <p className = "spokaneWA">Spokane, WA</p>
          </div>
        </div>

        <div className = "email-container">
          <a href={`mailto:${emailAddress}`}>
            <img src={EmailIcon} alt="Email" className="email-icon" />
          </a>
          <div className = "loc-mail-container">
            <p className = "mail"> Mail</p>
            <p className = "email"> vladshingarey@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Contact;