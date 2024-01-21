import React from "react";
import './contact.css';
function Contact(){
    return(
    <footer id="contact"> 
        <h1 className="conhead">Contact</h1>
        <div className="foot">       
        <div>
        <ul className="conlist">
            <li><img src="src\assets\component\images\emailIcon.png"/> <a id="conl"href="mailto:sasikumar.n2021it@gmil.com">sasikumar.n2021it@gmail.com</a></li>
            <li><img src="src\assets\component\images\githubIcon.png"/><a id="conl" href="https://github.com/Sasikumar183">github.com/Sasikumar183</a></li>
            <li><img src="src\assets\component\images\linkedinIcon.png"/><a id="conl" href="https://www.linkedin.com/in/sasikumar-n-04344024a">linkedin.com/in/sasikumar-n-04344024a</a></li>
            <button id="resume"><a id="conls" href="">Look My Resume</a></button>
        </ul>
        </div>
        <div className="form">
            <input type="text" placeholder="Enter Your Name"/>
            <input type="text" placeholder="Enter Your E-Mail"/>
            <textarea rows='6' placeholder="Enter Your Message"/>
            <button type='button' id="subbtn">Submit</button>
        </div>
        </div>
 
    </footer>
    
    );
}

export default Contact;
