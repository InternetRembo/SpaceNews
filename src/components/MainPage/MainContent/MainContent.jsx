import React, { useEffect } from "react";
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
      const data = await dispatch(GetArticlesDataTC());
      return data;
    };
    fetchData();
  }, []);
  let keywordsList = searchQuery.split(" ");
  let filterArticles = () => {
    if (searchQuery.length < 1) {
      return articlesData;
    }

    let result = articlesData.filter((el) => {
      for (let i = 0; i <= keywordsList.length - 1; i++) {
        if (
          el.summary.toUpperCase().includes(keywordsList[i]) ||
          el.summary.toLowerCase().includes(keywordsList[i]) ||
          el.title.toUpperCase().includes(keywordsList[i]) ||
          el.title.toLowerCase().includes(keywordsList[i])
        ) {
          return true;
        }
      }
    });
    return result;
  };

  let onCardClick = (id) => {
    dispatch(openFullArticleAC(id));
  };

  let summaryWithHighlight = (summary) => {
    let result = summary.split(" ").map((el) => {
      for (let i = 0; i <= keywordsList.length - 1; i++) {
        if (el.toLowerCase() === keywordsList[i].toLowerCase()) {
          return <b className={classes.highlight}>{el + " "}</b>;
        }
      }
      return el + " ";
    });
    return result;
  };

  let titleWithHighlight = (title) => {
    let result = title.split(" ").map((el) => {
      for (let i = 0; i <= keywordsList.length - 1; i++) {
        if (el.toLowerCase() === keywordsList[i].toLowerCase()) {
          return <b className={classes.highlight}>{el + " "}</b>;
        }
      }
      return el + " ";
    });
    return result;
  };

  filterArticles().map((el) => {
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
          summary={summaryWithHighlight(el.summary)}
          title={titleWithHighlight(el.title)}
          updatedAt={el.updatedAt}
          url={el.url}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={"45px"}>
      {filterArticles().map((el) => {
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
              summary={summaryWithHighlight(el.summary)}
              title={el.title}
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
