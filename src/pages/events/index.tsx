import styled from "styled-components";
import EventList from "components/events/EventList";
import { getAllEvents } from "utils/Dummy";
import EventSearch from "components/events/EventSearch";
import { useRouter } from "next/router";

function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHanlder(year: string, month: string) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <S.Events className="flex-center-C">
      <EventSearch onSearch={findEventsHanlder} />
      <EventList items={events} />
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
