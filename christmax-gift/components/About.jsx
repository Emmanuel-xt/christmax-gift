import Image from "next/image";
const steps = [
  {
    no: "1",
    img: "/assets/register2.png",
    title: "Register with your Code/Tech name",
    description:
      "Join the exchange by creating your account with a unique code name.Make it unique and cool, try names like 'SnowzyTech'😎",
  },
  {
    no: "2",
    img: "/assets/choose2.png",
    title: "Choose from a Techy/Christmax Gift Wishlist",
    description:
      "Explore a list of available tech-themed gifts , christmas wishes and more",
  },
  {
    no: "3",
    img: "/assets/select2.png",
    title: "Spread the Cheer",
    description:
      "Select a handfull of techies to suprise with your digital delights",
  },
  {
    no: "4",
    img: "/assets/watch2.png",
    title: "Random Magic",
    description:
      "Watch the magic unfold as the system randomly assigns your gift to a special tech buddy",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 relative">
      <h1 className="text-2xl font-bold text-yellow-500">How It Works</h1>
      {steps.map((step) => (
        <div
          className="flower flex flex-col items-center justify-center border w-[50%] p-4 gap-3"
          key={step.no}
        >
          <div className="bg-green-500 rounded-full p-1">
            <Image
              alt="description_img"
              src={step.img}
              width={60}
              height={60}
              className=""
            />
          </div>
          <h1 className=" text-red-500 font-bold text-center text-lg">{step.title}</h1>
          <p className="text-sm text-center font-bold">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
