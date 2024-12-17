import { IconType } from './icon'

export interface GameCharacters {
  id: number
  Icon: React.FC<IconType>
  title: string
  desc: string
}
