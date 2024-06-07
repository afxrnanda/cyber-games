import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel() {
  const informacoes = [
    {
      titulo: 'NOSSA MISSÃO',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ullamcorper finibus. Morbi luctus turpis ac nibh porttitor euismod. Vestibulum luctus risus sed felis vulputate vehicula. Suspendisse rhoncus, dolor eget suscipit rhoncus, diam ipsum luctus nibh, non ullamcorper nisi mi non nisi. Aliquam bibendum, est vel cursus venenatis, orci purus ultrices quam, id condimentum ante tortor venenatis tortor. Aenean fermentum risus tellus, non placerat tortor faucibus pharetra. Maecenas nec elit vulputate, pretium ligula nec, viverra dolor. Praesent in libero id ligula suscipit interdum et et nisl.'
    },
    {
      titulo: 'NOSSA VISÃO',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ullamcorper finibus. Morbi luctus turpis ac nibh porttitor euismod. Vestibulum luctus risus sed felis vulputate vehicula. Suspendisse rhoncus, dolor eget suscipit rhoncus, diam ipsum luctus nibh, non ullamcorper nisi mi non nisi. Aliquam bibendum, est vel cursus venenatis, orci purus ultrices quam, id condimentum ante tortor venenatis tortor. Aenean fermentum risus tellus, non placerat tortor faucibus pharetra. Maecenas nec elit vulputate, pretium ligula nec, viverra dolor. Praesent in libero id ligula suscipit interdum et et nisl.'
    },
    {
      titulo: 'NOSSOS VALORES',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ullamcorper finibus. Morbi luctus turpis ac nibh porttitor euismod. Vestibulum luctus risus sed felis vulputate vehicula. Suspendisse rhoncus, dolor eget suscipit rhoncus, diam ipsum luctus nibh, non ullamcorper nisi mi non nisi. Aliquam bibendum, est vel cursus venenatis, orci purus ultrices quam, id condimentum ante tortor venenatis tortor. Aenean fermentum risus tellus, non placerat tortor faucibus pharetra. Maecenas nec elit vulputate, pretium ligula nec, viverra dolor. Praesent in libero id ligula suscipit interdum et et nisl.'
    },
  ]
  
  const settings = {
    accessibility:true,
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-verde-claro-800">
      <div className="w-3/4 max-w-[700px] m-auto pt-10 pb-10">
        <Slider {...settings}>
          {informacoes.map((i, index) => (
            <div key={index} className="h-52 overflow-hidden bg-white text-black rounded-xl justify-center items-center">
              <h2 className='pt-2 sm:pt-4 font-bold text-sm sm:text-lg flex justify-center'>{i.titulo}</h2>
              <p className='p-2 sm:p-4 justify-center text-justify'>{i.texto}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

