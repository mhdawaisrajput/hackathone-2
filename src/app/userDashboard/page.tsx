import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Bolt,
  CalendarClock,
  CalendarDays,
  CarTaxiFront,
  ChartNoAxesColumnIncreasing,
  House,
  Info,
  LogOut,
  MessageSquareMore,
  Wallet,
} from "lucide-react";
import SecondHeader from "@/components/second_header";
import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div>
      <div className="block md:hidden">
        <SecondHeader />
      </div>
      {/* For Desktop Screen*/}
      <div className="hidden md:block">
        <div className="w-[1440px] h-[900px] bg-[#F6F7F9] mx-auto max-w-screen-2xl">
          <div className="relative">
            {/* For Left Menu. */}
            <div className="absolute w-[290px] h-[900px] bg-[#FFFFFF]">
              <div className="absolute w-[220px] h-[644px] top-[32px] left-[36px]">
                <div className="absolute w-[132px] h-[386px]">
                  <h2 className="font-sans font-bold text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]">
                    M A I N M E N U
                  </h2>

                  <div className="absolute w-[132px] h-[328px] mt-8">
                    <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                        Dashboard
                      </h1>
                    </Button>
                    <House className="fill-white absolute w-[40px] h-[40px] mt-2 ml-6" />

                    <div className="absolute top-[60px]">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Car Rent
                        </h1>
                      </Button>
                      <CarTaxiFront className="fill-white absolute w-[40px] h-[40px] mt-2 ml-6" />
                    </div>

                    <div className="absolute top-[120px]">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Insight
                        </h1>
                      </Button>
                      <ChartNoAxesColumnIncreasing className="fill-white absolute w-[40px] h-[40px] mt-2 ml-6" />
                    </div>

                    <div className="absolute top-[180px]">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Reimburse
                        </h1>
                      </Button>
                      <Wallet className="fill-white absolute w-[40px] h-[40px] mt-2 ml-6" />
                    </div>

                    <div className="absolute top-[240px]">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Inbox
                        </h1>
                      </Button>
                      <MessageSquareMore className="fill-white absolute w-[40px] h-[40px] mt-2 ml-6" />
                    </div>

                    <div className="absolute top-[300px]">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Calender
                        </h1>
                      </Button>
                      <CalendarDays className="fill-white absolute w-[40px] h-[40px] mt-2 ml-6" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute w-[220px] h-[210px] top-[450px]">
                    <h1 className="absolute font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                      P R E F E R E N C E S
                    </h1>

                    <div className="relative top-12">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="absolute font-sans font-semibold text-[24px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Settings
                        </h1>
                      </Button>
                      <Bolt className="fill-white absolute w-[40px] h-[40px] mt-2 ml-4" />
                    </div>

                    <div className="relative top-28">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="absolute font-sans font-semibold text-[24px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Help
                        </h1>
                      </Button>
                      <Info className="fill-white absolute w-[40px] h-[40px] mt-2 ml-4" />
                    </div>

                    <div className="relative top-44">
                      <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                        <h1 className="absolute font-sans font-semibold text-[24px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                          Dark Mode
                        </h1>
                      </Button>
                      <CalendarClock className="fill-white absolute w-[40px] h-[40px] mt-2 ml-4" />
                    </div>
                  </div>
                </div>

                <div className="relative top-[750px]">
                  <Link href="/detailPage">
                    <Button className="absolute w-[254px] h-[56px] rounded-[10px] hover:bg-[#3563E9] bg-white">
                      <h1 className="absolute font-sans font-semibold text-[24px] leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
                        Log Out
                      </h1>
                    </Button>
                  </Link>
                  <LogOut className=" absolute w-[40px] rotate-180 h-[40px] mt-2 ml-4" />
                </div>
              </div>
            </div>

            {/* For Map. */}
            <div className="relative">
              <div className="absolute w-[534px] h-[836px] top-[32px] left-[318px] bg-[#FFFFFF]">
                {/* For Text 1 */}
                <div className="relative">
                  <h1 className="absolute font-sans font-bold text-[20px] text-[#1A202C] top-[24px] left-[24px]">
                    Detail Rental
                  </h1>
                </div>
                {/* For Map */}
                <div className="relative">
                  <Image
                    src="/map.png"
                    alt="map"
                    width={486}
                    height={272}
                    className="absolute w-[486px] h-[272px] top-[72px] left-[24px]"
                  />
                </div>
                {/* For car */}
                <div className="relative">
                  <Image
                    src="/view1.png"
                    alt="view"
                    width={132}
                    height={72}
                    className="absolute w-[132px] h-[72px] top-[376px] left-[24px]"
                  />
                </div>
                {/* For Text 2 */}
                <div className="relative">
                  <p className="absolute top-[382px] left-[172px] ml-2">
                    <h1 className="pb-1 font-sans font-bold text-[24px] text-[#1A202C]">
                      Nissan GT - R
                    </h1>
                    <h2 className="font-sans font-medium text-[14px] leading-[21px] text-[#3D5278]">
                      Sport Car
                    </h2>
                  </p>
                </div>

                {/* For Location/Time/Date 1 */}
                <div className="relative">
                  <div className="absolute w-[486px] h-[108px] top-[460px] left-[24px] rounded-[10px]">
                    <div className="absolute w-[92px] h-[20px] top-[15px]  flex items-center gap-[8px]">
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

                    <div className="absolute w-[438px] h-[48px] top-[55px]">
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

                  {/* For Location/Time/Date 2 */}
                  <div className="absolute w-[486px] h-[108px] top-[580px] left-[24px] rounded-[10px]">
                    <div className="absolute w-[92px] h-[20px] top-[15px]  flex items-center gap-[8px]">
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
                        Drop - Off
                      </h2>
                    </div>

                    <div className="absolute w-[438px] h-[48px] top-[55px] ">
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

                {/* For Last Text*/}
                <div className="relative">
                  <div className="absolute w-[486px] h-[48px] top-[730px] left-[24px]">
                    <h1 className="absolute font-sans font-bold text-[20px]  leading-[30px] text-[#1A202C]">
                      Total Rental Price
                    </h1>
                    <h1 className="absolute mt-8 font-sans font-bold text-[14px] leading-[21px] text-[#90A3BF]">
                      Overall price and includes rental discount
                    </h1>
                    <h1 className="absolute left-[320px] mt-2 font-sans font-bold text-[32px] leading-[40.32px] text-[#1A202C]">
                      $80.00
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* For Right content 1. */}
            <div className="relative">
              <Image
                src="/top5.png"
                alt="top5"
                width={524}
                height={324}
                className="absolute top-[32px] left-[884px] rounded-[10px]"
              />
            </div>
            {/* For Right content 1. */}
            <div className="relative">
              <Image
                src="/transaction.png"
                alt="transaction"
                width={524}
                height={480}
                className="absolute top-[388px] left-[884px] rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile Screen */}

      <div className="block md:hidden">
        <div className="relative">
          {/* For Map and more */}
          <div className="absolute  w-[327px] h-[1272px] top-[24px] left-[24px] rounded-[10px] bg-[#FFFFFF]">
            {/* For Heading */}
            <div className="absolute top-[16px] left-[16px]">
              <h1 className="font-sans text-[24px] font-bold leading-[30px]">
                Detail Rental
              </h1>
            </div>
            {/* For Map */}
            <div>
              <Image
                src="/map.png"
                alt="map"
                width={295}
                height={272}
                className="absolute w-[295px] h-[272px] top-[64px] left-[16px]"
              />
            </div>
            {/* For Car */}
            <div>
              <Image
                src="/view1.png"
                alt="view"
                width={116}
                height={64}
                className="absolute w-[116px] h-[64px] top-[360px] left-[16px] rounded-[8px]"
              />
            </div>
            {/*  For Text  */}
            <div>
              <p className="absolute top-[360px] left-[144px]">
                <h1 className="pb-1 font-sans font-bold text-[20px] text-[#1A202C]">
                  Nissan GT - R
                </h1>
                <h2 className="font-sans font-medium text-[14px] leading-[21px] text-[#3D5278]">
                  Sport Car <span>#9761</span>
                </h2>
              </p>
            </div>
            {/* For Pick up */}
            <div className="absolute w-[295px] h-[344px] top-[448px] left-[16px] rounded-[10px] ">
              <div className="flex gap-2 pb-4">
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
                <span className="flex items-center font-sans font-semibold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] whitespace-nowrap">
                  Pick - Up
                </span>
              </div>
              <div className="grid grid-rows-3">
                <label className="pb-4">
                  <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C] ">
                    Location
                  </span>
                  <select
                    className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                  >
                    <option>Select your city</option>
                    <option>Karachi</option>
                    <option>Hyderabad</option>
                    <option>Sukkar</option>
                    <option>Islamabad</option>
                  </select>
                </label>
                <label>
                  <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                    Date
                  </span>
                  <input
                    type="date"
                    className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </label>
                <label>
                  <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                    Time
                  </span>
                  <input
                    type="time"
                    className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                                font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </label>
              </div>
            </div>
            {/* For Drop Off  */}
            <div className="absolute w-[295px] h-[344px] top-[816px] left-[16px] rounded-[10px] ">
              <div className="absolute w-[295px] h-[344px] ">
                <div className="flex gap-2 pb-4">
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
                  <span className="flex items-center font-sans font-semibold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] whitespace-nowrap">
                    Drop - Off
                  </span>
                </div>
                <div className="grid grid-rows-3">
                  <label className="pb-4">
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C] ">
                      Location
                    </span>
                    <select
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    >
                      <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Hyderabad</option>
                      <option>Sukkar</option>
                      <option>Islamabad</option>
                    </select>
                  </label>
                  <label>
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Date
                    </span>
                    <input
                      type="date"
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </label>
                  <label>
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Time
                    </span>
                    <input
                      type="time"
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                      font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* For Horizental line */}
            <div className="relative">
              <div className="absolute w-[295px] top-[1184px] left-[16px] border-[1px] border-[#C3D4E966]"></div>
            </div>
            {/* For Price Text*/}
            <div>
              <div className="absolute w-[486px] h-[48px] top-[1208px] left-[16px]">
                <h1 className="absolute font-sans font-bold text-[16px]  leading-[24px] text-[#1A202C]">
                  Total Rental Price
                </h1>
                <h1 className="absolute mt-8 font-sans font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
                  Overall price rental
                </h1>
                <h1 className="absolute left-[200px] mt-2 font-sans font-bold text-[20px] leading-[30px] text-[#1A202C]">
                  $80.00
                </h1>
              </div>
            </div>
            {/* For Top 5 rental Car */}
            <div className="relative">
              <Image
                src="/mobile/top5small.png"
                width={327}
                height={508}
                alt="top5small"
                className="absolute w-[327px] h-[508px] top-[1304px]  rounded-[10px]"
              />
            </div>
            {/* Image for transaction */}
            <div className="relative">
              <Image
                src="/transaction.png"
                width={327}
                height={352}
                alt="top5small"
                className="absolute w-[327px] h-[352px] top-[1844px]  rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
