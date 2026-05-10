import { Hash } from "lucide-react";

export default function Tag({ label }) {
  return (
    <span className="font-poppins   text-gray-500 underline flex items-center ">
     <Hash size={20}/> {label}
    </span>
  );
}
