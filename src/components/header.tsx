import { Bell, Heart, Search, Settings, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      {/* Desktop Navbar */}
      <nav
        className="w-[375px] h-[288px] left-[1px] 
                            md:w-[1440px] md:h-[124px] md:left-0
                            bg-[#FFFFFF] border-[1px] border-[#C3D4E966]
                            md:mx-auto md:max-w-screen-2xl"
      >
        {/* For Logo */}
        <div className="relative">
          <h1
            className="w-[108px] h-[28px] left-[25px] text-[24px] leading-[28.8px]
                        md:w-[148px] md:h-[44px] top-[40px] md:left-[60px]
                        font-sans font-bold md:text-[32px] md:leading-[48px] tracking-[-0.03em]
                        text-[#3563E9] absolute"
          >
            MORENT {/* Logo Text */}
          </h1>
          {/* Profile Icon (Visible only on mobile) */}
          <Link href="">
            <Image
              src="/profile.jpeg"
              alt="profile-icon"
              width={28}
              height={28}
              className="md:hidden w-[28px] h-[28px] rounded-[90px] left-[314px] top-[40px] absolute"
            />
          </Link>
        </div>

        {/* For Search Bar */}
        <label id="searchBox" className="relative">
          {/* Search Icon */}
          <Search
            className="absolute 
          top-[104px] left-[49px]
          w-[24px] h-[24px] md:top-[50px] md:left-[292px] text-[#596780] z-[5]"
          />
          {/* Search Input Field */}
          <input
            type="search"
            name="searchbox"
            id="searchBox"
            placeholder="Search something here"
            className="absolute 
            w-[263px] h-[48px] top-[92px] left-[25px] border-[#C3D4E966] rounded-[10px]
            md:w-[492px] md:h-[44px] md:top-[40px] md:left-[272px] border-[1px] md:rounded-[70px] 
            focus:outline-none pl-[60px]" /* Padding-left ensures placeholder aligns after the search icon */
          />
          {/* Settings Icon */}
          <Settings2
            className="absolute 
          w-[48px] h-[48px] top-[92px] left-[304px] border-[1px] rounded-[10px] border-[#C3D4E966]
          md:w-[24px] md:h-[24px] md:top-[50px] md:left-[720px] text-[#596780] 
          md:border-none md:z-[5]"
          />

          {/* Icon For Desktop Screen */}
          <div className="relative hidden md:block">
            <div className="flex gap-[30px] absolute left-[1120px] top-[40px]">
              <Link
                href=""
                className="w-[44px] h-[44px] rounded-[90px] border-[1px] border-[#C3D4E966] opacity-80 flex items-center justify-center"
              >
                <Heart className=" w-[24px] h-[24px] fill-[#596780] text-[#C3D4E966]" />
              </Link>
              <Link
                href=""
                className="w-[44px] h-[44px] rounded-[90px] border-[1px] border-[#C3D4E966] opacity-80 flex items-center justify-center"
              >
                <Bell className=" w-[24px] h-[24px] fill-[#596780] text-[#596780]" />
              </Link>
              <Link
                href=""
                className="w-[44px] h-[44px] rounded-[90px] border-[1px] border-[#C3D4E966] opacity-80 flex items-center justify-center"
              >
                <Settings className=" w-[24px] h-[24px] fill-[#596780] text-[#C3D4E966]" />
              </Link>
              <Link href="">
                <Image
                  src="/profile.jpeg"
                  alt="profile"
                  width={48}
                  height={48}
                  className="rounded-[90px] w-[48px] h-[48px] top-[92px] left-[356px] fill-[#C3D4E966] "
                />
              </Link>
            </div>
          </div>
        </label>
      </nav>
    </header>
  );
}
