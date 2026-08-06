import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import ModalBox from "./ModalBox";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("generalInsurance");
  const data = [
    {
      label: "General Insurance",
      value: "generalInsurance",
      desc: (
        <div
          className={`flex-col generalInsuranceOption flex gap-2 max-sm:gap-2 max-sm:p-1 items-center justify-center w-full lg:px-5 py-2 max-sm:px-5`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  max-sm:gap-1 items-start gap-2 justify-center lg:gap-3">
            <ModalBox
              text="Car Insurance"
              imgSrc="assets/images/Products/general/sport-car.png"
              link="/car-insurance"
            />
            <ModalBox
              text="Travel Insurance"
              imgSrc="assets/images/Products/general/airplane.png"
              link="/travel-insurance"
            />
            <ModalBox
              text="2 Wheeler Insurance"
              imgSrc="assets/images/Products/general/bycicle.png"
              link="/two-wheeler-insurance"
            />
            <ModalBox
              text="Commercial Vehicle"
              imgSrc="assets/images/Products/general/ads.png"
              link="/commercial-vehicle"
            />
            <ModalBox
              text="Taxi Insurance"
              imgSrc="assets/images/Products/general/taxi.png"
              link="/taxi-insurance"
            />
          </div>
        </div>
      ),
    },
    {
      label: "Non-General Insurance",
      value: "nonGeneralInsurance",
      desc: (
        <div
          className={` flex gap-5 flex-wrap max-sm:p-5 items-start justify-center w-full lg:px-5 py-2 max-sm:px-5`}
        >
          <div className="pb-2 flex flex-col items-center lg:py-2">
            <h1 className="font-semibold mb-3">Marine & Property Insurance:</h1>
            <div className="flex flex-wrap justify-center max-sm:gap-1 items-center gap-2">
              <ModalBox
                text="Marine Insurance"
                imgSrc="assets/images/Products/non-general/ship.png"
                link="/marine-insurance"
              />

              <ModalBox
                text="Fire & Burglary"
                imgSrc="assets/images/Products/non-general/burning-building.png"
                link="/fire-insurance"
              />

              <ModalBox
                text="Shop Owner Insurance"
                imgSrc="assets/images/Products/non-general/seller.png"
                link="/shop-insurance"
              />

              <ModalBox
                text="Office Package Policy"
                imgSrc="assets/images/Products/non-general/office-building.png"
                link="/"
              />
            </div>
          </div>
          <div className="pb-2 flex flex-col items-center lg:py-2">
            <h1 className="font-semibold mb-2">Liability:</h1>
            <div className="flex flex-wrap justify-center  items-center gap-2">
              <ModalBox
                text="Professional Indemnity for Doctors"
                imgSrc="assets/images/Products/non-general/medical.png"
                link="/"
              />

              <ModalBox
                text="Professional Indemnity for Companies"
                imgSrc="assets/images/Products/non-general/company.png"
                link="/"
              />

              <ModalBox
                text="Workmen Compensation"
                imgSrc="assets/images/Products/non-general/engineer.png"
                link="/"
              />

              <ModalBox
                text="General Liability"
                imgSrc="assets/images/Products/non-general/briefcase.png"
                link="/"
              />

              <ModalBox
                text="Cyber Insurance"
                imgSrc="assets/images/Products/non-general/computer.png"
                link="/"
              />

              <ModalBox
                text="Directors & Officers Liability"
                imgSrc="assets/images/Products/non-general/boss.png"
                link="/"
              />
            </div>
          </div>
          <div className=" flex flex-col items-center lg:py-2">
            <h1 className="font-semibold">Engineering:</h1>
            <div className="flex  flex-wrap max-sm:gap-1 items-center justify-center gap-2 ">
              <ModalBox
                text="Contractor's All Risk"
                imgSrc="assets/images/Products/non-general/worker.png"
                link="/"
              />

              <ModalBox
                text="Erection All Risk"
                imgSrc="assets/images/Products/non-general/contruction.png"
                link="/"
              />

              <ModalBox
                text="Contractor's Plant & Machinery"
                imgSrc="assets/images/Products/non-general/piling.png"
                link="/"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Life Insurance",
      value: "lifeInsurance",
      desc: (
        <div
          className={`flex-col generalInsuranceOption flex  max-sm:gap-2 max-sm:p-5 items-center justify-center w-full lg:px-5 py-2 max-sm:px-5`}
        >
          <div className="flex flex-wrap max-sm:gap-1 items-center justify-center gap-2">
            <ModalBox
              text="Term Insurance"
              imgSrc="assets/images/Products/health/medicine.png"
              link="/"
            />

            <ModalBox
              text="Endowment Plan"
              imgSrc="assets/images/Products/health/heart-rate.png"
              link="/"
            />

            <ModalBox
              text="Whole Life Insurance"
              imgSrc="assets/images/Products/health/organization.png"
              link="/"
            />

            <ModalBox
              text="ULIP"
              imgSrc="assets/images/Products/health/cancer-ribbon.png"
              link="/"
            />
          </div>
        </div>
      ),
    },
    {
      label: "Health Insurance",
      value: "healthInsurance",
      desc: (
        <div
          className={`flex-col generalInsuranceOption flex  max-sm:gap-2 max-sm:p-5 items-center justify-center w-full lg:px-5 py-2 max-sm:px-5`}
        >
          <div className="flex flex-wrap max-sm:gap-1 items-center justify-center gap-2">
            <ModalBox
              text="Health"
              imgSrc="assets/images/Products/health/heart-rate.png"
              link="/health-insurance"
            />

            <ModalBox
              text="1 Cr Health Cover"
              imgSrc="assets/images/Products/health/protect.png"
              link="/"
            />

            <ModalBox
              text="Arogya Sanjeeva"
              imgSrc="assets/images/Products/health/risk.png"
              link="/"
            />

            <ModalBox
              text="Family Health Insurance"
              imgSrc="assets/images/Products/health/medicine.png"
              link="/family-health-insurance"
            />

            <ModalBox
              text="Cancer Insurance"
              imgSrc="assets/images/Products/health/cancer-ribbon.png"
              link="/"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <Tabs id="custom-animation" value={activeTab}>
    <TabsHeader
  className="bg-gray-400  flex flex-wrap sm:flex-nowrap justify-center"
>
  {data.map(({ label, value }) => (
    <Tab
      key={value}
      value={value}
      onClick={() => setActiveTab(value)}
      className={`${
        activeTab === value ? "text-gray-900" : ""
      } w-full sm:w-auto sm:flex-auto text-center max-sm:basis-1/2`} // Full width on mobile, auto width on larger screens
    >
      {label}
    </Tab>
  ))}
</TabsHeader>
      <TabsBody className="pb-5"  animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
        {data.map(({ value, desc }) => (
          <TabPanel className="px-1  lg:px-2" key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default ProductTabs;
