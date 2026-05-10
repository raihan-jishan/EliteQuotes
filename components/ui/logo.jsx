import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <span className="self-center  text-heading font-semibold whitespace-nowrap font-macondo tracking-wide text-2xl">
        EliteQuotes
      </span>
    </Link>
  );
};

export default Logo;
