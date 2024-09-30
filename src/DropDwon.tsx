import Apps from "@mui/icons-material/Apps";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const createHandleClose = (index) => () => {
    if (typeof index === "number") {
      setSelectedIndex(index);
    }
  };

  return (
    <Dropdown>
      <MenuButton
        startDecorator={<Apps />}
        sx={{ color: "white" }}
      ></MenuButton>
      <Menu>
        <MenuItem
          {...(selectedIndex === 0 && { selected: true, variant: "soft" })}
          component={Link}
          to="/home"
          onClick={createHandleClose(0)}
        >
          Home
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 1}
          component={Link}
          to="/explore"
          onClick={createHandleClose(1)}
        >
          Explore
        </MenuItem>
        <MenuItem
          selected={selectedIndex === 2}
          component={Link}
          to="/search"
          onClick={createHandleClose(2)}
        >
          Search
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default DropDownMenu;
