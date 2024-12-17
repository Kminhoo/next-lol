// 챔피언 목록 타입
export interface ResponseData {
  data: {
    [key: string]: Champion
  }
  format: string
  type: string
  version: string
}

interface Info {
  [key: string]: number
}

interface State {
  [key: string]: number
}

export interface Image {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}

export interface Champion {
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: Info
  image: Image
  tags: string[]
  partype: string
  stats: State
}
