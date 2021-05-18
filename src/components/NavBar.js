/* eslint-disable no-useless-computed-key */
import React from 'react'
import mg from '../mg.png'
import CustomBtn from './CustomBtn'
import {Toolbar,Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
   bar :{
       paddingTop:"0.1rem",
       backgroundColor:"#fff",
        ['@media (max-width:780px)']:{
           flexDirection:"column"
       }
       
   },
   mg:{
       width:"12%",
       ['@media (max-width:780px)']:{
           display:"none"
       }
   },
   menuItems:{
       cursor:"pointer",
       flexGrow:1,
       "&:hover":{
           color:"#A573BE"
       },
       ['@media (max-width:780px)']:{
           padingBottom:"1rem",
       }
   }

})

export default function NavBar() {
    const classes= styles()
    return (
     <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
         <img alt="logo" src={mg} className={classes.mg}/>
         <Typography variance="h6" className={classes.menuItems}>
             About
         </Typography>
         <Typography variance="h6" className={classes.menuItems}>
             Services
         </Typography>
         <Typography variance="h6" className={classes.menuItems}>
             Our Work
         </Typography>
         <Typography variance="h6" className={classes.menuItems}>
             Contact Us
         </Typography>
         <CustomBtn txt="Sign Up"/>
     </Toolbar>
    )
}
