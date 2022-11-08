import { flat02 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Open all payment<br className="sm:block hidden" /> methods.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Cashless? Bukan masalah. Kamu tetap dapat mencuci pakaian kesukaan kamu dengan CuciIn.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={flat02} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
