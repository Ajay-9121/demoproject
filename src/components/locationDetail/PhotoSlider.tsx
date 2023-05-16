import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {
  const photos = props.c_slider.logo.map((element:any) => (   

    <SplideSlide>
      <img  src={element.url} width={10} height={12}/>
    </SplideSlide>    
    ));
    return (
      <>
      <Splide options={ {   perPage: 3,rewind: true,  type   : 'loop',autoplay: 'pause', } } aria-label="Photo Slider">
            {photos}
          
        </Splide>
      </>
    );
};

export default PhotoSlider;