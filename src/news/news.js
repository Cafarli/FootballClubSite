import React from "react";
import './news.css'
import { NewsCard } from "./news_card/news_card";
import { NewsCategories } from "./NewsCategories/NewsCategories";
import { Footer } from "../headerFooter/footer/footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function News() {
    return(
        <Container className="news" style={{margin:0 ,padding:0}}>
            <Row>
                <div className="news-title">
                    <h1>NEWS</h1>
                </div>
            </Row>
            <Row style={{paddingTop: "5%"}}>
                <Col md={4}>
                    <NewsCategories />
                </Col>
                <Col md={8}>
                    <Link to={`newsCardTitle/`}>
                        <NewsCard width={"30%"}/>
                    </Link>
                    <Link to={`newsCardTitle/`}>
                        <NewsCard width={"30%"}/>
                    </Link>
                    <Link to={`newsCardTitle/`}>
                        <NewsCard width={"30%"}/>
                    </Link>
                    <Link to={`newsCardTitle/`}>
                        <NewsCard width={"30%"}/>
                    </Link>
                    <Link to={`newsCardTitle/`}>     
                        <NewsCard width={"30%"}/>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}