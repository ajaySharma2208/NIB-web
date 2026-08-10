import { Fragment, useEffect, useState } from "react";
import { MdAddCall, MdEmail, MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";


const navListMenuItems = [
  {
    title: "Motor Insurance",

    sublink: [
      { name: "Car Insurance", link: "/car-insurance" },
      { name: "Two Wheeler Insurance", link: "/two-wheeler-insurance" },
     
      { name: "Travel Insurance", link: "/travel-insurance" },
      { name: "Commercial Vehicle", link: "/commercial-vehicle" },
      { name: "Taxi Insurance", link: "/taxi-insurance" },
    ],
  },
  {
    title: "Business Insurance",

    sublink: [
      { name: "Home Insurance", link: "/home-insurance" },
      { name: "Marine Insurance", link: "/marine-insurance" },
      { name: "Fire & Burglary", link: "/fire-insurance" },
      { name: "Shop Owner Insurance", link: "/shop-insurance" },
      { name: "Workers' Compensation", link: "/workers-insurance" },
      { name: "General Liability", link: "/general-liability-insurance" },
      { name: "Cyber Insurance", link: "/cyber-insurance" },
      { name: "Contractor's Plant & Machinery", link: "/contractor-plant-machinery-insurance" },
      { name: "Professional Indemnity for Doctors", link: "/professional-indemnity-doctors-insurance" },
      { name: "Professional Indemnity for Companies", link: "/professional-indemnity-companies-insurance" },
      { name: "Contractor All Risk Insurance", link: "/contractor-risk-insurance" },
      { name: "Directors and Officers (D&O) Insurance", link: "/director-officers-insurance" },
    ],
  },
  {
    title: "Life Insurance",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    sublink: [
      { name: "Pension Plans", link: "/pension-plan" },
      { name: "Term Plans", link: "/term-insurance" },
      { name: "Child Saving Plan", link: "/child-insurance" },
      { name: "Endowment Plan", link: "/endowment-insurance" },
      { name: "ULIP Plan", link: "/ulip-insurance" },
      { name: "Money Back Plan", link: "/money-back-policy" },

    ],
  },
  {
    title: "Health Insurance",

    sublink: [
      { name: "Individual Health Insurance ", link: "/individual-health-insurance" },
      { name: "Family Health Insurance", link: "/family-health-insurance" },
      { name: "Critical Care Plan", link: "/critical-care-plan" },
      { name: "Maternity Cover Plan", link: "/maternity-cover" },
      { name: "Senior Citizen Plan", link: "/senior-citizen-plan" },
      { name: "1 Cr Health Cover", link: "/one-cr-health-cover" },
      { name: "Cancer Insurance", link: "/cancer-insurance" },
      { name: "Employee Group Health Insurance", link: "/employee-group-health-insurance" },
    ],
  },
];

function NavListMenuDesktop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ title, sublink }, key) => (
    <div className="flex flex-col" key={key}>
      <div className="text-[11px] font-black tracking-widest text-primary-blue uppercase px-3 py-2 border-b border-slate-100 mb-2 font-sora">
        {title}
      </div>

      <div className="space-y-0.5">
        {sublink.map((sublinkItem, sublinkKey) => (
          <Link
            to={sublinkItem.link}
            key={sublinkKey}
            className="block text-[11px] text-gray-600 font-sans font-semibold hover:text-primary-blue transition-colors"
          >
            <div className="flex items-center cursor-pointer gap-2 rounded-none py-1.5 px-3 hover:bg-slate-50 transition-all duration-150">
              {sublinkItem.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium h-full flex items-center">
            <ListItem
              className={`flex items-center text-sm font-semibold h-full xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors relative cursor-pointer ${
                isMenuOpen || isMobileMenuOpen ? "text-primary-blue" : "text-gray-700 hover:text-primary-blue"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Insurances
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3.5 w-3.5 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3.5 w-3.5 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
              {(isMenuOpen || isMobileMenuOpen) && (
                <span className="absolute bottom-0 left-[15px] right-[15px] h-[2px] bg-primary-blue rounded-none"></span>
              )}
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden ml-[12%] w-fit bg-transparent border-0 lg:justify-center shadow-none outline-none outline-0 lg:flex">
          <div className="w-[70vw] rounded-none bg-white outline-none lg:block outline-0 border border-slate-200 shadow-xl p-6">
            <ul className="grid grid-cols-4 justify-center gap-6 outline-none outline-0">
              {renderItems}
            </ul>
          </div>
        </MenuList>
      </Menu>
    </Fragment>
  );
}

function NavList({ closeMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  function NavListMenu({ closeMenu }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const renderItems = navListMenuItems.map(({ title, sublink }, key) => (
      <div className="flex flex-col mb-4" key={key}>
        <div className="text-[10px] font-black tracking-widest text-primary-blue uppercase px-3 py-1 border-b border-slate-100 mb-2 font-sora">
          {title}
        </div>

        <div className="space-y-1">
          {sublink.map((sublinkItem, sublinkKey) => (
            <Link
              to={sublinkItem.link}
              key={sublinkKey}
              className="block text-xs text-gray-600 font-sans font-semibold hover:text-primary-blue"
              onClick={() => {
                closeMenu();
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="flex items-center cursor-pointer gap-2 py-1 px-3 hover:bg-slate-50 rounded-none transition-colors">
                {sublinkItem.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    ));

    return (
      <Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className={`flex items-center text-sm font-semibold gap-2 py-2 xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors ${
                  isMenuOpen || isMobileMenuOpen ? "text-primary-blue" : "text-gray-700 hover:text-primary-blue"
                }`}
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Insurances
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3.5 w-3.5 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3.5 w-3.5 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>

          <MenuList className="hidden w-full bg-transparent border-0 lg:justify-center shadow-none outline-none outline-0 lg:flex">
            <div className="w-[70vw] rounded-none bg-white outline-none lg:block outline-0 border border-slate-200 shadow-xl p-6">
              <ul className="grid grid-cols-4 justify-center gap-6 outline-none outline-0">
                {renderItems}
              </ul>
            </div>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>
            <div className="pl-4 mt-2 border-l border-slate-100">
              {renderItems}
            </div>
          </Collapse>
        </div>
      </Fragment>
    );
  }

  const isMobileOrTablet = useMediaQuery({ maxWidth: 1023 });
  const handleHomeClick = () => {
    closeMenu();
  };
  const handleHomeClickNew = () => {
    closeMenu();
    setIsMobileMenuOpen(false);
  };

  return (
    <List className="mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:gap-3 xl:gap-6 lg:h-full lg:items-center">
      {isMobileOrTablet ? (
        <>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/" onClick={handleHomeClickNew}>
              <ListItem className={`flex items-center text-sm font-semibold py-2 xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent ${isActive('/') ? 'text-primary-blue' : 'text-gray-700'}`}>
                Home
              </ListItem>
            </Link>
          </Typography>
          <NavListMenu closeMenu={handleHomeClick} />
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/about-us" onClick={handleHomeClickNew}>
              <ListItem className={`flex items-center text-sm font-semibold py-2 xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent ${isActive('/about-us') ? 'text-primary-blue' : 'text-gray-700'}`}>
                About Us
              </ListItem>
            </Link>
          </Typography>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/our-partners" onClick={handleHomeClickNew}>
              <ListItem className={`flex items-center text-sm font-semibold py-2 xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent ${isActive('/our-partners') ? 'text-primary-blue' : 'text-gray-700'}`}>
                Our Partners
              </ListItem>
            </Link>
          </Typography>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/under-process" onClick={handleHomeClickNew}>
              <ListItem className={`flex items-center text-sm font-semibold py-2 xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent ${isActive('/under-process') ? 'text-primary-blue' : 'text-gray-700'}`}>
                Claim
              </ListItem>
            </Link>
          </Typography>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/contact" onClick={handleHomeClickNew}>
              <ListItem className={`flex items-center text-sm font-semibold py-2 xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent ${isActive('/contact') ? 'text-primary-blue' : 'text-gray-700'}`}>
                Contact Us
              </ListItem>
            </Link>
          </Typography>
        </>
      ) : (
        <>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium h-full flex items-center"
          >
            <Link to="/" className="h-full flex items-center">
              <ListItem className={`flex items-center text-sm font-semibold h-full xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors relative ${isActive('/') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}>
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-[15px] right-[15px] h-[3px] bg-primary-blue rounded-t"></span>
                )}
              </ListItem>
            </Link>
          </Typography>
          <NavListMenuDesktop />
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium h-full flex items-center"
          >
            <Link to="/about-us" className="h-full flex items-center">
              <ListItem className={`flex items-center text-sm font-semibold h-full xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors relative ${isActive('/about-us') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}>
                About Us
                {isActive('/about-us') && (
                  <span className="absolute bottom-0 left-[15px] right-[15px] h-[3px] bg-primary-blue rounded-t"></span>
                )}
              </ListItem>
            </Link>
          </Typography>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium h-full flex items-center"
          >
            <Link to="/our-partners" className="h-full flex items-center">
              <ListItem className={`flex items-center text-sm font-semibold h-full xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors relative ${isActive('/our-partners') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}>
                Our Partners
                {isActive('/our-partners') && (
                  <span className="absolute bottom-0 left-[15px] right-[15px] h-[3px] bg-primary-blue rounded-t"></span>
                )}
              </ListItem>
            </Link>
          </Typography>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium h-full flex items-center"
          >
            <Link to="/under-process" className="h-full flex items-center">
              <ListItem className={`flex items-center text-sm font-semibold h-full xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors relative ${isActive('/under-process') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}>
                Claim
                {isActive('/under-process') && (
                  <span className="absolute bottom-0 left-[15px] right-[15px] h-[3px] bg-primary-blue rounded-t"></span>
                )}
              </ListItem>
            </Link>
          </Typography>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="font-medium h-full flex items-center"
          >
            <Link to="/contact" className="h-full flex items-center">
              <ListItem className={`flex items-center text-sm font-semibold h-full xl:px-4 lg:px-2 rounded-none bg-transparent hover:bg-transparent transition-colors relative ${isActive('/contact') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}>
                Contact Us
                {isActive('/contact') && (
                  <span className="absolute bottom-0 left-[15px] right-[15px] h-[3px] bg-primary-blue rounded-t"></span>
                )}
              </ListItem>
            </Link>
          </Typography>
        </>
      )}
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <section className="backdrop-saturate-100 min-h-[40px] border-b border-gray-100 bg-[#f8fafd] hidden px-5 md:px-8 lg:px-12 xl:px-20 py-2 md:flex items-center font-sans w-full">
        <div className="flex w-full items-center justify-between flex-wrap gap-4">
          <p className="flex items-center gap-1.5 text-gray-600 text-[11px] font-semibold">
            <MdLocationPin className="text-primary-blue text-sm" />
            Plot No. 1, 3<sup>rd</sup> Floor Lalwani Complex, Above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026
          </p>
          <div className="flex items-center flex-wrap gap-6">
            <Link className="flex items-center gap-1.5 text-gray-600 text-[11px] font-semibold hover:text-primary-blue transition-colors" to="mailto:info@notioninsurance.com">
              <MdEmail className="text-primary-blue text-sm" />
              info@notioninsurance.com
            </Link>
            <span className="border-l border-gray-200 h-3"></span>
            <Link className="flex items-center gap-1.5 text-gray-600 text-[11px] font-semibold hover:text-primary-blue transition-colors" to="tel:91-9302182475">
              <MdAddCall className="text-primary-blue text-sm" />
              91-9302182475
            </Link>
            <span className="border-l border-gray-200 h-3"></span>
            <Link className="flex items-center gap-1.5 text-gray-600 text-[11px] font-semibold hover:text-primary-blue transition-colors" to="tel:0755-4911343">
              <MdAddCall className="text-primary-blue text-sm" />
              0755-4911343
            </Link>
          </div>
        </div>
      </section>
      <Navbar className="max-w-full md:sticky top-0 z-50 border-b border-gray-100 rounded-none px-5 md:px-8 lg:px-12 xl:px-20 py-0 bg-white shadow-sm font-sans w-full">
        <div className="flex h-[60px] md:h-[68px] lg:h-[76px] items-stretch justify-between text-blue-gray-900 w-full">
          <Link to='/' className="h-full flex items-center">
            <img
              src="/assets/images/header/logo.webp"
              alt="Notion insurance"
              loading='lazy'
              className="py-0 cursor-pointer object-contain h-full w-auto"
            />
          </Link>
          <div className="hidden lg:block h-full">
            <NavList />
          </div>
          <div className="hidden items-center lg:gap-3 lg:flex">
            <Link to="/login" rel="noopener noreferrer">
              <Button
                variant="outlined"
                className="text-xs uppercase font-bold text-primary-blue border border-primary-blue bg-white hover:bg-primary-blue hover:text-white px-5 py-2.5 rounded-none shadow-none hover:shadow-none transition-all duration-200 font-sans"
              >
                LOG IN
              </Button>
            </Link>
            <Link to="/become-a-posp" rel="noopener noreferrer">
              <Button
                variant="filled"
                className="text-xs uppercase font-bold text-white bg-primary-blue hover:bg-blue-800 px-5 py-2.5 rounded-none shadow-none hover:shadow-none transition-all duration-200 font-sans"
              >
                BECOME A POSP
              </Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList closeMenu={() => setOpenNav(false)} />
          <div className="flex w-full pb-3 flex-nowrap items-center gap-2 lg:hidden">
            <Link to="/login" className="w-full" rel="noopener noreferrer">
              <Button
                variant="outlined"
                size="sm"
                className="text-xs uppercase font-bold text-primary-blue border border-primary-blue bg-white w-full py-2 rounded-none shadow-none"
              >
                LOG IN
              </Button>
            </Link>
            <Link to="/become-a-posp" className="w-full" rel="noopener noreferrer">
              <Button
                variant="filled"
                size="sm"
                className="text-xs uppercase font-bold text-white bg-primary-blue w-full py-2 rounded-none shadow-none"
              >
                BECOME A POSP
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;


