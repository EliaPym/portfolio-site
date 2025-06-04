"use client";

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MuiPhone } from "../components/phoneInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { WorldMap } from "../components/worldMap";
import "dotenv/config";

export default function Contact() {
  const [phone, setPhone] = useState("");

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#53eafd",
      },
      secondary: {
        main: "#5ee9b5",
      },
      background: {
        default: "#101720",
        paper: "rgba(16, 23, 32, 0.8)",
      },
      text: {
        primary: "#faf9f6",
        secondary: "#d1d1d1",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#53eafd",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#53eafd",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#53eafd",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: "linear-gradient(45deg, #53eafd 30%, #5ee9b5 90%)",
            color: "#101720",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg, #5ee9b5 30%, #53eafd 90%)",
            },
          },
        },
      },
    },
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || ""
    );

    const object = Object.fromEntries(formData);
    const jsonData = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: jsonData,
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
      event.currentTarget.reset();
    } else {
      alert("Error sending message: " + result.message);
    }
  }

  const buttonBackground = "bg-background/50 backdrop-blur-sm";

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-170px)] py-16">
        <div className="absolute inset-0 z-[-1]">
          <WorldMap
            dots={[
              {
                start: { lat: 44, lng: -0.5 }, // London
                end: { lat: 29, lng: -73 }, // New York
              },
              {
                start: { lat: 29, lng: -73 }, // New York
                end: { lat: 42.5, lng: -124 }, // Vancouver
              },
              {
                start: { lat: 0, lng: 75 }, // Mumbai
                end: { lat: -55, lng: 151 }, // Sydney
              },
              {
                start: { lat: 29, lng: 13 }, // Rome
                end: { lat: 8, lng: 55 }, // Dubai
              },
              {
                start: { lat: 8, lng: 55 }, // Dubai
                end: { lat: 26, lng: 115 }, // Beijing
              },
              {
                start: { lat: -41.5, lng: -47 }, // Sao Paulo
                end: { lat: -51.5, lng: 19.6 }, // Cape Town
              },
            ]}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-fit h-fit">
          <div className="relative">
            <svg className="w-full max-w-xs mx-auto" viewBox="0 0 300 80">
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                className="text-4xl font-light"
                fill="var(--primary)"
                stroke="var(--background)"
                strokeWidth="7"
                paintOrder="stroke fill"
              >
                Contact
              </text>
            </svg>
          </div>
            <hr className="border-t-1 w-[103%] self-center" />
          {/*
            First Name
            Last Name
            Email
            Phone (optional)
            Company (optional)
            Message
            Submit button
          */}
          <form
            className="flex flex-col items-center justify-center w-full h-full pt-[36px] max-w-md gap-4"
            onSubmit={handleSubmit}
          >
            <ThemeProvider theme={theme}>
              <div className="flex flex-row gap-4 w-full">
                <TextField
                  id="first_name"
                  name="first_name"
                  label="First Name"
                  placeholder="John"
                  variant="outlined"
                  className={buttonBackground}
                  type="text"
                />
                <TextField
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  placeholder="Doe"
                  variant="outlined"
                  className={buttonBackground}
                  type="text"
                />
              </div>
              <TextField
                id="email"
                name="email"
                label="Email"
                placeholder="johndoe@example.com"
                variant="outlined"
                className={`${buttonBackground} w-full`}
                required
                type="email"
              />
              <div className="flex flex-row gap-4 w-full">
                <MuiPhone
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  className={buttonBackground}
                  id="phone"
                  label="Phone number"
                  name="phone"
                  placeholder="+44 01234 567890"
                  type="tel"
                />
                <TextField
                  id="company"
                  name="company"
                  label="Company"
                  placeholder="Example Inc."
                  variant="outlined"
                  className={buttonBackground}
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
                className={`${buttonBackground} w-full`}
                required
                type="text"
                slotProps={{ htmlInput: { style: { resize: "block" } } }}
              />

              <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Submit
              </Button>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </>
  );
}
