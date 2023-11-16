const Jubilee = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4">
          <p className="text-lg font-semibold uppercase">
            jubilee comprehensive covers
          </p>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-16 place-items-center">
          <div className="font-bold">Value of the Vehicle Insured</div>
          <div className="font-bold">Insurance cost</div>
          <div className="font-bold">Action</div>

          <div>Ksh. 500, 000 To 1M</div>
          <div className="">ksh. 45, 000</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>

          <div>Ksh. 1M To Ksh. 2.5M</div>
          <div className="">ksh. 67, 000</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>

          <div>Over Ksh. 2.5M </div>
          <div className="">Request a quotation</div>
          <div className="bg-[#007A37] text-white px-4 py-2 uppercase">
            add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Jubilee;