import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { Transition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { contents } from "static/contents/openingText";

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  -webkit-flex-direction: column;
  background: black;
`;

const Img = styled.div`
  background-image: url(${(props) => props.src});
  width: 650px;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

const Content = styled.div`
  margin-top: 5px;
  width: 700px;
  padding: 10px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  white-space: pre-wrap;
  transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const PageNumber = styled.div`
  color: #fff;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
`;

const Opening = () => {
  const [curPage, setCurPage] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [content, setContent] = useState(contents);

  const doAnimate = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
      if (curPage != 5) {
        setCurPage(curPage + 1);
      }
    }, 300);
  });

  const imgUrl = `static/opening${curPage}.jpg`;
  const id = uuidv4();
  console.log(animate);
  return (
    <>
      <Container>
        <Transition in={animate} timeout={500} unmountOnExit mountOnEnter>
          {(state) => (
            <>
              <Img src={imgUrl} alt={imgUrl} state={state} />
              {curPage > 1 && (
                <Content state={state}>
                  {content[curPage - 2].split("\n").map((item) => {
                    const id = uuidv4();
                    return <p key={id}>{item}</p>;
                  })}
                </Content>
              )}
            </>
          )}
        </Transition>
        <button onClick={doAnimate}>Animate</button>
      </Container>
      <PageNumber>page : {curPage} / 5</PageNumber>
    </>
  );
};

export default Opening;
