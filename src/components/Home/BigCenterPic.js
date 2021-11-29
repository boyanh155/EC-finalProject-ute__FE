import  { useState, useEffect,memo,useRef} from "react";
import { useWindowScroll } from "react-use";
import Youtube from "react-youtube";
import "../../assets/css/home/BigCenterPic.css";
//animation
// const point = keyframes`
// 100%{
//   left:150px;
// }
// ` 
// const Wrapper = styled.div`
// display: block;
// height: 900px;
// position: relative;
// transition : 0.3s all linear;
//     &::before{
//         content: '';
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0, 0, 0);
//         opacity: 0.9;
//         pointer-events: none;
//         z-index: 1;
//         transition : 0.3s all linear;
//         ${stylePlayerChange}
//     }


// }
// `
const BigCenterPic = () => {

  //false is not playing
  const [playerState, setPlayerState] = useState(false);
  const thisVideo = useRef(null);
  const {y} = useWindowScroll();
  //
  useEffect(() => {
    if(!playerState){
      thisVideo.current.internalPlayer.pauseVideo();
    }
    else{
      thisVideo.current.internalPlayer.playVideo();
    }
  }, [playerState])
  useEffect(() => {
    if(y<1250||y>1481){
      setPlayerState(false)
    }
  }, [y])
  const videoId = "i9rpTxaop8o";
  const opts = {
    width: "100%",
    height: "900px",
    playerVars: {
      showinfo: 0,
      modestbranding: 1,
      rel:0,
    },
  };
  
  // 
  const _onPlay = (e) => {
    if(playerState === false) setPlayerState(true)
    window.scrollTo({
      top: 1350,
      behavior: "smooth",
    });
  };
  const _onPause = () => {
    if(playerState === true) setPlayerState(false)
  };
  const _onEnd = () => {
    setPlayerState(false)
  };

  return (
    <div className={playerState?"videoWrapper-play smooth":' videoWrapper  smooth'} loading="lazy">

      {/* <IconWrapper> */}
      <div className={playerState?" smooth":'iconWrapper smooth'}>
      <i className="fab fa-youtube" style={playerState ? {display:"none"}:{}}></i>
      </div>
      <Youtube
        ref={thisVideo}
        className="smooth videoInner"
        videoId={videoId}
        opts={opts}
        onPlay={(e)=>_onPlay(e)}
        onPause={_onPause}
        onEnd={_onEnd}
      />
      <div className="smooth textInner">
        <h1 className="smooth title">our inspiration</h1>
        <span className="smooth content">
          Nguồn cảm hứng của chúng tôi đến từ chính những người thợ
          <br />
          đời đầu, đến từ cách họ tồn tại trong môi trường khắc nghiệt mang tên
          Sài Gòn.
        </span>
      </div>
    </div>
  );
};

export default memo(BigCenterPic);
