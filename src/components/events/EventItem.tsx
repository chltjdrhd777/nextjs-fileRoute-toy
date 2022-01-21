import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { DummyTypes } from "utils/Dummy";

function Index({ title, date, image, location, id }: DummyTypes) {
  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAdderss = location.replace(", ", "\n");

  return (
    <EventItemM>
      <EventImage>
        <img src={image} alt="event-img" />
      </EventImage>

      <EventContent>
        <h2 className="title">{title}</h2>

        <div className="time-container">
          <time>{formattedDate}</time>
        </div>

        <div className="address-container">
          <address>{formattedAdderss}</address>
        </div>

        <div className="link-container">
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </EventContent>
    </EventItemM>
  );
}

//@ styled ////////////////////////////////////////
const EventItem = styled.li`
  width: 100%;
  max-width: 50rem;
  height: 20rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: white;
  margin: 1rem;
  display: flex;
  overflow: hidden;
`;

const EventImage = styled.div`
  width: 18rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EventContent = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;

  & .title {
    font-size: 1.7rem;
    margin: 1rem 0;
  }

  & .time-container {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grayFour};
    margin-bottom: 1rem;
  }

  & .address-container {
    width: 70%;
  }

  & .link-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & a {
      font-size: 1.3rem;
      background-color: ${({ theme }) => theme.colors.mainColor};
      padding: 1rem;
      border-radius: 10px;
      color: white;
      font-weight: bold;
    }
  }
`;

//! media ////////////////////////////////////////
const EventItemMedia = css`
  @media screen and (min-width: 50rem) {
    ${EventItem} {
    }

    ${EventImage} {
    }

    ${EventContent} {
    }
  }
`;

const EventItemM = styled(EventItem)`
  ${EventItemMedia}
`;

//# types ///////////////////////////////////////

export default Index;
