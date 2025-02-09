
import './App.css'
import { Input } from "@/components/ui/input"


import { CardContent, Cardcontentresiza } from './components/base/CardContent'
import { CardCentrTop, CardcontentTop } from './components/base/CardCentrTop'
import { CardCenterBottom, CardcontentBotton } from './components/base/CardCenterBottom'
import { CardRight } from './components/base/CardRight'
import { Carcontent, CardLeft } from './components/base/CardLeft'
import Selectmain from './components/base/selectmain'
import { Separatorright } from './components/base/SeparatorRight'




function App() {
  

  return (
    <>
    
    <div className='w-screen h-screen rounded-none bg-chart-5 flex justify-center items-center' >
        <div className='h-[653px] w-[1040px] bg-chart-4 flex justify-center items-center rounded-3xl'> 

          {/* Левый модуль */}
          <CardLeft>
          <Carcontent/>
          <Selectmain/>
          </CardLeft>        
                                 
          <div className='flex-col h-[610px] w-[575px] relative flex ml-[17px] ' >
          <Input/>
          <div className=' flex flex-wrap w-[576px] w-100% justify-end' >

          {/* Центарльня информация */}
          <CardContent>
            <Cardcontentresiza/>
          </CardContent>

            {/* Карточка с центра вторая с низа */}
          <CardCentrTop>
          <CardcontentTop/>
          </CardCentrTop>

          {/* Карточка с центра нижняя */}
          <CardCenterBottom>
          <CardcontentBotton/>
          </CardCenterBottom>
          </div>                    
          </div>
          <div className='h-[653px] w-[320px] justify-end flex-col flex p-[17px] mr-[20px]'>
            {/* Правая карточка */}
            <CardRight>
            <Separatorright/>
            </CardRight>
          </div>
          






        </div>
    </div>     
    </>
  )
}

export default App
