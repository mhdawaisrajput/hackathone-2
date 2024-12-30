import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* For Desktop Screen */}
      <div className="hidden md:block">
        <div className="w-[1440px] h-[2120px] top-[124px] mx-auto max-w-screen-2xl bg-[#F6F7F9]">
          {/* Last Div Of the Page */}
          <div className="relative md:w-[734px] md:h-[44px] md:left-[642px] md:top-[2030px]">
            <Button className="absolute md:w-[156px] md:h-[44px] md:bg-[#3563E9] md:hover:bg-[#54A6FF] md:z-10 md:pl-[20px] md:pr-[20px] rounded-[4px]">
              <Link href="/categoryPage">
                <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Show More car
                </h1>
              </Link>
            </Button>
            <h1 className="absolute md:left-[656px] font-sans font-medium md:text-[14px] md:leading-[21px] tracking-[-0.02em] text-right md:text-[#90A3BF]">
              120 Cars
            </h1>
          </div>
          {/* Staring Two Cars */}
          <div className="relative">
            <Image
              src="/ads1.png"
              alt="ads1"
              width={640}
              height={360}
              className="absolute z-0 md:w-[640px] md:h-[360px] md:mt-[32px] md:ml-[64px] rounded-[10px]"
            />
            <Image
              src="/ads2.png"
              alt="ads2"
              width={640}
              height={360}
              className="absolute md:z-0 md:w-[640px] md:h-[360px] md:mt-[32px] md:ml-[736px] rounded-[10px]"
            />
          </div>
          {/* Buttons Of Cars Of Starting.*/}
          <div className="relative">
            <Button
              className="absolute w-[128px] h-[44px] mt-[206px] ml-[25px]
                            md:bg-[#3563E9] md:hover:bg-[#54A6FF] md:z-10 md:w-[120px] md:h-[44px] md:pl-[20px] md:pr-[20px]  rounded-  [4px] md:mt-[236px] md:ml-[88px] "
            >
              <Link href="/">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Car
                </h1>
              </Link>
            </Button>

            <Button className="absolute md:bg-[#54A6FF] md:hover:bg-[#3563E9] md:z-10 md:w-[120px] md:h-[44px] md:pl-[20spx] md:pr-[20px]  rounded-[4px] md:mt-[236px] md:ml-[760px] ">
              <Link href="/">
                <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Car
                </h1>
              </Link>
            </Button>
          </div>
          {/* Pick-Up / Drop-Off */}
          <div className="relative">
            <div className="absolute md:w-[582px] md:h-[136px] md:top-[424px] md:ml-[64px] md:rounded-[10px] md:bg-[#FFFFFF]">
              <div className="absolute md:w-[92px] md:h-[20px] md:top-[16px] md:left-[46px] flex items-center gap-[8px]">
                <label id="radioButton1" className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="md:w-[16px] md:h-[16px]"
                    checked
                    readOnly
                  />
                </label>
                <span className="flex items-center font-sans font-semibold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] whitespace-nowrap">
                  Pick - Up
                </span>
              </div>

              <div className="relative">
                <div className="absolute md:w-[486px] md:h-[48px] md:top-[60px] md:ml-[48px]">
                  <div className="absolute md:w-[126px] md:h-[48px]">
                    <h2 className="font-sans font-bold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] md:mb-[8px]">
                      Location
                    </h2>
                    <label id="location">
                      <select
                        name="location"
                        id="location"
                        className="font-sans font-medium md:text-[12px] md:leading-[15.12px] tracking-[-0.02em] md:text-[#90A3BF]"
                      >
                        <option value="/">Select your city</option>
                        <option value="karachi">Karachi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                      </select>
                    </label>
                  </div>

                  <div className="absolute md:w-[134px] md:h-[48px] md:ml-[174px]">
                    <h2 className="font-sans font-bold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] md:mb-[8px]">
                      Date
                    </h2>
                    <label id="date">
                      <input
                        type="date"
                        className="font-sans font-medium md:text-[12px] md:leading-[15.12px] tracking-[-0.02em] md:text-[#90A3BF]"
                      />
                    </label>
                  </div>

                  <div className="absolute md:w-[130px] md:h-[48px] md:ml-[352px]">
                    <h2 className="font-sans font-bold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] md:mb-[8px]">
                      Time
                    </h2>
                    <label id="time">
                      <input
                        type="time"
                        className="font-sans font-medium md:text-[12px] md:leading-[15.12px] tracking-[-0.02em] md:text-[#90A3BF]"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* For Blue Button. */}
            <Button
              className="absolute md:w-[60px] md:h-[60px] md:top-[462px] md:ml-[690px]  md:rounded-[10px] md:bg-[#3563E9] 
             md:shadow-md hover:bg-[#54A6FF]"
            >
              <ArrowDownUp />
            </Button>

            {/* For Radio Button and Text. */}

            <div className="absolute md:w-[582px] md:h-[136px] md:top-[424px] md:ml-[794px] md:rounded-[10px] md:bg-[#FFFFFF]">
              <div className="absolute md:w-[92px] md:h-[20px] md:top-[16px] md:left-[46px] flex items-center gap-[8px]">
                <label id="radioButton2" className="flex items-center">
                  <input
                    type="radio"
                    name="radio2"
                    id="radioButton2"
                    className="md:w-[16px] md:h-[16px]"
                    checked
                    readOnly
                  />
                </label>
                <span className="flex items-center font-sans font-semibold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] whitespace-nowrap">
                  Drop - Off
                </span>
              </div>

              <div className="relative">
                <div className="absolute md:w-[486px] md:h-[48px] md:top-[60px] md:ml-[48px]">
                  <div className="absolute md:w-[126px] md:h-[48px]">
                    <h2 className="font-sans font-bold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] md:mb-[8px]">
                      Location
                    </h2>
                    <label id="location">
                      <select
                        name="location"
                        id="location"
                        className="font-sans font-medium md:text-[12px] md:leading-[15.12px] tracking-[-0.02em] md:text-[#90A3BF]"
                      >
                        <option value="/">Select your city</option>
                        <option value="karachi">Karachi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                      </select>
                    </label>
                  </div>

                  <div className="absolute md:w-[134px] md:h-[48px] md:ml-[174px]">
                    <h2 className="font-sans font-bold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] md:mb-[8px]">
                      Date
                    </h2>
                    <label id="date">
                      <input
                        type="date"
                        className="font-sans font-medium md:text-[12px] md:leading-[15.12px] tracking-[-0.02em] md:text-[#90A3BF]"
                      />
                    </label>
                  </div>

                  <div className="absolute md:w-[130px] md:h-[48px] md:ml-[352px]">
                    <h2 className="font-sans font-bold md:text-[16px] md:leading-[24px] tracking-[-0.02em] md:text-[#1A202C] md:mb-[8px]">
                      Time
                    </h2>
                    <label id="time">
                      <input
                        type="time"
                        className="font-sans font-medium md:text-[12px] md:leading-[15.12px] tracking-[-0.02em] md:text-[#90A3BF]"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* For Popular Car / View All*/}
          <div className="relative md:w-[1312px] md:h-[44px] md:pl-[20px] md:pr-[20px] md:rounded-[4px] md:top-[614px] md:ml-[64px]">
            <h1 className="absolute font-sans font-semibold md:text-[16px] md:leading-[20.4px] text-center md:text-[#90A3BF]">
              Popular Car
            </h1>
            <Link href={"/"}>
              <h1 className="absolute md:left-[1208px] font-sans font-semibold md:text-[16px] md:leading-[20.4px] text-center md:text-[#3563E9]">
                View All
              </h1>
            </Link>
          </div>
          {/* 1st Row of Cars */}
          <div className="relative md:w-[1312px] md:h-[1356px] md:top-[592px] md:ml-[64px]">
            <div>
              <Image
                src="/catalog1.png"
                alt="catalog1"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[44px]"
              />
              <Image
                src="/catalog2.png"
                alt="catalog2"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[44px] md:left-[336px]"
              />
              <Image
                src="/catalog3.png"
                alt="catalog3"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[44px] md:left-[672px]"
              />
              <Image
                src="/catalog4.png"
                alt="catalog4"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[44px] md:left-[1008px]"
              />
            </div>

            {/* Buttons of Cars */}

            <div className="relative">
              {/* First Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[364px] md:left-[164px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Second Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[364px] md:left-[500px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Third Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[364px] md:left-[836px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Fourth Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[364px] md:left-[1172px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>
            </div>

            {/* ----------Second Row Of Cars------------ */}

            <div className="relative">
              <Image
                src="/catalog5.png"
                alt="catalog5"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[504px]"
              />
              <Image
                src="/catalog6.png"
                alt="catalog6"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[504px] md:left-[336px]"
              />
              <Image
                src="/catalog7.png"
                alt="catalog7"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[504px] md:left-[672px]"
              />
              <Image
                src="/catalog8.png"
                alt="catalog8"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[504px] md:left-[1008px]"
              />
            </div>

            {/* Buttons of Cars */}

            <div className="relative">
              {/* Five Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[823px] md:left-[164px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Sixth Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[823px] md:left-[500px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Seventh Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[823px] md:left-[836px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Eight Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[823px] md:left-[1172px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>
            </div>

            {/* ------------------Third Row Of Cars-------------------*/}

            <div className="relative">
              <Image
                src="/catalog9.png"
                alt="catalog9"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[924px]"
              />
              <Image
                src="/catalog10.png"
                alt="catalog10"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[924px] md:left-[336px]"
              />
              <Image
                src="/catalog11.png"
                alt="catalog11"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[924px] md:left-[672px]"
              />
              <Image
                src="/catalog12.png"
                alt="catalog12"
                width={304}
                height={388}
                className="absolute md:w-[304px] md:h-[388px] md:top-[924px] md:left-[1008px]"
              />
            </div>

            {/* Buttons of Cars */}

            <div>
              {/* Nine Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[1244px] md:left-[164px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Ten Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[1244px] md:left-[500px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Eleven Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[1244px] md:left-[836px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>

              {/* Twelve Button */}
              <Button className="absolute md:w-[116px] md:h-[44px] md:top-[1244px] md:left-[1172px] md:bg-[#3563E9] md:hover:bg-[#54A6FF]">
                <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0. 02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile Screen */}
      <div className="block md:hidden">
        {/* For First Image */}
        <div className="relative">
          <Image
            src="/ads1.png"
            alt="ads1"
            width={327}
            height={232}
            className="absolute w-[327px] top-[-110px] left-[25px] h-[232px] rounded-[10px]"
          />
          <Button className="absolute w-[62px] h-[31px] top-[20px] left-[37px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
            <h1 className="font-sans font-semibold text-[8px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
              Rental Car
            </h1>
          </Button>
        </div>
        {/* For Pick-Up */}
        <div className="relative">
          <div className="absolute w-[327px] h-[120px] top-[148px] left-[24px] rounded-[10px] bg-[#FFFFFF]">
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
                      className="absolute w-[72px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em] text-[#90A3BF]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For Drop-Off */}
        <div className="relative">
          <div className="absolute w-[327px] h-[120px] top-[300px] left-[24px] rounded-[10px] bg-[#FFFFFF]">
            <div className="absolute w-[92px] h-[20px] top-[16px] left-[20px] flex items-center gap-[8px]">
              <label id="radioButton1" className="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  className="w-[16px] h-[16px]"
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
                      className="absolute w-[75px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px]  tracking-[-0.02em] text-[#90A3BF]"
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
                      className="absolute w-[72px] mt-[4px] font-sans font-medium text-[12px] leading-[15.12px] tracking-[-0.02em]  text-[#90A3BF]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For Button */}
        <div className="relative">
          <Button className="absolute w-[64px] h-[60px] top-[265px] left-[158px] rounded-[10px] bg-[#3563E9] shadow-md hover:bg-[#54A6FF]">
            <ArrowDownUp />
          </Button>
        </div>
        {/* For Popular / View All */}
        <div className="relative">
          <div className="absolute top-[452px] left-[28px] ">
            <h1 className="absolute font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#90A3BF]">
              Popular Car
            </h1>
            <Link href="/">
              <h1 className="absolute left-[270px] font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#3563E9]">
                View All
              </h1>
            </Link>
          </div>
        </div>
        {/* For Car row 1 */}
        <div className="relative">
          <div>
            <Image
              src="/catalog1.png"
              alt="catalog1.png"
              width={240}
              height={286}
              className="absolute w-[240px] h-[286px] top-[500px] left-[24px] rounded-[10px]"
            />
            <Image
              src="/mobile/half.png"
              alt="catalog1.png"
              width={92}
              height={286}
              className="absolute w-[92px] h-[286px] top-[500px] left-[280px] rounded-[10px]"
            />
            <Button className="absolute w-[95px] h-[34px] top-[735px] left-[150px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
              <h1 className="font-sans font-semibold text-[10px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                Rental Now
              </h1>
            </Button>
          </div>
        </div>
        {/* For Popular / View All */}
        <div className="relative">
          <Link href="/">
            <h1 className="absolute top-[815px] left-[28px] font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#90A3BF]">
              Recomendation Car
            </h1>
          </Link>
        </div>
        {/* For Car row 2 */}
        <div className="relative">
          <div className="absolute w-[327px] h-[1280px] left-[24px] top-[849px]">
            <div className="relative">
              <Image
                src="/mobile/catalog1.png"
                alt="catalog1"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Now
                </h1>
              </Button>
            </div>

            <div className="relative top-[260px]">
              <Image
                src="/mobile/catalog2.png"
                alt="catalog2"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Now
                </h1>
              </Button>
            </div>

            <div className="relative top-[520px]">
              <Image
                src="/mobile/catalog3.png"
                alt="catalog3"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Now
                </h1>
              </Button>
            </div>

            <div className="relative top-[780px]">
              <Image
                src="/mobile/catalog4.png"
                alt="catalog4"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Now
                </h1>
              </Button>
            </div>

            <div className="relative top-[1040px]">
              <Image
                src="/mobile/catalog5.png"
                alt="catalog5"
                width={327}
                height={240}
                className="absolute w-[327px] h-[240px] rounded-[10px]"
              />
              <Button className="absolute w-[100px] h-[36px] top-[188px] left-[211px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px]  tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rental Now
                </h1>
              </Button>
            </div>
          </div>
        </div>

        {/* For Last button and Text */}
        <div className="relative">
          <div className="absolute w-[233px] h-[36px] left-[128px] top-[2177px]">
            <Button className="absolute w-[120px] h-[36px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
              <Link href="/categoryPage">
                <h1 className="font-sans font-semibold text-[12px] leading-[15.12px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Show More Car
                </h1>
              </Link>
            </Button>
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
