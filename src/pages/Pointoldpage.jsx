import React from 'react'

export default function Pointoldpage() {

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-0">
            <div
                className={`flex items-center rounded-lg shadow-lg relative overflow-hidden 
                         bg-[url('/images/bgpagecolecttion.png')] bg-cover bg-no-repeat bg-center`}
                onClick={()=> window.location.href ='https://myworld-virtual-store.com/point/'}   
            >
                <div className="flex justify-center items-center  p-1">
                    <img
                        src={"images/logoColection.png"}
                        className=" object-contain"
                    />
                </div>

                <div className="flex-[150%] ">
                    <img src="images/textcolection.png" alt="Collection" className="collection-img my-auto" />
                </div>
            </div>
        </div>
    );
};
