import { ItemProvider } from '@/hooks/app'
import Sidebar from '@/components/sidebar/sidebar'
import Manager from '@/components/manager/manager'



export default function App() {
  return (
    <ItemProvider>
      <div className="flex flex-col sm:flex-row ">
        <Sidebar />
        <Manager />
      </div>
    </ItemProvider>
  )
}

