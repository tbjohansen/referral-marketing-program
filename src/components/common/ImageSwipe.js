import { isEmpty } from "lodash";
import { Swiper, SwiperSlide } from "./Swiper";

const ImageSwipe = ({ productImages }) => {
  // render product images
  const renderProductImages = () => {
    if (!isEmpty(productImages)) {
      return (
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          navigation={true}
          autoplay={false}
          draggable={true}
          // * -> breakpoints are kind of hard to implement, they don't work
          injectStyles={[
            `
              .swiper-button-next,
              .swiper-button-prev {
                width: 26px;
                height: 26px;
                background-color: #0A365C;
                padding: 6px;
                border-radius: 100%;
                border: 2px solid #FFE001;
                color: #FEFEFE;
              }
    
              .swiper-button-next::after,
              .swiper-button-prev::after {
                content: "";
              }
          `,
          ]}
        >
          {productImages.map((image) => {
            return (
              <SwiperSlide key={image?.id}>
                <div className="p-4 max-sm:p-2 w-full">
                  <img
                    src={image?.url}
                    alt="Product name"
                    class="w-full h-[318px] lg:object-contain object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
    }
  };

  return (
    <div className="w-[90%] pb-10 max-sm:pb-4 max-sm:gap-0">
      <div className="w-[100%] m-auto">{renderProductImages()}</div>
    </div>
  );
};

export default ImageSwipe;
