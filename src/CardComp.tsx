import { Card, CardContent, Typography } from "@mui/joy";
import { cardStyle, channelTitleStyle, publishedAtStyle, titleStyle } from "./Styles";
import VideoProp from './slices/Types';

interface CardCompProps {
  vid: VideoProp;
  onClick: (videoId: string) => void;
}

const CardComp: React.FC<CardCompProps> = ({ vid, onClick }) => {
  const videoId = vid.id.videoId ?? vid.id; 

  return (
    <Card key={videoId} onClick={() => onClick(videoId)} sx={cardStyle}>
      <img
        className="pic"
        src={vid.snippet.thumbnails.medium.url}
        alt={vid.snippet.title}
      />
      <CardContent className="cardCont">
        <Typography sx={titleStyle}>
          {vid.snippet.title.length > 50
            ? vid.snippet.title.slice(0, 50) + "....."
            : vid.snippet.title}
        </Typography>
        <Typography sx={channelTitleStyle}>
          {vid.snippet.channelTitle}
        </Typography>
        <Typography sx={publishedAtStyle}>
          {new Date(vid.snippet.publishedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComp;
