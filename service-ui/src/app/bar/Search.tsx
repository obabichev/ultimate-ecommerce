import React, { useState } from "react";
import { alpha, Button, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StringParam, useQueryParam } from "use-query-params";
import { useLocation, useHistory } from "react-router-dom";

const SearchContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
}));

const InputContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = () => {
  const [searchParam, setSearchParam] = useQueryParam("search", StringParam);
  const location = useLocation();
  const history = useHistory();

  const [search, setSearch] = useState(searchParam ?? "");

  const onSearch = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
    setSearchParam(search);
  };

  return (
    <SearchContainer>
      <InputContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </InputContainer>
      <Button
        color="warning"
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={onSearch}
      >
        Search
      </Button>
    </SearchContainer>
  );
};

export default Search;
