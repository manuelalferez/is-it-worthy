import { DocumentIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="w-full max-w-xl mx-auto px-4 md:px-0 py-4">
      <div className="flex justify-between items-center text-base-content">
        <span className="text-sm">
          Made by{" "}
          <a
            href="https://manuelalferez.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            manuelalferez
          </a>
        </span>
        <a
          href="https://manuelalferez.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm flex items-center"
        >
          <GlobeAltIcon className="h-4 w-4 mr-1" />
          About
        </a>
      </div>
    </footer>
  );
};

export default Footer;
