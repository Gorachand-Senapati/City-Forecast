import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import"./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL =
     "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const HOT_URL =
      "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const COLD_URL =
      "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const RAIN_URL =
     "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D "
    // let info = {
    //     city: "Delhi",
    //     feelslike: 24.84,
    //     temp: 25.07,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    // }
    return(<div className='InfoBox'>
        {/* <h1>Weather Info - {info.weather}</h1> */}
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity >80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/>:<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info .tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels Like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>)
}