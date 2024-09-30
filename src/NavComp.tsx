import { Box, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import { navCompBox, navCompStyle } from './Styles';



function NavComp (){
    const links = [
        {to:"/home", label: 'Home'},
        {to:"/explore", label: 'Explore'},
        {to:"/search", label: 'Search'}
    ]
    
    return(
    <Box sx={navCompBox}>
    {links.map((link, index) =>(
        <Typography
            key = {index}
            component={Link}
            to = {link.to}
            textColor="white"
            sx={navCompStyle}
          >
          {link.label}
        </Typography>
        ))}
    </Box>
    )
}

export default NavComp