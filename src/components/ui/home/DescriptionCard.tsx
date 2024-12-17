import { GameCharacters } from '@tsc/gameCharacters'

interface DescriptionCardProps {
  character: GameCharacters
}

const DescriptionCard = ({ character }: DescriptionCardProps) => {
  return (
    <div className="bg-blue-50 dark:bg-slate-700 shadow-sm rounded-md max-w-full w-full p-2 flex flex-col items-center gap-2 ">
      <character.Icon className="w-[50px] h-[50px] fill-blue-500 dark:fill-white" />
      <h3 className="text-blue-800 dark:text-white text-lg font-bold">{character.title}</h3>
      <p className="text-blue-500 dark:text-slate-300 text-sm ">{character.desc}</p>
    </div>
  )
}

export default DescriptionCard
