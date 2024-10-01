import { Box, Button, Input, Modal, Typography } from '@mui/joy';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComp from './CardComp';
import { errorHandling, inputBox, inputButton, playVideoBox, searchBox, searchVideoBox } from './Styles';
import VideoProp from './slices/Types';
import { fetchSearchVideos } from './slices/searchSlice';
import { AppDispatch, RootState } from './store';

function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const videos: VideoProp[] = useSelector((state: RootState) => state.searchVideos.items);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSearchVideos(query)).then((res)=> {
        if(res.meta.requestStatus === 'rejected'){
          setError(res.payload)
        }else{
          setError(undefined)
        }
      });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleVideoClick = (id: string) => {
    setSelectedVideoId(id);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <Box>
      <Box sx={searchBox}>
        <Input
          value={query}
          onChange={handleInputChange}
          placeholder="Search...."
          sx={inputBox}
        />
        <Button sx={inputButton} onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Box sx={searchVideoBox}>
        {videos.map((video) => (
          <CardComp
            key={video.id.videoId}
            vid={video}
            onClick={() => handleVideoClick(video.id.videoId)}
          />
        ))}
      </Box>

      {error && <Typography sx={errorHandling} color='danger' level='h1' >{"Error Fetching Data...."}</Typography>}

      <Modal open={!!selectedVideoId} onClose={handleCloseModal}>
        <Box sx={playVideoBox}>
          {selectedVideoId && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default SearchPage;
