import { useItem } from '@/hooks/app'
import { Carde } from '../cards/utils/card'

export default function Manager() {
    const { item } = useItem()
    return (
      <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {item.map((item, index) => (
          <Carde content={item} index={index}/>
        ))}
      </div>
    )
}