import React from "react";
import "./news.css";
import { NewsCard } from "./news_card/news_card";
import { NewsCategories } from "./NewsCategories/NewsCategories";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function News() {
  return (
    <Container className="news" style={{ margin: 0, padding: 0 }}>
      <Row>
        <div className="news-title">
          <h1>Xəbərlər</h1>
        </div>
      </Row>
      <Row style={{ paddingTop: "5%" }} className="all-news">
        {/* <Col lg={4} md={3} ms={2}>
                    <NewsCategories />
                </Col> */}
        <Col className="an-card" sm={6} lg={3} md={4}>
          <Link to={`newsCardTitle/`}>
            <NewsCard width={"100%"} />
          </Link>
        </Col>

        <Col className="an-card" sm={6} lg={3} md={4}>
          <Link to={`newsCardTitle/`}>
            <NewsCard width={"100%"} />
          </Link>
        </Col>

        <Col className="an-card" sm={6} lg={3} md={4}>
          <Link to={`newsCardTitle/`}>
            <NewsCard width={"100%"} />
          </Link>
        </Col>

        <Col className="an-card" sm={6} lg={3} md={4}>
          <Link to={`newsCardTitle/`}>
            <NewsCard width={"100%"} />
          </Link>
        </Col>

        <Col className="an-card" sm={6} lg={3} md={4}>
          <Link to={`newsCardTitle/`}>
            <NewsCard width={"100%"} />
          </Link>
        </Col>
        
      </Row>
    </Container>
  );
}
