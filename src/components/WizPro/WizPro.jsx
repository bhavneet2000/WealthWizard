import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FinHeader from "./FinHeader";

const WizPro = () => {
  const handleExploreMore = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <FinHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "	#003c66",

            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Welcome to WizPro
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              transition: "0.3s",
              "&:hover": { boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)" },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718281536/online_jkw5dd.gif"
              alt="Premium Courses"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                Premium Courses
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore a variety of premium courses designed to boost your
                financial knowledge and skills.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                onClick={() => handleExploreMore("/premiumcourses")}
              >
                Explore More
              </Button>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              transition: "0.3s",
              "&:hover": { boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)" },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718281733/mentor_f1khfg.gif"
              alt="Live Mentoring"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                Live Mentoring
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get personalized guidance and support from our expert mentors
                through live sessions.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                onClick={() => handleExploreMore("/Livementoring")}
              >
                Explore More
              </Button>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              transition: "0.3s",
              "&:hover": { boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)" },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718282583/gifts_g2b0ia.gif"
              alt="Goodies and Swags"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                Avail Goodies and Swags
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Don't miss out on exclusive goodies and swags available for our
                valued members.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                onClick={() => handleExploreMore("/Goodies")}
              >
                Explore More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WizPro;
