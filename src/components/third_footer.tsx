import Link from "next/link";

export default function ThirdFooter() {
  return (
    <footer
      className="md:w-[1440px] md:h-[480px] md:top-[2244px] md:bg-[#FFFFFF] md:border-[1px] md:border-[#C3D4E966]
                  md:mx-auto md:max-w-screen-2xl"
    >
      <div className="relative">
        <h1
          className="absolute w-[108px] h-[28px] top-[1882px] left-[24px] text-[24px] leading-[36px] 
                        md:w-[148px] md:h-[44px] md:top-[80px] md:left-[60px]
                        font-sans font-bold md:text-[32px] md:leading-[48px] tracking-[-0.03em]
                        text-[#3563E9]"
        >
          MORENT
        </h1>
        <p
          className="absolute w-[216px] top-[1925px] left-[24px] text-[12px] tracking-[-0.01em]
                        md:w-[292px] md:h-[48px] md:left-[66px] md:top-[144px]
                        font-sans font-medium md:text-[16px] leading-[24px] md:tracking-[-0.02em] text-[#90A3BF]
                        md:text-[#13131399]"
        >
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>

      <div className="relative">
        <h1
          className="absolute w-[142px] top-[2022px] left-[24px]
                            md:w-[152px] h-[32px] md:top-[80px] md:left-[804px] font-sans 
                            font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]"
        >
          About
        </h1>
        <ul>
          <li>
            <Link
              href={""}
              className="absolute w-[142px] h-[144px] left-[24px] top-[2074px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[136px] md:left-[804px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              How it works
            </Link>
            <Link
              href={""}
              className="absolute w-[142px] h-[144px] left-[24px] top-[2113px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[188px] md:left-[804px] font-sans 
                    font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Featured
            </Link>
            <Link
              href={""}
              className="absolute w-[142px] h-[144px] left-[24px] top-[2152px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[240px] md:left-[804px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Partnership
            </Link>
            <Link
              href={""}
              className="absolute w-[142px] h-[144px] left-[24px] top-[2191px] text-[#90A3BF] 
                        md:w-[152px] md:h-[188px] md:top-[292px] md:left-[804px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Bussiness Relation
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative">
        <h1
          className="absolute w-[142px] top-[2022px] left-[231px]
                            md:w-[152px] h-[32px] md:top-[80px] md:left-[1016px] font-sans 
                            font-semibold text-[20px] leading-[30px] tracking-[-0.02em] md:text-[#1A202C]"
        >
          Community
        </h1>
        <ul>
          <li>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[231px] top-[2074px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[136px] md:left-[1016px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Events
            </Link>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[231px] top-[2113px] text-[#90A3BF]
                    md:w-[152px] md:h-[188px] md:top-[188px] md:left-[1016px] font-sans 
                    font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Blog
            </Link>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[231px] top-[2152px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[240px] md:left-[1016px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Podcast
            </Link>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[231px] top-[2191px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[292px] md:left-[1016px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Invite a friend
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative">
        <h1
          className="absolute w-[142px] top-[2262px] left-[24px]
                            md:w-[152px] h-[32px] md:top-[80px] md:left-[1228px] font-sans 
                            font-semibold text-[20px] leading-[30px] tracking-[-0.02em] text-[#1A202C]"
        >
          Socials
        </h1>
        <ul>
          <li>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[24px] top-[2314px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[136px] md:left-[1228px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Discord
            </Link>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[24px] top-[2353px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[188px] md:left-[1228px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Instagram
            </Link>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[24px] top-[2392px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[240px] md:left-[1228px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Twitter
            </Link>
            <Link
              href={""}
              className="absolute w-[120px] h-[144px] left-[24px] top-[2431px] text-[#90A3BF]
                        md:w-[152px] md:h-[188px] md:top-[292px] md:left-[1228px] font-sans 
                        font-medium text-[16px] leading-[19.2px] md:leading-[24px] tracking-[-0.02em] md:text-[#13131399]"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative">
        <div className="md:bg-[#13131329] md:absolute md:w-[1320px] md:top-[360px] md:left-[60px] md:border-[1px]"></div>
      </div>

      <div className="relative">
        <h2
          className="absolute w-[200px] h-[16px] top-[2550px] left-[24px]
        font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-[#1A202C] md:top-[396px] md:left-[60px] md:w-[292px] md:h-[24px] text-center"
        >
          ©2022 MORENT. All rights reserved
        </h2>
        <h2
          className="absolute w-[92px] h-[16px] top-[2502px] left-[24px]
        font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-[#1A202C] md:top-[396px] md:left-[1032px] md:w-[144px] md:h-[24px] text-right"
        >
          Privacy & Policy
        </h2>
        <h2
          className="absolute w-[104px] h-[16px] top-[2502px] left-[247px]
        font-sans font-semibold text-[12px] md:text-[16px] leading-[15.12px] md:leading-[24px] tracking-[-0.02em] text-[#1A202C] md:top-[396px] md:left-[1236px] md:w-[144px] md:h-[24px] text-right"
        >
          Terms & Condition
        </h2>
      </div>
    </footer>
  );
}
