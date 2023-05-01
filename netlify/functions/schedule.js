// Rewrite the imports using cjs

// const { schedule } = require("@netlify/functions");
const axios = require("axios");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

const myHandler = async (event, context) => {
  const startOfWeek = dayjs()
    .tz("America/Los_Angeles")
    .startOf("day")
    .add(1, "week")
    .startOf("week");

  const eventsToCreate = await axios.get(
    "https://pdxbotc.com/api/event-text.json"
  );

  for (event of eventsToCreate.data) {
    const eventStart = startOfWeek.add(event.date, "day").add(18, "hour");
    const eventEnd = eventStart.add(event.duration, "hour");

    const mondayEvent = await axios
      .post(
        `https://discord.com/api/v10/guilds/${process.env.PUBLIC_SERVER_ID}/scheduled-events`,
        {
          name: event.title,
          privacy_level: "2",
          scheduled_start_time: eventStart.toISOString(),
          scheduled_end_time: eventEnd.toISOString(),
          description: event.description,
          entity_type: "3",
          entity_metadata: {
            location: "https://online.bloodontheclocktower.com/#pdxbotc",
          },
          image: await toDataURL(`https://www.pdxbotc.com${event.image}`),
        },
        {
          headers: {
            Authorization: `Bot ${process.env.SECRET_BOT_TOKEN}`,
          },
        }
      )
      .catch((err) => console.log(JSON.stringify(err.response.data, null, 2)));
  }

  return {
    statusCode: 200,
  };
};

const toDataURL = (url) =>
  axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((blob) => {
      const base64 = Buffer.from(blob.data, "binary").toString("base64");
      return `data:${blob.headers["content-type"]};base64,${base64}`;
    });

// exports.handler = schedule("0 8 * * 4", myHandler);
exports.handler = myHandler;