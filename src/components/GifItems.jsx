export const GifItems = ({ title, img }) => {
  return (
    <div className="card">
      <h5>{title}</h5>
      <img src={img} alt={title} />
    </div>
  );
};
