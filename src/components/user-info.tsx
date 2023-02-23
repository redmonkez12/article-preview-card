"use client";

import Image from "next/image";
import { MobileOverlay } from "@/components/mobile-overlay";
import { useState } from "react";
import { UserInfoDesktop } from "@/components/user-info-desktop";
import clsx from "clsx";

export function UserInfo() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className={"flex h-16 items-center px-9 pb-5 lg:pb-8 relative"}>
            <Image className={"rounded-full"} src={"/images/avatar-michelle.jpg"} width={40} height={40}
                   alt={"Photo"}/>
            <div className={"ml-4 text-xs"}>
                <div className={"text-black font-bold"}>Michelle Appleton</div>
                <div className={"text-lightGrey font-medium lg:mt-px"}>28 Jun 2020</div>
            </div>

            <div
                className={clsx("w-[32px] h-[32px] ml-auto rounded-full flex items-center justify-center lg:z-10 relative cursor-pointer", {
                    ["bg-grey"]: showOverlay,
                    ["bg-veryLightGrey"]: !showOverlay
                })}
                onClick={() => setShowOverlay(!showOverlay)}>
                <UserInfoDesktop show={showOverlay}/>
                {!showOverlay && <Image className={"ml-px"} src={"/images/icon-share.svg"} width={15} height={13}
                                        alt={"Share icon"}/>}
                {showOverlay && <Image className={"ml-px"} src={"/images/icon-share-white.svg"} width={15} height={13}
                                       alt={"Share icon"}/>}
            </div>

            <MobileOverlay show={showOverlay} handleClose={() => setShowOverlay(false)}/>
        </div>
    );
}