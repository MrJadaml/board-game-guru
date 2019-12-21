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

module.exports.partsGenerator = () => {
  parts = {
    boards: {
      title: 'Boards',
      gameBoards: [
        {
          title: 'Game Boards',
          items: [
            {
              title: 'Main board',
              images: ['/images/game-board-tm-main.jpeg'],
            },
            {
              title: 'Elysium board',
              images: ['/images/game-board-tm-elysium.jpeg'],
            },
            {
              title: 'Hellas',
              images: [],
            },
          ],
        },
      ],
      playerBoards: [
        {
          title: 'Player Boards',
          items: [],
        }
      ],
      sideBoards: [
        {
          title: 'Side Boards',
          items: [],
        }
      ],
    },
    cards: {
      title: 'Cards',
    },
    tiles: {
      title: 'Tiles',
    },
    pieces: {
      title: 'Pieces',
    },
    instructions: {
      title: 'Instructions',
    },
  };

  return parts;
}

const generator = foo => {
}

module.exports.categoryItemsGenerator = () => {
  return {
    title: 'blah',
    images: '#',
  }
}
