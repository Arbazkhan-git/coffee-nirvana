"use client";

import SectionHeader from "./SectionHeader";

const nearbySections = [
  {
    title: "Viewpoints",
    icon: "🌄",
    items: [
      "Devaramane View Point",
      "Maidadi View Point",
      "Ethina Bhuja View Point",
      "Rani Jhari View Point",
      "Kyatanamakki View Point",
      "Galikere View Point",
    ],
  },
  {
    title: "Waterfalls",
    icon: "💧",
    items: [
      "Soormane Falls",
      "Kumbaradi Falls",
      "Kodige Falls",
      "Jhari Falls",
      "Manikyadhara Falls",
      "Kallathigiri Falls",
      "Hebbe Falls",
    ],
  },
  {
    title: "Temples",
    icon: "🛕",
    items: [
      "Kalabhairaveshwara Temple (Devaramane)",
      "Nanya Bhairava Temple",
      "Bettada Bhairaveshwara Temple",
      "Horanadu Annapoorneshwari Temple",
      "Kalaseshwara Temple, Kalasa",
      "Dattatreya Peetha (Bababudangiri)",
    ],
  },
  {
    title: "Trekking & Nature",
    icon: "🥾",
    items: [
      "Ballalarayana Durga Fort",
      "Bandaje Falls Trek",
      "Kudremukh Trek",
      "Mullayanagiri Peak",
      "Bababudangiri Hills",
      "Kelagur Tea Estate & View Point",
    ],
  },
  {
    title: "Adventure",
    icon: "⚡",
    items: [
      "Bhadra River Rafting",
      "✨ ...and many more unforgettable destinations nearby!",
    ],
  },
];

export default function NearbyAttractions() {
  return (
    <section id="nearby" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Nearby Attractions"
          title="Explore the best of Chikmagalur from here"
          description="Discover viewpoints, waterfalls, temples, trekking trails and adventure activities all within easy reach of Coffee Hills Homestay."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {nearbySections.map((section) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-[2rem] border border-espresso/10 bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 text-espresso">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="font-display text-xl font-semibold tracking-display">
                    {section.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-espresso/75">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-copper" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
