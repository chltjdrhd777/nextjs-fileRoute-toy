import styled from "styled-components";
import EventList from "components/events/EventList";
import EventSearch from "components/events/EventSearch";
import { useRouter } from "next/router";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getAllEvents } from "utils/FirebaseRequest";

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const events = await getAllEvents();

  return {
    props: {
      allEvents: events,
    },
    revalidate: 60, //30s
  };
};

function AllEventPage({ allEvents }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  function findEventsHanlder(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <S.Events className="flex-center-C">
      <EventSearch onSearch={findEventsHanlder} />
      <EventList items={allEvents} />
    </S.Events>
  );
}

const S = {
  Events: styled.main`
    height: calc(100vh - 5rem);
    min-height: 80rem;
  `,
};

export default AllEventPage;
