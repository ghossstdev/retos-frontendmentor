import "../css/share.css";
import IconShare from "./IconShare";

const Share = ({ state, func }) => {
  const visibleClass = state ? "share--visible" : "";

  return (
    <div className={`share ${visibleClass}`}>
      <div className="share__details">
        <span className="share__title">Share</span>

        <div className="share__icons">
          <img className="share__icon" src='/assets/icon-facebook.svg' alt="Icon Facebook" />
          <img className="share__icon" src='/assets/icon-twitter.svg' alt="Icon Twitter" />
          <img
            className="share__icon"
            src='/assets/icon-pinterest.svg'
            alt="Icon Pinterest"
          />
        </div>
      </div>

      <div className="share__button" onClick={() => func(!state)}>
        <IconShare color={"white"} />
      </div>
    </div>
  );
};

export default Share;
