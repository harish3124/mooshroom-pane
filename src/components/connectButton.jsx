import "./connectButton.scss";

const ConnectButton = ({ connectPhantom }) => {
  return (
    <div className="connectButton" onClick={() => connectPhantom(true)}>
      Connect Wallet
    </div>
  );
};

export default ConnectButton;
