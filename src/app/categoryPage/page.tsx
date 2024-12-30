import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import SecondHeader from "@/components/second_header";

export default function CategoryPage() {
  return (
    <div>
      <SecondHeader />

      {/* For Desktop Screen. */}
      <div className="hidden md:block ">
        <div className="w-[1440px] h-[1600px] mx-auto max-w-screen-2xl bg-[#F3F5F7]">
          {/* For Left Menu Bar*/}
          <div className="relative">
            <div className="absolute w-[360px] h-[1600px] bg-[#FFFFFF]">
              {/* 1st */}
              <div className="absolute w-[176px] h-[352px] top-[36px] left-[36px]">
                <h2 className="font-sans font-bold text-[12px] leading-[15.12px] tracking-[-0.02em] pb-8 text-[#90A3BF]">
                  TYPE
                </h2>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                      checked
                      readOnly
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    Sport <span className="text-[#90A3BF]">(10)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                      checked
                      readOnly
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    SUV <span className="text-[#90A3BF]">(12)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    MPV <span className="text-[#90A3BF]">(16)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    Sedan <span className="text-[#90A3BF]">(20)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    Coupe <span className="text-[#90A3BF]">(14)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    Hatchback<span className="text-[#90A3BF]">(14)</span>
                  </h2>
                </div>
              </div>

              {/* 2nd */}
              <div className="absolute w-[176px] h-[240px] top-[440px] left-[32px]">
                <h2 className="font-sans font-bold text-[12px] leading-[15.12px] tracking-[-0.02em] pb-8 text-[#90A3BF]">
                  CATEGORY
                </h2>
                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                      checked
                      readOnly
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    2 Person <span className="text-[#90A3BF]">(10)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    4 Person <span className="text-[#90A3BF]">(14)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    6 Person <span className="text-[#90A3BF]">(12)</span>
                  </h2>
                </div>

                <div className="flex items-center gap-[8px] pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="checkbox"
                      name="checkBox1"
                      id="checkBox1"
                      className="w-[16px] h-[16px]"
                      checked
                      readOnly
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]">
                    8 or More <span className="text-[#90A3BF]">(16)</span>
                  </h2>
                </div>
              </div>

              {/* 3rd */}
              <div className="absolute w-[296px] h-[104px] top-[736px] left-[32px]">
                <h2 className="font-sans font-bold text-[12px] leading-[15.12px] tracking-[-0.02em] pb-8 text-[#90A3BF]">
                  PRICE
                </h2>

                <div className="pb-4">
                  <label id="checkBox1" className="flex items-center">
                    <input
                      type="range"
                      name="range"
                      id="range"
                      className="w-[296px] h-[12px]"
                    />
                  </label>
                  <h2 className="font-sans font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#596780] pt-4">
                    Max. $100.00
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Right Box-1*/}
          <div>
            <div className="relative">
              <div className="absolute w-[486px] h-[132px] top-[32px] left-[392px] rounded-[10px] bg-[#FFFFFF]">
                <div className="absolute w-[92px] h-[20px] top-[24px] left-[24px] flex items-center gap-[8px]">
                  <label id="radioButton1" className="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton1"
                      className="w-[16px] h-[16px]"
                      checked
                      readOnly
                    />
                  </label>
                  <h2 className="flex items-center font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] whitespace-nowrap">
                    Pick - Up
                  </h2>
                </div>

                <div className="absolute w-[438px] h-[48px] top-[60px] left-[24px]">
                  <div className="absolute w-[110px] h-[48px]">
                    <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] pb-[4px] text-[#1A202C]">
                      Location
                    </h2>
                    <label id="location">
                      <select
                        name="location"
                        id="location"
                        className="font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                      >
                        <option value="/">Select your city</option>
                        <option value="karachi">Karachi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                      </select>
                    </label>
                  </div>

                  <div className="absolute w-[116px] h-[48px] left-[158px]">
                    <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] pb-[4px] text-[#1A202C]">
                      Date
                    </h2>
                    <label id="date">
                      <input
                        type="date"
                        className="font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                      />
                    </label>
                  </div>

                  <div className="absolute w-[110px] h-[48px] left-[322px]">
                    <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] pb-[4px] text-[#1A202C]">
                      Time
                    </h2>
                    <label id="time">
                      <input
                        type="time"
                        className="font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left Box-2:*/}
          <div>
            <div className="relative">
              <div className="absolute w-[486px] h-[132px] top-[32px] left-[921px] rounded-[10px] bg-[#FFFFFF]">
                <div className="absolute w-[92px] h-[20px] top-[24px] left-[24px] flex items-center gap-[8px]">
                  <label id="radioButton2" className="flex items-center">
                    <input
                      type="radio"
                      name="radio2"
                      id="radioButton2"
                      className="w-[16px] h-[16px]"
                      checked
                      readOnly
                    />
                  </label>

                  <h2 className="flex items-center font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] whitespace-nowrap">
                    Drop - Off
                  </h2>
                </div>

                <div className="absolute w-[438px] h-[48px] top-[60px] left-[24px]">
                  <div className="absolute w-[110px] h-[48px]">
                    <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] pb-[4px] text-[#1A202C]">
                      Location
                    </h2>
                    <label id="location">
                      <select
                        name="location"
                        id="location"
                        className="font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                      >
                        <option value="/">Select your city</option>
                        <option value="karachi">Karachi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                      </select>
                    </label>
                  </div>

                  <div className="absolute w-[116px] h-[48px] left-[158px]">
                    <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] pb-[4px] text-[#1A202C]">
                      Date
                    </h2>
                    <label id="date">
                      <input
                        type="date"
                        className="font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                      />
                    </label>
                  </div>

                  <div className="absolute w-[110px] h-[48px] left-[322px]">
                    <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] pb-[4px] text-[#1A202C]">
                      Time
                    </h2>
                    <label id="time">
                      <input
                        type="time"
                        className="font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* For Center Button*/}
          <div>
            <div className="relative">
              <Button className="absolute w-[60px] h-[60px] top-[68px] left-[868px] rounded-[10px] bg-[#3563E9] hover:bg-[#7b98ee]">
                <ArrowDownUp />
              </Button>
            </div>
          </div>
          {/* For Hero Section */}
          <div>
            <div className="relative">
              <div className="absolute w-[1015px] h-[1228px] top-[200px] left-[392px]">
                <div className="absolute w-[1015px] h-[388px]">
                  <Image
                    src="/catalog1.png"
                    alt="catalog1"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px]"
                  />
                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[171px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>

                  <Image
                    src="/catalog2.png"
                    alt="catalog2"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px] left-[357px]"
                  />

                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[528px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>

                  <Image
                    src="/catalog3.png"
                    alt="catalog3"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px] left-[698px]"
                  />
                </div>

                <Link href="/detailPage">
                  <Button className="absolute w-[120px] h-[44px] top-[320px] left-[870px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>
                </Link>

                {/* Second Row Car: */}
                <div className="absolute w-[1015px] h-[388px] top-[420px]">
                  <Image
                    src="/catalog5.png"
                    alt="catalog5"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px]"
                  />

                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[171px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>

                  <Image
                    src="/catalog6.png"
                    alt="catalog6"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px] left-[357px]"
                  />

                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[528px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>

                  <Image
                    src="/catalog7.png"
                    alt="catalog7"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px] left-[698px]"
                  />

                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[870px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>
                </div>

                {/* Third Row Cars */}
                <div className="absolute w-[1015px] h-[388px] top-[840px]">
                  <Image
                    src="/catalog9.png"
                    alt="catalog9"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px]"
                  />
                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[171px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>

                  <Image
                    src="/catalog10.png"
                    alt="catalog10"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px] left-[357px]"
                  />

                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[528px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>

                  <Image
                    src="/catalog11.png"
                    alt="catalog3"
                    width={317}
                    height={388}
                    className="absolute w-[317px] h-[388px] left-[698px]"
                  />
                  <Link href="/detailPage">
                    <Button className="absolute w-[120px] h-[44px] top-[320px] left-[870px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* For More Cars */}
          <div>
            <div className="relative">
              <div className="absolute w-[586px] h-[44px] top-[1492px] left-[822px] flex items-center">
                <Button className="absolute w-[156px] h-[44px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                  <Link href="/categoryPage">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Show more car
                    </h1>
                  </Link>
                </Button>
                <h1 className="absolute w-[140px] h-[24px] left-[430px] font-sans font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF]">
                  120 Cars
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile Screen. */}
      <div className="block md:hidden">
        {/* For Pick-Up */}
        <div className="relative">
          <div className="absolute w-[327px] h-[120px] top-[32px] left-[24px] rounded-[10px] bg-[#FFFFFF]">
            <div className="absolute w-[92px] h-[20px] top-[16px] left-[20px] flex items-center gap-[8px]">
              <label id="radioButton1" className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  className="w-[16px] h-[16px]"
                  checked
                  readOnly
                />
              </label>
              <span className="flex items-center font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] whitespace-nowrap">
                Pick - Up
              </span>
            </div>

            <div className="relative">
              <div className="absolute w-[486px] h-[48px] top-[60px] left-[20px]">
                <div className="absolute w-[76px] h-[44px]">
                  <h2 className="left-[22px] font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] mb-[4px]">
                    Location
                  </h2>
                  <label id="location">
                    <select
                      name="location"
                      id="location"
                      className="absolute w-[75px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    >
                      <option value="/">Location</option>
                      <option value="karachi">Karachi</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="lahore">Lahore</option>
                      <option value="islamabad">Islamabad</option>
                    </select>
                  </label>
                </div>

                <div className="absolute w-[76px] h-[44px] left-[95px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] mb-[4px]">
                    Date
                  </h2>
                  <label id="date">
                    <input
                      type="date"
                      className="absolute w-[100px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    />
                  </label>
                </div>

                <div className="absolute w-[76px] h-[44px] left-[215px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] mb-[4px]">
                    Time
                  </h2>
                  <label id="time">
                    <input
                      type="time"
                      className="absolute w-[70px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For Drop-Off */}
        <div className="relative">
          <div className="absolute w-[327px] h-[120px] top-[184px] left-[24px] rounded-[10px] bg-[#FFFFFF]">
            <div className="absolute w-[92px] h-[20px] top-[16px] left-[20px] flex items-center gap-[8px]">
              <label id="radioButton1" className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  className="w-[16px] h-[16px]"
                  checked
                  readOnly
                />
              </label>
              <span className="flex items-center font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] whitespace-nowrap">
                Drop - Off
              </span>
            </div>

            <div className="relative">
              <div className="absolute w-[486px] h-[48px] top-[60px] left-[20px]">
                <div className="absolute w-[76px] h-[44px]">
                  <h2 className="left-[22px] font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] mb-[4px]">
                    Location
                  </h2>
                  <label id="location">
                    <select
                      name="location"
                      id="location"
                      className="absolute w-[75px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    >
                      <option value="/">Location</option>
                      <option value="karachi">Karachi</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="lahore">Lahore</option>
                      <option value="islamabad">Islamabad</option>
                    </select>
                  </label>
                </div>

                <div className="absolute w-[76px] h-[44px] left-[95px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] mb-[4px]">
                    Date
                  </h2>
                  <label id="date">
                    <input
                      type="date"
                      className="absolute w-[100px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    />
                  </label>
                </div>

                <div className="absolute w-[76px] h-[44px] left-[215px]">
                  <h2 className="font-sans font-bold text-[16px] leading-[24px] tracking-[-0.02em] text-[#1A202C] mb-[4px]">
                    Time
                  </h2>
                  <label id="time">
                    <input
                      type="time"
                      className="absolute w-[70px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For Button */}
        <div className="relative">
          <Button className="absolute w-[64px] h-[64px] top-[145px] left-[158px] rounded-[10px] bg-[#3563E9] shadow-md hover:bg-[#54A6FF]">
            <ArrowDownUp />
          </Button>
        </div>
        {/* For Car row 1 */}
        <div className="relative">
          <div className="absolute w-[327px] h-[1800px] left-[24px] top-[336px]">
            <div className="relative">
              <Image
                src="/mobile/catalog1.png"
                alt="catalog1"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>

            <div className="relative top-[260px]">
              <Image
                src="/mobile/catalog2.png"
                alt="catalog2"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>

            <div className="relative top-[520px]">
              <Image
                src="/mobile/catalog3.png"
                alt="catalog3"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>

            <div className="relative top-[780px]">
              <Image
                src="/mobile/catalog4.png"
                alt="catalog4"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>

            <div className="relative top-[1040px]">
              <Image
                src="/mobile/catalog5.png"
                alt="catalog5"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>

            <div className="relative top-[1300px]">
              <Image
                src="/mobile/catalog6.png"
                alt="catalog6"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>

            <div className="relative top-[1560px]">
              <Image
                src="/mobile/catalog7.png"
                alt="catalog7"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Link href="/detailPage">
                <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                  <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                    Rental Now
                  </h1>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* For Last button and Text */}
        <div className="relative">
          <div className="absolute w-[233px] h-[36px] left-[128px] top-[2184px]">
            <Link href="/categoryPage">
              <Button className="absolute w-[120px] h-[36px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Show More Car
                </h1>
              </Button>
            </Link>
            <h1 className="absolute ml-40 mt-2 font-sans font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF]">
              120 Cars
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
