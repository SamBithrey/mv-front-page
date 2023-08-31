type Props = {
  number: number;
  text: string;
};

const StartSteps = ({ number, text }: Props) => {
  return (
    <div className="flexCenter flex-row">
      <div className="flexCenter w-[70px] h-[70px] rounded-3xl bg-[#323f5d]">
        <p className="font-bold text-xl text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-lg leading-8 text-[#B0B0B0]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
