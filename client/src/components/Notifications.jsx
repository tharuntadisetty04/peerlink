import React, { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { MdPhoneCallback } from "react-icons/md";

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext)

    return (
        <>
            {
                call.isReceivingCall && !callAccepted && (
                    <div className='flex items-center'>
                        <h2>{call.name} is calling: </h2>

                        <button className='mt-2 p-2 w-full bg-green-700 dark:bg-green-600 rounded-md text-slate-100 flex items-center gap-2 justify-center' onClick={answerCall}>
                            <MdPhoneCallback className='text-lg' /> Answer
                        </button>
                    </div>
                )
            }
        </>

    )
}

export default Notifications