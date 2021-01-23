import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getListRequest } from '../../redux/actions'

export default function RegisterTable() {




    const tableHeader=["Category", "Register by 10/07/2020", "Late Resgistration After 10/07/2020"]
    const tableBody=[
    {
    category:"Member",register:'$425', lateRegister:'$475' 
    },
    
    {
        category:"Member",register:'$425', lateRegister:'$475' 
        },
    
        {
            category:"Member",register:'$425', lateRegister:'$475' 
            },
            
            {
                category:"Member",register:'$425', lateRegister:'$475' 
                },
    
                {
                    category:"Member",register:'$425', lateRegister:'$475' 
                    },
                    
                    {
                        category:"Member",register:'$425', lateRegister:'$475' 
                        },
    
    
                        {
                            category:"Member",register:'$425', lateRegister:'$475' 
                            },
                            
                            {
                                category:"Member",register:'$425', lateRegister:'$475' 
                                },
                                {
                                    category:"Member",register:'$425', lateRegister:'$475' 
                                    },
                                    
                                    {
                                        category:"Member",register:'$425', lateRegister:'$475' 
                                        }
    
    
    
    ]

    return (
        <div className="w-full">
            <table className="w-full border border-gray-400">
    <thead>
    <tr>
        {tableHeader.map((header)=>{
return <th className="bg-gray-400">{header}</th>
        })}
    </tr>

    </thead>

    <tbody className="text-center tableBody">
    {tableBody.map((data)=>{
        return <tr className="">
            <td>{data.category}</td>
            <td>{data.register}</td>
            <td>{data.lateRegister}</td>


        </tr>
    })}


    </tbody>

</table>
        </div>
    )
}
