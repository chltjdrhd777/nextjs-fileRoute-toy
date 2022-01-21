import React from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { getEventById } from "utils/Dummy";

function EventDetailPage() {
  const {
    query: { eventId },
  } = useRouter();
  const event = getEventById(eventId);

  //% return /////////////////////////////////////////////
  if (!event) {
    return <EventDetailM>There is no event!</EventDetailM>;
  }

  return (
    <EventDetailM className="flex-center-R">
      <S.GradientBar />

      <S.Section>
        <S.Title>{event.title}</S.Title>

        <S.Detail>
          <S.EventImg>
            <img src={event.image} alt="event-img" />
          </S.EventImg>

          <S.EventInfo className="flex-center-C">
            <div className="date">{event.date}</div>
            <div className="place">{event.location}</div>
          </S.EventInfo>
        </S.Detail>

        <S.P>{event.description}</S.P>
      </S.Section>
    </EventDetailM>
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
