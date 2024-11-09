import { useItem } from '@/hooks/app'
import { Carde } from '../cards/utils/card'

export default function Manager() {
    const { item } = useItem()
    return (
      <div className='w-full'>
        {item.length === 0 ? (
          <div className='w-full h-screen flex flex-col items-center justify-center gap-4 p-4'>
            <h1 className='text-2xl font-bold'>
              Você ainda não possui nenhum card cadastrado
            </h1>
            <p>
              Adicione um card para visualizá-lo ou adicione algo a base de dados
            </p>
          </div>
        ) : (
          <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {item.map((item, index) => (
              <Carde key={index} content={item} index={index}/>
            ))}
          </div>
        )}
      </div>
      
    )
}






