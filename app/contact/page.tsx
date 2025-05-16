import { HubspotForm } from "@/components/hubspot-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-black pt-40">
      {/* Hero Section */}
      <section className="h-[45vh] flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl text-black/70">Let's discuss how we can help you build your dream IT team</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
              <p className="text-lg mb-12 text-black/70">
                Fill out the form, and our team will get back to you within 24 hours to discuss your IT staffing needs.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <Mail className="mr-4 text-black" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-black/70">info@steelhs.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 text-black" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-black/70">+60 12-221 9647</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 text-black" />
                  <div>
                    <h3 className="font-bold mb-1">Headquarters</h3>
                    <p className="text-black/70">
                      No. B-09-21, Boulevard 51,
                      <br />
                      Jalan SS9A/18, Seksyen 51A,
                      <br />
                      47300 Petaling Jaya,
                      <br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Global Presence</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Malaysia</p>
                    <p className="text-black/70">Headquarters</p>
                  </div>
                  <div>
                    <p className="font-medium">Pakistan</p>
                    <p className="text-black/70">Talent Network</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 border border-black/10 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <HubspotForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#f7f3e9] border-t border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Location</h2>
          <div className="relative h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0982456544717!2d101.62118797489515!3d3.0777222541204283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c8f5912644b%3A0x77612fa0225cad69!2sBoulevard%2051%2C%20Jalan%20SS9A%2F18%2C%20Seksyen%2051a%2C%2047300%20Petaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1715371365147!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Steel Horizon Solutions Headquarters"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
