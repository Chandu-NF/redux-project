import { Box, Modal, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComp from './CardComp';
import { fetchExploreVideos } from './slices/exploreSlice';
import { AppDispatch, RootState } from './store';
import { playVideoBox, videoBox } from './Styles';

function ExplorePage() {
  const dispatch = useDispatch<AppDispatch>();
  const videos = useSelector((state: RootState) => state.exploreVideos.items);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
      dispatch(fetchExploreVideos('redux')).then((res)=> {
        if(res.meta.requestStatus === 'rejected'){
          setError(res.payload)
        }else{
          setError(undefined)
        }
      });
  }, []);

  const handleVideoClick = (id: string) => {
    setSelectedVideoId(id);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <Box sx={videoBox}>
      {videos.map((video) => (
        <CardComp
          key={video.id.videoId}
          vid={video}
          onClick={() => handleVideoClick(video.id.videoId)}
        />
      ))}

      {error && <Typography  color='danger' level='h1'>{"Error Fetching Data....."}</Typography>}

      <Modal open={!!selectedVideoId} onClose={handleCloseModal}>
        <Box sx={playVideoBox}>
          {selectedVideoId && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              allowFullScreen
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default ExplorePage;
