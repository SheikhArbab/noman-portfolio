import React from 'react';
import * as S from "@/components/ui/carousel";
import * as C from "@/components/index";
import G from "@/constants/index";

const Portfolio: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20' id='portfolio'>
            <h1 className="text-center mb-20 font-bold text-2xl md:text-7xl ">
                Take a Look My Work
            </h1>
            <S.Carousel  >
                <S.CarouselContent className='' >
                    {G.projectData.map(v => <S.CarouselItem
                        onClick={() => window.open(v.url, "_blank")}
                        key={v.title}
                        className="md:basis-1/2 lg:basis-1/3 group overflow-hidden cursor-pointer"
                    >
                        <figure className='w-full  overflow-hidden ' >
                            <img src={v.img} className='w-full rounded-lg overflow-hidden object-cover h-64 group-hover:scale-105 duration-300 transition-all' alt={v.title} />
                            <figcaption className='capitalize text-sm md:text-3xl font-semibold mt-4 group-hover:underline' >{v.title}</figcaption>
                        </figure>
                    </S.CarouselItem>)}
                </S.CarouselContent>
                <S.CarouselPrevious />
                <S.CarouselNext />
            </S.Carousel>
        </C.Section>
    )
}

export default Portfolio