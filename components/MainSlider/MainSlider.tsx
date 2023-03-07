import Image from "next/image";
import logoImage from "@/public/images/logo.png";
import sliderImage1 from "@/public/images/slider/1.jpeg";
import sliderImage2 from "@/public/images/slider/2.jpeg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CurrentlyOpen from "../CurrentlyOpen/CurrentlyOpen";

const MainSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      dragSpeed: 0.75,
    },
    [
      (slider) => {
        let timeout: NodeJS.Timeout;

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3500);
        }

        slider.on("created", nextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="w-full py-28 relative overflow-hidden">
      <Image src={logoImage} alt="Pizza" width={300} className="p-3 object-cover mx-auto white-outline" />
      <h1 className="mx-auto p-2 mb-10 font-babyaletha text-xl leading-9 text-center w-fit white-outline">
        <span className="px-3 rounded-lg rounded-b-none">Pizzas au feu de bois</span>
        <br />
        <span className="px-3 rounded-lg">à emporter ou à déguster sur place</span>
      </h1>
      <hr className="h-10 invisible" />
      <CurrentlyOpen />
      <div ref={sliderRef} className="keen-slider h-full !absolute top-0 -z-10 opacity-40">
        <div className="keen-slider__slide">
          <Image src={sliderImage1} alt="Slider image 1" fill className="object-cover" />
        </div>
        <div className="keen-slider__slide slider-video">
          <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/0MN8ZlGhBoM?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&iv_load_policy=3&start=33&mute=1" allow="autoplay" />
        </div>
        <div className="keen-slider__slide">
          <Image src={sliderImage2} alt="Slider image 2" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;