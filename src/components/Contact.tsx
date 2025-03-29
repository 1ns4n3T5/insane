import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');

  // ✅ Function to validate email format using RegEx
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setMessageError(message.trim() === '');

    if (email.trim() === '') {
      setEmailError(true);
      setEmailErrorText('Please enter your email.');
      return;
    } else if (!validateEmail(email)) {
      setEmailError(true);
      setEmailErrorText('Invalid email format.');
      return;
    } else {
      setEmailError(false);
      setEmailErrorText('');
    }

    if (name && email && message) {
      emailjs.send(
        'service_6ansgk5',  
        'template_f62j2th', 
        {
          name: name,   
          title: message,  
          mail: email,  
        },
        'Z0K5SSmWZGazNuFUt' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('✅ Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('❌ Failed to send message. Please try again.');
        }
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#bbb",
                  },
                  '& .MuiInputBase-input': {
                    color: "black",
                  },
                  '& .MuiInputLabel-root': {
                    color: "black",  // ✅ Label color changed to black
                  }
                }}
              />
              <TextField
                required
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailErrorText}
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: "#bbb",
                  },
                  '& .MuiInputBase-input': {
                    color: "black",
                  },
                  '& .MuiInputLabel-root': {
                    color: "black",  // ✅ Label color changed to black
                  }
                }}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: "#bbb",
                },
                '& .MuiInputBase-input': {
                  color: "black",
                },
                '& .MuiInputLabel-root': {
                  color: "black",  // ✅ Label color changed to black
                }
              }}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
