import React, {useState,useEffect} from 'react'
import Conference_Overview from '../Conference_Overview/Conference_Overview'
import Registration from '../Registration/Registration'
import Travel_Information from '../Travel_Information/Travel_Information'

export default function BottomTabs() {

    const [activeTab, setActiveTab]=useState('Conference Overview')

const tabData=["Conference Overview", "Registration", "Travel Information"]

    const buttonClick=(name)=> {
      return setActiveTab(name)
    }


    return (
        <div>
        <div className="bg-dark-b4u w-full text-default-b4u relative mt-16 p-1">
            <div className="grid grid-cols-9 justify-center items-center">
                {tabData.map((tab)=>{
                   return <div className={`col-span-1 cursor-pointer transition ease-in-out duration-500 p-2 rounded mr-2 ${activeTab==tab && 'activeTabStyle'}`}
                   onClick={()=>buttonClick(tab)}
                   > {tab} </div>
                })}
            </div>


        </div>
                    { activeTab=='Conference Overview' && <div><Conference_Overview/>
                    </div>}
                    { activeTab=='Registration' && <div><Registration/></div>}
      { activeTab=='Travel Information' && <div><Travel_Information/></div>}

                    

</div>
    )
}
