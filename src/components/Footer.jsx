import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Harsh Vardhan</p>
    </footer>
  );
}

export default Footer;
