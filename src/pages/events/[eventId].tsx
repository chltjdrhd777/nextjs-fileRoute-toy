import React from "react";
import styled, { css } from "styled-components";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next/types";
import { getEventById } from "utils/FirebaseRequest";
import Head from "next/head";

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ eventId: string }>) => {
  const eventId = params.eventId;
  const event = await getEventById(eventId);

  if (!eventId || !event) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30, //30s
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

function EventDetailPage({ selectedEvent }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!selectedEvent) {
    return <EventDetailM>There is no event!</EventDetailM>;
  }

  return (
    <>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name="description" content={selectedEvent.description} />
      </Head>

      <EventDetailM className="flex-center-R">
        <S.GradientBar />

        <S.Section>
          <S.Title>{selectedEvent.title}</S.Title>

          <S.Detail>
            <S.EventImg>
              <img src={selectedEvent.image} alt="event-img" />
            </S.EventImg>

            <S.EventInfo className="flex-center-C">
              <div className="date">{selectedEvent.date}</div>
              <div className="place">{selectedEvent.location}</div>
            </S.EventInfo>
          </S.Detail>

          <S.P>{selectedEvent.description}</S.P>
        </S.Section>
      </EventDetailM>
    </>
  );
}

//@styled
const S = {
  EventDetail: styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.pointMint};
    position: relative;
    z-index: 0;
  `,
  GradientBar: styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 30rem;
    background: linear-gradient(blue, 30%, pink);
  `,
  Section: styled.section`
    width: 80%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    gap: 5rem;
  `,
  Title: styled.h1`
    font-size: 6rem;
    color: white;
    text-shadow: 0px 3px 10px black;
  `,
  Detail: styled.div`
    background-color: rgba(0, 0, 0);
    border-radius: 15px;
    width: 70%;
    min-width: 50rem;
    height: 50%;
    min-height: 50rem;
    color: white;
    display: flex;
    overflow: hidden;
  `,
  EventImg: styled.div`
    width: 50%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  EventInfo: styled.div`
    align-items: unset;
    padding: 1rem;
    gap: 3rem;
  `,
  P: styled.p`
    width: 80%;
    font-size: 3rem;
  `,
};

//!media
const Media = css`
  @media screen and (min-width: 50em) {
  }
`;

const EventDetailM = styled(S.EventDetail)`
  ${Media}
`;

export default EventDetailPage;
