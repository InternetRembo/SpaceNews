import { MainAPI } from "../api/api";

const GET_ARTICLES_DATA = "GET_ARTICLES_DATA";
const OPEN_FOOL_ARTICLE = "OPEN_FOOL_ARTICAL";
const GET_ARTICLES_PARAMS = "GET_ARTICLES_PARAMS";
const GET_SEARCH_QUERY = "GET_SEARCH_QUERY";

let initialState = {
  articlesData: [],
  articleId: null,
  articleParams: null,
  searchQuery: "",
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_DATA: {
      return { ...state, articlesData: action.data };
    }
    case OPEN_FOOL_ARTICLE: {
      return { ...state, articleId: action.id };
    }
    case GET_ARTICLES_PARAMS: {
      return { ...state, articleParams: action.articleParams };
    }
    case GET_SEARCH_QUERY:
      return { ...state, searchQuery: action.value };
    default:
      return state;
  }
};

export const openFullArticleAC = (id) => {
  return {
    type: OPEN_FOOL_ARTICLE,
    id,
  };
};

export const GetSearchQueryAC = (value) => {
  return {
    type: GET_SEARCH_QUERY,
    value,
  };
};

export const GetArticlesDataAC = (data) => {
  return {
    type: GET_ARTICLES_DATA,
    data,
  };
};

export const GetArticlesParamsAC = (articleParams) => {
  return {
    type: GET_ARTICLES_PARAMS,
    articleParams,
  };
};

export const GetArticlesDataTC = (query) => async (dispatch) => {
  let articlesData = await MainAPI.articles(query);
  dispatch(GetArticlesDataAC(articlesData));
};
export const GetArticlesParamsTC = (id) => async (dispatch) => {
  let articlesParams = await MainAPI.paramsById(id);
  dispatch(GetArticlesParamsAC(articlesParams));
};

export default mainPageReducer;
