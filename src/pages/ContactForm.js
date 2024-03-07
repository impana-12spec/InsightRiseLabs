import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const showToastMessage = () => {
    toast(
      "Thanks for contacting us, Our team will get back to you shortly :)",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("https://airdraw.onrender.com/sendmail", formData);
      showToastMessage();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          border: "2px solid #3dace1",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Stack>
          <Typography textAlign="center" fontSize="20px" className="contact">
            GET IN TOUCH
          </Typography>
          <Typography
            textAlign="center"
            mt={1}
            mb={1}
            color="#777"
            className="contact"
          >
            Please complete the form, and we will get back to you.
          </Typography>
        </Stack>
        <Divider />

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={5}
            margin="normal"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </>
  );
};

export default ContactForm;