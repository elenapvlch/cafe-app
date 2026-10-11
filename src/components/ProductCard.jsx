import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { COLORS } from "../data/colors";

export default function ProductCard({ dessert }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
        sx={{
          height: {
            xs: 220,
            sm: 240,
            md: 260,
            lg: 280,
          },
          objectFit: "cover",
        }}
        image={dessert.image}
        title={dessert.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: COLORS.DARK_PINK,
          }}
        >
          {dessert.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: COLORS.DARK_PINK,
          }}
        >
          {dessert.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: COLORS.DARK_PINK,
            "&:hover": {
              backgroundColor: COLORS.LIGHT,
            },
          }}
        >
          Add to order
        </Button>
      </CardActions>
    </Card>
  );
}
