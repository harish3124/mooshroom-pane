import "./gifContainer.scss";

const GifContainer = ({ gifList }) => {
  return (
    <div className="gifGrid">
      {gifList.map((gifUrl, index) => (
        <img src={gifUrl} alt="minecraft GIF" className="gif" key={index} />
      ))}
    </div>
  );
};

export default GifContainer;
