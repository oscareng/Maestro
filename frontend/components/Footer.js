import React from "react";

const Footer = () => {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi, look this new app: ");

  const miniIcons = [
    {
      id: 1,
      link: "https://www.spotify.com/us/",
      icon: "Spotify_Icon_CMYK_White.png",
    },
    {
      id: 2,
      link: "https://github.com/oscareng/Maestro",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU",
    },
    {
      id: 5,
      link: `https://www.linkedin.com/in/oscar-rolf-3539881b7/`,
      icon: "https://www.citypng.com/public/uploads/preview/hd-white-square-outline-linkedin-in-icon-symbol-png-31623972553hxk4l9ziuw.png",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-icons">
        {miniIcons.map((miniIcon) => (
          <a
            key={miniIcon.id}
            href={miniIcon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer-icon" src={miniIcon.icon} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
