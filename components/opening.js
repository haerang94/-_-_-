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
  border-radius: 5px;
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
`;

const PageNumber = styled.div`
  color: #fff;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

const NextBtn = styled.button`
  background: coral;
  color: #fff;
  position: absolute;
  bottom: 40px;
  right: 30px;
  width: 80px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid #fff;
  outline: none;

  &:active {
    bottom: 38px;
    right: 28px;
  }
`;

const PrevBtn = styled(NextBtn)`
  bottom: 40px;
  left: 30px;

  &:active {
    bottom: 38px;
    left: 28px;
  }
`;

const Opening = () => {
  const [curPage, setCurPage] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [content, setContent] = useState(contents);

  const doAnimate = useCallback(
    (btn) => {
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
        if (btn === "next" && curPage != 5) {
          setCurPage(curPage + 1);
        } else if (btn === "prev" && curPage != 1) {
          setCurPage(curPage - 1);
        }
      }, 300);
    },
    [curPage, animate]
  );

  const imgUrl = `static/opening${curPage}.jpg`;
  const id = uuidv4();

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
              <PageNumber state={state}>page : {curPage} / 5</PageNumber>
            </>
          )}
        </Transition>
        <NextBtn onClick={() => doAnimate("next")}>다음 페이지</NextBtn>
        <PrevBtn onClick={() => doAnimate("prev")}>이전 페이지</PrevBtn>
      </Container>
    </>
  );
};

export default Opening;
