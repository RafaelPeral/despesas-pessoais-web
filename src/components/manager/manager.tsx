import { useItem } from '@/hooks/app'
import FormaPagamento_DataTable from '../cards/forma_pagamento/forma_pagamento_datatable'
import { Carde } from '../cards/utils/card'

export default function Manager() {
    const { item, addItem } = useItem()
    return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {item.map((item, index) => (
          <Carde content={item} index={index}>

          </Carde>
        ))}
        <button onClick={() => addItem(<FormaPagamento_DataTable/>)}>Adicionar</button>
      </div>
    )
}