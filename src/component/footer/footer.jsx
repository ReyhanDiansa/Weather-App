import { FaInstagram, FaGithub } from "react-icons/fa";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div class="footer">
        <p class="follow">Follow Reyhan Marsalino Diansa on:</p>
        <div class="row">
          <a href="https://www.instagram.com/reyhanmd._">
            <FaInstagram />
          </a>
          <a href="https://github.com/ReyhanDiansa">
            <FaGithub />
          </a>
        </div>
        <p class="follow">Indonesia Weather App</p>

        <div class="row">
          <p>Ini adalah website sederhana yang menampilkan cuaca saat ini</p>
          <p>dengan lokasi yang sudah anda inputkan,</p>
          <p>jika lokasi yang anda inputkan ketika di cari</p>
          <p>tidak segera muncul info cuacanya,</p>
          <p>
            berarti kemungkinan lokasi itu kurang tepat atau coba cara lain{" "}
          </p>
          <p>misal lebih di spesifikkan atau di generalkan</p>
        </div>
        <div class="row">
          <p>Copyright © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
