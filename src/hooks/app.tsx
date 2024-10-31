import { createContext, ReactNode, useState, useContext } from 'react'
import { ItemType } from '../types/item'

interface ItemContextType {
    item: ItemType[]
    addItem: (newItem: ItemType) => void
    deleteItem: (index: number) => void
  }
  
const ItemsContext = createContext<ItemContextType | null>(null)
  
export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [item, setItem] = useState<ItemType[]>([])
  
    const addItem: ItemContextType['addItem'] = (newItem) => {
      setItem((prevItem) => [...prevItem, newItem])
    }
  
    const deleteItem: ItemContextType['deleteItem'] = (index) => {
      setItem((prevItem) => prevItem.filter((_, i) => i !== index))
    }
  
    return (
      <ItemsContext.Provider value={{ item, addItem, deleteItem }}>
        {children}
      </ItemsContext.Provider>
    )
}
  
export const useItem = (): ItemContextType => {
    const context = useContext(ItemsContext)
    if (!context) {
      throw new Error('useItems must be used within an ItemsProvider')
    }
    return context
}