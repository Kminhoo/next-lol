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

// 챔피언 디테일 타입
type ChampionSkin = {
  id: string
  num: number
  name: string
  chromas: boolean
}

type ChampionStats = {
  [key: string]: number
}

export type Spells = {
  id: string
  name: string
  description: string
  tooltip: string
  leveltip: {
    label: string[]
    effect: string[]
  }
  maxrank: number
  cooldown: number[]
  cooldownBurn: string
  cost: number[]
  costBurn: string
  datavalues: Record<string, unknown>
  effect: (number[] | null)[]
  effectBurn: (string | null)[]
  vars: unknown[]
  costType: string
  maxammo: string
  range: number[]
  rangeBurn: string
  image: Image
  resource: string
}

type ChampionPassive = {
  name: string
  description: string
  image: Image
}

export type ChampionDetailData = {
  [key: string]: {
    id: string
    key: string
    name: string
    title: string
    image: Image
    skins: ChampionSkin[]
    lore: string
    blurb: string
    allytips: string[]
    enemytips: string[]
    tags: string[]
    partype: string
    info: Info
    stats: ChampionStats
    spells: Spells[]
    passive: ChampionPassive
    recommended: string[]
  }
}
