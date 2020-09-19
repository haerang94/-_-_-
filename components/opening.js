import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const ImgContainer = styled.div`
  padding: 10px;
  border: 1px solid red;
`;
const Img = styled.div`
  background-image: url(${(props) => props.src});
  width: 650px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Opening = () => {
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (curPage != 5) {
        setCurPage(curPage + 1);
        console.log(curPage);
      }
    }, 3000);
    return () => clearTimeout(timer);
  });

  const imgUrl = `static/opening${curPage}.jpg`;
  return (
    <Container>
      <div style={{ height: "50px", fontSize: "30px" }}>page:{curPage}</div>
      <ImgContainer>
        <Img src={imgUrl} alt={imgUrl} />
      </ImgContainer>
    </Container>
  );
};

export default Opening;
