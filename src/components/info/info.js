import React from "react";


export default function Info (){
    return <section className="leading-6 ">
        <div className="flex flex-col gap-4">
            <div className="flex gap-5  ">
                <img className="w-4 h-4 " src="/images/icon-check.svg" alt="checkers"></img>
                <p className="text-GrayishBlue text-sm font-medium ">Unlimited website</p>
            </div>
            <div className="flex gap-5 ">
                <img className="w-4 h-4 " src="/images/icon-check.svg" alt="checkers"></img>
                <p className="text-GrayishBlue text-sm font-medium ">100% dataownership</p>
            </div>
            <div className="flex gap-5 ">
                <img className="w-4 h-4 " src="/images/icon-check.svg" alt="checkers"></img>
                <p className="text-GrayishBlue text-sm font-medium ">Email reports</p>
            </div>
        </div>
        
    </section>
}