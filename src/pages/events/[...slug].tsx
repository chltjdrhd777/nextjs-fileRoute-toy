import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getFilteredEvents } from "utils/Dummy";
import EventList from "components/events/EventList";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const filterData = params.slug;
  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      filteredEvents,
    },
  };
};

function FilteredEventPage({
  filteredEvents,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

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
