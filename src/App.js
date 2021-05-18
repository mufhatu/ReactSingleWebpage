/* eslint-disable react/jsx-no-duplicate-props */
import {createMuiTheme,ThemeProvider,makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/footer'
import {Typography} from '@material-ui/core'
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
   palette :{
    primary: {
       main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
    typography: {
      fontFamily:[
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontsize: 28,
        lineHeight: '2rem',
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2erm',
      },
    },
  },
});

const styles = makeStyles({
  wrapper:{
    width:"80%",
    margin:"auto",
    textAlign:"center",

  },
  bigSpace:{
    marginTop:"3rem"
  },
  littleSpace:{
    marginTop:"2.5rem",
  },
   grid:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"wrap",
    margin:"2rem"
  },
})

function App() {

  const classes =styles()
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <NavBar/>
          <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
              We are your helpers.
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
            ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing.
             There’s never been a better time to learn React.
            </Typography>
          </div>
          <div className={classes.grid}  >
            <Grid icon={<SecurityIcon style={{fill:"#4360a6",height:"125",width:"125"}}/>} title="Secure" btnTitle="Know More"/>
            <Grid icon={<EventNoteIcon style={{fill:"#DEB12B",height:"125",width:"125"}}/>} title="EventNote" btnTitle="Know More"/>
            <Grid icon={<TrendingUpIcon style={{fill:"#B4424B",height:"125",width:"125"}}/>} title="TrendingUp" btnTitle="Know More"/>
          </div>
          <div className={classes.grid} >
            <Grid icon={<ImportExportIcon style={{fill:"#c13584",height:"125",width:"125"}}/>} title="ImportExport" btnTitle="Know More"/>
            <Grid icon={<HttpIcon style={{fill:"C4302B",height:"125",width:"125"}}/>} title="Http" btnTitle="Know More"/>
            <Grid icon={<ImportantDevicesIcon style={{fill:"#A573BE",height:"125",width:"125"}}/>} title="Important" btnTitle="Know More"/>
          </div>
          <Footer/>
       </ThemeProvider>
    </div>
  );
}

export default App;

