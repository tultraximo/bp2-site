import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Blue Planet Building Panels | Los Angeles",
  description:
    "Contact Blue Planet Building Panels in Los Angeles to discuss BP2 RIPS for architectural and engineering projects.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-6 md:p-8">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <div className="px-6 py-10 text-center md:px-10">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Contact Blue Planet Building Panels
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Architects and engineers: tell us about the project and we will
                follow up. You can also call or email directly.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-300 bg-white p-6 text-sm text-gray-700 shadow-sm md:col-span-1">
              <div className="font-semibold text-gray-900">
                Blue Planet Building Panels
              </div>
              <p className="mt-3">
                9200 S Vermont Ave
                <br />
                Los Angeles, CA 90044
                <br />
                United States
              </p>
              <p className="mt-3">
                Monday – Friday: 8am – 5pm
                <br />
                Saturday – Sunday: Closed
              </p>
              <p className="mt-3">
                <a
                  href="mailto:rob.m@bp2panels.com"
                  style={{ color: "#3F6FEC" }}
                >
                  rob.m@bp2panels.com
                </a>
                <br />
                <a href="tel:9512265422" style={{ color: "#3F6FEC" }}>
                  (951) 226-5422
                </a>
              </p>
            </div>

            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
