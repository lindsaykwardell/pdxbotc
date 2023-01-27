// Rewrite the imports using cjs

const { schedule } = require("@netlify/functions");
const axios = require("axios");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

const myHandler = async (event, context) => {
  const startDate = dayjs()
    .add(1, "week")
    .startOf("week")
    .add(3, "day")
    .tz("America/Los_Angeles")
    .add(18, "hour");
  const endDate = startDate.add(4, "hour");
  const newEvent = await axios
    .post(
      `https://discord.com/api/v10/guilds/${process.env.PUBLIC_SERVER_ID}/scheduled-events`,
      {
        name: "Clocktower Online",
        privacy_level: "2",
        scheduled_start_time: startDate.toISOString(),
        scheduled_end_time: endDate.toISOString(),
        description: `Join us in the virtual town square where we will once again avenge the horrid murder of our dear storyteller. 

We will be playing with the official application with the following Session ID: pdxbotc 
      
If this is your first time playing with the official app please do the following:
      
1 - Visit http://online.bloodontheclocktower.com/login and signup for an account. 
      
2 - Once you are logged in click “Setup Mic/Cam” to give permissions to the application to use those devices. 
      
3 - Press the letter “j” and join our Session ID: pdxbotc`,
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
    body: JSON.stringify(newEvent.data),
  };
};

exports.handler = schedule("0 0 * * 4", myHandler);
