
const Heading = (props) => {
  return (
    <>
      <div className="w-fit mx-auto text-center">
        <h2 className="md:text-5xl text-[2rem] font-bold">
          <span className="text-orange-500">{props.title1}</span> {props.title2}
        </h2>
        <div className="w-34 md:mt-6 mt-3 ml-auto h-1 bg-orange-300"></div>
      </div>
    </>
  );
};

export default Heading;
