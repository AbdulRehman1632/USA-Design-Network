import { Box, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { footerData, socialLinks } from "./CustomFooterData";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "black", color: "#fff", px: 4, py: 6, letterSpacing: "0.9px" }}>
        <Grid container spacing={4} justifyContent="space-between">
          {footerData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={2.5} key={index}>
              {item.image && (
                <Box component="img" src={item.image} alt="Logo" width="80px" mb={1} />
              )}

              <Typography variant="h6" gutterBottom sx={{ fontSize: "1.4em" }}>
                {item.heading}
              </Typography>

              {item.para && (
                <Typography variant="body2" sx={{ color: "#fff", fontSize: "1.1em", mb: 1 }}>
                  {item.para}
                </Typography>
              )}

              {item.links &&
                item.links.map((link, idx) => (
                  <MuiLink
                    key={idx}
                    component={
                      link.path.startsWith("http") ||
                      link.path.startsWith("mailto") ||
                      link.path.startsWith("tel")
                        ? "a"
                        : Link
                    }
                    to={
                      !link.path.startsWith("http") &&
                      !link.path.startsWith("mailto") &&
                      !link.path.startsWith("tel")
                        ? link.path
                        : undefined
                    }
                    href={
                      link.path.startsWith("http") ||
                      link.path.startsWith("mailto") ||
                      link.path.startsWith("tel")
                        ? link.path
                        : undefined
                    }
                    target={link.path.startsWith("http") ? "_blank" : undefined}
                    rel={link.path.startsWith("http") ? "noopener noreferrer" : undefined}
                    underline="hover"
                    sx={{ display: "block", color: "#fff", my: 0.8, fontSize: "1.1em" }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "black", px: 4 }}>
        <Box
          sx={{
            borderTop: "1px solid #444",
            pt: 3,
            textAlign: "center",
            color: "#888",
            fontSize: "0.9em",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
            {socialLinks.map((item, index) => (
              <MuiLink
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff", fontSize: "1.8rem" }}
              >
                {item.icon}
              </MuiLink>
            ))}
          </Box>

          <Typography>
            © {new Date().getFullYear()} USA Design Network. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;