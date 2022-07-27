import styled from "styled-components"
import logo from '../images/yt.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container=styled.div`
flex: 1;
background-color: ${({theme})=>theme.bg};
color: ${({theme})=>theme.text};
height: 100vh;
font-size: 12px;
position: sticky;
top: 0;
`
const Wrapper=styled.div`
padding:18px 26px;
`
const Logo=styled.div`
display: flex;
align-items: center;
font-weight: bold;
`
const Img=styled.img`
height: 50px;
`
const Item=styled.div`
display: flex;
align-items: center;
gap:10px;
cursor: pointer;
padding: 5px 0;
`
const Hr=styled.hr`
margin: 10px 0;
border: 0.5px solid ${({theme})=>theme.soft};
`
const Login=styled.div`
`
const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
font-weight: 500;
margin-top: 10px;
border-radius: 3px;
cursor: pointer;
display: flex;
align-items: center;
gap:5px
`
const Title=styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;

`

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo} />
                HediTube
            </Logo>
            <Item>
              <HomeIcon/>
              Home
            </Item>
            <Item>
              <ExploreOutlinedIcon/>
              Explore
            </Item>
            <Item>
              <SubscriptionsOutlinedIcon/>
              Subscriptions
            </Item>
            <Hr/>
            <Item>
              <VideoLibraryOutlinedIcon/>
              Library
            </Item>
            <Item>
              <HistoryOutlinedIcon/>
              History
            </Item>
            <Hr/>
            <Login>
            Sign in to like videos, comment, and subscribe.<br/>
            <Button><AccountCircleOutlinedIcon/> Sign In</Button>
            </Login>
            <Hr/>
            <Title>Best of HediTube</Title>
            <Item>
              <LibraryMusicOutlinedIcon/>
              Music
            </Item>
            <Item>
              <SportsBasketballOutlinedIcon/>
              Sports
            </Item>
            <Item>
              <SportsEsportsOutlinedIcon/>
              Gaming
            </Item>
            <Item>
              <MovieCreationOutlinedIcon/>
              Movies
            </Item>
            <Item>
              <NewspaperOutlinedIcon/>
              News
            </Item>
            <Item>
              <LiveTvOutlinedIcon/>
              Live
            </Item>
            <Hr/>
            <Item>
              <SettingsOutlinedIcon/>
              Settings
            </Item>
            <Item>
              <OutlinedFlagIcon/>
              Report
            </Item>
            <Item>
              <HelpOutlineOutlinedIcon/>
              Help
            </Item>
            <Item onClick={()=>setDarkMode(!darkMode)}>
              <SettingsBrightnessOutlinedIcon/>
              Light Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu