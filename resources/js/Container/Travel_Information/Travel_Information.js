import React from 'react'
import B4uEventsCardImage1 from './B4uEventsCardImage1.png'
import {useSelector} from 'react-redux'


export default function Travel_Information() {
    const list = useSelector(state => state.listReducer.list)



    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">

                </div>

                <div className="col-span-8 mt-5">

<div className="font-bold -ml-10 text-xl">Venue: {list && list.venue}</div>
<div className="mt-3">
{list && list.address}</div>
<div className="text-2xl font-bold mt-10">Recommended Hotels</div>         
<div className="grid grid-cols-3">
<div className="">
        <img src={B4uEventsCardImage1} className="p-3 w-full" />
      </div>

      <div className="">
        <img src={B4uEventsCardImage1} className="p-3 w-full" />
      </div>

      <div className="">
        <img src={B4uEventsCardImage1} className="p-3 w-full" />
      </div>
</div>


{/* Bottom Data */}

<div className="mt-20 text-2xl font-bold">While you are in Pennsylvania:
</div>


<div className="mt-10">
I am a paragraph. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
through the cites of the word in classical literature, discovered the undoubtable source.

</div>

<div className="my-16">
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem
Ipsum used since the 1500s

</div>
                

     

     
                </div>

                <div className="col-span-2">
                    
                </div>
            </div>

           
        </div>
    )
}
