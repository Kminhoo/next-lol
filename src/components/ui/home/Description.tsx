import DescriptionCard from '@components/ui/home/DescriptionCard'

import { gameCharacters } from '@data/home/data'

const Description = () => {
  return (
    <section>
      <div className="max-w-7xl m-auto relative py-[50px]">
        <div>
          <h2 className="text-xl font-bold mb-6 text-center text-slate-900 dark:text-white">게임 특징</h2>
          <div className="p-2 flex flex-col items-center gap-4 md:flex-row">
            {gameCharacters.map((character) => (
              <DescriptionCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
