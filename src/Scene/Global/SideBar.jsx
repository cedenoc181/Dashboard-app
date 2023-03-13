import { useState } from "react";
// import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typograohy, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


  return (
   <Box 
   sx={{
    " & .pro-sidebar-inner" : {
      background: `${colors.primary[400]} !important`
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important"
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important"
    },
    "& .pro-inner-item:hover" : {
      color: "#868dfb !important"
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important"
    }
   }}
   >

   </Box>
  )
} 

export default SideBar