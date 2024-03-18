import { Box, Button, Grid, Paper, styled } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <>
    <div className='container'>
        <div style={{height : '120vh',width: '100%',backgroundColor: '#9ed3e6'}}>
            
        <Box sx={{ width: '100%' }} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <Grid style={{marginTop: '200px'}} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3,lg: 20 }}>
            <Grid xs={7}>
            <Item style={{height: '300px',background: 'none',textAlign: 'center',boxShadow: 'none'}}>
                <img style={{height: '650px',width: '1300px',marginTop: '-210px'}} src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/342827255/original/08e89eedc7116ad36f6840bf47e372a11dee1a6d/create-animated-gif-or-lottie-animation-for-web-and-mobile-app.png" alt="" />
            </Item>
            </Grid>
            <Grid xs={5}>
            <Item style={{height: '300px',background: 'none',textAlign: 'center',boxShadow: 'none',padding: '50px',marginTop: '10px'}}>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repudiandae esse molestiae eaque explicabo harum laudantium similique placeat vitae et, numquam deleniti in distinctio ipsam corrupti odio blanditiis assumenda ducimus!</p>
                <Link to='/view'><Button className='btn' variant="outlined">Get Started</Button></Link>
            </Item>
            </Grid>
        </Grid>
        </Box>

        </div>
    </div>
    </>
  )
}

export default Home