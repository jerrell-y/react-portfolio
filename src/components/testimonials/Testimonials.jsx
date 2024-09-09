import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/1.jpg'
import AVTR2 from '../../assets/1.jpg'
import AVTR3 from '../../assets/1.jpg'
import AVTR4 from '../../assets/1.jpg'

import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi odit sint tenetur assumenda perspiciatis repellat dolore eaque voluptatem, ullam laudantium, alias, ipsa iure consectetur corporis voluptas. Perspiciatis, aspernatur eligendi.'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi odit sint tenetur assumenda perspiciatis repellat dolore eaque voluptatem, ullam laudantium, alias, ipsa iure consectetur corporis voluptas. Perspiciatis, aspernatur eligendi.'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi odit sint tenetur assumenda perspiciatis repellat dolore eaque voluptatem, ullam laudantium, alias, ipsa iure consectetur corporis voluptas. Perspiciatis, aspernatur eligendi.'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi odit sint tenetur assumenda perspiciatis repellat dolore eaque voluptatem, ullam laudantium, alias, ipsa iure consectetur corporis voluptas. Perspiciatis, aspernatur eligendi.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Navigation,Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="a" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials