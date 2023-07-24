import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"


import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants"


const VideoCard = ({video: {id:{videoId}, snippet}}) => {
  
  return (
    <Card sx={{width:{md:'320px', xs:'100%'}, boxShadow:'none', borderRadius:'0'}}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:358, height:180}}
        />
        </Link>
        <CardContent 
        sx={{backgroundColor:"#1e1e1e", width:'326px', height:'106px'}}
        >
          <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography
             variet="subtitle1" 
              fontWeight="bold" 
              color="#FFF"
              sx={{ display:'flex', width:'300px',wordBreak: "break-word" }}
            >
              {snippet?.title || demoVideoTitle}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ?  `channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography
             variet="subtitle2" 
              fontWeight="bold" 
              color="gray"
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx ={{fontSize:12, color:'gray', ml:'5px'}}/>
            </Typography>
          </Link>
        </CardContent>
      
    </Card>
  )
}

export default VideoCard