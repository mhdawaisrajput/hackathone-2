import {
  Bell,
  Heart,
  Menu,
  Search,
  Settings,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export default function SecondHeader() {
  return (
    <header>
      {/* Desktop Navbar */}
      <nav
        className="w-[375px] h-[222px] left-[1px] 
                            md:w-[1440px] md:h-[124px] md:left-0
                            bg-[#FFFFFF] border-[1px] border-[#C3D4E966]
                            md:mx-auto md:max-w-screen-2xl"
      >
        {/* For Logo */}
        <div className="relative">
          <h1
            className="w-[108px] h-[28px] left-[25px] top-[90px] text-[24px] leading-[28.8px]
                        md:w-[148px] md:h-[44px] md:top-[40px] md:left-[60px]
                        font-sans font-bold md:text-[32px] md:leading-[48px] tracking-[-0.03em]
                        text-[#3563E9] absolute"
          >
            MORENT
          </h1>
          {/* Profile Icon (Visible only on mobile) */}

          <Sheet>
            <SheetTrigger className="block md:hidden left-[34px] top-[25px] absolute">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-[200px]">
              <SheetHeader>
                <SheetTitle>Log Out</SheetTitle>
                <SheetDescription>
                  <Link href="/detailPage" className="flex justify-center">
                    <Button className="absolute w-[100px] h-[44px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="absolute font-sans font-semibold text-[12px] leading-[24px] tracking-[-0.02em] text-center text-[#ffffff]">
                        Log Out
                      </h1>
                    </Button>
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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
          top-[152px] left-[49px]
          w-[24px] h-[24px] md:top-[50px] md:left-[292px] text-[#596780] z-[5]"
          />
          {/* Search Input Field */}
          <input
            type="search"
            name="searchbox"
            id="searchBox"
            placeholder="Search something here"
            className="absolute 
            w-[263px] h-[48px] top-[142px] left-[25px] border-[#C3D4E966] rounded-[10px]
            md:w-[492px] md:h-[44px] md:top-[40px] md:left-[272px] border-[1px] md:rounded-[70px] 
            focus:outline-none pl-[60px]" /* Padding-left ensures placeholder aligns after the search icon */
          />
          {/* Settings Icon */}
          <Settings2
            className="absolute 
          w-[48px] h-[48px] top-[142px] left-[304px] border-[1px] rounded-[10px] border-[#C3D4E966]
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
