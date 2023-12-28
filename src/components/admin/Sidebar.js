import * as React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import { colors } from "../../assets/utils/colors";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  LocalAtm,
  Person,
  Window,
  Settings,
  People,
  Topic,
  LocalMall,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";

const drawerWidth = 220;

//############# SideNavListItem #################
const SideNavListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: 0,
  transition: "all ease-in-out 0.3s",
  "&::before": {
    content: '""',
    position: "absolute",
    height: 0,
    bottom: "50%",
    width: 4,
    transition: "all ease-in-out 0.3s",
    backgroundColor: colors.link,
  },
  "&:hover": {
    // backgroundColor: colors.link,
  },
  "& .icon": {
    minWidth: 0,
    justifyContent: "center",
    color: colors.bgColor2,
    opacity: 0.9,
    fontSize: 33,
  },
  "& .name": {
    color: colors.bgColor2,
  },
}));

//! #################### MAIN FUNC ######################
const SideBar = ({ handleDrawerToggle, mobileOpen }) => {
  const [open] = React.useState(false);

  //user access
  const dispatch = useDispatch();

  const auth = useAuth();

  const userInfo = false;

  const { window } = "props";
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // ################# LINKS ################
  const links = [
    {
      id: 1,
      name: "Dashboard",
      icon: <Window className="icon" />,
      url: "/admin-dashboard",
      tooltip: "Dashboard",
    },
    {
      id: 2,
      name: "Orders",
      icon: <LocalMall className="icon" />,
      url: "/admin/orders",
      tooltip: "Orders",
    },
    {
      id: 3,
      name: "Referral",
      icon: <LocalAtm className="icon" />,
      url: "/admin/referrals",
      tooltip: "Referral",
    },
    {
      id: 4,
      name: "Users",
      icon: <People className="icon" />,
      url: "/admin/users",
      tooltip: "Users",
    },
    {
      id: 5,
      name: "Products",
      icon: <Topic className="icon" />,
      url: "/admin/products",
      tooltip: "Products",
    },
    {
      id: 6,
      name: "Profile",
      icon: <Person className="icon" />,
      url: "/admin/profile",
      tooltip: "Profile",
    },
    {
      id: 7,
      name: "Settings",
      icon: <Settings className="icon" />,
      url: "/admin/settings",
      tooltip: "Settings",
    },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", sm: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            whiteSpace: "nowrap",
          },
          [`& .MuiPaper-root`]: { backgroundColor: colors.primary },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {links?.map((link) => (
              <NavLink to={link.url} key={link.id}>
                {({ isActive }) => (
                  <SideNavListItem
                    disablePadding
                    sx={{
                      display: "block",
                      my: 2,
                      bgcolor: isActive && {
                        background: colors.secondary,
                      },
                      "&:hover": !isActive && {
                        transition: "all ease-in-out 0.3s",
                        "&::before": {
                          transition: "all ease-in-out 0.3s",
                          height: "100%",
                          bottom: 0,
                        },
                      },
                    }}
                  >
                    <ListItemButton
                      sx={{
                        py: 0.5,
                      }}
                    >
                      <ListItemIcon
                      >
                        {link.icon}
                      </ListItemIcon>
                      <ListItemText
                        className="name"
                        primary={link.name}
                        primaryTypographyProps={{
                          fontSize: 14,
                        }}
                      />
                    </ListItemButton>
                  </SideNavListItem>
                )}
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
