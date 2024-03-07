import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import contact from "../images/contact_us.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Layout>
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            p: { xs: 10, sm: 15 },
            background: `url(${contact}) center center no-repeat`,
            backgroundSize: "cover",
            color: "white",
            minHeight: "30vh",
          }}
        >
          <Typography fontSize="28px">Contact Us</Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{ p: { sm: 10, xs: 2 } }}>
          <Stack>
            <Typography color="#3dace1" fontSize="22px" className="contact">
              Contact Us
            </Typography>
            <Typography
              fontSize="38px"
              color="#111111"
              className="contact"
              style={{ fontWeight: 300 }}
            >
              Drop Us a Message
            </Typography>
            <Typography
              fontSize="14px"
              color="#5f6467"
              mt={1}
              className="contact"
            >
              DO YOU HAVE A BIG IDEA WE CAN HELP WITH?
            </Typography>
          </Stack>

          <Stack direction="row" gap={5}>
            <Stack mt={15}>
              <LocationOnOutlinedIcon
                style={{ fontSize: 40, color: "#3dace1" }}
              />
              <Typography fontWeight="bold" mt={1} className="contact">
                Address{" "}
              </Typography>
              <Typography className="contact">
                {" "}
                No. 313, 2nd floor ,{" "}
              </Typography>{" "}
              <Typography className="contact">
                {" "}
                Atlantis liberty Square Building,
                <br /> 6th stage,
              </Typography>
              <Typography className="contact"> Banashankari,</Typography>{" "}
              <Typography className="contact">Bengaluru,</Typography>
              <Typography className="contact"> Karnataka 560062</Typography>
            </Stack>
            {/* <Stack mt={15}>
              <PermPhoneMsgOutlinedIcon
                style={{ fontSize: 38, color: "#3dace1" }}
              />
              <Typography fontWeight="bold" mt={1} className="contact">
                Phone{" "}
              </Typography>
              <Typography className="contact">0804-717-8999</Typography>
            </Stack> */}
            <Stack mt={15}>
              <EmailOutlinedIcon style={{ fontSize: 38, color: "#3dace1" }} />
              <Typography fontWeight="bold" mt={1} className="contact">
                Email{" "}
              </Typography>
              <Typography className="contact">insightriselabs@gmail.com</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: { sm: 10, xs: 2 } }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
