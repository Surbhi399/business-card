export default function Contact() {
    return (<section>
        <div className="contact-container">
            <img className="contact-icon" src="/email.png" alt="Mail Icon" />
            <a className = "Link" href="https://mail.google.com/mail/u/0/#inbox">jainsurbhi399@gmail.com</a>
        </div>
        <div className="contact-container">
            <img className="contact-icon" src="/telephone.png" alt="Telephone Icon" />
            <span >+1122334455</span>
        </div>
        <div className="contact-container" >
            <img className="contact-icon" src="/business.png" alt="LinkedIn Icon" />
            <a className = "Link" href="https://www.linkedin.com/in/jainsurbhi399/">in/jainsurbhi399/</a>
        </div>
        <div className="button-container" >
            <button className="email-button" type="button">
                <img className="contact-icon" src="/email.png" alt="Mail Icon" />
                <a className="contact-link" href="https://mail.google.com/mail/u/0/#inbox">Email</a>
            </button>
            <button className="linkedin-button" type="button">
                <img className="contact-icon" src="/linkedin (1).png" alt="LinkedIn Icon" />
                <a className="contact-link" href="https://www.linkedin.com/in/jainsurbhi399/">LinkedIn</a>
            </button>

        </div>
       <hr />

    </section>
    
    
    )
}