import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/me.jpg';
import Button from '@mui/material/Button';
import DownIcon from '@mui/icons-material/FileDownload';

function Main() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/HKA_CV.pdf'; // Ensure the file is in the public folder
    link.download = 'HKA_CV.pdf';
    link.click();
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hein Khant Aung</h1>
          <p>SOC Analyst | System Engineer</p>
          
          {/* Download CV Button */}
          <Button variant="contained" color="secondary" endIcon={<DownIcon />} onClick={handleDownloadCV}>
              Download CV
            </Button>
          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
