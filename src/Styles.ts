import { SxProps } from '@mui/joy/styles/types';

export const cardStyle: SxProps = {
    position: "relative",
    margin: {
      xs: "auto",
      sm: 2,
    },
    display: "inline-grid",
    width: {
      xs: "relative",
      sm: "280px",
    },
    height: "250px",
    border: "1px solid white",
    borderRadius: "10px",
    backgroundColor: "white",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.15)",
      boxShadow: "0 8px 16px #e9f2e9",
      backgroundColor: "sandybrown",
    },
  };
  
  export const titleStyle: SxProps = {
    color: "black",
    textAlign: "justify",
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: "Arial",
  };
  
  export const channelTitleStyle: SxProps = {
    color: "black",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "lighter",
    fontFamily: "Arial",
  };
  
  export const publishedAtStyle: SxProps = {
    color: "black",
    textAlign: "left",
    justifyContent: "space-between",
    fontSize: "12px",
    fontWeight: "lighter",
    fontFamily: "Arial",
  };
  
  export const cardStyleSearch: SxProps = {
    margin: 2,
    display: "inline-grid",
    width: "280px",
    height: "250px",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "whitesmoke",
    cursor: "pointer",
  };
  
  export const videoBox: SxProps = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: "120px",
    marginTop: "5rem",
  };
  
  export const playVideoBox: SxProps = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "snow",
    padding: 1.2,
    border: "10px solid red",
    borderRadius: "15px",
  };
  
  export const searchBox: SxProps = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: "120px",
    marginTop: "5rem",
  };
  
  export const searchVideoBox: SxProps = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingLeft: "120px",
    marginTop: "1rem",
  };
  
  export const inputBox: SxProps = {
    border: "2px solid black",
    backgroundColor: "whitesmoke",
    width: "280px",
    height: "20px",
    display: {
      xs: "relative",
      sm: "flex",
    },
  };
  
  export const inputButton: SxProps = {
    border: "1px solid black",
    height: "4px",
    left: {
      xs: "3%",
      sm: "1%",
    },
    backgroundColor: "lightseagreen",
    color: "white",
    display: {
      xs: "absolute",
      sm: "absolute",
    },
  };
  
  export const layoutBox: SxProps = {
    position: "absolute",
    top: "0px",
    display: {
      xs: "flex",
    },
    flexDirection: "row",
    backgroundColor: "steelblue",
    border: "2px solid black",
    width: "99%",
    padding: "5px",
    gap: 10,
    fontSize: "20px",
    textDecoration: "none",
  };
  
  export const layoutImg = {
    width: "30px",
    height: "33px",
    marginRight: "8px",
  };
  
  export const layoutStack: SxProps = {
    display: {
      xs: "none",
      sm: "flex",
      fontSize: "20px",
      alignItems: "center",
    }
  }
  
  export const layoutStackBox: SxProps = {
      display: "flex",
      width: "30px",
      height: "30px",
      alignItems: "center",
      fontSize: '20px',
  }

  export const navCompStyle: SxProps = {
    cursor: "pointer", 
    textDecoration: 'none', 
    fontSize: '20px',
    justifyContent: 'center',
    alignItems: 'center'
  }

  export const navCompBox: SxProps = {
    display: {
      xs: "none",
      sm: "flex",
      fontSize: "20px",
      alignItems: "center",
      gap: '50px',
      direction:"row",
      justifyContent: 'center'
    }

  }

  export const layoutImage = {
    width: "30px",
    height: "30px", 
    marginRight: "8px"
  }

  export const errorHandling: SxProps = {
    justifyContent: 'center', 
    textAlign:'center',
  }