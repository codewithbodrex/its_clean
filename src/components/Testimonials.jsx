import {feedback, sec_card} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2}  text-center`}>
        Meet Our Team
      </h2>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}      
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center w-full feedback-container relative z-[1]">
      {sec_card.map((card) => <FeedbackCard key={card.id} {...card} />)}      
    </div>    
  </section>
);

export default Testimonials;
