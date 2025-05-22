"use client";

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const theme = createTheme({
    colorSchemes: {
      light: true,
      dark: true,
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-full">
        <h1>Contact</h1>
        {/*
        First Name
        Last Name
        Email
        Phone (optional)
        Company (optional)
        Message
        Submit button
        */}
        <form className="flex flex-col items-center justify-center w-full h-full max-w-md p-4 gap-4">
          <ThemeProvider theme={theme}>
            <div className="flex flex-row gap-4 w-full">
              <TextField
                id="first_name"
                name="first_name"
                label="First Name"
                placeholder="John"
                variant="outlined"
              />
              <TextField
                id="last_name"
                name="last_name"
                label="Last Name"
                placeholder="Doe"
                variant="outlined"
              />
            </div>
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="johndoe@example.com"
              variant="outlined"
              className="w-full"
            />
            <div className="flex flex-row gap-4 w-full">
              <PhoneInput
                value={phone}
                onChange={(phone) => setPhone(phone)}
                country="gb"
                preferredCountries={["gb"]}
                enableSearch={true}
              />
              <TextField
                id="company"
                name="company"
                label="Company (optional)"
                placeholder="Example Inc."
                variant="outlined"
              />
            </div>
            <TextField
              id="message"
              name="message"
              label="Message"
              placeholder="Your message here..."
              variant="outlined"
              multiline
              rows={4}
              className="w-full"
            />
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Submit
            </Button>
          </ThemeProvider>
        </form>
      </div>
    </>
  );
}
