import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact us',
            path: '/'
        }
    ];

    return (
        <div className="flex items-center justify-between p-4 shadow-sm">
            <div className="flex  items-center gap-10">
                <Image src='/images/logo.jpg' alt="logo" height={20} width={80} />

                <ul className="md:flex gap-8 hidden">
                    {Menu.map((item, idx) => (
                       <Link href={item.path}>
                        <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out" key={item.id}>{item.name}</li>
                       </Link>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
    );
}

export default Header;
