import { BiFridge } from "react-icons/bi";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { IoLaptopOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TfiMobile } from "react-icons/tfi";
import {AiOutlineCamera} from 'react-icons/ai'
import {FaSolarPanel} from 'react-icons/fa'

const appliancesData = [
    {
        id: 1,
        name: "Laptops",
        icon: <IoLaptopOutline size={120} />,
    },
    {
        id: 2,
        name: "Mobiles & Tablets",
        icon: <TfiMobile size={120} />,
    },
    {
        id: 3,
        name: "Fridge",
        icon: <BiFridge size={120} />,
    },
    {
        id: 4,
        name: "TV",
        icon: <RiComputerLine size={120} />,
    },
    {
        id: 5,
        name: "Washing Machine",
        icon: <CgSmartHomeWashMachine size={120} />,
    },
    {
        id: 6,
        name: "Camera",
        icon: <AiOutlineCamera size={120} />,
    },
    {
        id: 7,
        name: "Solar Panels",
        icon: <FaSolarPanel size={120} />,
    }

]
export default appliancesData;