import Link from "next/link";

export default function Button({ className, onClick, children, path }) {
  return (
    <Link href={path ? path : "/"} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
