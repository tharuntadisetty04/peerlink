import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext'
import { RiFileCopy2Line } from 'react-icons/ri';
import { IoMdCall } from 'react-icons/io';
import { MdCallEnd } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ children }) => {
    const { userId, name, setName, callAccepted, callEnded, leaveCall, callUser, } = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState("")

    const copyIdToClipboard = () => {
        navigator.clipboard.writeText(userId).then(() => {
            toast.success("ID copied successfully!");
        }).catch(err => {
            toast.error("Failed to copy ID.");
        });
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <form noValidate autoComplete='off' className='w-full' onSubmit={(e) => e.preventDefault()}>
                <div className='border-2 border-gray-900 dark:border-gray-100 flex flex-col justify-between md:flex-row py-8 px-14 md:px-16 gap-8 md:gap-14 rounded-md'>
                    <div className='flex flex-col justify-center items-start gap-2 p-2'>
                        <h2 className='text-2xl font-medium mb-3'>Account Info</h2>

                        <input type="text" placeholder='Your Name' className='outline-none bg-inherit border-b border-gray-400 focus:border-gray-600' value={name} onChange={(e) => setName(e.target.value)} />

                        <button className='mt-2 p-2 w-full bg-blue-800 dark:bg-blue-700 rounded-md text-slate-100 flex items-center gap-2 justify-center' onClick={copyIdToClipboard}>
                            <RiFileCopy2Line className='text-lg' /> Copy Your ID
                        </button>
                        <ToastContainer autoClose={2000} />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-2 p-2'>
                        <h2 className='text-2xl font-medium mb-3'>Make a call</h2>

                        <input type="text" placeholder='ID to call' className='outline-none bg-inherit border-b border-gray-400 focus:border-gray-600' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />

                        {callAccepted && !callEnded ? (
                            <button className='mt-2 p-2 w-full bg-red-800 dark:bg-red-700 rounded-md text-slate-100 flex items-center gap-2 justify-center' onClick={leaveCall}>
                                <MdCallEnd className='text-xl' /> End Call
                            </button>
                        ) : (
                            <button className='mt-2 p-2 w-full bg-blue-800 dark:bg-blue-700 rounded-md text-slate-100 flex items-center gap-2 justify-center' onClick={() => callUser(idToCall)}>
                                <IoMdCall className='text-lg' /> Call to ID
                            </button>
                        )}
                    </div>
                </div>
            </form >

            <div>
                {children}
            </div>
        </div >
    );
}

export default Options;
