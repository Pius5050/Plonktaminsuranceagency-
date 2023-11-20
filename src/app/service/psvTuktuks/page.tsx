import Link from "next/link";

const PsvTukTuks = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            psv third party tuktuk
          </p>
        </div>
        <div className="opts w-full text-white">
          <Link href={"/service/psvTuktuks/thirdParty"}>
            <div className="header bg-[#007A37] flex items-center justify-start w-full py-2 rounded-lg my-3">
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div className="uppercase">
                psv tuktuk third party rates(annual)
              </div>
            </div>
          </Link>
          <Link href={"/service/psvTuktuks/comprehensive"}>
            <div className="header bg-[#E41313] flex items-center justify-start w-full py-2 rounded-lg my-3">
              <div className="text-center">
                <span
                  className={`material-symbols-outlined mr-2 transition-all duration-500`}
                >
                  chevron_right
                </span>
              </div>
              <div className="uppercase">
                psv tuktuk comprehensive rates(annual)
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PsvTukTuks;
