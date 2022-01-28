import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { getFeaturedEvents } from "utils/FirebaseRequest";
import EventList from "components/events/EventList";
import Head from "next/head";
import React from "react";

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await getFeaturedEvents();
  return {
    props: {
      events: res,
    },
    revalidate: 1800, //30 min
  };
};

function HomePage({ events }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HomeContainer className="flex-center-C">
        <EventList items={events} />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightblue};
`;

export default HomePage;
