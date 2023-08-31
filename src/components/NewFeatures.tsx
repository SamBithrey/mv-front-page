type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeatures = ({ imgUrl, title, subtitle }: Props) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div className="flexCenter w-[70px] h-[70px] bg-[#323f5d] rounded-3xl">
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] font-bold leading-[30px] text-white text-2xl">
        {title}
      </h1>
      <p className="flex-1 mt-4 font-normal text-lg leading-8 text-[#B0B0B0]">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
