module.exports.gamesGenerator = (count, titleOverride, dateOverride) => {
  const games = [];
  const baseTitle = titleOverride || 'Game Name';
  let timestamp = dateOverride || 4200000000000;

  for (let id = count; id > 0; id--) {
    const title = `${baseTitle} ${id}`;
    const slug = title.replace(/\s/g, '-');
    timestamp = timestamp + id;

    games.push({ id, slug, title, timestamp });
  }

  return games;
}
