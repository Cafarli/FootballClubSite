import React, { useEffect, useState } from "react";
import "./shop.css";
import info from "../../Data/shopClothing.json";
import { ShopHeader } from "./shopHeader";
import { Col, Row } from "react-bootstrap";
import { ShopCard } from "./shopCard/shopCard";
import { Paginate } from "../../Components/pagination/pagination";
import { useSelector } from "react-redux";

export function Shop() {
  const data = info;
  const [shopPosts, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = shopPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setNews(data.kits);
  }, [data.kits]);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(shopPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const cartItems = useSelector((state) => state.all.products);
  // console.log(cartItems);

  return (
    <div className="Shop">
      <ShopHeader />
      <Row className="shopcards">
        {data.kits &&
          data.kits.length > 0 &&
          currentPosts.map((item) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} key={item.id}>
                <ShopCard props={item} />
              </Col>
            );
          })}
      </Row>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={shopPosts.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </div>
  );
}
