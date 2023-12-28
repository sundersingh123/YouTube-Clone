import React from 'react'
import {RiFeedbackLine} from 'react-icons/ri';
import {IoIosHelpCircleOutline,IoIosAlbums} from 'react-icons/io';
import {MdOutlineLiveTv,MdOutlineVideoLibrary,MdOutlineWatchLater} from 'react-icons/md'
import {GoHome,GoHistory} from 'react-icons/go'
import {AiOutlinePlusCircle,AiOutlineLike,AiOutlineShopping,AiOutlineTrophy,AiFillYoutube} from 'react-icons/ai';
import {BsFire,BsFlag} from 'react-icons/bs';
import {IoSettingsOutline,IoNewspaperOutline,IoMusicalNoteOutline} from 'react-icons/io5';
import {PiLightbulbLight,PiFilmSlateDuotone} from 'react-icons/pi';
import {SiYoutubegaming,SiApplemusic} from 'react-icons/si';
import {GiClothesline} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
function Sidebar() { 

  return (
    <>
    <section className='sidebar'>
      <NavLink to="/home"  style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <GoHome style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Home
        </div>
        </NavLink>

        <NavLink to='/shorts' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <AiOutlinePlusCircle style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Shorts
        </div>
        </NavLink>

        <NavLink to='/subscriptions' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <IoIosAlbums style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Subscriptions
        </div>
        </NavLink>

        <hr width="90%" id='hr_tag' height=".5"/>

        <NavLink to='/library' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <MdOutlineVideoLibrary style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Library
        </div>
        </NavLink>


        <NavLink to='/history' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <GoHistory style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        History
        </div>
        </NavLink>

        <NavLink to='/watch_later' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <MdOutlineWatchLater style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Watch Later
        </div>
        </NavLink>


        <NavLink to='/like' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <AiOutlineLike style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Liked Videos
        </div>
        </NavLink>

        <hr width="90%" id='hr_tag' height=".5"/>

         <h3 style={{margin:"10px 0px 0px 20px",fontWeight:"400",fontSize:"18px"}}>Explore</h3>

        <NavLink to='/trending' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <BsFire style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Trending
        </div>
        </NavLink>

        <NavLink to='/shoping' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <AiOutlineShopping style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Shoping
        </div>
        </NavLink>

        <NavLink to='/music' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <IoMusicalNoteOutline style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Music
        </div>
        </NavLink>

        <NavLink to='/film' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <PiFilmSlateDuotone style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Films
        </div>
        </NavLink>

        <NavLink to='/live' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <MdOutlineLiveTv style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Live
        </div>
        </NavLink>

        <NavLink to='/gaming' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <SiYoutubegaming style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Gaming  
        </div>
        </NavLink>


        <NavLink to='/news' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <IoNewspaperOutline style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        News  
        </div>
        </NavLink>

        <NavLink to='/sport' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <AiOutlineTrophy style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Sport  
        </div>
        </NavLink>

        <NavLink to='/learning' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <PiLightbulbLight style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Learning 
        </div>
        </NavLink>


        <NavLink to='/fashion' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <GiClothesline style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Fashion & Beauty
        </div>
        </NavLink>
        <hr width="90%" id='hr_tag' height=".5"/>
         <h3 style={{margin:"10px 0px 0px 20px",fontWeight:"400",fontSize:"15px"}}>More from YouTube</h3>

        <NavLink to='/youtubepremium' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <AiFillYoutube style={{color:"red"}} />
        </div>
        Youtube Premium
        </div>
        </NavLink>

        <NavLink to='/youtubemusic' style={{color:"black",textDecoration:"none"}}>
                <div className='sidebar-icons'>
          <div className='main_icon'>
        <SiApplemusic style={{color:"red",borderRadius:"50%"}}/>
        </div>
        Youtube music
        </div>
        </NavLink>

        <NavLink to='/youtubekid' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <AiFillYoutube style={{color:"red",mixBlendMode:"multiply",filter:"drop-shadow(1px 1px black)"}}/>
        </div>
        Youtube Kids
        </div>
        </NavLink>

        <hr width="90%" id='hr_tag' height=".5"/>

        <NavLink to='/setting' style={{color:"black",textDecoration:"none"}}>
               <div className='sidebar-icons'>
          <div className='main_icon'>
        <IoSettingsOutline style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Setting
        </div>
        </NavLink>

        <NavLink to='/flag' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <BsFlag style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Report History
        </div>
        </NavLink>

        <NavLink to='/help' style={{color:"black",textDecoration:"none"}}>
        <div className='sidebar-icons'>
          <div className='main_icon'>
        <IoIosHelpCircleOutline style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Help
        </div>
        </NavLink>

        <NavLink to='/feedback' style={{color:"black",textDecoration:"none"}}>
                <div className='sidebar-icons'>
          <div className='main_icon'>
        <RiFeedbackLine style={{fontWeight:"100",fontSize:'23px'}}/>
        </div>
        Send Feeback
        </div>
        </NavLink>

        <hr width="90%" id='hr_tag' height=".5"/>

        <div className='last-section'>
        <h5>
        About Press Copyright Contact us Creator Advertise Developers
        </h5>
        <h5>
            Terms Privacy Policy & Safety How YouTube works
            Test new features
        </h5>
        
        <p>
            &copy; 2023 Google LLC
        </p>
        </div>
    </section>
    </>
  )
}

export default Sidebar