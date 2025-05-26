"use client";

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MuiPhone } from "../components/phoneInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DotPattern } from "../components/dotPattern";

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
      <DotPattern
        width={16}
        height={16}
        x={0}
        y={0}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-0 z-[-1] opacity-50 [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_77%)]"
        glow={true}
      />
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
                className="bg-background/80"
              />
              <TextField
                id="last_name"
                name="last_name"
                label="Last Name"
                placeholder="Doe"
                variant="outlined"
                className="bg-background/80"
              />
            </div>
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="johndoe@example.com"
              variant="outlined"
              className="bg-background/80 w-full"
            />
            <div className="flex flex-row gap-4 w-full">
              <MuiPhone
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="bg-background/80"
              />
              <TextField
                id="company"
                name="company"
                label="Company"
                placeholder="Example Inc."
                variant="outlined"
                className="bg-background/80"
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
              className="bg-background/80 w-full"
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
