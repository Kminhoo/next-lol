import { Image } from '@tsc/champions'

interface Maps {
  [key: string]: boolean
}

interface Gold {
  base: number
  purchasable: boolean
  total: number
  sell: number
}

interface Stats {
  [key: string]: number
}

interface Effect {
  [key: string]: string
}

export interface Item {
  name: string
  description: string
  colloq: string
  plaintext: string
  inStore: boolean
  from?: string[]
  into: string[]
  image: Image
  gold: Gold
  tags: string[]
  maps: Maps
  stats?: Stats
  depth?: number
  effect?: Effect
}
