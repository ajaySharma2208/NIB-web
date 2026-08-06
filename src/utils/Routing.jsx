import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import CarInsurance from "../components/AllProducts/GeneralInsurance/CarInsurance";
import Contact from "../components/Contact";
import TwoWheelerInsurance from "../components/AllProducts/GeneralInsurance/TwoWheelerInsurance";
import About from "../components/aboutUs/About";
import Become from "../components/become/BecomePosp";
import Login from "../components/Login";
import OurPartner from "../components/OurPartner";
import Claim from "../components/Claim/Claim";
import ScrollTop from "../components/ScrollTop";
import PensionPlan from "../components/AllProducts/LifeInsurance/PensionPlan";
import HealthInsurance from "../components/AllProducts/HealthInsurance/IndividualHealthInsurance";
import MarineInsurance from "../components/AllProducts/Non-GeneralInsurance/MarineInsurance";
import TaxiInsurance from "../components/AllProducts/GeneralInsurance/TaxiInsurance";
import CommercialVehicle from "../components/AllProducts/GeneralInsurance/CommercialVehicle";
import Investmentplans from "../components/AllProducts/GeneralInsurance/Investmentplans";
import TravelInsurance from "../components/AllProducts/GeneralInsurance/TravelInsurance";
import Fire from "../components/AllProducts/Non-GeneralInsurance/Fire";
import FamilyHealthInsurance from "../components/AllProducts/HealthInsurance/FamilyHealthInsurance";
import HomeInsurance from "../components/AllProducts/GeneralInsurance/HomeInsurance";
import ShopInsurance from "../components/AllProducts/Non-GeneralInsurance/ShopInsurance";
import WorkerCompensationInsurance from "../components/AllProducts/Non-GeneralInsurance/WorkerCompensationInsurance";
import GeneralLiability from "../components/AllProducts/Non-GeneralInsurance/GeneralLiability";
import CyberInsurance from "../components/AllProducts/Non-GeneralInsurance/CyberInsurance";
import TermLifeInsurance from "../components/AllProducts/LifeInsurance/TermLifeInsurance";
import EndowmentInsurance from "../components/AllProducts/LifeInsurance/EndowmentInsurance";
import ChildInsurance from "../components/AllProducts/LifeInsurance/ChildInsurance";
import ULPInsurance from "../components/AllProducts/LifeInsurance/ULPInsurance";
import ContractMachineryInsurance from "../components/AllProducts/Non-GeneralInsurance/ContractMachineryInsurance";
import ProfessionalIndemnityDoctorsInsurance from "../components/AllProducts/Non-GeneralInsurance/ProfessionalIndemnityDoctorsInsurance";
import ProfessionalIndemnityCompanyInsurance from "../components/AllProducts/Non-GeneralInsurance/ProfessionalIndemnityCompanyInsurance";
import ContractRiskInsurance from "../components/AllProducts/Non-GeneralInsurance/ContractRiskInsurance";
import DirectorOfficersInsurance from "../components/AllProducts/Non-GeneralInsurance/DirectorOfficersInsurance";
import MoneyBackPolicy from "../components/AllProducts/LifeInsurance/MoneyBackPolicy";
import CriticalCare from "../components/AllProducts/HealthInsurance/CriticalCare";
import OneCrHealthCover from "../components/AllProducts/HealthInsurance/OneCrHealthCover";
import CancerInsurance from "../components/AllProducts/HealthInsurance/CancerInsurance";
import EmployeeGroupHealthInsurance from "../components/AllProducts/HealthInsurance/EmployeeGroupHealthInsurance";
import MaternityCover from "../components/AllProducts/HealthInsurance/MaternityCover";
import SeniorCitizenPlan from "../components/AllProducts/HealthInsurance/SeniorCitizenPlan";
import Faq from "../components/FAQ/Faq";
import TermAndConditions from "../components/termandconditions/TermAndConditions";
import Privacy from "../components/privacyPolicy/Privacy";
import MandateData from "../components/Mandate/MandateData";
import Mandate from "../components/Mandate/Mandate";
import Irda from "../components/Irda/Irda"
import DocumentUpdate from "../components/become/DocumentUpdate" ;

const Routing = () => {
  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-partners" element={<OurPartner />} />
        <Route path="/under-process" element={<Claim />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/become-a-posp" element={<Become />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route
          path="/two-wheeler-insurance"
          element={<TwoWheelerInsurance />}
        />
        <Route path="/taxi-insurance" element={<TaxiInsurance />} />
        <Route path="/commercial-vehicle" element={<CommercialVehicle />} />
        <Route path="/pension-plan" element={<PensionPlan />} />
        <Route
          path="/individual-health-insurance"
          element={<HealthInsurance />}
        />
        <Route path="/marine-insurance" element={<MarineInsurance />} />
        <Route path="/investment-plans" element={<Investmentplans />} />
        <Route path="/travel-insurance" element={<TravelInsurance />} />
        <Route path="/fire-insurance" element={<Fire />} />
        <Route
          path="/family-health-insurance"
          element={<FamilyHealthInsurance />}
        />
        <Route path="/home-insurance" element={<HomeInsurance />} />
        <Route path="/shop-insurance" element={<ShopInsurance />} />
        <Route
          path="/workers-insurance"
          element={<WorkerCompensationInsurance />}
        />
        <Route
          path="/general-liability-insurance"
          element={<GeneralLiability />}
        />
        <Route path="/cyber-insurance" element={<CyberInsurance />} />
        <Route path="/term-insurance" element={<TermLifeInsurance />} />
        <Route path="/endowment-insurance" element={<EndowmentInsurance />} />
        <Route path="/child-insurance" element={<ChildInsurance />} />
        <Route path="/ulip-insurance" element={<ULPInsurance />} />
        <Route
          path="/contractor-plant-machinery-insurance"
          element={<ContractMachineryInsurance />}
        />
        <Route
          path="/professional-indemnity-doctors-insurance"
          element={<ProfessionalIndemnityDoctorsInsurance />}
        />
        <Route
          path="/professional-indemnity-companies-insurance"
          element={<ProfessionalIndemnityCompanyInsurance />}
        />
        <Route
          path="/contractor-risk-insurance"
          element={<ContractRiskInsurance />}
        />
        <Route
          path="/director-officers-insurance"
          element={<DirectorOfficersInsurance />}
        />
        <Route path="/money-back-policy" element={<MoneyBackPolicy />} />
        <Route path="/critical-care-plan" element={<CriticalCare />} />
        <Route path="/one-cr-health-cover" element={<OneCrHealthCover />} />
        <Route path="/cancer-insurance" element={<CancerInsurance />} />
        <Route
          path="/employee-group-health-insurance"
          element={<EmployeeGroupHealthInsurance />}
        />
        <Route path="/maternity-cover" element={<MaternityCover />} />
        <Route path="/senior-citizen-plan" element={<SeniorCitizenPlan />} />
        <Route path="/frequently-ask-question" element={<Faq />} />
        <Route path="/terms-conditions" element={<TermAndConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home/>} />
        <Route path="/javascript" element={<Navigate to="/" replace />} />
        <Route path="/js" element={<Navigate to="/" replace />} />
        <Route path="/mandate" element={<Mandate/>} />
        <Route path="/mandate/:name?" element={<Mandate/>} />

        <Route path="/irda-license" element={<Irda/>} />

        <Route path="/mandatedata" element={<MandateData/>} />
        <Route path="/documentupdate" element={<DocumentUpdate/>} />
      </Routes>
    </div>
  );
};

export default Routing;
