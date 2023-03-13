import React from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { USERS } from "../../user/pages/Users";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: v4(),
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748333,
      lng: -73.985278,
    },
    creator: USERS[0].id,
  },
  {
    id: v4(),
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageURL:
      "https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748333,
      lng: -73.985278,
    },
    creator: v4(),
  },
];
console.log(USERS[0].id);
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList item={loadedPlaces} />;
};

export default UserPlaces;
