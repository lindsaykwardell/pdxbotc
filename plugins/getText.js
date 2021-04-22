export default (context, inject) => {
  const fetchText = async (key) =>
    (await context.$content('text').where({ key }).fetch())?.[0]

  inject('fetchText', fetchText)

  context.$fetchText = fetchText
}
