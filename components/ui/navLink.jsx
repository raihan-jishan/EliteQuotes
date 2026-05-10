import Link from "next/link";

const NavLink = ({ label, path }) => {
  return (
    <li>
      <Link
        href={path}
        className="block py-2 px-3 text-white hover:text-gray-100 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 font-montserrat font-medium"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
