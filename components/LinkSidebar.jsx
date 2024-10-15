import Link from "next/link";
import React from "react";

const LinkSidebar = ({href, label, icon}) => {
  return (
    <li>
      <Link href={href} className="flex items-center gap-2">
        <span>
         {icon}
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default LinkSidebar;
