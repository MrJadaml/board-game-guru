type Parts {
  Boards
  Cards
  Tiles
  Pieces
  Instructions
}

type Url {
  url: String
}

type Image {
  url: Url
}

type Item {
  title: String
  images: [Url]
}

type CategoryItem {
  title: String
  items: [Item]
}

type Boards: [CategoryItem]
type Cards: [CategoryItem]
type Tiles: [CategoryItem]
type Pieces: [CategoryItem]

type LanguageItem {
  language: String
  url: Url
}

type Instructions {
  LanguageItem
}
