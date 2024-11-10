
import { CDN_URL } from "../../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;


  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-md bg-gray-100"
    >
      <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
      <h3 className=" font-bold text-lg py-4"> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

//higher order component

//Higher order component takes another component and return component adding some features to it

//here we will take restaurantCard as input to our higher order component n return a coomponant
//adding promoted lable on top of it

export const WithPromotedLable = (RestaurantCard) => {
  return (props) => {
    // console.log(props);
    const { resData } = props;
    return (
      <div className="">
        <label className="bg-white absolute text-red rounded-md p-3">
          {resData?.info?.aggregatedDiscountInfoV3?.discountTag}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
