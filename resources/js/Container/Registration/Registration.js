import React from 'react'
import RegisterContent from './RegisterContent'
import RegisterTable from './RegisterTable'

export default function Registration() {


    return (
        <div className="w-full h-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-2"></div>

                <div className="col-span-8 my-20">

<RegisterTable/>
<RegisterContent/>

<div>

</div>

                </div>

                <div className="col-span-2"></div>


            </div>
        </div>
    )
}
