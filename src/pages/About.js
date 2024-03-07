import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import aboutus from "../images/about_us.jpg";
import aboutus1 from "../images/about-us1.jpg";

const About = () => {
  return (
    <Layout >
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            p: { xs: 8, sm: 15 },
            background: `url(${aboutus}) center center no-repeat`,
            backgroundSize: 'cover', 
            color: 'white',
            minHeight: '30vh', 
          }}
        >
          <Typography fontSize="28px">Who We Are</Typography>
        </Grid>
      </Grid>
      <Grid container >
   
      <Grid item xs={12} md={6} sx={{p:{xs:2,sm:8}, py: { xs: 2, sm: 4 }, pr: { xs: 2, sm: 4 }}} >
   
        <img
            src={aboutus1}
            alt="consulting"
            style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                display: 'block',
                margin: 'auto',
                marginTop:"100px"
            }}
        />
</Grid>

<Grid item xs={12} md={6}  sx={{p:{xs:2,sm:8}}}>
    <Stack display="flex" alignItems="center" justifyContent="center">
        <Typography fontWeight="300" fontSize="32px" color="black">
        A Bit About Us

        </Typography>
        <Divider sx={{ width: '80px', mt: '20px', borderColor: '#ff4530', borderWidth: '3px' }} />
        <Typography
            mt={5}
            color="#747474"
            sx={{ fontSize: '13px', textAlign: { xs: 'flex', sm: 'justify' }, lineHeight: '35px' }}
        >
          InsightRiseLabs is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT).InsightRiseLabs mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.<br/>
          Started in 2008, providing technology solutions based in the Netherlands, founders of InsightRiseLabs™ have gained expertise in cutting-edge technology through delivering several smart city solutions for European Commission (EC) projects.<br/>

At InsightRiseLabs™, we make your business more efficient, more predictable and more effective, turning complex challenges into solutions by leveraging disruptive technologies, providing a strategic competitive advantage. We serve clients in most industries including Banking & Finance, Retail, e-commerce, healthcare, logistics et., We have the capability to deliver solutions to clients of all sizes across the globe.    
        </Typography>
    </Stack>
</Grid>
<Grid item xs={12}sx={{ p: { xs: 2, sm: 10},direction:{ xs: "column", sm: "row" }}} backgroundColor="#f5f7f9">
                <Stack display="flex" alignItems="center" justifyContent="center">
                    <Typography fontWeight="300" sx={{textAlign: { xs: 'center', sm: 'justify' }}} fontSize="32px" color="black">
                    The Management Team
                    </Typography>
                    {/* Add Divider component below the text */}
                    <Divider sx={{ width: '80px', mt: '20px', borderColor: '#ff4530', borderWidth: '3px' }} />
                    <Typography
                        mt={5}
                        color="#747474"
                        sx={{ fontSize: '17px',  textAlign: { xs: 'flex', sm: 'justify' }, lineHeight: '35px' }}
                    >
                       At InsightRiseLabs™, we make your business more efficient, more predictable and more effective, turning complex challenges into solutions by leveraging disruptive technologies, providing a strategic competitive advantage. We serve clients in most industries including Banking & Finance, Retail, e-commerce, healthcare, logistics et., We have the capability to deliver solutions to clients of all sizes across the globe.
                    </Typography>
                </Stack>
            </Grid>
</Grid>
    
    </Layout>
  );
};

export default About;
