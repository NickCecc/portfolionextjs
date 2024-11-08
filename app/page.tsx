"use client";
import Image from "next/image";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import {ContainerScroll} from "@/components/ui/container-scroll-animation";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <main>
            <AuroraBackground>
                <motion.div
                    initial={{opacity: 0.0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Welcome to my website!
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        Nicholas Cecchin
                    </div>
                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        About Me
                    </button>
                </motion.div>
            </AuroraBackground>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Best Way to Predict the Future? <br/>
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Invent It
              </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/CodePic.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>

        </main>
    );
}

const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton/>,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton/>,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500"/>,
    },
];



