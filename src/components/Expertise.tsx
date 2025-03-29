import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faShieldAlt, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Linux", "Proxmox", "VPS", "HAProxy", "NAS (iSCSI)", "Clustering", "Backups", "Wazuh"
];

const labelsSecond = [
    "SIEM", "Threat Detection", "Digital Forensics", "OSINT", "Vulnerability Management", "Pentesting"
];

const labelsThird = [
    "CCNA", "IP Routing & Switching", "Data Center Infrastructure", "Cloud Services (AWS, Digital Ocean)", 
    "Firewall Configuration", "Google Cloud", "Hyper Converged"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* System & Server Administration */}
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>System & Server Administration</h3>
                    <p>
                        I specialize in deploying and managing various server infrastructures, including game servers, mail servers, 
                        SIEM servers, and NAS solutions. My expertise includes Linux server administration, Proxmox virtualization, 
                        high availability setups, and security hardening. I have experience in data center setup, clustering, and 
                        backups, ensuring optimal system performance and uptime.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Cybersecurity & SOC Operations */}
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x"/>
                    <h3>Cybersecurity & SOC Operations</h3>
                    <p>
                        As a SOC analyst, I have experience in monitoring security events, analyzing threats like DDoS, SQLi, and XSS, 
                        and implementing incident response strategies. I utilize SIEM tools for real-time detection and digital forensics 
                        investigations. I also conduct penetration testing and vulnerability management to enhance security posture.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Networking & Cloud Infrastructure */}
                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Networking & Cloud | On-Premise Infrastructure</h3>
                    <p>
                        With hands-on experience in physical network setups, I have designed and managed data center infrastructure, 
                        configured IP addressing, routing, and switching. I also work with cloud-based environments, ensuring seamless 
                        integration of services with virtualized networks.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
