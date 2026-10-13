import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CatalogPage() {
  const [dessertList, setDessertList] = useState([]);

  const options = {
    method: "GET",
    url: "https://noon7.p.rapidapi.com/food-menu",
    params: {
      language: "en",
      outlet_code: "ZTRWZTA2FO",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
      "x-rapidapi-host": "noon7.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getDesserts = async () => {
      try {
        const response = await axios.request(options);

        const dessertCategory = response.data?.data?.menu?.categories.find(
          (category) => category.code === "C236759368A",
        );

        const allDesserts = response.data?.data?.menu?.items.filter(
          (item) => item.category_code === dessertCategory.code,
        );

        setDessertList(allDesserts ?? []);
      } catch (error) {
        console.error(error);
      }
    };

    getDesserts();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        px: {
          xs: 2,
          sm: 3,
          md: 14,
          lg: 24,
        },
        py: 4,
      }}
    >
      {dessertList.map((dessert) => (
        <Grid
          key={dessert.code}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
        >
          <ProductCard key={dessert.code} dessert={dessert} />
        </Grid>
      ))}
    </Grid>
  );
}
