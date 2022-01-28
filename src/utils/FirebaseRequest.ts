import axios from "axios";

export async function getAllEvents() {
  try {
    const res = await axios.get("https://next-api-db-default-rtdb.firebaseio.com/events.json");
    const events = [];

    for (const key in res.data) {
      events.push({
        id: key,
        ...res.data[key],
      });
    }
    return events;
  } catch (err) {
    console.log(err);
  }
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: string) {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
}
