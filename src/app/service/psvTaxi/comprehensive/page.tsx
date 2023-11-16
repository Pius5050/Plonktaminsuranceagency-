import Link from "next/link";

const Annual = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">comprehensive psv taxi</p>
        </div>
        <div className="opts w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <Link href={"/service/psvTaxi/comprehensive/amaco"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              amaco insurance
            </div>
          </Link>

          <Link href={"/service/psvTaxi/comprehensive/directline"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              directline insurance
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Annual;
