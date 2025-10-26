const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, i) => (
          <div key={Date.now().toString() + i} className="shimmer-card">
            <div className="shimmer-card__image"></div>
            <div className="shimmer-card__desc-box">
              <div className="shimeer-card__desc-box__text"></div>
              <div className="shimeer-card__desc-box__text"></div>
              <div className="shimeer-card__desc-box__text"></div>
              <div className="shimeer-card__desc-box__text"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
