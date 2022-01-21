import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getFilteredEvents } from "utils/Dummy";
import EventList from "components/events/EventList";

function FilteredEventPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p>Loadding...</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents.length) {
    return <p>there is no result here</p>;
  }

  return (
    <FilterPageContainer className="flex-center-C">
      <EventList items={filteredEvents} />
    </FilterPageContainer>
  );
}

const FilterPageContainer = styled.main`
  height: 100vh;
  min-height: 50rem;
`;

export default FilteredEventPage;
