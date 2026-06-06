import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import SectionTitle from '../ui/SectionTitle'
import { testimonials } from '../../data/testimonials'
import 'swiper/css'
import 'swiper/css/pagination'

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Patients Say"
          subtitle="Real stories from families across Chennai"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-md">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="mt-4 text-sm leading-relaxed text-muted">{testimonial.comment}</p>
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="font-semibold text-dark">{testimonial.patientName}</p>
                    <p className="text-xs text-muted">
                      {testimonial.service} · {testimonial.date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
