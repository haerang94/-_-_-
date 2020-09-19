import React, { useState, useEffect } from "react";

const Opening = () => {
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (curPage != 5) {
        setCurPage(curPage + 1);
        console.log(curPage);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  const imgUrl = `static/opening${curPage}.jpg`;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div style={{ height: "50px", fontSize: "30px" }}>page:{curPage}</div>
      <img src={imgUrl} alt="opening1" />
    </div>
  );
};

export default Opening;
