export async function get() {
  const scheduledEvents = import.meta.glob("../../content/events/*.md");

  const list = [];

  for (const key of Object.keys(scheduledEvents)) {
    const event = (await scheduledEvents[key]()) as {
      frontmatter: {
        title: string;
        date: number;
        duration: number;
        image: string;
      };
      rawContent: () => string;
    };

    list.push({ ...event.frontmatter, description: event.rawContent() });
  }

  return {
    body: JSON.stringify(list),
  };
}
