import React from "react";
import { SocialIcon } from "react-social-icons";

// Define social media URLs in an array
const socialIcons = [
    { url: 'https://facebook.com' },
    { url: 'https://instagram.com' },
    { url: 'https://linkedin.com' }
];

// Define footer link URLs in an array
const footerLinks = [
    { url: '/about', label: 'About NEKS' },
    { url: '/partners', label: 'Partners' },
    { url: '/projects', label: 'Projects' }
];
export default function Footer() {
    return(
        <footer>
            <section>
                <ul className="socialicons">
                    {/* Map through the socialIcons array to render icons dynamically */}
                    {socialIcons.map((icon, index) => (
                        <li key={index}>
                            <SocialIcon url={icon.url} className="social-icon" />
                        </li>
                    ))}
                </ul>
                <ul className={`footer-links`}>
                    {/* Map through the footerLinks array to render links dynamically */}
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className="footer-link">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    )
};