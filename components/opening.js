import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
 0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Fade = styled.div`
  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
`;

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
  animation: ${(props) => (props.fadeIn ? "fadeIn" : "fadeOut")} 1s ease-in-out;
`;

const Content = styled.div`
  margin-top: 5px;
  width: 700px;
  padding: 10px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  white-space: pre-wrap;
  animation: ${fadeIn} 1s ease-in-out;
`;

const PageNumber = styled.div`
  color: #fff;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 20px;
`;

const Opening = () => {
  const contents = [
    "옛날 옛날에 어느 설산에 자연을 너무나 사랑하는" +
      "\n" +
      " 강아지 마을이 있었어요." +
      "\n" +
      "강아지들은 자연을 너무 사랑해서 설산에서도 씨앗을 자라게 할 수 있었답니다.",
    "그렇게 평화롭게 작물과 살아가는 어느 날 밤" +
      "\n" +
      "강아지 마을에  토끼 혜성들이 마구 떨어졌어요!",
    "강아지들은 토끼들에게  왜 이곳에 왔냐고 물었어요." +
      "\n" +
      "그랬더니 토끼들은 이렇게 말했어요." +
      "\n" +
      "토끼. 감정. 서툴다. 강아지들. 씨앗. 사랑한다." +
      "\n" +
      "우주씨앗. 사랑으로만 큰다." +
      "\n" +
      "그래서. 왔다. 부탁.'",
    "토끼들은 강아지들이 열심히 키워준다면 다른 씨앗도" +
      "\n" +
      "가지고 오겠다고 하면서 사라졌습니다." +
      "\n" +
      "강아지들은 망연히 우주 씨앗을 바라봤어요." +
      "\n" +
      "강아지들은 우주 씨앗을 잘 키워낼 수 있을까요?",
  ];
  const [curPage, setCurPage] = useState(1);
  const [content, setContent] = useState(contents);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (curPage != 5) {
        setCurPage(curPage + 1);
        setFade(true);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
      setFade(false);
    };
  });
  const imgUrl = `static/opening${curPage}.jpg`;
  const id = uuidv4();
  return (
    <>
      <CSSTransition in={fade} timeout={500} classNames="item">
        <Container>
          <Img src={imgUrl} alt={imgUrl} />
          {curPage > 1 && (
            <Content>
              {content[curPage - 2].split("\n").map((item) => {
                const id = uuidv4();
                return <p>{item}</p>;
              })}
            </Content>
          )}
        </Container>
      </CSSTransition>
      <PageNumber>page : {curPage} / 5</PageNumber>
    </>
  );
};

export default Opening;
