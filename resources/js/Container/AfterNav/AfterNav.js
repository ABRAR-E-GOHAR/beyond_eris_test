import React from 'react'
import {useSelector} from 'react-redux'

export default function AfterNav() {


  const list = useSelector(state => state.listReducer.list)

  return (
    <div className="relative flex">
    <div className="absolute top-0 w-full bg-cover headerBackground" style={{height:550}}></div>
    <div className="grid grid-cols-12 w-full h-full z-10">
     <div className="col-span-2">
     </div>

      <div className="col-span-8 w-full h-100">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center mt-52 font-bold text-default-b4u">
            <div
              className="  text-8xl font-bold px-4 py-1 rounded-full text-center inline"
            >
              {list && list.title}
            </div>
            <div className="text-3xl font-bold mt-12">              {list && list.conference_date}
</div>
            <div className="text-4xl font-bold mt-12">{list && list.detail_title}</div>
          </div>
        </div>
</div>
      <div className="col-span-2"></div>
    </div>
  </div>
  )
}
