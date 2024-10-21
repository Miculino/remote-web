// Icons
import HireIcon from "../icons/HireIcon";
import MagnifierPlusIcon from "../icons/MagnifierPlusIcon";
import PayrollIcon from "../icons/PayrollIcon";
import UserHeartIcon from "../icons/UserHeartIcon";

export const PRODUCT_HIGHLIGHTS_LIST = [
  {
    title: "Payroll",
    url: "https://remote.com/global-hr/global-payroll",
    description:
      "Payday just got even better. Ensure accurate and on-time payroll in every country, every time. Run payroll with confidence, with our expert in-house payroll support.",
    benefits: [
      "Self-serve in minutes",
      "Reliable and accurate across the globe",
      "Expertise at your fingertips",
    ],
    illustration: "/product_showcase/Global_Payroll_View.svg",
    feature: "payroll",
  },
  {
    title: "Employer of Record",
    url: "https://remote.com/global-hr/employer-of-record",
    description:
      "Stay flexible while you grow. Hire employees in new countries in days instead of months - without a local entity. Full compliance, payroll, and HR support as standard.",
    benefits: [
      "Locally compliant, no matter the location",
      "One platform covers your whole team from Albania to Vietnam",
      "Fair and transparent pricing means no surprise charges",
    ],
    illustration: "/product_showcase/Employer_of_Record_View.svg",
    feature: "employer-of-record",
  },
];

export const PRODUCT_HIGHLIGHT_ITEMS = [
  {
    title: "Find",
    description:
      "The best person for the job could be anywhere in the world. Connect with top jobseekers for your open roles.",
    icon: MagnifierPlusIcon,
  },
  {
    title: "Hire",
    description:
      "Add new employees quickly and in full compliance with local laws. Manage everything from offer to onboarding, all in one place.",
    icon: HireIcon,
  },
  {
    title: "Pay",
    description:
      "Run payroll with confidence across multiple countries, without ever opening a spreadsheet.",
    icon: PayrollIcon,
  },
  {
    title: "Manage",
    description:
      "Store employee data, simplify expenses and time off, and consolidate your HR tools. Everything you need is right here.",
    icon: UserHeartIcon,
  },
];
