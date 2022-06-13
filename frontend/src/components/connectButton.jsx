const ConnectButton = ({ connectPhantom }) => {
  return (
    <div className="btn" onClick={() => connectPhantom(true)}>
      Connect Wallet
    </div>
  );
};

export default ConnectButton;
