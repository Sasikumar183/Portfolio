import React from "react";
import './project.css'

function Project(){
    return(
        <div className="sections" id="project">
            <h1 id="heading">Projects</h1>
            <div className="project">

            <div className="pro">
                <img src="src\assets\component\images\minemate.png" width='300px' height='300px'/>
                <div className="prodet">
                    <h3 id="proh">Mine Mate</h3>
                    <p>Developed a mining chatbot that streamlines communication and information retrieval, 
                        enhancing efficiency in the mining 
                        industry through intelligent automation and real-time assistance
                        <h3>HTML CSS JS Python</h3></p>
                </div>
            </div>
            <div className="pro">
                <img src="src\assets\component\images\tasktrack.png" width='300px' height='300px'/>
                <div className="prodet">
                    <h3 id="proh">Task Tracker</h3>
                    <p>Designed and implemented a user-friendly Task Tracker 
                        application with advanced task management features, enabling efficient organization, prioritization, 
                        and timely completion of tasks for enhanced productivity<h3>HTML CSS JS</h3></p>
                </div>
            </div>
            <div className="pro">
                <img src="src\assets\component\images\calciimg.png" width='300px' height='300px'/>
                <div className="prodet">
                    <h3 id="proh">Calculator</h3>
                    <p>Built an intelligent calculator chatbot, providing users with a
                         conversational interface for seamless mathematical computations
                         and quick answers, optimizing the calculation process.<h3>React JS</h3></p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Project;