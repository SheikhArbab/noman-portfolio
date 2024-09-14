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
                <S.CarouselContent>
                    {G.projectData.map(v => <S.CarouselItem
                        key={v.title}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <figure className='  w-full' >
                            <img src={v.img} className='w-full  object-cover' alt={v.title} />
                            <figcaption className='capitalize text-sm md:text-3xl font-semibold mt-4' >{v.title}</figcaption>
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