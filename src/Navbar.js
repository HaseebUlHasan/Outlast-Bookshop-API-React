import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




const Navbar = () => {
    return ( 
        <div>
         <Box>
      <AppBar position="static" style = {{backgroundColor:"#3486eb" , color:"white" , height:"60px"}}>
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div"  >
               Outlast Bookshop
          </Typography>
        </Toolbar>
        </AppBar>
         </Box>
        </div>
    );
}

export default Navbar;