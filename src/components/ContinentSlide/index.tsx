import { Box } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { ContinentSlideItem } from "./ContinentSlideItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Continent = {
  id: number;
  slug: string;
  title: string;
  description: string;
  cover: string;
}

interface ContinentSlideProps {
  data: Continent[]
}

export function ContinentSlide({ data }: ContinentSlideProps) {
  return (
    <Box
      px={{ base: "unset", md: "6.25rem" }}
      mt={{ base: "1.25rem", md: "3.25rem"}}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true
        }}
        mousewheel={true}
        keyboard={true}
        modules={[ Navigation, Pagination, Mousewheel, Keyboard ]}
      >
        {data.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
              <ContinentSlideItem slug={continent.slug} cover={continent.cover} title={continent.title} description={continent.description} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
} 


