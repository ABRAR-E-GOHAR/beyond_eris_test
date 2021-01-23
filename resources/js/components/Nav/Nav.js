import React,{useState,useEffect} from 'react'
import Logo from './Logo.png'
import './Nav.css'

export default function Nav() {

const [toggle,setToggle]=useState(true)
const [activeTab, setActiveTab]=useState("Congress & Exhibition")
    const tabDataBlack=["Events Management", "Congress & Exhibition", "Production", "Engagement"]


   const activeTabFunction=(tab)=> {
        return setActiveTab(tab);
      }
  
     const toggler=()=>{
        setToggle(!toggle)
      }

    return (
        <div className="fixed z-20 w-screen">
        {/* <!-- Desktop View Start --> */}
        <div
          className={`hidden text-white w-screen md:grid grid-cols-12 h-24 border-b-2 border-pink-200 border-opacity-25 py-3 bg-dark-b4u`}>
          <div className="lg:col-span-1 xl:col-span-2"></div>
    
          <div className="col-span-12 md:col-span-12 md:px-2 xl:col-span-8 h-full">
            <div className="grid grid-cols-12 h-full gap-2 lg:gap-0">
              <div className="col-span-1 lg:col-span-2 flex items-center h-full">
                <a href="#">
                  <img className="w-auto" src={Logo} />
                </a>
              </div>
    
              <div className="col-span-11 lg:col-span-10 h-full">
                <div
                  className="flex w-full justify-between items-center h-full text-white text-xs xl:text-base lg:text-lg px-4 xl:px-1"
                >
               

                  {tabDataBlack.map((tab,index)=>{
                     return <div
                        className={`hover:bg-light-b4u cursor-pointer px-2 py-1 lg:px-4 lg:py-1 rounded-full  ${tab===activeTab && 'activeTabclassName'}`}
                        onClick={()=>activeTabFunction(tab)}
                        >
                        { tab }
                      </div>
                  })}
                 
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-span-2"></div>
        </div>
        </div>
    
      
    
    
    )
}
