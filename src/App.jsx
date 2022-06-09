import { useEffect, useState } from "react";
import "./App.scss";

import GifContainer from "./components/gifContainer";
import Header from "./components/header";

const TEST_GIFS = [
  "https://media.giphy.com/media/2PWBLDJ2KtB1X6o9vY/giphy.gif",
  "https://media.giphy.com/media/92ramTlpaw7Sn3F7sQ/giphy.gif",
  "https://media.giphy.com/media/SWwXbEiVJ5z1gsjf5N/giphy.gif",
  "https://media.giphy.com/media/OzJ4bGpmSHBwA/giphy.gif",
  "https://media.giphy.com/media/139eZBmH1HTyRa/giphy.gif",
  "https://media.giphy.com/media/NM4HoYcdbXdLO/giphy.gif",
  "https://media.giphy.com/media/8d45jqPbtUcyA/giphy.gif",
];

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const { solana } = window;

  const ensurePhantom = () => {
    if (!solana) {
      if (!solana.isPhantom) {
        alert("Please Install Phantom Wallet");
      }
    }
  };

  const connectPhantom = async (forceConnect = false) => {
    try {
      let resp;

      if (forceConnect) {
        resp = await solana.connect();
      } else {
        resp = await solana.connect({ onlyIfTrusted: true });
      }

      resp.publicKey.toString();
      setIsConnected(true);
    } catch (err) {}
  };

  useEffect(() => {
    ensurePhantom();
    connectPhantom();
  }, []);

  return (
    <div className="App">
      <Header isConnected={isConnected} connectPhantom={connectPhantom} />
      {isConnected ? <GifContainer gifList={TEST_GIFS} /> : null}
    </div>
  );
}

export default App;
