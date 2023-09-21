import Image from "next/image";
import Link from "next/link";

const Navber = () => {
  return (
    <div className="fixed z-[1000] m-auto w-[94%] sm:w-[84%] top-0 left-0 right-0 transition-all bg-white">
            <div className="px-7 flex py-4 items-center rounded-b-2xl shadow-md">

                {/* Logo */}
                <div className="">
                    <Image src="/logo-skn.jpg" width={120}
                    height={120} alt="logo"/>
                </div>

                {/* Menu */}
                <div className="hidden lg:flex ml-auto">
                    <ul className="flex flex-row gap-3 xl:gap-5 text-[15px] xl:text-[16px]">
                        <li><Link href="/">หน้าหลัก</Link></li>
                        <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                        <li><Link href="/news">ข่าวสารและกิจกรรม</Link></li>
                        <li><Link href="">การพัฒนาสู่ความยั่งยืน</Link></li>
                        <li><Link href="">นักลงทุนสัมพันธ์</Link></li>
                        <li><Link href="">ติดต่อเรา</Link></li>
                        <li><Link href="">EN</Link></li>
                    </ul>
                </div>

                {/* mobie menu */}
                <div className="lg:hidden ml-auto">
                    <Image 
                    src="/menu-open.png" 
                    alt="open" 
                    width={30} 
                    height={30}
                    className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
  )
}

export default Navber