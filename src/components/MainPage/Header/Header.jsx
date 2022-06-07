import React from "react";
import { TextField, Typography, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchQueryAC } from "../../../redux/mainPage-reducer";

const Header = (props) => {
  const dispatch = useDispatch();
  const articlesData = useSelector(
    (state) => state.mainPageReducer.articlesData
  );
  const searchQuery = useSelector((state) => state.mainPageReducer.searchQuery);

  const onSearch = (value) => {
    dispatch(GetSearchQueryAC(value.target.value));
  };
  return (
    <div>
      <Typography
        variant={"h6"}
        sx={{
          mt: "50px",
          mb: "10px",
        }}
      >
        Filter by keywords
      </Typography>
      <TextField
        value={searchQuery}
        onChange={(value) => {
          onSearch(value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        id="outlined-basic"
        variant="outlined"
        size={"small"}
        sx={{ width: "600px", h: "20px" }}
      />
      <Typography
        InputAdornment={"a"}
        sx={{ mt: "40px", fontWeight: "600" }}
        variant={"subtitle1"}
      >
        Result:{articlesData.length}
      </Typography>
      <Box
        sx={{
          border: "1px solid #EAEAEA",
          h: "1px",
          width: "100%",
          mt: "5px",
          mb: "45px",
        }}
      />
    </div>
  );
};

export default Header;
