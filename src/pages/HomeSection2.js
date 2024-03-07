import React from "react";
import { Typography, Grid, Stack, Divider } from "@mui/material";
import banner from "../images/home-banner.jpg";

const HomeSection2 = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ p: { xs: 2, sm: 10 }, direction: { xs: "column", sm: "row" } }}
        backgroundColor="#f5f7f9"
      >
        <Stack display="flex" alignItems="center" justifyContent="center">
          <Typography fontWeight="300" fontSize="32px" color="black">
            At InsightRiseLabs
          </Typography>
          {/* Add Divider component below the text */}
          <Divider
            sx={{
              width: "80px",
              mt: "20px",
              borderColor: "#ff4530",
              borderWidth: "3px",
            }}
          />
          <Typography
            mt={5}
            color="#747474"
            sx={{
              fontSize: "17px",
              textAlign: { xs: "flex", sm: "justify" },
              lineHeight: "35px",
            }}
          >
            We are passionate about enabling business with game-changing
            solutions through disrupting technologies.InsightRiseLabs team has
            expertise in delivering enterprise-level solutions in the field of
            Artificial Intelligence (AI), Robotic Process Automation (RPA), and
            Internet of Things (IoT). We have decades of experience in
            technology consulting, helping businesses innovate with AI, enrich
            customer insights, automate processes & be more cost-efficient.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ p: { xs: 5, sm: 10 } }}
        pt={0}
        pb={0}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Stack display="flex" alignItems="center" justifyContent="center">
          <Typography fontWeight="300" fontSize="32px" color="white">
            Our Services
          </Typography>
          <Divider
            sx={{
              width: "80px",
              mt: "20px",
              borderColor: "#ff4530",
              borderWidth: "3px",
            }}
          />
          <Typography
            mt={5}
            color="white"
            sx={{ fontSize: "17px", textAlign: "justify", lineHeight: "35px" }}
          >
           InsightRiseLabs provides reliable and high-quality staffing solutions that
            offer you the ability to build your staff strength without absorbing
            them full time, assist overloaded employees during critical times,
            and keep projects moving. Unlike traditional staffing model,InsightRiseLabs
            takes the responsibility of the work being delivered through
            staffing engagement, so the client can be sure of the deliverables
            in time, with meeting and exceeding expectations.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HomeSection2;
