import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import SecondHeader from "@/components/second_header";
import ThirdFooter from "@/components/third_footer";

export default function DetailPage() {
  return (
    <div>
      <SecondHeader />
      {/* For Desktop Screen. */}
      <div className="hidden md:block ">
        <div className="w-[1440px] h-[1600px] mx-auto max-w-screen-2xl  bg-[#F3F5F7]">
          {/* Hero Section 1 */}
          <div className="relative">
            <Image
              src="/view.png"
              alt="view"
              width={515}
              height={340}
              className="absolute w-[515px] h-[340px] top-[10px] left-[396px] rounded-[10px]"
            />

            <Image
              src="/detailcar.png"
              alt="view"
              width={473}
              height={460}
              className="absolute w-[473px] h-[460px] top-[10px] left-[930px] rounded-[10px]"
            />

            <Image
              src="/view1.png"
              alt="view1"
              width={160}
              height={110}
              className="absolute w-[160px] h-[110px] top-[360px] left-[392px] rounded-[10px]"
            />

            <Image
              src="/view2.png"
              alt="view2"
              width={160}
              height={110}
              className="absolute w-[160px] h-[110px] top-[360px] left-[570px] rounded-[10px]"
            />

            <Image
              src="/view3.png"
              alt="view3"
              width={160}
              height={110}
              className="absolute w-[160px] h-[110px] top-[360px] left-[750px] rounded-[10px]"
            />

            <Image
              src="/reviews.png"
              alt="reviews"
              width={1010}
              height={370}
              className="absolute w-[1010px] h-[370px] top-[480px] left-[392px] rounded-[10px]"
            />

            <Link href="/paymentPage">
              <Button className="absolute z-10 w-[141px] h-[52px] top-[390px] left-[1245px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                  Rent Now
                </h1>
              </Button>
            </Link>
          </div>
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
          {/* For Hero Section 2 */}
          <div>
            <div className="relative">
              <div className="absolute w-[1015px] h-[1228px] top-[200px] left-[392px]">
                {/* 1st Row Car: */}
                <div className="absolute w-[1015px] h-[388px] top-[660px]">
                  <Image
                    src="/catalog1.png"
                    alt="catalog1"
                    width={317}
                    height={360}
                    className="absolute w-[317px] h-[360px]"
                  />
                  <Button className="absolute w-[120px] h-[44px] top-[295px] left-[171px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>

                  <Image
                    src="/catalog2.png"
                    alt="catalog2"
                    width={317}
                    height={360}
                    className="absolute w-[317px] h-[360px] left-[357px]"
                  />

                  <Button className="absolute w-[120px] h-[44px] top-[295px] left-[528px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>

                  <Image
                    src="/catalog3.png"
                    alt="catalog3"
                    width={317}
                    height={360}
                    className="absolute w-[317px] h-[360px] left-[698px]"
                  />

                  <Button className="absolute w-[120px] h-[44px] top-[295px] left-[869px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>
                </div>

                {/* Second Row Cars */}
                <div className="absolute w-[1015px] h-[388px] top-[1030px]">
                  <Image
                    src="/catalog5.png"
                    alt="catalog5"
                    width={317}
                    height={360}
                    className="absolute w-[317px] h-[360px]"
                  />
                  <Button className="absolute w-[120px] h-[44px] top-[295px] left-[171px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>
                  <Image
                    src="/catalog6.png"
                    alt="catalog6"
                    width={317}
                    height={360}
                    className="absolute w-[317px] h-[360px] left-[357px]"
                  />
                  <Button className="absolute w-[120px] h-[44px] top-[295px] left-[528px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>
                  <Image
                    src="/catalog7.png"
                    alt="catalog7"
                    width={317}
                    height={360}
                    className="absolute w-[317px] h-[360px] left-[698px]"
                  />
                  <Button className="absolute w-[120px] h-[44px] top-[295px] left-[869px] bg-[#3563E9] hover:bg-[#54A6FF] pl-[20px] pr-[20px] rounded-[4px]">
                    <h1 className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                      Rent Now
                    </h1>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile Screen. */}
      <div className="block md:hidden">
        {/* For 1st Image */}
        <div className="relative">
          <Image
            src="/view.png"
            alt="view"
            width={327}
            height={232}
            className="absolute w-[327px] h-[232px] top-[32px] left-[24px] rounded-[10px]"
          />
        </div>
        {/* For 2nd row of car */}
        <div className="relative">
          <Image
            src="/view1.png"
            alt="view1"
            width={96}
            height={64}
            className="absolute w-[96px] h-[64px] top-[288px] left-[24px] rounded-[8px]"
          />
          <Image
            src="/view2.png"
            alt="view2"
            width={96}
            height={64}
            className="absolute w-[96px] h-[64px] top-[288px] left-[136px] rounded-[8px]"
          />
          <Image
            src="/view3.png"
            alt="view3"
            width={96}
            height={64}
            className="absolute w-[96px] h-[64px] top-[288px] left-[250px] rounded-[8px]"
          />
        </div>
        {/* For 3rd Image */}
        <div className="relative">
          <Image
            src="/detailcar.png"
            alt="detailcar"
            width={327}
            height={318}
            className="absolute w-[327px] h-[318px] top-[384px] left-[24px] rounded-[10px]"
          />
          <Link href="/paymentPage">
            <Button className="absolute w-[95px] h-[35px] top-[647px] left-[241px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
              <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                Rent Now
              </h1>
            </Button>
          </Link>
        </div>
        {/* For 4th Image */}
        <div className="relative">
          <Image
            src="/mobile/reviewforsmall.png"
            alt="reviewforsmall"
            width={327}
            height={384}
            className="absolute w-[327px] h-[384px] top-[734px] left-[24px] rounded-[10px]"
          />
        </div>
        {/* For Recent Car / View All */}
        <div className="relative">
          <div className="absolute top-[1140px] left-[28px] ">
            <h1 className="absolute font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#90A3BF]">
              Recent Car
            </h1>
            <Link href="/detailPage">
              <h1 className="absolute left-[280px] font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#3563E9]">
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
              className="absolute w-[240px] h-[286px] top-[1190px] left-[24px] rounded-[10px]"
            />
            <Image
              src="/mobile/half.png"
              alt="catalog1.png"
              width={92}
              height={286}
              className="absolute w-[92px] h-[286px] top-[1190px] left-[280px] rounded-[10px]"
            />
            <Button className="absolute w-[95px] h-[34px] top-[1424px] left-[150px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
              <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                Rental Now
              </h1>
            </Button>
          </div>
        </div>
        {/* For Recomendation Car / View All */}
        <div className="relative">
          <div className="absolute top-[1500px] left-[28px] ">
            <h1 className="absolute font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#90A3BF]">
              Recomendation Car
            </h1>
            <Link href="/detailPage">
              <h1 className="absolute left-[280px] font-sans font-semibold text-[16px] leading-[20.4px] text-center text-[#3563E9]">
                View All
              </h1>
            </Link>
          </div>
        </div>
        {/* For Car row 2 */}
        <div className="relative">
          <div>
            <Image
              src="/catalog6.png"
              alt="catalog6.png"
              width={240}
              height={286}
              className="absolute w-[240px] h-[286px] top-[1548px] left-[24px] rounded-[10px]"
            />
            <Image
              src="/mobile/half.png"
              alt="catalog1.png"
              width={92}
              height={286}
              className="absolute w-[92px] h-[286px] top-[1548px] left-[280px] rounded-[10px]"
            />
            <Button className="absolute w-[95px] h-[34px] top-[1782px] left-[150px] bg-[#3563E9] hover:bg-[#54A6FF] z-10 pl-[20px] pr-[20px] rounded-[4px]">
              <h1 className="font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-center text-[#FFFFFF]">
                Rental Now
              </h1>
            </Button>
          </div>
        </div>
      </div>

      <ThirdFooter />
    </div>
  );
}
