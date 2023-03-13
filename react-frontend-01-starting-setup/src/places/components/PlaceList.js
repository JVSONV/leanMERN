import React from "react";
import PlaceItem from "./PlaceItem";
import Card from '../../shared/components/UIElements/Card';
import "./PlaceList.css";

const PlaceList = (props) => {
  if (!props.item.length)
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe creat one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );

  return (
    <ul className="place-list">
      {props.item.map((place) => (
        <PlaceItem
          key={place.id}
          image={place.imageURL}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
