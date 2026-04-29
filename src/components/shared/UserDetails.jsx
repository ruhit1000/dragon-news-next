"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserDetails = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const defaultAvatar =
    "https://img.daisyui.com/images/profile/demo/wonderperson@192.webp";

  return (
    <div className="flex items-center gap-4">
      {user && (
        <span className="font-medium">Welcome, {user.name.split(" ")[0]}</span>
      )}
      {user && (
        <div className="avatar">
          <div className="w-12">
            <Image
              src={user?.image || defaultAvatar}
              alt="User"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      )}
      {user ? (
        <button
          className="btn btn-neutral px-10 mb-1"
          onClick={() => authClient.signOut()}
        >
          Logout
        </button>
      ) : (
        <Link href="/login" className="btn btn-neutral px-10 mb-1">
          Login
        </Link>
      )}
    </div>
  );
};

export default UserDetails;
