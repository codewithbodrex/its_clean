import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="download" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.cta}>Yuk Cobain Sekarang!</h2>
      <p className={`${styles.ctp} max-w-[470px] mt-5`}>
        Cara mudah dapat duid dari sampah
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
