import clsx from "clsx";
import Image from "next/image";

type Props = {
    show: boolean;
};

export function UserInfoDesktop({ show }: Props) {
    return (
        <div
            className={clsx("max-lg:hidden absolute bg-black inset-0 flex items-center px-6 rounded-lg px-9 py-[1rem] top-[-79px] w-[248px] left-[-108px] h-[55px]", { hidden: !show })}>
            <div className={"uppercase tracking-[5px] text-lightGrey text-sm"}>Share</div>
            <div className={"h-[20px] relative ml-5 flex gap-4 items-center"}>
                <Image src={"/images/icon-facebook.svg"} width={20} height={20} alt={"Facebook"}/>
                <Image src={"/images/icon-twitter.svg"} width={20} height={20} alt={"Twitter"}/>
                <Image src={"/images/icon-pinterest.svg"} width={20} height={20} alt={"Pinterest"}/>
            </div>
            <div className="bottom-arrow"></div>
        </div>
    );
}
