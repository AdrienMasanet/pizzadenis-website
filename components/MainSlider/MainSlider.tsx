import Image from "next/image";
import logoImage from "@/public/images/logo.png";
import sliderImage1 from "@/public/images/slider/1.jpeg";
import sliderImage2 from "@/public/images/slider/2.jpeg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import TripAdvisorLabel from "@/components/TripAdvisorLabel/TripAdvisorLabel";
import dynamic from "next/dynamic";

// Importing this component dynamically to only load it on the client side and avoid hydration errors
const CurrentlyOpen = dynamic(() => import("@/components/CurrentlyOpen/CurrentlyOpen"), { ssr: false });

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
    <div className="relative w-full py-28 md:py-36 overflow-hidden">
      <Image src={logoImage} alt="Pizza Denis depuis 1984" width={300} className="p-3 object-cover mx-auto white-outline" />
      <p className="mx-auto p-2 md:mb-20 font-babyaletha text-xl leading-9 text-center w-fit white-outline">
        <span className="px-3 text-4xl rounded-lg rounded-b-none">Pizzas au feu de bois</span>
        <br />
        <span className="px-3 text-4xl rounded-lg">à emporter ou à déguster sur place</span>
      </p>
      <CurrentlyOpen />
      <div className="absolute right-0 bottom-0">
        <TripAdvisorLabel />
      </div>
      <div ref={sliderRef} className="keen-slider h-full !absolute top-0 -z-10 opacity-40">
        <div className="keen-slider__slide">
          <Image src={sliderImage1} alt="Slider image 1" fill className="object-cover" priority />
        </div>
        <div className="keen-slider__slide slider-video">
          <iframe
            id="ytplayer"
            width="720"
            height="405"
            src="https://www.youtube.com/embed/0MN8ZlGhBoM?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&iv_load_policy=3&start=33&mute=1&playlist=0MN8ZlGhBoM"
            allow="autoplay"
          />
        </div>
        <div className="keen-slider__slide">
          <Image src={sliderImage2} alt="Slider image 2" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
