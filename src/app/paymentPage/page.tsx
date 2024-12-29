import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ThirdHeader from "@/components/third_header";
import SecondFooter from "@/components/second_footer";

export default function PaymentPage() {
  return (
    <div>
      <ThirdHeader />
      {/* For Desktop Screen */}
      <div>
        <div className="hidden md:block ">
          <div className="w-[1440px] h-[2240px] mx-auto max-w-screen-2xl bg-[#F6F7F9] ">
            {/* Div for left search bar */}
            <div className="relative top-[32px] left-[32px]">
              {/* part 1 */}
              <div className="absolute w-[852px] h-[336px] rounded-[10px] bg-white">
                <div className="p-6">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Billing Info
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    Please enter your billing info
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4">
                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Phone Number
                    </span>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Address
                    </span>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Town / City
                    </span>
                    <input
                      type="text"
                      placeholder="Town or city"
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>
                </div>
              </div>

              {/* part 2 */}
              <div className="absolute w-[852px] h-[664px] top-[370px] rounded-[10px] bg-white">
                <div className="p-6">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Rental Info
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    Please select your rental date
                  </h2>
                </div>

                <div className="p-5 flex gap-4">
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

                <div className="grid grid-cols-2 gap-4 p-4">
                  <label>
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Location
                    </span>
                    <select
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
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
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Time
                    </span>
                    <input
                      type="time"
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                                font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </label>
                </div>

                <div className="p-4 flex gap-4">
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

                <div className="grid grid-cols-2 gap-4 p-4">
                  <label>
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Location
                    </span>
                    <select
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
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
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Time
                    </span>
                    <input
                      type="time"
                      className="w-[400px] h-[56px] border border-gray-300 rounded-[5px] p-2
                                font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                    />
                  </label>
                </div>
              </div>

              {/* part 3 */}
              <div className="absolute w-[852px] h-[596px] top-[1070px] rounded-[10px] bg-white">
                <div className="p-6">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Payment Method
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    Please enter your payment method
                  </h2>
                </div>

                <div className="absolute w-[804px] h-[304px] top-[104px] rounded-[10px] left-[24px] bg-[#F6F7F9]">
                  <div className="p-5 flex gap-4">
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
                      Credit Card
                    </span>
                    <Image
                      src="/visa.png"
                      alt="visa"
                      width={92}
                      height={20}
                      className="absolute w-[92px] h-[20px] left-[688px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4">
                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        Card Number
                      </span>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-[362px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#FFFFFF]"
                      />
                    </label>

                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        Expiration Date
                      </span>
                      <input
                        type="date"
                        className="w-[362px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#FFFFFF] text-[#90A3BF]"
                      />
                    </label>

                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        Card Holder
                      </span>
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="w-[362px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#FFFFFF]"
                      />
                    </label>

                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        CVC
                      </span>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-[362px] h-[56px] border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#FFFFFF] "
                      />
                    </label>
                  </div>
                  <div className="absolute w-[804px] h-[56px] top-[330px] rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                    <label id="radio1">
                      <input
                        type="radio"
                        name="radio"
                        id="radio1"
                        className="w-[20px] h-[20px] ml-8"
                      />
                    </label>
                    <h2 className="font-sans text-[16px] font-bold leading-[24px] text-[#1A202C]">
                      PayPal
                    </h2>
                    <Image
                      src="/paypal.png"
                      alt="visa"
                      width={92}
                      height={20}
                      className="absolute w-[92px] h-[20px] left-[688px]"
                    />
                  </div>

                  <div className="absolute w-[804px] h-[56px] top-[400px] rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                    <label id="radio2">
                      <input
                        type="radio"
                        name="radio"
                        id="radio2"
                        className="w-[20px] h-[20px] ml-8"
                      />
                    </label>
                    <h2 className="font-sans text-[16px] font-bold leading-[24px] text-[#1A202C]">
                      Bitcoin
                    </h2>
                    <Image
                      src="/bitcoin.png"
                      alt="visa"
                      width={92}
                      height={20}
                      className="absolute w-[92px] h-[20px] left-[688px]"
                    />
                  </div>
                </div>
              </div>

              {/* part 4 */}
              <div className="absolute w-[852px] h-[484px] top-[1700px] rounded-[10px] bg-white">
                <div className="p-6">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Confirmation
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    We are getting to the end. Just few clicks and your rental
                    is ready!
                  </h2>

                  <div className="absolute w-[804px] h-[56px] top-[110px] rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                    <input type="checkbox" className="w-[20px] h-[20px] ml-8" />
                    <h2>
                      I agree with sending an Marketing and newsletter emails.
                      No spam, promissed!
                    </h2>
                  </div>
                  <div className="absolute w-[804px] h-[56px] top-[200px] rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                    <input type="checkbox" className="w-[20px] h-[20px] ml-8" />
                    <h2>
                      I agree with our terms and conditions and privacy policy.
                    </h2>
                  </div>

                  <Button className="absolute w-[140px] h-[56px] top-[280px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <Link href="/userDashboard">
                      <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                        Rent Now
                      </h1>
                    </Link>
                  </Button>

                  <Image
                    src="/302.png"
                    alt="302"
                    width={26.33}
                    height={28.03}
                    className="absolute top-[360px]"
                  />

                  <div className="absolute top-[400px]">
                    <h1 className="font-sans text-[16px] font-bold leading-[30px]">
                      All your data are safe
                    </h1>
                    <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                      We are using the most advanced security to provide you the
                      best experience ever.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Div for right content */}

            <div className="relative">
              <div className="absolute w-[492px] h-[560px] top-[32px] left-[916px] rounded-[10px] bg-[#FFFFFF]">
                <h1 className="font-sans text-[16px] absolute top-[415px] z-10 left-[350px] font-bold leading-[24px]">
                  Apply Now
                </h1>
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="absolute w-[444px] h-[56px] top-[400px] left-[24px] border border-gray-300 rounded-[10px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                />
                <Image
                  src="/rentalsummary.png"
                  alt="302"
                  width={496}
                  height={560}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile Screen */}
      <div className="block md:hidden">
        <div className="relative">
          <div className="absolute w-[327px] h-[3092px] top-[32px] left-[24px]">
            {/* First Image with search input */}
            <div className="relative">
              <h1 className="font-sans text-[12px] absolute top-[312px] z-20 left-[240px] font-bold leading-[24px]">
                Apply Now
              </h1>
              <input
                type="text"
                placeholder="Apply promo code"
                className="absolute w-[296px] h-[42px] top-[303px] left-[16px] z-10 border border-gray-300 rounded-[10px] p-2
                            font-sans text-[12px] font-bold leading-[21px] bg-[#F6F7F9]"
              />
              <Image
                src="/rentalsummary.png"
                alt="302"
                width={327}
                height={424}
                className="absolute w-[327px] h-[424px] rounded-[10px]"
              />
            </div>
            {/* Billing Information */}
            <div className="relative">
              <div className="absolute w-[327px] h-[516px] top-[456px] rounded-[10px] bg-white">
                <div className="p-6 pl-4">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Billing Info
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    Please enter your billing info
                  </h2>
                </div>
                <div className="grid grid-rows-4 gap-4 pl-4">
                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Phone Number
                    </span>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Address
                    </span>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>

                  <label>
                    {" "}
                    <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                      Town / City
                    </span>
                    <input
                      type="text"
                      placeholder="Town or city"
                      className="w-[295px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* For rental Information Pick up / Drop off */}
            <div className="relative">
              <div className="absolute w-[327px] h-[816px] top-[1004px] rounded-[10px] bg-white">
                {/* For Rental Information */}
                <div className="p-6 pl-4">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Rental Info
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    Please select your rental date
                  </h2>
                </div>
                {/* For Pick up */}
                <div className="absolute w-[295px] h-[344px] top-[88px] left-[16px] rounded-[10px] ">
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
                <div className="absolute w-[295px] h-[344px] top-[456px] left-[16px] rounded-[10px] ">
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
              </div>
            </div>

            {/* Payment Method */}
            <div className="relative">
              <div className="absolute w-[327px] h-[732px] top-[1852px] rounded-[10px] bg-[#FFFFFF]">
                <div className="p-6 pl-4">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Payment Method
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    Please enter your payment method
                  </h2>
                </div>

                <div className="bg-[#F6F7F9] w-[295px] h-[484px] absolute left-[16px] rounded-[10px]">
                  <div className="flex gap-2 pb-4 p-4">
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
                      Credit Card
                    </span>
                    <Image
                      src="/visa.png"
                      alt="visa"
                      width={92}
                      height={20}
                      className="absolute w-[92px] h-[20px] left-[190px]"
                    />
                  </div>

                  <div className="grid grid-rows-4 gap-4 p-4">
                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        Card Number
                      </span>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-[263px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                      />
                    </label>

                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        Card Holder
                      </span>
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="w-[263px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                      />
                    </label>

                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        Expiration Date
                      </span>
                      <input
                        type="date"
                        className="w-[263px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] text-[#90A3BF] bg-[#F6F7F9]"
                      />
                    </label>

                    <label>
                      {" "}
                      <span className="font-sans text-[16px] font-bold leading-[21px] text-[#1A202C]">
                        CVC
                      </span>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-[263px] h-[56px] mt-2 border border-gray-300 rounded-[5px] p-2
                            font-sans text-[16px] font-bold leading-[21px] bg-[#F6F7F9]"
                      />
                    </label>
                  </div>
                </div>

                <div className="absolute w-[295px] h-[52px] top-[592px] left-[16px] rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                  <label id="radio1">
                    <input
                      type="radio"
                      name="radio"
                      id="radio1"
                      className="w-[20px] h-[20px] ml-8 mt-2"
                    />
                  </label>
                  <h2 className="font-sans text-[16px] font-bold leading-[24px] text-[#1A202C]">
                    PayPal
                  </h2>
                  <Image
                    src="/paypal.png"
                    alt="visa"
                    width={80}
                    height={20}
                    className="absolute w-[80px] h-[20px] left-[199px]"
                  />
                </div>

                <div className="absolute w-[295px] h-[52px] top-[664px] left-[16px]  rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                  <label id="radio2">
                    <input
                      type="radio"
                      name="radio"
                      id="radio2"
                      className="w-[20px] h-[20px] ml-8 mt-2"
                    />
                  </label>
                  <h2 className="font-sans text-[16px] font-bold leading-[24px] text-[#1A202C]">
                    Bitcoin
                  </h2>
                  <Image
                    src="/bitcoin.png"
                    alt="visa"
                    width={80}
                    height={20}
                    className="absolute w-[80px] h-[20px] left-[199px]"
                  />
                </div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="relative">
              <div className="absolute w-[327px] h-[476px] top-[2616px] rounded-[10px] bg-[#FFFFFF]">
                <div className="p-6 pl-4">
                  <h1 className="font-sans text-[20px] font-bold leading-[30px]">
                    Confirmation
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    We are getting to the end. Just few clicks and your rental
                    is ready!
                  </h2>
                </div>

                <div className="absolute w-[295px] h-[52px] top-[130px] left-[16px]  rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                  <input
                    type="checkbox"
                    name="radio"
                    id="radio2"
                    className="w-[20px] h-[20px] ml-4"
                  />
                  <h2 className="absolute left-[50px] font-sans text-[12px] font-medium leading-[19.2px] text-[#1F2544]">
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                  </h2>
                </div>

                <div className="absolute w-[295px] h-[52px] top-[202px] left-[16px]  rounded-[10px] bg-[#F6F7F9] flex items-center gap-4">
                  <input
                    type="checkbox"
                    name="radio"
                    id="radio2"
                    className="w-[20px] h-[20px] ml-4"
                  />
                  <h2 className="absolute left-[50px] font-sans text-[12px] font-medium leading-[19.2px] text-[#1F2544]">
                    I agree with our terms and conditions and privacy policy!
                  </h2>
                </div>

                <Button className="absolute w-[100px] h-[36px] top-[280px] left-[16px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                  <Link href="/userDashboard">
                    <h1 className="font-sans font-semibold text-[12px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rental Now
                    </h1>
                  </Link>
                </Button>

                <Image
                  src="/302.png"
                  alt="302"
                  width={26.33}
                  height={28.03}
                  className="absolute top-[348px] left-[16px]"
                />

                <div className="absolute top-[392px] left-[16px]">
                  <h1 className="font-sans text-[16px] font-bold leading-[30px]">
                    All your data are safe
                  </h1>
                  <h2 className="font-sans text-[14px] font-bold leading-[21px] text-[#90A3BF]">
                    We are using the most advanced security to provide you the
                    best experience ever.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SecondFooter />
    </div>
  );
}
