import {  Paper, Card, Box, CardMedia, CardContent, Typography, Button, CardActions, Stack} from "@mui/material"
import { positions } from '@mui/system';

import "./HomePageStyle.css";






function HomePage(props: {
    btnName: String;
    btn: string | undefined;
    url: string | undefined;
    title: String;
    para: String;
    cName: string | undefined; 
    homeimage: string | undefined 
}){
  return (
  <>
    <div className={props.cName}>
    <img alt="Unsplash Image" src={props.homeimage}></img>
    <div className="image-text">
        
        <h1>{props.title}</h1>

        <p>{props.para}</p>

        <Button variant='contained'color="success" href={props.url} className={props.btn}>

            {props.btnName}

        </Button>
    </div>
    </div>
  <Stack direction={'row'} spacing={3}>
   <Box width='300px' p={4} borderRadius={0} >
   <Card elevation={6}>

    <CardMedia
    component={'img'}
    height={'140'}
    image="https://plus.unsplash.com/premium_photo-1663013388261-748f33604222?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="unplash Image"/>
        
   
    <CardContent>
        <Typography gutterBottom component="div" fontWeight={'bold'} letterSpacing={0} fontSize={22}>
            Body Mass Index
        </Typography>

        <Typography variant="body2" color="text.secondary">
            BMI, or Body Mass Index, is a numerical value derived from an individual's weight and height.
         It is commonly used as a screening tool to categorize people into different weight status categories,
         such as underweight, normal weight, overweight, and obesity.
          </Typography>

    </CardContent>
    <CardActions>
        <Button  size="small">Calculate</Button>
        <Button size="small">More</Button>
        
    </CardActions>
   </Card>
   </Box>

   <Box width='300px' p={4} borderRadius={0} >
   <Card elevation={6}>

    <CardMedia
    component={'img'}
    height={'140'}
    image="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="unplash Image"/>
        
   
    <CardContent>
        <Typography gutterBottom component="div" fontWeight={'bold'} letterSpacing={0} fontSize={22}>
            WORKOUTS
        </Typography>

        <Typography variant="body2" color="text.secondary">
            BMI, or Body Mass Index, is a numerical value derived from an individual's weight and height.
         It is commonly used as a screening tool to categorize people into different weight status categories,
         such as underweight, normal weight, overweight, and obesity.
          </Typography>

    </CardContent>
    <CardActions>
        
        <Button size="small">More</Button>
        
    </CardActions>
   </Card>
   </Box>

   <Box width='300px' p={4} borderRadius={0} >
   <Card elevation={6}>

    <CardMedia
    component={'img'}
    height={'140'}

    image="https://plus.unsplash.com/premium_photo-1663841166528-b550d44cbee9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="unplash Image"/>
        
   
    <CardContent>
        <Typography gutterBottom component="div" fontWeight={'bold'} letterSpacing={0} fontSize={22}>
            HEALTHY DIET
        </Typography>

        <Typography variant="body2" color="text.secondary">
            BMI, or Body Mass Index, is a numerical value derived from an individual's weight and height.
         It is commonly used as a screening tool to categorize people into different weight status categories,
         such as underweight, normal weight, overweight, and obesity.
          </Typography>

    </CardContent>
    <CardActions>
       
        <Button size="small">More</Button>
        
    </CardActions>
   </Card>
   </Box>

   <Box width='300px' p={4} borderRadius={0} >
   <Card elevation={6}>

    <CardMedia
    component={'img'}
    height={'140'}
    image="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="unplash Image"/>
        
   
    <CardContent>
        <Typography gutterBottom component="div" fontWeight={'bold'} letterSpacing={0} fontSize={22}>
            FAQ
        </Typography>

        <Typography variant="body2" color="text.secondary">
            BMI, or Body Mass Index, is a numerical value derived from an individual's weight and height.
         It is commonly used as a screening tool to categorize people into different weight status categories,
         such as underweight, normal weight, overweight, and obesity.
          </Typography>

    </CardContent>
    <CardActions>
        <Button size="small" >Ask</Button>
       
        
    </CardActions>
   </Card>
   </Box>
   </Stack>

    </>
    
  )
}

export default HomePage;
