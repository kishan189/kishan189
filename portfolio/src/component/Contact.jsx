import "../style/contactK.css"
import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import axios from "axios"

function Contact() {
    
    const url="https://portfolio-e129a-default-rtdb.firebaseio.com/"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic

           const id=Math.floor(Math.random()*100+1)
            axios.put(`https://portfolio-e129a-default-rtdb.firebaseio.com/${id}.json`,formData)
            .then((res)=>{
                console.log("successfully sended")
                 alert("Message sent!");
            })
            .catch((err)=>{
                console.log(err)
            })

        console.log("Form submitted:", formData);
       
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <>
        <div className="contactLeft" style={{paddingTop:20}}>
                <Typewriter 
                    options={{
                    strings: ["Contact"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typewriter-textCon', // Add class for styling the text
                    cursorClassName: 'typewriter-cursor'
                           
                    }}
                />
        </div>
        <section id="contact" className="contact-section">
            <div className="social-links">
                    <div >
                        <span style={{marginRight:20}}>Name:</span>
                        <span >

                           Kishan Singh
                        </span>
                   </div>
                   <div >
                    <span style={{marginRight:20}}>Email:</span>
                    <span >

                       aktkishansingh@gmail.com
                     </span>
                   </div>
                   <div>
                    <span style={{marginRight:20}}>Mobile No:</span>
                    <span >
                        +91 7068813260
                     </span>
                   </div>
                    <a href="https://github.com/kishan189" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kishan-singh-50a963201" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
            </div>
            
            <div className="container">
           
                <form onSubmit={handleSubmit} className="contact-form">
                    
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
                     
        </section>
           <div className="footerLast">
            <h4>Address: Kushinagar Uttar Pradesh India</h4>
            <div>
                <p>Copyright © </p>
            </div>
           </div>
        </>
    );
}

export default Contact;
