import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { getFeaturedEvents } from "utils/Dummy";
import EventList from "components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <HomeContainer className="flex-center-C">
      <EventList items={featuredEvents} />
    </HomeContainer>
  );
}

const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightblue};
`;

export default HomePage;
