import Link from "next/link";

export const navlink = (link, pathname) => {
    if (link.name === "Home") {
        return <li key={link.id}><Link className={pathname === '/category/01' ? 'text-blue-500 underline' : ''} href={link.href}>{link.name}</Link></li>
    } else {
        return <li key={link.id}><Link className={pathname === link.href ? 'text-blue-500 underline' : ''} href={link.href}>{link.name}</Link></li>
    }
}