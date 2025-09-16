import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Collapse,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";

const CustomNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open) => () => setOpenDrawer(open);
  const toggleSolutions = () => setOpenSolutions((prev) => !prev);

  const solutionLinks = [
    { label: "Logo Design", path: "/logodesign" },
    { label: "Website Design & Development", path: "/websiteDesignAndDevelopment" },
    { label: "Branding", path: "/branding" },
    { label: "Ecommerce Website Design", path: "/ecommerceWebsiteDesign" },
    { label: "Mobile Application", path: "/mobileApplication" },
    { label: "WordPress Development", path: "/wordpress" },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ContactUs");
  };


  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          transition: "background-color 0.3s ease",
          backgroundColor: scrolled ? "black" : "transparent",
          color: "white",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Box sx={{ height: 80, display: "flex", alignItems: "center" }}>
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </NavLink>
            <NavLink to="/Pricing" style={{ color: "white", textDecoration: "none" }}>
              Pricing
            </NavLink>

            {/* Solutions Dropdown */}
            <Box sx={{ position: "relative" }}>
  <Button
    onClick={() => navigate("/services")}   // 👈 Direct Services page
    sx={{
      color: "white",
      textTransform: "none",
      fontWeight: 500,
    }}
    endIcon={openSolutions ? <ExpandLess /> : <ExpandMore />}
    onMouseEnter={toggleSolutions}  // 👈 Hover ya click se dropdown
  >
    Services
  </Button>

  <Collapse
    in={openSolutions}
    timeout="auto"
    unmountOnExit
    sx={{
      position: "absolute",
      top: "100%",
      backgroundColor: "#000",
      zIndex: 9999,
      borderRadius: 1,
      minWidth: 200,
    }}
  >
    {solutionLinks.map((solution) => (
      <NavLink
        key={solution.label}
        to={solution.path}
        style={{
          display: "block",
          color: "white",
          textDecoration: "none",
          padding: "8px 16px",
        }}
        onClick={() => setOpenSolutions(false)}
      >
        {solution.label}
      </NavLink>
    ))}
  </Collapse>
</Box>


            <NavLink
              to="/Portfolio"
              style={{ color: "white", textDecoration: "none" }}
            >
              Portfolio Page
            </NavLink>
            <NavLink to="/Contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </NavLink>
          </Box>

          {/* Desktop Button */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {/* <Button 
              variant="contained"
              sx={{ backgroundColor: "#24b465", fontWeight: 600 }}
               onClick={handleClick}
            >
              Start Free Trial
            </Button> */}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: 260,
            backgroundColor: "black",
            height: "130%",
            color: "white",
          }}
          role="presentation"
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: "white" }} />

          <List sx={{ px: 2 }}>
            <ListItem button onClick={toggleDrawer(false)}>
              <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
                <ListItemText primary="Home" /> 
              </NavLink>
            </ListItem>

           <ListItem button onClick={toggleSolutions}>
  <NavLink
    to="/services"
    style={{ textDecoration: "none", color: "white", width: "100%" }}
    onClick={(e) => {
      e.stopPropagation(); // dropdown toggle aur nav clash na kare
      toggleDrawer(false)(); // drawer band ho
    }}
  >
    <ListItemText primary="Services" />
  </NavLink>
  {openSolutions ? (
    <ExpandLess sx={{ color: "white" }} />
  ) : (
    <ExpandMore sx={{ color: "white" }} />
  )}
</ListItem>

<Collapse in={openSolutions} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    {solutionLinks.map((solution) => (
      <ListItem
        button
        key={solution.label}
        onClick={toggleDrawer(false)}
        sx={{ pl: 4 }}
      >
        <NavLink
          to={solution.path}
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItemText primary={solution.label} />
        </NavLink>
      </ListItem>
    ))}
  </List>
</Collapse>


            <ListItem button onClick={toggleDrawer(false)}>
              <NavLink to="/Pricing" style={{ textDecoration: "none", color: "white" }}>
                <ListItemText primary="Pricing" />
              </NavLink>
            </ListItem>

            <ListItem button onClick={toggleDrawer(false)}>
              <NavLink
                to="/Portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemText primary="Portfolio Page" />
              </NavLink>
            </ListItem>

            <ListItem button onClick={toggleDrawer(false)}>
              <NavLink to="/Contact" style={{ textDecoration: "none", color: "white" }}>
                <ListItemText primary="Contact" />
              </NavLink>
            </ListItem>
          </List>

          {/* <Box
            sx={{
              mt: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "rgb(36, 180, 101)",
                color: "white",
                fontWeight: "bold",
              }}
               onClick={handleClick}
            >
              Start Free Trial
            </Button>
          </Box> */}
        </Box>
      </Drawer>
    </>
  );
};

export default CustomNav;