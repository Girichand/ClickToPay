import { Box, Container, Typography, Button as MUIButton } from "@mui/material";
import Image from "next/image";
import Button from "./Button";

const Product = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Image src="" width={500} height={500} alt="headphones" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "75vh",
          width: "25vw",
          justifyContent: "center",
          marginLeft: "8rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            letterSpacing: "0.5rem",
            color: "#d97d45",
            marginBottom: "1rem",
          }}
        >
          New Product
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontSize: "4.5rem",
          }}
        >
          product name
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#727272", fontSize: "1.25rem", marginBottom: "3rem" }}
        >
          description
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: 700 }}>
          $200
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" color="#d97d45">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
