import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import { services } from "../../data/services";

interface ContactFormData {
  patientName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Appointment request:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white p-8 shadow-md"
    >
      <h2 className="font-heading text-2xl font-bold text-dark">
        Book an Appointment
      </h2>
      <p className="mt-2 text-sm text-muted">
        Fill in the form and we&apos;ll get back to you shortly.
      </p>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-700"
        >
          <CheckCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Thank you! Your appointment request has been submitted. We&apos;ll
            contact you soon.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="patientName"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Full Name *
          </label>
          <input
            id="patientName"
            type="text"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("patientName", { required: "Name is required" })}
          />
          {errors.patientName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.patientName.message}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: INDIAN_PHONE_REGEX,
                  message: "Enter a valid 10-digit Indian mobile number",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="serviceId"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Service *
          </label>
          <select
            id="serviceId"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("serviceId", { required: "Please select a service" })}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.serviceId && (
            <p className="mt-1 text-xs text-red-500">
              {errors.serviceId.message}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="preferredDate"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Preferred Date *
            </label>
            <input
              id="preferredDate"
              type="date"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              {...register("preferredDate", { required: "Date is required" })}
            />
            {errors.preferredDate && (
              <p className="mt-1 text-xs text-red-500">
                {errors.preferredDate.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="preferredTime"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Preferred Time *
            </label>
            <select
              id="preferredTime"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              {...register("preferredTime", { required: "Time is required" })}
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-xs text-red-500">
                {errors.preferredTime.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Additional Notes
          </label>
          <textarea
            id="notes"
            rows={3}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Any specific concerns or requests..."
            {...register("notes")}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Submit Appointment Request
        </Button>
      </form>
    </motion.div>
  );
}
