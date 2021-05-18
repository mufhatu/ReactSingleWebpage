import React from 'react'
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'; 
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
    return (
        <BottomNavigation className="footer">
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill:"#3b5998"}}/>}/>
            <BottomNavigationAction label="Facebook" icon={<InstagramIcon style={{fill:"#1DA1F2"}}/>}/>
            <BottomNavigationAction label="Facebook" icon={<YouTubeIcon style={{fill:"#c13584"}}/>}/>
            <BottomNavigationAction label="Facebook" icon={<TwitterIcon style={{fill:"#C4302B"}}/>}/>
        </BottomNavigation>
    )
}
