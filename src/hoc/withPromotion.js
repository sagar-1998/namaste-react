const withPromotion = (RestaurantCard) => {
  // console.log("Promoted Card");
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white px-2 py-1 ml-2 rounded-md">
          VEG
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default withPromotion;
