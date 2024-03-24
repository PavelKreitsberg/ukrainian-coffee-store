import Link from "next/link";

const navlinks = [
  { name: "home", href: "/home" },
  { name: "coffee beans", href: "/coffee-beans" },
  { name: "coffee capsules", href: "/coffee-capsules" },
  { name: "contact", href: "/contact" },
  { name: "about", href: "/about" },
];

const NavBar = () => {
  return (
    <>
      {navlinks.map(({ name, href }) => {
        return (
          <Link key={name} href={href}>
            <p>{name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavBar;
