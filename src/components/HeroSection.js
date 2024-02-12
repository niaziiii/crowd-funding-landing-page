import { useState } from "react";
import Text1 from "./Text1";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
    setIsMenuOpen(false);
  };

  return (
    <section
      className="self-stretch flex flex-row items-start justify-start relative max-w-full shrink-0 text-left text-5xl text-white  font-montserrat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url(/rectangle-1.png)" }}
    >
      <div className="w-full gap-20 mq1050:gap-0 mq750:gap-0 mq450:gap-0 absolute bottom-[-120px] left-0 flex items-center justify-center">
        <Text1
          rectangle68="/rectangle-68@2x.png"
          catalyzeYourDreams="Catalyze Your Dreams"
          group1171276033="/group-1171276033@2x.png"
          // loremIpsumIsLeft="185px"
          loremIpsumIsBackgroundImage="url('/rectangle-68@2x.png')"
          display="flex"
        />
        <Text1
          rectangle68="/rectangle-69@2x.png"
          catalyzeYourDreams="Invest with Confidence"
          group1171276033="/group-1171276033@2x.png"
          loremIpsumIsLeft="unset"
          loremIpsumIsBackgroundImage="url('/rectangle-69@2x.png')"
          loremIpsumIsRight="185px"
          display="flex lg:hidden mq1050:hidden mq750:hidden mq450:hidden"
          left="50%"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-start pt-[10px] pb-[284px] pr-5 box-border relative gap-[131px] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-37xl  lg:pl-11 lg:box-border  mq450:pt-[4px] mq450:pb-[120px] mq450:box-border mq1050:pt-8 mq1050:pb-[185px] mq1050:box-border  mq1024:box-border">
        <nav class="w-full">
          <div class=" flex items-center p-1">
            <div className="w-[215px] min-w-[215px] max-w-[215px] flex flex-row items-center justify-start">
              <img
                className="w-[91px] my-0 "
                loading="eager"
                alt=""
                src="/logo-dourado-1@2x.png"
              />
              <div className="flex flex-col text-start">
                <b className="text-2xl">YOUNIIT.Y</b>
                <b className="text-sm whitespace-normal ">
                  Estrategias de Investimentos
                </b>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-center pt-0 px-0 pr-[50px] box-border text-left text-base font-open-sans">
              <div className="flex flex-row items-end justify-between gap-[20px] max-w-full mq1024:hidden">
                <div className="relative leading-[24px] font-semibold z-[1]">
                  <ScrollLink
                    to="#"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("whoAreWe")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Home
                  </ScrollLink>
                </div>
                <div className="relative leading-[24px] font-semibold whitespace-nowrap z-[1]">
                  <ScrollLink
                    to="whoAreWe"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("whoAreWe")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Who we are?
                  </ScrollLink>
                </div>
                <div className="relative leading-[24px] font-semibold whitespace-nowrap z-[1]">
                  <ScrollLink
                    to="investNow"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("investNow")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Invest Now
                  </ScrollLink>
                </div>
                <div className="relative leading-[24px]  font-semibold z-[1]">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("contact")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all "
                  >
                    Contact
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button className="cursor-pointer py-4 pr-[25px] pl-[29px] bg-[transparent] w-[114px] rounded-3xs box-border flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 mq1024:hidden">
                <b className="relative text-base leading-[24px] font-open-sans text-white text-left">
                  Sign In
                </b>
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="mq1024:inline-flex relative items-center p-2 w-10 h-10 bg-gray-700 mt-2 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-controls="navbar-cta"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* Responsive menu */}
            <div
              className={`absolute top-28 items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isMenuOpen ? "block" : "hidden"
              } z-20`}
              id="navbar-cta"
            >
              <ul className="flex flex-col text-lg font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-950 md:space-x-8 rtl:space-x-reverse list-none">
                <li className="py-6">
                  <ScrollLink
                    to="#"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("whoAreWe")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="py-6">
                  <ScrollLink
                    to="whoAreWe"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("whoAreWe")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Who we are?
                  </ScrollLink>
                </li>
                <li className="py-6">
                  <ScrollLink
                    to="investNow"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("investNow")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Invest Now
                  </ScrollLink>
                </li>
                <li className="py-6">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollToSection("contact")}
                    className="cursor-pointer  py-4 px-[25px] rounded-3xs border border-transparent hover:border-white border-solid transition-all"
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li className="py-2 cursor-pointer">Sign In</li>
              </ul>
            </div>
          </div>
        </nav>

        <img
          className="w-[39.9px] h-[37.6px] absolute my-0 mx-[!important] top-[201px] left-[316px] object-contain opacity-[0.5] z-[1]"
          loading="eager"
          alt=""
          src="/group-52@2x.png"
        />
        <div className="w-[807px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[737px] flex flex-col items-center justify-start gap-[84px] max-w-full mq450:gap-[21px] mq750:gap-[42px]">
            <h1 className="m-0 self-stretch h-[68px] relative text-inherit font-bold font-inherit inline-block  mq450:text-15xl mq1050:text-26xl">
              Investment Strategies
            </h1>
            <div className="w-[517px] flex flex-col items-center justify-start gap-[40px] max-w-full text-base font-open-sans mq750:gap-[20px]">
              <div className="self-stretch relative leading-[24px] font-semibold ">
                Join a global community of visionaries, backers, and creators
                who are changing the world, one project at a time.
              </div>
              <div className="flex flex-row items-center justify-start gap-[36px] max-w-full text-right mq450:gap-[18px]">
                <button className="cursor-pointer [border:none] py-4 pr-[26px] pl-[30px] bg-primary rounded-3xs flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-darkgoldenrod">
                  <b className="relative text-base leading-[24px] font-open-sans text-white text-left">
                    Invest Now
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
