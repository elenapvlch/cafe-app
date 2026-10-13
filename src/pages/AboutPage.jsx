import { COLORS } from "../data/colors";
import { Box, Grid, Typography } from "@mui/material";
import PannaCottaImg from "../assets/img_6.jpg";
import CremeBruleeImg from "../assets/img_2.jpg";
import MacaronsImg from "../assets/img_5.jpg";

const itemData = [
  {
    img: PannaCottaImg,
    title: "Tiramisu",
  },
  {
    img: CremeBruleeImg,
    title: "Cake",
  },
  {
    img: MacaronsImg,
    title: "Macarons",
  },
];

export default function AboutPage() {
  return (
    <Grid
      container
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
      <Grid
        sx={{
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
          backgroundColor: COLORS.LIGHT_PINK,
          borderRadius: "16px",
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: {
              xs: 3,
              sm: 4,
            },
            lineHeight: 1.5,
            color: COLORS.DARK_PINK,
          }}
        >
          Welcome to the Café Place
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: {
              xs: 1,
              sm: 2,
              md: 3,
            },
            alignItems: "start",
            width: "100%",
          }}
        >
          {itemData.map((item, index) => (
            <Box
              key={item.img}
              sx={{
                minWidth: 0,
                width: "100%",
                mt: index % 2 === 0 ? { xs: 2, sm: 3, md: 4 } : 0,
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                loading="lazy"
                sx={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "1 / 1.5",
                  objectFit: "cover",
                  borderRadius: {
                    xs: "10px",
                    sm: "14px",
                    md: "18px",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            mt: { xs: 3, sm: 4 },
            mb: 2,
            lineHeight: 1.6,
            color: COLORS.DARK_PINK,
          }}
        >
          It all started with a simple belief: dessert should make people happy.
          What began as a home kitchen experiment with a single cheesecake
          recipe has grown into the café you see today — a cozy place where
          every treat is made from scratch, with real ingredients and a lot of
          love.
        </Typography>

        <Typography
          sx={{
            mb: 2,
            lineHeight: 1.6,
            color: COLORS.DARK_PINK,
          }}
        >
          Our pastry team wakes up before sunrise to bake fresh croissants, whip
          velvety mousses, and glaze cakes by hand. We use locally sourced eggs,
          seasonal fruit, and Belgian chocolate — no shortcuts, no compromises.
          Whether you're stopping by for your morning coffee and a cinnamon
          roll, picking up a birthday cake for someone special, or treating
          yourself to a slice of tiramisu after a long day, we want every bite
          to feel like a small celebration.
        </Typography>

        <Typography
          sx={{
            lineHeight: 1.6,
            color: COLORS.DARK_PINK,
          }}
        >
          More than a café, this is a place to slow down. Sit by the window,
          watch the city go by, and let the dessert do the talking.
        </Typography>
      </Grid>
    </Grid>
  );
}
