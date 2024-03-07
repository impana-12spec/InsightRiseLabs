import React, { useEffect } from 'react';
import consulting from '../images/consulting.jpg';
import { Button, Divider, Grid, Stack, Typography } from '@mui/material';
import solutions from "../images/solutions.jpg"
import products from "../images/products.png"
import main from "../images/main.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const Homesection3 = () => {
    useEffect(() => {
        Aos.init({ duration: 20000 }); 
    }, []);


    return (
        <Grid container>
           
            <Grid item xs={12} md={6}  sx={{ p: { xs: 2, sm: 8} }}  backgroundColor="#f5f7f9">
    <div data-aos="fade-right">
        <img
            src={consulting}
            alt="consulting"
            style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                display: 'block',
                margin: 'auto',
            }}
        />
    </div>
</Grid>
<Grid item xs={12} md={6}  sx={{p:{xs:2,sm:8}}} backgroundColor="#f5f7f9">
    <Stack display="flex" alignItems="center" justifyContent="center">
        <Typography fontWeight="300" fontSize="32px" color="black">
            Consulting
        </Typography>
        <Divider sx={{ width: '80px', mt: '20px', borderColor: '#ff4530', borderWidth: '3px' }} />
        <Typography
            mt={5}
            color="#747474"
            sx={{ fontSize: '20px', textAlign: { xs: 'flex', sm: 'justify' }, lineHeight: '35px' }}
        >
            With decades of experience in technology consulting for many industry-leading companies, we
            bring a unique blend of business and technology expertise to provide strategic consulting
            solutions to enable businesses to adapt evolving technologies.
        </Typography>
    </Stack>
</Grid>


            <Grid item xs={12} md={6}  sx={{p:{xs:2,sm:8}}} backgroundColor="#f5f7f9">
                <Stack display="flex" alignItems="center" justifyContent="center">
                    <Typography fontWeight="300" fontSize="32px" color="black">
                        Solutions
                    </Typography>
                    <Divider sx={{ width: '80px', mt: '20px', borderColor: '#ff4530', borderWidth: '3px' }} />
                    <Typography
                        mt={5}
                        color="#747474"
                        sx={{ fontSize: '20px',   textAlign: { xs: 'flex', sm: 'justify' }, lineHeight: '35px' }}
                    >
                        We have build a strong competence to deliver end to end services from developing disrupting technology solutions to integrate with existing technologies and business models, thereby business can realize the value as proposed through consulting services.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}  sx={{p:{xs:2,sm:8}}} backgroundColor="#f5f7f9" >
                <div data-aos="fade-left">
                    <img
                        src={solutions}
                        alt="solutions"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            display: 'block',
                            margin: 'auto',
                        }}
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={6}  sx={{p:{xs:2,sm:8}}} backgroundColor="#f5f7f9" >
                <div data-aos="fade-right">
                    <img
                        src={products}
                        alt="products"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            display: 'block',
                            margin: 'auto',
                        }}
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={6}  sx={{p:{xs:2,sm:8}}} backgroundColor="#f5f7f9">
                <Stack display="flex" alignItems="center" justifyContent="center">
                    <Typography fontWeight="300" fontSize="32px" color="black">
                        Products
                    </Typography>
                    <Divider sx={{ width: '80px', mt: '20px', borderColor: '#ff4530', borderWidth: '3px' }} />
                    <Typography
                        mt={5}
                        color="#747474"
                        sx={{ fontSize: '20px',  textAlign: { xs: 'flex', sm: 'justify' }, lineHeight: '35px' }}
                    >
                        We have developed a suite of products leveraging our expertise in technologies – artificial intelligence, machine learning, and robotic process automation, so as to enable the business to realize the value that is not only robust and proven but also cost-effective and easy to deploy.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item
                xs={12}
                sx={{p:{xs:3,sm:20}}}
                pt={10}
                pb={10}
                style={{
                    backgroundImage: `url(${main})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                }}>
                <Stack display="flex" alignItems="center" justifyContent="center">
                    <Typography fontWeight="300" fontSize="28px" color="white">
                        The best way to be success
                    </Typography>
                    <Typography
                        fontSize="45px"
                        color="white"
                        sx={{   textAlign: { xs: 'flex', sm: 'justify' }, }}
                    >
                        Are you ready to succeed with us?
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff4530',
                            fontSize: '1.0rem',
                            fontWeight: 'light', 
                            padding: '15px 30px', 
                        }}
                    >
                        CONTACT US
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Homesection3;
