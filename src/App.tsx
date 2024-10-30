import { ItemProvider } from '@/hooks/app'
import MySidebar from '@/components/sidebar/sidebar'
import Manager from '@/components/manager/manager'



export default function App() {
  return (
    <ItemProvider>
      <div className="flex flex-col md:flex-row ">
        <div className='max-h-16 md:h-auto'>
          <MySidebar />
        </div>
        <Manager />
      </div>
    </ItemProvider>
  )
}

