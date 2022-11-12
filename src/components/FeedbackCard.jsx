const FeedbackCard = ({ name, title, img }) => (
  <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 `}>
    <div className="flex justify-center">
      <img src={img} alt={name} className="w-[80%] h-[100%]" />
    </div>
    <div className="flex flex-col justify-center items-center m-2">
      <h4 className="font-poppins font-semibold text-[28px] leading-[32px] text-primary mt-2 ">
            {name}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-primary my-2">
            {title}
      </p>             
    </div>    
  </div>
);

export default FeedbackCard;