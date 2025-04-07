import './ContactForm.css'
import Swal from 'sweetalert2'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot, FaSyringe } from "react-icons/fa6";

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "01c2375d-3fce-4438-91de-7ee5a1a6b35a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
                    }
      };

    return (
        
        <section className='contact-1'>
            <div className='contact-1-container'>
                <div className='contact-us-container'>
                <form onSubmit={onSubmit}>
                    <h2>Contact Us</h2>
                    <div className='input-box'>
                        <label>Full Name</label>
                        <input type="text" className='field' placeholder='Enter your name' name="name" required/>
                    </div>
                    <div className='input-box'>
                        <label>Email Address</label>
                        <input type="email" className='field' placeholder='Enter your email' name="email" required/>
                    </div>
                    <div className='input-box'>
                        <label>Your Message</label>
                        <textarea name="message" className='field mess' placeholder='Enter your message' required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                </div>
                <div className='contact-info-container'>
                    <div className='follow-us-container'>
                        <h2>Join the Conversation</h2>
                        
                        <div>
                            <p>🔗 Follow us today and be part of the movement <br/>toward a healthier, stigma-free community.</p>
                            <p>Let's connect and work together to promote HIV <br/>awareness, one conversation at a time. ❤️</p>
                        </div>
                        <div className="contact-social-icons">        
                            <a href="https://www.facebook.com/ProjectHIV/" target="_blank" rel="noopener noreferrer"><FaFacebook className='icon'/></a>                       
                            <a href="https://x.com/projecthiv" target="_blank" rel="noopener noreferrer"><FaTwitter className='icon'/></a>
                            <a href="https://www.instagram.com/projecthiv/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon'/></a>
                        </div>
                    </div>
                    <div className='where-to-find-us-container'>
                        <br/>
                        <h2>Where to Find Us</h2>
                        <div>
                            <p><FaLocationDot className='icon'/>1st Street, D.B. Ledesma Street, Brgy. <br/>Our Lady of Lourdes, Jaro, Iloilo City</p>
                            <p><FaEnvelope className='icon'/> hello@tdb.community</p>
                            <p><FaPhone className='icon'/> +63 995 157 8022</p>
                        </div>
                    </div>
                    <div>
                        <br/>
                        <h2>Contact Us</h2>
                        <p><FaSyringe className='icon'/>For free HIV and STI screening</p>
                        <p><FaPhone className='icon'/>+63 945 105 0335 - Mark Anthony Gallego</p>
                        <p><FaPhone className='icon'/>+93 917 655 2236 - Andy Martin Evidente</p>
                         

                    </div>
                </div>
                
            </div>

        </section>
    )
}

export default ContactForm;