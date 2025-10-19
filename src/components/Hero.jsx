import image1 from "../assets/hero/shopping-fun-timehappy-couple-together-600w-1654426087.png";
import image2 from "../assets/hero/29846097-woman-shopping-concept-collage-with-different-shopping-symbols-around-girl.png";
import image3 from "../assets/hero/istockphoto-498301640-612x612.png";
import Slider from "react-slick";
const imageList = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusantium animi in blanditiis aspernatur, odit suscipit porro soluta ipsam debitis reprehenderit corporis exercitationem atque. Voluptate autem provident doloribus nihil ea.",
  },
  {
    id: 2,
    img: image2,
    title: "30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusantium animi in blanditiis aspernatur, odit suscipit porro soluta ipsam debitis reprehenderit corporis exercitationem atque. Voluptate autem provident doloribus nihil ea.",
  },
  {
    id: 3,
    img: image3,
    title: "70% off on all Product's Sale",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusantium animi in blanditiis aspernatur, odit suscipit porro soluta ipsam debitis reprehenderit corporis exercitationem atque. Voluptate autem provident doloribus nihil ea.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute 
      -top-1/2 right-0 rounded-3xl rotate-45"
      ></div>
      {/* hero section */}
      <div className="container px-6 sm:px-10 lg:px-20 pb-8 sm:pb-0 overflow-hidden">
        <Slider {...settings}>
          {imageList.map((item) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12
            sm:pt-0 text-center sm:text-left
            order-2 sm:order-1 relative z-10"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm">{item.description}</p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-primary to-secondary
                hover:scale-105 duration-200 text-white
                px-4 py-2 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 overflow-hidden">
                  <div className="relative z-10">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[300px] h-[300px] 
                sm:h-[450px] sm:w-[450px] sm:scale-100
                lg:scale-125
                object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
