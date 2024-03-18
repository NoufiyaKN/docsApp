import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                 <Link style={{textDecoration: 'none',color: 'white'}} to='/'> Docs App</Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
      </div>
    </>
  )
}

export default Header