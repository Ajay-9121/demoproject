import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function FeaturesBrand(props:any) {
    console.log(props.c_features_brand)
    const photos = props.c_slider.logo.map((element:any) => (   
        <>
           
          <SplideSlide>
        
          <img  src={element.url}  className="logo-img" height={50}  width={30}/>
          </SplideSlide>
          
        </>  
      ));
  return (
    <>
    
    <div className="Features-brand">
    <h1 className="text-center text-xxl pb-3">{props.c_slider.featuredBrands}</h1>
   <Splide id="splide-nearby"
        options={{
          rewind: false,
          type: "splide",
          perPage: 3,
          perMove: 1,
          arrows: false,
          drag: false,
          pagination: false,
          lazyLoad: "nearby",
          breakpoints: {
            1920: {
              perPage:5,
              drag: true,
              pagination: true,
              arrows: true,
              type: "splide",
            },
          },
        }}>
          {photos}
      </Splide>
      </div>
    </>
  )
}
