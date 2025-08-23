import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // example icon

const ServicesContentBanner = ({ heading, description, categories, image }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: 4,
        p: { xs: 4, md: 8 },
        color: "#fff",
      }}
    >
      {/* Left Content */}
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {description}
        </Typography>

        {/* Categories List */}
        {categories && (
          <List>
            {categories.map((cat, i) => (
              <ListItem key={i} sx={{ p: 0, mb: 1 }}>
                <ListItemIcon sx={{ minWidth: "32px", color: "#4caf50" }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary={cat} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Right Image */}
      <Box>
        <img
          src={image}
          alt={heading}
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </Box>
    </Box>
  );
};

export default ServicesContentBanner;
