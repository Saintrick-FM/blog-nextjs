"use client"

import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { setDisConnectUser } from '../../../helpers/redux_toolkit'; 

export default function DisconnectUser(){
    const dispatch = useDispatch()
    return ( 
    <Link href="/" onClick={()=>dispatch(setDisConnectUser())}>
        Se déconnecter
    <BiLogOut style={{ marginBottom: "2.5px" }} />
    </Link>
    )
}