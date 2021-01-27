import React, { Component } from "react";
import { AppConsumer } from "../../Context";
import Spinner from "../Spinner";
import Post from "./Post";
import Pagination from "react-js-pagination";
import axios from "axios";
import styled from "styled-components";
import SearchResult from "./SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class PostList extends Component { 
  constructor(props) {
    super();
    this.state = {
      activePage: 1,
      postTitle: "",
      loadingSearch: false,
      result: [],
      pageResult: [],
      activeSearchPage: 1,
      searchPostNumber: 0,
    };
    
  }
 
  
  onChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  handleSearchPage = (pageNumber) => {

    axios
      .get(
        `http://ndmr.co.jp/blog/?rest_route=/wp/v2/posts?search=${this.state.postTitle}&_embed&page=${pageNumber}`
      )
      .then((res) => {
        this.setState({
          pageResult: res.data,
          activeSearchPage: pageNumber,
          
        });
      })
      .catch((res) => {
        console.log(res);
      });
      
      // history.replace(`/news/search=${this.state.postTitle}/page=${pageNumber}`)
  };

  findPost = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://ndmr.co.jp/blog/?rest_route=/wp/v2/?search=${this.state.postTitle}&_embed`,
        {},
        this.setState({ loading: false })
      )
      .then((res) => {
        this.setState({
          result: res.data,
          loading: false,
          searchPages: res.headers["x-wp-totalpages"],
          searchPostNumber: res.headers["x-wp-total"],
        });
      })
      .catch((res) => console.log(res.err));
    //   console.log(location);
    //   console.log(history);
    //   const params= new URLSearchParams(location.search);
    // const query = params.get('q')
    // console.log(query) 
    
      // history.replace(`/news/?search=${this.state.postTitle}`)
  };

  handlePageChange = (pageNumber, pagedispatch) => {
    pagedispatch({
      type: "SET_NEW_PAGE",
      payload: pageNumber,
    });
    this.setState({
      activePage: pageNumber,
     
    });
    // history.push(`/news/page=${pageNumber}`)
  };



  render() {
    const NotFound = "Post Not Found";
    return (
      <React.Fragment>
        <StyledForm onSubmit={this.findPost}>
          <SearchFlex>
            <StyledInput
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Posts"
              id="searchbutton"
              name="postTitle"
              value={this.state.postTitle}
              onChange={this.onChange}
              autocomplete="off"
            />
            <StyledButton type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </StyledButton>
          </SearchFlex>
        </StyledForm>

        <Divider />

        <PostHeading>LATEST POSTS</PostHeading>
        {this.state.result.length === 0 || this.state.result === undefined ? (
          <AppConsumer>
            {(value) => {
              const {
                AllPost,
                NumberOfPosts,
                pagedispatch,
                loadingPosts,
              } = value;

              if (
                loadingPosts ||
                AllPost === undefined ||
                AllPost.length === 0
              ) {
                return <Spinner />;
              } else {
                return (
                  <React.Fragment>
                 
                    {AllPost.AllPost.map((item) => (
                      <Post key={item.id} post={item} />
                    ))}

                    <PaginationWrapper>
                      <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={Number(NumberOfPosts)}
                        pageRangeDisplayed={3}
                        onChange={(page) => {
                          this.handlePageChange(page, pagedispatch);
                          this.scrollToTop();
                        }}
                      />
                    </PaginationWrapper>
                  </React.Fragment>
                );
              }
            }}
          </AppConsumer>
        ) : this.state.postTitle && this.state.result === [] ? (
          <h3>{NotFound}</h3>
        ) : (
          <React.Fragment>
            {this.state.pageResult.length === 0 ||
            this.state.pageResult === undefined ? (
              <React.Fragment>
                {this.state.result.map((item) => (
                  <SearchResult key={item.id} post={item} />
                ))}
                <PaginationWrapper>
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={Number(this.state.activeSearchPage)}
                    itemsCountPerPage={10}
                    totalItemsCount={Number(this.state.searchPostNumber)}
                    pageRangeDisplayed={3}
                    onChange={(pageNumber) => {
                      this.handleSearchPage(pageNumber);
                     
                      this.scrollToTop();
                    }}
                  />
                </PaginationWrapper>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.state.pageResult.map((item) => (
                  <SearchResult key={item.id} post={item} />
                ))}
                <PaginationWrapper>
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={Number(this.state.activeSearchPage)}
                    itemsCountPerPage={10}
                    totalItemsCount={Number(this.state.searchPostNumber)}
                    pageRangeDisplayed={3}
                    onChange={(pageNumber) => {
                      this.handleSearchPage(pageNumber);
                      this.scrollToTop();
                    }}
                  />
                </PaginationWrapper>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
const SearchFlex = styled.div`
  display: flex;
  border: 1px solid #373737;
  border-radius: 2px;
  padding-right: 12px;
`;
const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 2px;
  font-size: 16px;
  border: none;
  border-color: transparent;

  input:-webkit-autofill {
    background-color: white;
  }
  :focus {
    box-shadow: none !important;
    border: none;
    border-color: transparent;
  }

  @media (max-width: 576px) {
    width: 250px;
    margin: auto;
    font-size: 12px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  width: 400px;
  margin: auto;
  margin-top: 13px;
  div {
    margin-bottom: 0px;
  }
  @media (max-width: 576px) {
    padding-top: 10px;
    width: 95%;
    margin: auto;
    text-align: center;
  }
`;
const StyledButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  border: none;
  color: #373737;
  font-size: 14px;
  :focus {
    outline: 0;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
const PaginationWrapper = styled.div`
  display: flex;
  color: var(--darkGray);
  justify-content: center;
  margin-top: 19px;
  .active {
    a {
      background-color: white !important;
      color: var(--mainOrange) !important;
      border-color: 1px solid var(--mainOrange) !important;
    }
  }

  a {
    color: var(--darkGray) !important;
    background-color: white;
    border-color: 1px solid var(--darkGray) !important;
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-left: 5px;
    width: 33px;
    height: 33px;
    border-radius: 4px;
    justify-content: center;
  }
  .page-item-disabled {
    display: none;
  }
`;
const PostHeading = styled.h3`
  padding-top: 15px;
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  color: black;
  padding-left: 15px;
  padding-right: 15px;
`;
const Divider = styled.hr`
  background-color: var(--mainOrange);
  margin-top: 20px;
  margin-bottom: 20px;
`;
