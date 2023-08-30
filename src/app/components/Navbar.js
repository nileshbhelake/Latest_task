"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    //add  here  window events

    if (counter == 0) router.push("/login");
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className="bg-sky-300 py-8  ">
        <ul className="flex justify-end ">
          <li className="mx-10 text-lg font-serif ">Timer:{counter}</li>
          <li className="mx-10 text-lg font-serif ">
            <Link href="/login">
              {pathname == "/login" ? "LogIn" : "LogOut"}
            </Link>
          </li>
          <li className="mx-10 text-lg font-serif">
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
