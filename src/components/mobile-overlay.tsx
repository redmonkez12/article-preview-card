import clsx from "clsx";
import Image from "next/image";

type Props = {
    show: boolean;
    handleClose(): void;
};

export function MobileOverlay({ show, handleClose }: Props) {
    return (
        <div className={clsx("absolute bg-black inset-0 flex items-center px-6 rounded-b-lg lg:hidden cursor-pointer", { hidden: !show })}>
            <div className={"uppercase tracking-[5px] text-lightGrey text-sm"}>Share</div>
            <div className={"h-[20px] relative ml-5 flex gap-4 items-center"}>
                <Image src={"/images/icon-facebook.svg"} width={20} height={20} alt={"Facebook"}/>
                <Image src={"/images/icon-twitter.svg"} width={20} height={20} alt={"Twitter"}/>
                <Image src={"/images/icon-pinterest.svg"} width={20} height={20} alt={"Pinterest"}/>
            </div>

            <div
                className={"w-[32px] h-[32px] bg-grey hover:bg-lightGrey rounded-full flex items-center justify-center ml-auto"}
                onClick={handleClose}>
                <Image className={"ml-px"} src={"/images/icon-share-white.svg"} width={15} height={13}
                       alt={"Share icon"}/>
            </div>
        </div>
    );
}