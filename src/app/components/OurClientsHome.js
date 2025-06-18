'use client';

const testimonials = [
  {
    name: "Phillip Korsgaard",
    title: "CEO, KeywordsAI.co",
    image: "/y-log.svg",
    quoteTitle: "The peace of mind I needed",
    quote:
      "With JustPaid, I can finally breathe easy knowing my finances are under control. The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
  },
  {
    name: "Kierra Culhane",
    title: "CEO, KeywordsAI.co",
    image: "/y-log.svg",
    quoteTitle: "The peace of mind I needed",
    quote:
      "With JustPaid, I can finally breathe easy knowing my finances are under control. The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
  },
  {
    name: "Jaylon Westervelt",
    title: "CEO, KeywordsAI.co",
    image: "/y-log.svg",
    quoteTitle: "The peace of mind I needed",
    quote:
      "With JustPaid, I can finally breathe easy knowing my finances are under control. The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
  },
    {
    name: "Jaylon Westervelt",
    title: "CEO, KeywordsAI.co",
    image: "/y-log.svg",
    quoteTitle: "The peace of mind I needed",
    quote:
      "With JustPaid, I can finally breathe easy knowing my finances are under control. The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
  },
    {
    name: "Jaylon Westervelt",
    title: "CEO, KeywordsAI.co",
    image: "/y-log.svg",
    quoteTitle: "The peace of mind I needed",
    quote:
      "With JustPaid, I can finally breathe easy knowing my finances are under control. The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
  },
    {
    name: "Jaylon Westervelt",
    title: "CEO, KeywordsAI.co",
    image: "/y-log.svg",
    quoteTitle: "The peace of mind I needed",
    quote:
      "With JustPaid, I can finally breathe easy knowing my finances are under control. The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Left vertical accent line */}
        <div className="absolute top-0 left-0 h-full w-1 bg-yellow-500 rounded" />

        <div className="relative z-10 space-y-10 pl-6 md:pl-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9f7f5] p-6 rounded-md shadow-sm flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm mb-2">{item.title}</p>
                <p className="text-lg font-bold mb-1">“{item.quoteTitle}”</p>
                <p className="text-gray-700 text-sm">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
