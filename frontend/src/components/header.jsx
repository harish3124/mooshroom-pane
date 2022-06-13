import "./header.scss";

import ConnectButton from "./connectButton";
import GifInput from "./gifInput";

const Header = ({ isConnected, connectPhantom, gifList, setGifList }) => {
  return (
    <div className="header">
      <div className="title">
        <img src="logo.png" className="logo" />
        <div className="headerText">Mooshroom Pane</div>
      </div>
      {isConnected ? (
        <GifInput gifList={gifList} setGifList={setGifList} />
      ) : (
        <ConnectButton connectPhantom={connectPhantom} />
      )}
    </div>
  );
};

export default Header;
