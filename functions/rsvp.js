import axios from 'axios'

export async function handler(event, context) {
  const payload = JSON.parse(event.body)
  const { name, email, eventName, eventDate } = payload

  try {
    const res = await axios.post(process.env.RSVP_URL, {
      content: `${name} (${
        email ? email : 'No email provided'
      }) has registered for ${eventName} on ${eventDate}`,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        err,
      }),
    }
  }
}
