import React from "react";
import mock04 from '../assets/images/23+24_ACS.png';
import mock05 from '../assets/images/basic.png';
import mock06 from '../assets/images/cybergon-2024.jpg';
import mock07 from '../assets/images/cybersecurity_awareness_IBSEC.jpg';
import mock08 from '../assets/images/ISO.png';
import mock09 from '../assets/images/IBSEC_SOC_Analyst_2025.jpg';
import mock10 from '../assets/images/real_world.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Development</h1>
        <div className="projects-grid">
            <div className="project">
               <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Asean Cyber Shield</h2>
            </div>
            <div className="project">
                <a href="https://certs.ibsec.com.br/?cert_hash=6d3ad5bdfe5cd173" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://certs.ibsec.com.br/?cert_hash=6d3ad5bdfe5cd173" target="_blank" rel="noreferrer"><h2>IBSEC SOC Analyst</h2></a>
               
            </div>
            <div className="project">
              <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
               <h2>ISO/IEC 27001:2022</h2>
               
            </div>
            <div className="project">
                <a href="https://certs.ibsec.com.br/?cert_hash=34d86aa9ba380584" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://certs.ibsec.com.br/?cert_hash=34d86aa9ba380584" target="_blank" rel="noreferrer"><h2>Cyber Security Awareness</h2></a>
            </div>
            <div className="project">
               <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Cyber Pyan CTF warriors Team</h2>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Asean Cyber Shield</h2>
               
            </div>
            <div className="project">
              <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
               <h2>International Events Participation</h2>
            </div>
           
        </div>
    </div>
    );
}

export default Project;