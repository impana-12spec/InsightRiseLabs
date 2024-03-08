import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InsightRiselabs from "../../images/InsightRiselabs.jpeg"
import { Box, Grid, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Grid container backgroundColor="#f3efef" sx={{ p: { xs: 4, sm: 10 } }}>
        <Grid itex xs={12} md={3}>
          <Stack>
            <Typography fontSize="13px" color="#747474">
              ABOUT US
            </Typography>
            <Typography fontSize="13px" mt={2} color="#747474">
              InsightRiseLab is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). InsightRiseLabs mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ ml: { xs: 0, sm: 4 }, mt: { xs: 4, sm: 0 } }}
        >
          <Stack>
            <Typography fontSize="13px" color="#747474">
              LEARN MORE
            </Typography>
            <NavLink
              to={"/about"}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Typography fontSize="13px" mt={1} color="#747474">
                {" "}
                About
              </Typography>
            </NavLink>
            <NavLink
              to={"/contact"}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {" "}
              <Typography fontSize="13px" mt={1} color="#747474">
                {" "}
                Contact Us
              </Typography>
            </NavLink>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack>
            <Typography component="div" fontSize="13px" color="#747474">
              ADDRESS
            </Typography>
            <Typography component="div" fontSize="13px" mt={2} color="#747474">
              Atlantis liberty Square Building, No. 313, 2nd floor, Banashankari
              6th stage, Bangalore 560062
            </Typography>
            {/* <Typography component="div" fontSize="13px" color="#747474">
              Phone:{" "}
              <a
                href="tel:08047178999"
                style={{ color: "#747474", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                0804-717-8999
              </a>
            </Typography> */}
            <Typography component="div" fontSize="13px" color="#747474">
              Email:{" "}
              <a
                style={{ color: "#747474", textDecoration: "none" }}
                href="mailto:InsightRiseLabstech@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                insightriselabstech@gmail.com
              </a>
            </Typography>
            <Typography mt={2}>
              <img src={InsightRiselabs}  height="150" width="330"alt="image"/>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
        </Box>
        <Typography
          fontSize="18px"
          color="#747474"
          textAlign="left"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          © Copyright 2017 - 2023 InsightRiseLabs | All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
