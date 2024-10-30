import { useItem } from '@/hooks/app'

export default function Manager() {
    const { item, addItem, deleteItem } = useItem()
    return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {item.map((item, index) => (
          <div>
            {item}
            <br />
            {index}
            <br />
            <button onClick={() => deleteItem(index)}>Deletar</button>
          </div>
        ))}
      </div>
    )
}