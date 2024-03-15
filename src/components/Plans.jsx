import { FaCheckCircle, FaChevronLeft } from "react-icons/fa";
const Plans = ({ setUpgrade }) => {
  return (
    <div className=" absolute left-2 w-full">
      <div className="bg-background w-full">
        <div
          className="flex justify-start items-center align-middle gap-2 w-fit bg-background ml-10 pt-10 hover:cursor-pointer"
          onClick={() => setUpgrade(false)}
        >
          <FaChevronLeft size={18} color="#dfdfdf" />
          <p className="text-secondary font-semibold">Back</p>
        </div>
        <section className="flex bg-background p-8 justify-center items-center gap-4">
          <p className="text-white font-poppins font-sans">Billed Monthly</p>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-primary peer-focus:outline-none rounded-full after:bg-black peer-checked:after:bg-primary peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] transition-colors after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
          </label>
          <p className="text-white">Billed Annualy</p>
        </section>
      </div>
      <section className="bg-background w-full h-dvh flex justify-center items-center gap-8 flex-wrap flex-1">
        <div className="flex flex-col justify-start items-start gap-8 hover:bg-secondaryBg p-4 rounded-xl border-2 border-background hover:border-2 hover:border-neutral-600 w-64 h-4/5 hover:cursor-pointer transition-colors">
          <div className="flex flex-col gap-2 mt-10 w-full">
            <h4 className="text-white text-xl">Starter</h4>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold text-white">$7.99</p>
            <button className="bg-primary w-full h-12 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-secondary">This includes</p>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">50 credits/month</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">Unlimited downloads</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">No watermark</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-8 hover:bg-secondaryBg p-4 rounded-xl border-2 border-background hover:border-2 hover:border-neutral-600 w-64 h-4/5 hover:cursor-pointer transition-colors">
          <div className="flex flex-col gap-2 mt-10 w-full">
            <h4 className="text-white text-xl">Plus</h4>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold text-white">$14.99</p>
            <button className="bg-primary w-full h-12 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-secondary">This includes</p>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">90 credits/month</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">Unlimited downloads</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">No watermark</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-8 hover:bg-secondaryBg p-4 rounded-xl border-2 border-background hover:border-2 hover:border-neutral-600 w-64 h-4/5 hover:cursor-pointer transition-colors">
          <div className="flex flex-col gap-2 w-full">
            <p className="bg-background text-sm p-1 w-fit rounded-lg font-semibold no-underline text-white">
              Most Popular
            </p>
            <h4 className="text-white text-xl">Premium</h4>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold text-white">$16.99</p>
            <button className="bg-primary w-full h-12 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-secondary">This includes</p>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">300 credits/month</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">Unlimited downloads</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">No watermark</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-8 hover:bg-secondaryBg p-4 rounded-xl border-2 border-background hover:border-2 hover:border-neutral-600 w-64 h-4/5 hover:cursor-pointer transition-colors">
          <div className="flex flex-col gap-2 mt-10 w-full">
            <h4 className="text-white text-xl">Enterprise</h4>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-4xl font-semibold text-white">$159.99</p>
            <button className="bg-primary w-full h-12 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-secondary">This includes</p>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">Unlimited credits/month</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">Unlimited downloads</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaCheckCircle color="#dfdfdf" />
              <p className="text-secondary">No watermark</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
