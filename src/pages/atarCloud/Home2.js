import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Divider, Button } from '@material-ui/core';
import dash_panel from '../../assests/dash_panel.png';
import apple_store from '../../assests/apple_store.png';
import android_store from '../../assests/android_store.png';
import virtual from '../../assests/3d.png';
import accurate_icon from '../../assests/accurate_icon.png';
import visit_management from '../../assests/visit_management.png';
import tours_app from '../../assests/3d_tours_app.png';
import real_time from '../../assests/real_time.png';
import maintenance from '../../assests/maintenance.png';
import income from '../../assests/income.png';
import access from '../../assests/access.png';
import status from '../../assests/status.png';
import requests from '../../assests/requests.png';
import expenses from '../../assests/expenses.png';
import search from '../../assests/search.png';
import walkthroughs from '../../assests/walkthroughs.png';
import schedule from '../../assests/schedule.png';

import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  AppBar: {
    backgroundColor: "#006687",
    backgroundSize: "cover",
    padding:'1%',
  },
  list:{
    display:"inline",
    color:'#fff'
  },
  paper: {
    padding: "1%",
    backgroundColor:"#006687",
  },
  data: {
    padding:"4%",
    marginRight: '10%',
    color:"#fff"
  },
  img:{
    padding:"5%",
    marginTop:"1%"
  }
}));

const Home2 = (props) => {

  const classes = useStyles();

  return (
    <React.Fragment>
    <Nav />
    <Divider />
    <Paper className={classes.paper}>
    <Grid container spacing={5}>
    <Grid item xs={5} sm={5} md={5} lg={5}>
      <div className={classes.data}>
      <h1>Renting has <br/> never been <br/>easier</h1>
      <h5>MEET ATAR</h5>
      <p>Whether you're a landlord or agent looking to list and manage your properties or a tenant looking to find your dream home, there's something for everyone here at ATAR.</p>
      <h5>Download our apps <br/>today to learn more!</h5>
      <div >
        <img src={apple_store} style={{marginRight:"2%"}}/> <img src={android_store} />
      </div>
      </div>
    </Grid>
    {/* <Grid xs={1} sm={1} md={1} lg={1}></Grid> */}
    <Grid item xs={7} sm={7} md={7} lg={7}>
      <div className={classes.img}>
       <img src={dash_panel} width="100%" height="300px"/> 
       </div>
    </Grid>
    </Grid>
    </Paper>


    <Grid container direction="row" justify="center" alignItems="center" >
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <div>
            <Typography style={{fontSize:"50px",fontWeight:"500",textAlign:"center", color:"#006687",marginTop:"10%"}}>List Your Home</Typography>   
        </div>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>

      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <div>
            <Typography style={{fontSize:"18px", textAlign:"center", color:"grey"}}>Listing home is much more than placing ads, and our aim is to find right
            tenant for the right price, all the while making sure your home looks its best.</Typography>   
        </div>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
    </Grid>


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"3%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={accurate_icon} width="100px"/>
        </div>
        <div>
          <p>Acurate Listing</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={virtual} width="100px"/>
          </div>
          <div>
          <p>3D Virtual Tours & Floorplans</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={visit_management} width="100px"/>
        </div>
        <div>
          <p>Visit Management for your property</p>
        </div>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>  


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"1%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
        <Button style={{backgroundColor:"#006687",color:"#fff",padding:"1% 2% 1% 2%"}}>List your home today</Button>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>  

    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"1%",backgroundColor:"#f1f6f9"}}>
    <Grid item xs={2} sm={2} md={3} lg={3}></Grid>
      <Grid item xs={4} sm={4} md={3} lg={3} style={{textAlign:"center"}}>
        <img src={tours_app} width="100%" height="auto" style={{marginTop:"-200px"}} />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={3} style={{textAlign:"center",color:"#006687"}}>
      <h1>3D Virtual Tours & Floorplans</h1>
      </Grid>
      <Grid item xs={2} sm={2} md={3} lg={3}></Grid>


      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={3} sm={3} md={3} lg={3} style={{textAlign:"center",color:"#006687"}}>
      <h1>Visit Management For Your Properties</h1>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3} style={{textAlign:"center"}}>
      <img src={tours_app} width="100%" height="auto" style={{marginBottom:"-200px"}} />
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>  


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"1%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
        <Button style={{backgroundColor:"#006687",color:"#fff",padding:"1% 2% 1% 2%"}}>List your home today</Button>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 


    <Grid container direction="row" justify="center" alignItems="center" >
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <div>
            <Typography style={{fontSize:"50px",fontWeight:"500",textAlign:"center", color:"#22aa6f",marginTop:"10%"}}>Manage Your Home</Typography>   
        </div>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>

      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <div>
            <Typography style={{fontSize:"18px", textAlign:"center", color:"grey",marginTop:"2%"}}>We're aware of the hassle that comes with managing homes. No more disputes and unexpected surprises. 
            Simply manage your properties, generate reports, and interact with tenant from the comfort of your phone screen.</Typography>   
        </div>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
    </Grid>


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"5%"}}>
    <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={real_time} width="100px"/>
        </div>
        <div>
          <p style={{marginTop:'10%'}}>Real-time Status<br/> Summaries</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey",}}>
        <div>
          <img src={maintenance} width="100px"/>
          </div>
          <div>
          <p style={{marginTop:'10%'}}>Manage Maintenance &<br/> Other Requests</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={income} width="100px"/>
        </div>
        <div>
          <p style={{marginTop:'10%'}}>Track Your Income<br/> and Expenses</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={access} width="100px"/>
        </div>
        <div>
          <p style={{marginTop:'10%'}}>Provide Access<br/> to Users</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
    </Grid> 


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"3%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
        <Button style={{backgroundColor:"#22aa6f",color:"#fff",padding:"1% 2% 1% 2%"}}>Manage your property today</Button>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 

    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>

    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"1%",backgroundColor:"#f1f6f9"}}>
      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center"}}>
        <img src={status} width="100%" height="auto" style={{marginTop:"-200px"}} />
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center",color:"#006687"}}>
      <h1>Real-time Status Summaries</h1>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>

      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center",color:"#006687"}}>
      <h1>Manage Maintenance & Other Requests</h1>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center"}}>
      <img src={requests} width="100%" height="auto" style={{marginBottom:"-200px"}} />
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
    </Grid> 

    {/* <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:""}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>

    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:"red"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> */}

    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:"#f1f6f9"}}>
     <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center"}}>
        <img src={expenses} width="100%" height="auto" style={{marginBottom:"-200px"}} />
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} style={{textAlign:"center",color:"#006687"}}>
      <h1>Track Your Income & Expenses</h1>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
    </Grid>


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"10%",marginBottom:"10%",backgroundColor:"red"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid>


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"1%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
        <Button style={{backgroundColor:"#006687",color:"#fff",padding:"1% 2% 1% 2%"}}>List your home today</Button>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 


    <Grid container direction="row" justify="center" alignItems="center" >
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <div>
            <Typography style={{fontSize:"50px",fontWeight:"500",textAlign:"center", color:"#006687",marginTop:"10%"}}>Find Your Dream Home</Typography>   
        </div>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>

      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <div>
            <Typography style={{fontSize:"18px", textAlign:"center", color:"grey",marginTop:"2%"}}>We understand how difficult it can be to find the right home for yourself and your family,
            Though our listing platform, You can find accurate listing with detailed information and search and filter in the ways that really matter.</Typography>   
        </div>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
    </Grid>


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"5%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={search} width="100px"/>
        </div>
        <div>
          <p style={{marginTop:'10%'}}>Search & Select</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey",}}>
        <div>
          <img src={walkthroughs} width="100px"/>
          </div>
          <div>
          <p style={{marginTop:'10%'}}>3D Walkthroughs</p>
        </div>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} style={{textAlign:"center", color:"grey"}}>
        <div>
          <img src={schedule} width="100px"/>
        </div>
        <div>
          <p style={{marginTop:'10%'}}>Schedule a Visit</p>
        </div>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 


    <Grid container direction="row" justify="center" alignItems="center" style={{marginTop:"3%"}}>
    <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
        <Button style={{backgroundColor:"#006687",color:"#fff",padding:"1% 2% 1% 2%"}}>Find your dream home today</Button>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
    </Grid> 

    </React.Fragment>
  );
}

export default Home2;