export const Referral = (): JSX.Element => {
  const stats = [
    { value: "0 of 2", label: "Joined" },
    { value: "0", label: "Pending" },
  ];

  return (
    <div
      className="relative w-[360px] h-[800px] bg-[#040c24]"
      data-model-id="417:8218"
    >
      <header className="flex w-full h-16 items-center justify-between pl-5 pr-4 py-3 absolute top-24 left-0 bg-transparent">
        <div className="relative w-28 h-7">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/bsSu7NsG/img/group@2x.png"
          />
          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/bsSu7NsG/img/group-1@2x.png"
          />
          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/bsSu7NsG/img/group-2@2x.png"
          />
        </div>

        <div className="inline-flex h-8 items-center justify-center gap-1 pt-[var(--collection-1-0)] pb-[var(--collection-1-0)] px-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="User"
            src="https://c.animaapp.com/bsSu7NsG/img/user.svg"
          />
        </div>
      </header>

      <div className="flex flex-col w-full items-start px-5 py-0 absolute top-40 left-0">
        <div className="flex flex-col items-start pt-2 pb-9 px-0 w-full flex-[0_0_auto] relative self-stretch">
          <div className="mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] relative self-stretch [font-style:var(--header-1-font-style)]">
            Invite 2 businesses from your network
          </div>

          <div className="h-0.5 relative self-stretch w-full" />

          <p className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
            After they join, you&apos;ll both get early access and bonuses
          </p>

          <div className="h-5 relative self-stretch w-full" />

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-deepcloudyblue-100 rounded-[30px]">
            <div className="relative self-stretch w-full h-1 bg-[#ffffff] rounded-[30px]" />
          </div>
        </div>

        <div className="items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-col h-[68px] items-start justify-around p-4 flex-1 grow bg-deepcloudyblue-100 rounded-[20px] flex relative"
            >
              <div className="flex flex-col items-start justify-center gap-0.5 relative self-stretch w-full flex-[0_0_auto] mt-[-6.00px] mb-[-6.00px]">
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--header-3-font-style)]">
                    {stat.value}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full items-start px-5 py-4 absolute left-0 bottom-0 bg-deepblue-140 rounded-[24px_24px_0px_0px]">
        <button
          type="button"
          className="flex h-[52px] items-center justify-center gap-1 px-5 py-2 relative self-stretch w-full bg-[#ffffff] rounded-[14px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] cursor-pointer"
        >
          <div className="items-center justify-center pt-0 pb-0.5 px-0 flex-[0_0_auto] inline-flex gap-2.5 relative">
            <span className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-[#000000] text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Share the link
            </span>
          </div>
        </button>
      </div>

      <div className="fixed w-full top-0 left-0 h-24 bg-white shadow-[0px_1px_4px_#00000033]">
        <div className="absolute w-full h-full top-0 left-0 bg-white" />

        <img
          className="absolute top-[59px] left-3 w-[21px] h-[22px]"
          alt="Home"
          src="https://c.animaapp.com/bsSu7NsG/img/home.svg"
        />

        <div className="absolute top-[52px] left-[45px] w-[228px] h-9 flex items-center bg-androidchromeaddress-field-background-light rounded-[18px] overflow-hidden">
          <div className="h-[13px] ml-[13px] w-[186px] items-start inline-flex gap-2.5 relative">
            <img
              className="relative w-2.5 h-[13px]"
              alt="Vector"
              src="https://c.animaapp.com/bsSu7NsG/img/vector.svg"
            />
            <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[13px] whitespace-nowrap">
              renmoney/business.com
            </div>
          </div>
        </div>

        <img
          className="absolute w-[20.28%] top-[calc(50.00%_+_11px)] left-[79.72%] h-[22px]"
          alt="Chrome tabs"
          src="https://c.animaapp.com/bsSu7NsG/img/chrome-tabs.svg"
        />

        <img
          className="absolute top-[58px] left-[323px] w-6 h-6"
          alt="More"
          src="https://c.animaapp.com/bsSu7NsG/img/more.svg"
        />

        <div className="absolute top-4 left-0 w-[360px] h-6 flex">
          <div className="mt-1 w-[42px] ml-3.5 flex opacity-90">
            <div className="flex items-end w-10 h-4 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-androidtext-secondary text-[13px] tracking-[0] leading-[normal]">
              10:00
            </div>
          </div>

          <img
            className="ml-[242px] mt-[5px] w-3.5 h-3.5"
            alt="Signal cellular"
            src="https://c.animaapp.com/bsSu7NsG/img/signal-cellular.svg"
          />

          <img
            className="ml-1 mt-[5px] w-3.5 h-3.5"
            alt="Signal wifi"
            src="https://c.animaapp.com/bsSu7NsG/img/signal-wifi.svg"
          />

          <img
            className="mt-[5px] w-3.5 h-3.5 ml-0.5"
            alt="Battery full"
            src="https://c.animaapp.com/bsSu7NsG/img/battery-full.svg"
          />
        </div>
      </div>
    </div>
  );
};
