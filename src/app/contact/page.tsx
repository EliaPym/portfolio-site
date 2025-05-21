import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-screen h-full">
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
          <div className="flex flex-row gap-4 w-full">
            <TextField
              id="first_name"
              name="first_name"
              label="First Name"
              placeholder="John"
              variant="outlined"
              value={""}
            />
            <TextField
              id="last_name"
              name="last_name"
              label="Last Name"
              placeholder="Doe"
              variant="outlined"
              value={""}
            />
          </div>
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="johndoe@example.com"
            variant="outlined"
            value={""}
            className="w-full"
          />
          <div className="flex flex-row gap-4 w-full">
            <TextField
              id="phone"
              name="phone"
              label="Phone (optional)"
              placeholder="+44 1234 567890"
              variant="outlined"
              value={""}
            />
            <TextField
              id="company"
              name="company"
              label="Company (optional)"
              placeholder="Example Inc."
              variant="outlined"
              value={""}
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
            value={""}
            className="w-full"
          />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
