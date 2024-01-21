import React from "react";
import './skills.css';
function Skills() {
    return (
        <section class="skills" id="#Skills">
            <div className="contain" id='skill'>
                <h1>My <span>Skills</span></h1>
                <div className="topic1">
                    <div className="lang">
                        <h3>HTML</h3>
                        <img src="src\assets\component\images\html.png" alt="" height="100px" width="100px" />
                    </div>
                    <div className="lang">
                        <h3>CSS</h3>
                        <img src="src\assets\component\images\css.png" alt="" height="100px" width="100px" />
                    </div>
                    <div className="lang">
                        <h3>JavaScript</h3>
                        <img src="src\assets\component\images\javascript.png" height="100px" width="100px" />
                    </div>
                    <div className="lang" id="boot">
                        <h3>Bootstrap</h3>
                        <img src="src\assets\component\images\bootstrap.png" height="100px" width="100px" />
                    </div>
                    <div className="lang" id="j">
                        <h3>React</h3>
                        <img src="src\assets\component\images\react.png" alt="" height="100px" width="100px" />
                    </div>
                    <div className="lang" id="j">
                        <h3>Python</h3>
                        <img src="src\assets\component\images\python.png" alt="" height="100px" width="100px" />
                    </div>
                    <div className="lang" id="j">
                        <h3>Java</h3>
                        <img src="src\assets\component\images\java.webp" alt="" height="100px" width="100px" />
                    </div>
                   
                </div>

            </div>


        </section >

    );

}

export default Skills;