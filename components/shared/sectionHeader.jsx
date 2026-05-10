import Button from "../button";
import { Heading } from "../ui/heading";

export default function SectionHeader({
  heading,
  description,
  btnLabel = "View All",
  path,
  hideBtn,
}) {
  return (
    <div className="flex items-center justify-between px-2 md:px-0 ">
      <div>
        <Heading
          label={heading}
          className="text-xl md:text-2xl font-semibold text-white tracking-tight"
        />
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      </div>
      {hideBtn ? null : (
        <Button
          path={path}
          className="
                   text-sm font-medium text-gray-300
                   px-3 py-1.5 rounded-full
                   bg-white/5 backdrop-blur
                   border border-white/10
                   hover:bg-white/10 hover:text-white
                   transition-all duration-200
                 "
        >
          {btnLabel}
        </Button>
      )}
    </div>
  );
}
