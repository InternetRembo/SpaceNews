import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import moment from "moment";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
const InfoCard = (props) => {
  console.log(props.summary);
  return (
    <Card
      sx={{
        width: "400px",
        height: "600px",
        position: "relative",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="217px"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              mt: "24px",
              textOverflow: "ellipsis",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              mt: "25px",
            }}
          >
            <CalendarTodayIcon fontSize="small" color="action" />{" "}
            {moment(props.publishedAt).format("MMMM Do YYYY")}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mt: "20px",
              maxHeight: "100px",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {/*{props.summary*/}
            {/*  ? props.summary.length <= 138*/}
            {/*    ? props.summary.split("").slice(0, 138).join("")*/}
            {/*    : props.summary.split("").slice(0, 138).join("") + "..."*/}
            {/*  : ""}*/}
            {props.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          <Link
            className={classes.readMoreLink}
            to={`/artical/${props.id}/`}
            onClick={props.onClick}
            size="small"
            color="secondary"
          >
            Read more <ArrowForwardIcon />
          </Link>
        </div>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
