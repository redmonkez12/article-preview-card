import Image from "next/image";
import { Manrope } from '@next/font/google'
import { UserInfo } from "@/components/user-info";

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {


    return (
        <main className={`${manrope.className} px-6 grid place-items-center bg-primary h-full`}>
            <div className={"bg-white rounded-lg flex flex-col lg:flex-row max-w-[730px]"}>
                <div className={"relative h-[200px] lg:h-[280px] lg:w-[285px]"}>
                    <Image className={"rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"} src={"/images/drawers.jpg"}
                           fill alt={"Drawers"}/>
                </div>
                <div className={"flex-1 flex flex-col"}>
                    <div className={"px-8 lg:px-10 pb-5 pt-9 lg:pt-8"}>
                        <h1 className={"font-bold text-base lg:text-xl text-black"}>Shift the overall look and feel by
                            adding these wonderful touches to furniture in your home</h1>

                        <p className={"text-xs text-grey mt-3"}>Ever been in a room and felt like something was missing?
                            Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any
                            room feel complete.</p>
                    </div>

                    <UserInfo/>
                </div>
            </div>
        </main>
    )
}
