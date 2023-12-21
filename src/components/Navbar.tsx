import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Grid, Avatar} from "@mui/material";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';



export const Navbar = () => {
  return (

    <>
     <Grid container xs={12} >
       
     
          <AppBar position="static">
              <Toolbar>
                
                 <Grid item >
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                        <DirectionsRunIcon />
                    </IconButton>
                 </Grid>
                      
                  <Grid item  >
                      <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}> HEALTHYME</Typography>
                  </Grid>

                  <Grid item xs={7}></Grid>
               
                  
                  <Grid item >
                    <Stack direction={"row"} spacing={2} >
                        <Grid item xs={3} > <Button color="inherit">HOME</Button> </Grid>

                        <Grid item xs={3} > <Button color="inherit">MEMBERSHIP</Button> </Grid>
                     
                        <Grid item xs={3}><Button color="inherit">ABOUT</Button> </Grid>

                        <Grid item xs ={1} ><Avatar></Avatar></Grid>

                        <Grid item ><Button color="inherit" size="small" >SIGNIN</Button> </Grid>

                        

                  </Stack>
                  </Grid>
              </Toolbar>
          </AppBar>
     </Grid>
    </>
  )
}
