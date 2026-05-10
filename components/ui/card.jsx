import Image from "next/image";
import { Heading } from "./heading";

import Link from "next/link";
import { AlignVerticalDistributeStart } from "lucide-react";

export const CollectionCard = ({ _id, text, description, path }) => {
  const imageUrl = `https://picsum.photos/seed/${_id}/400/300`;
  return (
    <Link href={path ? path : "/"}>
      <div
        className="group relative max-w-sm mx-auto rounded-2xl overflow-hidden 
      bg-white/10  
      transition-all duration-500 hover:-translate-y-1  "
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Image */}
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={imageUrl ? imageUrl : ""}
            alt="image"
            fill
            className="object-cover group-hover:scale-110 transition duration-700 ease-out"
          />

          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Floating badge */}
          <span
            className="absolute bottom-3 left-3 text-xl 
          bg-white/10 backdrop-blur-md border border-white/20 
          px-3 py-1 rounded-full text-gray-200 shadow-md"
          >
            <AlignVerticalDistributeStart size={20} />
          </span>
        </div>

        {/* Content */}
        <div className="p-5 relative z-10">
          <Heading
            label={text}
            className="text-lg font-semibold text-white tracking-tight"
          />

          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom glass highlight line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </Link>
  );
};

export const CategorieCard = ({ name, icon = [], path }) => {
  const Icon = icon;
  return (
    <Link href={path ? path : "/"}>
      <div
        className="
                group cursor-pointer
                bg-[#1c1c1e]/80 
                border border-white/5
                rounded-2xl p-4
                flex items-center justify-between
                hover:bg-white/10
                transition duration-300
              "
      >
        {/* Title */}
        <span className="text-sm font-medium text-gray-200">{name}</span>

        {/* Icon */}
        <div
          className="
                bg-white/5 p-2 rounded-lg
                group-hover:bg-white/10 transition
              "
        >
          <Icon className="w-4 h-4 text-gray-300" />
        </div>
      </div>
    </Link>
  );
};

export const CountCard = ({ name, icon, description }) => {
  return (
    <div
      href="#"
      className="bg-emerald-100/2 hover:bg-emerald-300/4 cursor-pointer transition-all block max-w-sm p-6    border-default rounded-base"
    >
      <h5 className="mb-3 text-[1.20rem]  font-medium tracking-tight text-heading leading-8 flex items-center justify-between capitalize max-lg:flex-col-reverse  max-lg:gap-2 max-lg:text-lg max-lg:items-start ">
        {name} <p className="text-body">{icon}</p>
      </h5>
      <h1 className="text-3xl font-poppins">{description}</h1>
    </div>
  );
};

export const PickCard = ({ label, icon }) => {
  return (
    <div className="bg-gray-50/3 p-2 px-3 rounded-xl cursor-pointer">
      <span className="flex items-center gap-1 ">
        {icon} {label}
      </span>
    </div>
  );
};
