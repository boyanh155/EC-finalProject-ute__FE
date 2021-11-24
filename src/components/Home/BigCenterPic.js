import React from "react";
import Youtube from "react-youtube";
import "../../assets/css/home/BigCenterPic.css";
const BigCenterPic = () => {
  const videoId = "i9rpTxaop8o";
  const opts = {
    width: "100%",
    height: "900px",
    playerVars: {
      autoplay: 1,
      controls: 0,
      autohide: 1,
      showinfo: 0,
      modestbranding: 1,
      // muted:1,
    },
  };
  return (
    <div className="videoWrapper" loading="lazy">
      <Youtube className="videoInner" videoId={videoId} opts={opts} />
      <div className="textInner">
        <h1 className="title">our inspiration</h1>
        <span className="content">
          Nguồn cảm hứng của chúng tôi đến từ chính những người thợ
          <br />
          đời đầu, đến từ cách họ tồn tại trong môi trường khắc nghiệt mang tên
          Sài Gòn.
        </span>
      </div>
    </div>
  );
};

export default BigCenterPic;
