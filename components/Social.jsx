import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaDiscord, FaWhatsapp} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/olaife219"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abdulhameed-durodola-398100304"},
    { icon: <FaWhatsapp />, path: "https://wa.me/qr/AZYZTVB2BOX5E1"},
    { icon: <FaTwitter />, path: "https://www.x.com/abdulhamee9487"},
]
const Social = ( {containerStyles, iconStyles} ) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=> {
                return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
                );
            })}
        </div>
    );
};

export default Social