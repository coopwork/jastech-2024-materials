import { FaYoutube, FaInstagram, FaGithub} from "react-icons/fa";

const socialLinks = [
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://github.com", icon: <FaGithub /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-black ">
            <div className="container mx-auto flex justify-center flex-col gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                </p>

                <div className="flex justify-between items-center gap-4  md:justify-start">
                    <p className="text-center text-sm font-extralight md:text-left font-zentry">Final project</p>

                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                </div>
        </footer>
    );
};

export default Footer;
