import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { db } from "../../firebase";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AnimatedUnderlineHeading from "../../../../Utils/Constant/AnimatedUnderlineHeading/AnimatedUnderlineHeading";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    query: "",
    brief: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, number, email, query, brief } = formData;
//     if (!name || !number || !email || !query || !brief) {
//       toast.error("All fields are required.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await addDoc(collection(db, "queries"), {
//         ...formData,
//         createdAt: serverTimestamp(),
//       });
//       toast.success("Query submitted successfully!");
//       setFormData({ name: "", number: "", email: "", query: "", brief: "" });
//     } catch (error) {
//       console.error("Error submitting query:", error);
//       toast.error("Failed to submit query.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <>
      <Box
        component="form"
        // onSubmit={handleSubmit}
        sx={{
          width: {
            xs: "90%", // small screens
            sm: "80%",
            md: "50%",
            lg: "500px", // large screens
          },
          mx: "auto",
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          background: "var(--bg-color)",
          borderRadius: 2,
          boxShadow: 3,
          color: "#fff",
          mt: {
            xs: 6,
            md: 10,
          },
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "White",
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "0.9px",
          }}
        >
          {/* <Box sx={{ mt: 10 }}> */}
  <AnimatedUnderlineHeading text="Contact Us" />
{/* </Box> */}
        </Typography>

        {["name", "number", "email", "query", "brief"].map((field) => (
          <TextField
            key={field}
            fullWidth
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            margin="normal"
            required
            multiline={field === "brief"}
            rows={field === "brief" ? 4 : 1}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: {
                color: "#fff",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#41857fff",
            "&:hover": { backgroundColor: "gray" },
            color: "#fff",
            fontWeight: "bold",
          }}
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </Button>

        {/* <ToastContainer position="top-center" theme="dark" /> */}
      </Box>

      {/* WhatsApp Section */}
      <Box
        textAlign="center"
        mt={4}
        px={2}
        sx={{
          width: "100%",
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#ccc",
            mb: 1,
            fontSize: "1.2em",
            letterSpacing: "0.9px",
          }}
        >
          Need quick assistance? Chat with us directly on WhatsApp!
        </Typography>

        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#24b465",
            "&:hover": { backgroundColor: "#1ba15c" },
            color: "#fff",
            borderRadius: "30px",
            px: 3,
            py: 1,
            fontWeight: "bold",
            textTransform: "none",
            letterSpacing: "0.9px",
          }}
          onClick={() =>
            window.open("https://wa.me/18083014984", "_blank")
          }
        >
          Chat on WhatsApp
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;