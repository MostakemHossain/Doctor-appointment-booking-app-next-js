import { Button } from "@/components/ui/button"
import Image from "next/image"

function Hero() {
  return (
    <section>
  <div className="mx-auto bg-slate-200 rounded-3xl max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/images/doctors.jpg"
          height={800}
          width={800}
          className="absolute inset-0 h-full w-full object-cover rounded-2xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className="text-primary"> Appointment</span> <br /> with your Favourite <span className="text-primary"> <br />Doctors</span></h2>

        <p className="mt-4 text-gray-600">
        Experience the convenience of scheduling medical appointments with ease. Connect with your preferred doctors and manage your healthcare appointments effortlessly.
        </p>

        <Button className='mt-10'>
            Explore Now
        </Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero