import { Stack,Box } from '@mui/material'
import {VideoCard,ChannelCard} from './'

const Videos = ({videos}) => {
   
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={2}>
        {
            videos.filter((content) => content?.id.hasOwnProperty('channelId')  || content?.id.hasOwnProperty('videoId' )).map((item, i)=>(
                <Box key={i}>
                    {
                        item.id.videoId && <VideoCard video={item} />
                    }
                    {
                        item.id.channelId && <ChannelCard channelDetail={item} />
                    }
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos