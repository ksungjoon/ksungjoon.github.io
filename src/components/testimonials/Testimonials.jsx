// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import AVATAR1 from "../../assets/images/hayoung.png";
import AVATAR2 from "../../assets/images/yeonsuk.png";
import AVATAR3 from "../../assets/images/umin.png";
import AVATAR4 from "../../assets/images/youngje.png";
import AVATAR5 from "../../assets/images/gyungjoon.png";
const data = [
  {
    avatar: AVATAR1,
    name: "김하영",
    review:
      "사용자의 입장에서 개발하는 팀원이며 협업을 통해서 문제를 해결해나가는 개발자입니다",
  },
  {
    avatar: AVATAR2,
    name: "유연석",
    review:
      "문제에 대한 다양한 해결 방법을 고민하고, 적극적으로 팀원들과 공유하며 본인의 의견이 아닌 해결 방법도 팀에서 정한 방식에 대해 적극적으로 임합니다.",
  },
  {
    avatar: AVATAR3,
    name: "고우민",
    review:
      "문제에 몰입하고 끈기있게 해결하는 팀원입니다.",
  },
  {
    avatar: AVATAR4,
    name: "오영재",
    review:
      "한 번 시작한 일은 끝까지 해내는 책임감이 있습니다.",
  },
  {
    avatar: AVATAR5,
    name: "안경준",
    review:
      "문제 해결을 위해 끊임없이 고민하고, 도전하는 개발자입니다.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>팀원들의 나의 평가</h2>
      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <figure className="client-avatar">
                <img src={avatar} alt={name} />
              </figure>
              <figcaption className="client-name">{name}</figcaption>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
