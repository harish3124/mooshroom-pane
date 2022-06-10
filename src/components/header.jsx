import "./header.scss";

import ConnectButton from "./connectButton";
import GifInput from "./gifInput";

const Header = ({ isConnected, connectPhantom }) => {
  return (
    <div className="header">
      <div className="title">
        <img src="logo.png" className="logo" />
        <div className="headerText">Mooshroom Pane</div>
      </div>
      {isConnected ? (
        <GifInput />
      ) : (
        <ConnectButton connectPhantom={connectPhantom} />
      )}
    </div>
  );
};

export default Header;
