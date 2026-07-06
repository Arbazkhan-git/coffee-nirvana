"use client";

import { rooms } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import RoomCard from "./RoomCard";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream py-20 md:py-28">
      <div className="section-divider mb-20 md:mb-28" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Accommodation"
          title="Rooms"
          description="Three rooms, each with estate views and the quiet that only a working plantation can offer."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-12">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
