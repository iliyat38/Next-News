import Link from "next/link";
import NavLink from "./navLink";

export default function MainHeader() {


    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">Next News</Link>
            </div>
            <ul>
                <li>
                    <NavLink href='/news'>News</NavLink>
                </li>
                <li>
                    <NavLink href='/archive'>Archive</NavLink>
                </li>
            </ul>
        </header>
    )
}