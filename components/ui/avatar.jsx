import Image from "next/image";
import Link from "next/link";

export default function Avatar({ label, description, FlexCol, imageUrl , path}) {
  return (
   <Link href={path ? path : '/'}>
    <div
      className={`
        group cursor-pointer transition duration-300
        ${
          FlexCol
            ? "flex flex-col items-center text-center w-28"
            : "flex items-center gap-4"
        }
       hover:scale-[0.98] hover:opacity-94`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-full border border-white/10 shadow-md transition-all duration-300  ${
          FlexCol ? "w-24 h-24" : "w-14 h-14"
        }`}
      >
        <Image
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLLgYyHytG9czf47PI63TDZ45B34_nViI7w&s"
          }
          width={200}
          height={200}
          unoptimized
          className="object-cover"
          alt={`${label} avatar`}
        />
      </div>
      {/* Text */}
      <div className={`${FlexCol ? "mt-3" : ""}`}>
        <h3 className="text-sm font-medium text-white truncate group-hover:text-gray-200 transition">
          {label}
        </h3>

        {description && (
          <p className="text-xs text-gray-400 mt-1 truncate">{description}</p>
        )}
      </div>
    </div>
   </Link>
  );
}
