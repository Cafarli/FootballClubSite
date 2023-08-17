import React, { useEffect, useState } from "react";
import "./news.css";
import { NewsCard } from "./news_card/news_card";
import newsData from "../../Data/news.json";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Paginate } from "../../Components/pagination/pagination";

export function News() {
  const [newsPosts, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setNews(newsData.news);
  }, []);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(newsPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container className="news" style={{ margin: 0, padding: 0 }}>
      <Row>
        <div className="news-title">
          <h1>News</h1>
        </div>
      </Row>
      <Row style={{ paddingTop: "5%" }} className="all-news">
        {/* <Col lg={4} md={3} ms={2}>
                    <NewsCategories />
                </Col> */}

        {newsData.news &&
          newsData.news.length > 0 &&
          currentPosts
            .map((news, index) => {
              return (
                <Col className="an-card" xs={12} sm={6} md={4} lg={4} xl={4}>
                    <NewsCard width={"100%"} key={index} data={news} />
                </Col>
              );
            })}
      </Row>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={newsPosts.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </Container>
  );
}
