import React from "react";
import './Mydet.css'

function Mydet(){

    return(
      <section id="abouts"> 
        <div className="content">
            <h1>
                Hi there I'm <span>Sasikumar</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p id="f">I'm passionate Full Stack Developer currently pursuing Computer Science and Engineering at Anna University</p>
            <a id="ctn" href="mailto:sasikumar.n2021@gmail.com">Contact Me</a>
        </div>
        <img className="Myimage" src="src\assets\component\images\myimage.jpg" alt="image not available" width="400px" height="400px"/>       
      </section>
    )

}

export default Mydet;