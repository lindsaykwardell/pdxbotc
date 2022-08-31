import axios from "axios";

export async function handler() {
  const events = await fetchEvents();

  return {
    statusCode: 200,
    body: JSON.stringify(
      events
        .map((event) => ({
          id: event.id,
          title: event.name,
          date: event.scheduled_start_time,
          location: event.entity_metadata?.location,
          description: event.description,
          image: event.image && `https://cdn.discordapp.com/guild-events/${event.id}/${event.image}.webp?size=1024`,
        }))
        .sort((a, b) => (a.date < b.date ? -1 : 1))
    ),
  };
}

async function fetchEvents() {
  try {
    return (await axios.get(
      `https://discord.com/api/v10/guilds/${process.env.PUBLIC_SERVER_ID}/scheduled-events`,
      {
        headers: {
          Authorization: `Bot ${process.env.SECRET_BOT_TOKEN}`,
        },
      }
    )).data;
  } catch (err) {
    console.log(err.response.data)
    console.log(typeof err.response.data.retry_after)
    await waitfor(err.response.data.retry_after * 1000);

    return fetchEvents();
  }
}

function waitfor(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
