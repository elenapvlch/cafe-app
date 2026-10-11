import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { DESSERT_LIST } from "../data/dessertList";

export default function CatalogPage() {
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
      {DESSERT_LIST.map((dessert) => (
        <Grid
          key={dessert.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
        >
          <ProductCard key={dessert.id} dessert={dessert} />
        </Grid>
      ))}
    </Grid>
  );
}
