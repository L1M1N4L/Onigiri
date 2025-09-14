export default function WhatYoullLearn() {
  return (
    <section className="w-full py-12 bg-[#faf5ef] flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#222] mb-8 text-center">Lorem Ipsum</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl">
        {[1,2,3,4].map((i) => (
          <div key={i} className="bg-[#333F72] rounded-2xl w-28 h-32 flex flex-col items-center justify-center text-white">
            <div className="w-12 h-12 bg-white rounded-full mb-3" />
            <span className="font-semibold">Feature {i}</span>
          </div>
        ))}
      </div>
    </section>
  )
} 