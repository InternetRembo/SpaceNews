import React, { useEffect, useState } from "react";
import InfoCard from "./Card/Card";
import {
  GetArticlesDataTC,
  openFullArticleAC,
} from "././../../../redux/mainPage-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import classes from "./MainContent.module.css";

const MainContent = (props) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.mainPageReducer.searchQuery);
  const articlesData = useSelector(
    (state) => state.mainPageReducer.articlesData
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(GetArticlesDataTC(searchQuery));
    };

    fetchData();
  }, [searchQuery]);

  let keywordsList = searchQuery.split(" ");

  let onCardClick = (id) => {
    dispatch(openFullArticleAC(id));
  };

  let textWithHighlight = (text) => {
    let result = text.split(" ").map((el) => {
      for (let i = 0; i <= keywordsList.length - 1; i++) {
        if (el.toLowerCase() === keywordsList[i].toLowerCase()) {
          return <b className={classes.highlight}>{el + " "}</b>;
        }
      }
      return el + " ";
    });
    return result;
  };

  return (
    <Grid container spacing={"45px"}>
      {articlesData.map((el) => {
        return (
          <Grid item xs={12} md={4} key={el.id}>
            <InfoCard
              onClick={() => {
                onCardClick(el.id);
              }}
              id={el.id}
              image={el.imageUrl}
              newsSite={el.newsSite}
              publishedAt={el.publishedAt}
              summary={textWithHighlight(el.summary)}
              title={textWithHighlight(el.title)}
              updatedAt={el.updatedAt}
              url={el.url}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainContent;
