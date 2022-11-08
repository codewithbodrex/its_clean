import { features } from "../constants";
import styles, { layout } from "../style";
import { flat04 } from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-primary text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-primary text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Cuci pakaian <br className="sm:block hidden" /> Dalam satu sentuhan.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Klik, Tunggu, dan Beres! Pakaianmu bersih dan wangi menunggumu
      </p>


    </div>

    <div className={layout.sectionImg}>
      <img src={flat04} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Business;
