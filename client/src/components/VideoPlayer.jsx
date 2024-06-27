import React, { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

const VideoPlayer = () => {
    const { call, name, callAccepted, myVideo, userVideo, stream, callEnded, } = useContext(SocketContext)

    return (
        <>
            <div className='flex container justify-evenly items-center flex-col md:flex-row gap-4'>
                {/* user video  */}
                {
                    stream && (
                        <div className='border-2 border-gray-900 dark:border-gray-100 rounded-md'>
                            <h2 className='text-xl text-center m-2 font-medium'>{name || "Name"}</h2>
                            <video playsInline muted ref={myVideo} autoPlay className='w-80 md:w-[40rem] md:h-[25rem] transform scale-x-[-1] border-t-2 border-gray-900 dark:border-gray-100' />
                        </div>
                    )
                }

                {/* peer video  */}
                {callAccepted && !callEnded && (
                    <div className='border-2 border-gray-900 dark:border-gray-100 rounded-md'>
                        <h2 className='text-xl text-center m-2 font-medium'>{call.name || "Name"}</h2>
                        <video playsInline ref={userVideo} autoPlay className='w-80 md:w-[40rem] md:h-[25rem] transform scale-x-[-1]' />
                    </div>
                )}
            </div>
        </>
    )
}

export default VideoPlayer