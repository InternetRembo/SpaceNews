import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import classes from "./ArticlePage.module.css";
import mainPageReducer, {
  GetArticlesParamsTC,
  openFullArticleAC,
} from "../../redux/mainPage-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ArticlePage = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(GetArticlesParamsTC(id));
      return data;
    };
    fetchData();
  }, []);

  useEffect(() => {}, []);

  const articleParams = useSelector(
    (state) => state.mainPageReducer.articleParams
  );
  console.log("articleParams", articleParams);

  let onBackHomeClick = () => {
    dispatch(openFullArticleAC(null));
  };

  return !articleParams ? (
    <div>Please wait</div>
  ) : (
    <div>
      <img
        className={classes.header}
        src={articleParams.imageUrl}
        alt={"Something is wrong with the image"}
      />
      <div className={classes.articleBody}>
        <div>
          <Typography
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginBottom: "50px",
              marginTop: "35px",
              fontFamily: "Montserrat",
            }}
          >
            {articleParams.title}
          </Typography>
        </div>
        <div>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              fontFamily: "Montserrat",
              marginLeft: "75px",
              marginRight: "75px",
            }}
          >
            {articleParams.summary}
          </Typography>
        </div>
      </div>
      <Link
        className={classes.backHomeLink}
        to={"/"}
        onClick={() => {
          onBackHomeClick();
        }}
      >
        <ArrowBackIcon /> Back to homepage
      </Link>
    </div>
  );
};

export default ArticlePage;
