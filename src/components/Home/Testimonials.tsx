import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  title: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    title: 'Frontend Developer at TechCo',
    feedback: 'JavaScript Mastery took my skills to the next level! The interactive projects and code challenges made learning fun and effective.',
    image: 'https://github.com/ajay-dhangar.png', // /img/testimonials/alex.jpg
  },
  {
    name: 'Sophia Lee',
    title: 'Full Stack Developer',
    feedback: 'A perfect resource for anyone serious about JavaScript. I loved the hands-on approach and supportive community.',
    image: 'https://github.com/ajay-dhangar.png', // /img/testimonials/sophia.jpg
  },
  {
    name: 'Michael Brown',
    title: 'Software Engineer',
    feedback: 'The learning paths are incredibly well-structured, allowing me to build confidence with each topic.',
    image: 'https://github.com/ajay-dhangar.png', // /img/testimonials/michael.jpg
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          What Our Learners Say
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-24 w-24 rounded-full mb-4 border-4 border-blue-500 dark:border-yellow-400"
                />
                <div className="flex mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                </div>
                <p className="italic text-lg mb-4">{testimonial.feedback}</p>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
