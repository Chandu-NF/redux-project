interface VideoProp {
    id: {
      videoId: string;
    };
      snippet: {
        title: string,
        description: string,
        thumbnails: {
          [key: string]: {
            url: string,
          };
        };
        channelTitle: string;
        publishedAt: string;
      };
  }
  
  export default VideoProp