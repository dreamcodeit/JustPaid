'use client';

const testimonials = [
    {
        name: "Phillip Korsgaard",
        title: "CEO, KeywordsAI.co",
        image: "/Phillip.png",
        quoteTitle: "The peace of mind I needed",
        quote:
            "With JustPaid, I can finally breathe easy knowing my finances are under control.",
        quotetwo:
            "The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
    },
     {
        name: "Kierra Culhane",
        title: "CEO, KeywordsAI.co",
        image: "/Kierra.png",
        quoteTitle: "The peace of mind I needed",
        quote:
            "With JustPaid, I can finally breathe easy knowing my finances are under control.",
        quotetwo:
            "The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
    },
     {
        name: "Jaylon Westervelt",
        title: "CEO, KeywordsAI.co",
        image: "/Jaylon.png",
        quoteTitle: "The peace of mind I needed",
        quote:
            "With JustPaid, I can finally breathe easy knowing my finances are under control.",
        quotetwo:
            "The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
    },
      {
        name: "Fourth User",
        title: "CEO, KeywordsAI.co",
        image: "/Phillip.png",
        quoteTitle: "The peace of mind I needed",
        quote:
            "With JustPaid, I can finally breathe easy knowing my finances are under control.",
        quotetwo:
            "The automated processes and real-time insights give me the peace of mind to focus on growing my business.",
    },
];

export default function TestimonialSection() {
    return (
        <section className="px-[0px]">
            <div className="max-w-5xl mx-auto relative">
                {/* Left yellow line */}


                {/* Scrollable container */}
                <div className="scroller-ps relative z-10  md:pl-6 h-[735px] overflow-y-auto pr-2 space-y-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F0EEE6] p-6 rounded-md shadow-sm justify-between flex flex-col sm:flex-row"
                        >

                            <div className="flex max-w-[50%] gap-[20px]">
                                <div> <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover" /></div>
                                <div > 
                                    <p className="font-medium text-[#161616] text-[16px] mb-[8px]">{item.name}</p>
                                    <p className="text-[#858585] text-[14px] ">{item.title}</p>
                                    </div>
                            </div>


                            <div className="max-w-[55%]"> 
                                <p className=" text-[19px] font-[600] mb-1">“{item.quoteTitle}”</p>
                                <p className="text-[#161616] text-[14px] pt-[20px]">{item.quote}</p>
                                <p className="text-[#161616] text-[14px] pt-[20px]">{item.quotetwo}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
