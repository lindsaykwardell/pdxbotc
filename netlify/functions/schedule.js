// Rewrite the imports using cjs

const { schedule } = require("@netlify/functions");
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

  const monEventStart = startOfWeek.add(1, "day").add(18, "hour");
  const monEventEnd = monEventStart.add(4, "hour");

  const wedEventStart = startOfWeek.add(3, "day").add(18, "hour");
  const wedEventEnd = wedEventStart.add(4, "hour");

  const mondayEvent = await axios
    .post(
      `https://discord.com/api/v10/guilds/${process.env.PUBLIC_SERVER_ID}/scheduled-events`,
      {
        name: "Beginners(+) Clocktower Online",
        privacy_level: "2",
        scheduled_start_time: monEventStart.toISOString(),
        scheduled_end_time: monEventEnd.toISOString(),
        description: `On Mondays we welcome players new to Clocktower (0-10 plays) and Storytellers looking to practice their craft. (Advanced players are welcome to mentor and play as well.)

We will be playing with the official application with the following Session ID: pdxbotc 

If this is your first time playing with the official app please do the following:

1 - Visit http://online.bloodontheclocktower.com/login and signup for an account. 

2 - Once you are logged in click "Setup Mic/Cam" to give permissions to the application to use those devices. 

3 - Press the letter "j" and join our Session ID: pdxbotc`,
        entity_type: "3",
        entity_metadata: {
          location: "https://online.bloodontheclocktower.com/#pdxbotc",
        },
      },
      {
        headers: {
          Authorization: `Bot ${process.env.SECRET_BOT_TOKEN}`,
        },
      }
    )
    .catch((err) => console.log(JSON.stringify(err.response.data, null, 2)));

  const wednesdayEvent = await axios
    .post(
      `https://discord.com/api/v10/guilds/${process.env.PUBLIC_SERVER_ID}/scheduled-events`,
      {
        name: "Advanced Clocktower Online",
        privacy_level: "2",
        scheduled_start_time: wedEventStart.toISOString(),
        scheduled_end_time: wedEventEnd.toISOString(),
        description: `On Wednesdays we challenge experienced players (more than 10 plays) with custom scripts and experimental roles. (Newer players are welcome to log on as spectators and listen to the wild plays in real time.)

We will be playing with the official application with the following Session ID: pdxbotc 

If this is your first time playing with the official app please do the following:

1 - Visit http://online.bloodontheclocktower.com/login and signup for an account. 

2 - Once you are logged in click "Setup Mic/Cam" to give permissions to the application to use those devices. 

3 - Press the letter "j" and join our Session ID: pdxbotc`,
        entity_type: "3",
        entity_metadata: {
          location: "https://online.bloodontheclocktower.com/#pdxbotc",
        },
      },
      {
        headers: {
          Authorization: `Bot ${process.env.SECRET_BOT_TOKEN}`,
        },
      }
    )
    .catch((err) => console.log(JSON.stringify(err.response.data, null, 2)));
  return {
    statusCode: 200,
    body: [
      JSON.stringify(mondayEvent.data),
      JSON.stringify(wednesdayEvent.data),
    ],
  };
};

exports.handler = schedule("0 8 * * 4", myHandler);
