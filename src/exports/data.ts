import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import MobileOffRoundedIcon from "@mui/icons-material/MobileOffRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

export const footer_links = [
    {
        title: "Product",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

export const footer_social = [
    {
        link: "tel:+8801736817612",
        icon: PhoneIcon,
    },
    {
        link: "mailto:mdpahlovi07@gmail.com",
        icon: AlternateEmailIcon,
    },
    {
        link: "https://www.facebook.com/pahlovi07",
        icon: FacebookIcon,
    },
    {
        link: "https://www.linkedin.com/in/mdpahlovi/",
        icon: LinkedInIcon,
    },
    {
        link: "https://github.com/mdpahlovi",
        icon: GitHubIcon,
    },
];

export const service_process = [
    {
        icon: MobileOffRoundedIcon,
        title: "DAMAGED DEVICE",
        details: "If your device breaks, don't panic. We offer a huge range of mobile phone & tablet repair services.",
    },
    {
        icon: SendRoundedIcon,
        title: "SEND IT TO US",
        details: "We offer free postage with all mobile phone & table repairs. Saving you time and money. Just print the label and send.",
    },
    {
        icon: BuildRoundedIcon,
        title: "QUICK FIX",
        details:
            "Our trained technicians will repair your mobile phone or tablet device quickly & efficiently, keeping you informed all the way.",
    },
    {
        icon: ReplyRoundedIcon,
        title: "FAST RETURN",
        details: "Choose the delivery method that matches your requirements. We will make sure you repaired device is returned safely.",
    },
];

export const features = [
    { icon: LocalAtmRoundedIcon, title: "NO FIX, NO FEE", secondary: "Repair on Demand" },
    { icon: CalendarMonthRoundedIcon, title: "30 DAYS WARRANTY", secondary: "Guaranteed Service" },
    {
        icon: PeopleAltRoundedIcon,
        title: "EXPERT STAFF",
        secondary: "Available Anytime",
    },
    { icon: LocalShippingRoundedIcon, title: "WE ARE FAST", secondary: "Qualified Workers" },
];

export const survives = [
    {
        count: 2427,
        title: "Repaired Glasses",
    },
    {
        count: 697,
        title: "Water Damaged Repairs",
    },
    {
        count: 1440,
        title: "Unlocked Phones",
    },
    {
        count: 41472,
        title: "Happy Customers",
    },
];
