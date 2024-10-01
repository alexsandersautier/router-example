import Link from "next/link";

export default function Topo(){
    return(
        <header>
            <Link href="/frontend">Front-End</Link>
            <Link href="/backend">Back-End</Link>
            <Link href="/mobile">Mobile</Link>
        </header>
    );
}