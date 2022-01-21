import React from "react";
import EventItem from "./EventItem";
import styled from "styled-components";

function Index({ items }: EventListProps) {
  return (
    <EventList className="flex-center-C">
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </EventList>
  );
}

//@ styled
const EventList = styled.ul`
  width: 90%;
`;

//# types
interface EventListProps {
  items: any[];
}

export default Index;
