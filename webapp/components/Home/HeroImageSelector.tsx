interface ImageSelector {
  currentSlide: number;
  setCurrentSlide: Function;
}

interface Button {
  currentSlide: number;
  slideNumber: number;
  setCurrentSlide: Function;
}

const HeroImageSelector = ({ currentSlide, setCurrentSlide }: ImageSelector) => {
  //This component takes in the current slide and the function to change the slides, and passes it to the buttons.
  return (
    <div className="mt-8 flex gap-5 lg:ml-12 lg:mt-6">
      <SelectButton slideNumber={0} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
      <SelectButton slideNumber={1} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
      <SelectButton slideNumber={2} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
      <SelectButton slideNumber={3} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
    </div>
  );
};

const SelectButton = ({ currentSlide, slideNumber, setCurrentSlide }: Button) => {
  // Each button has an assigned "slide number", when the button is clicked the currently selected slide changes to match the attribute slide number.
  // Example: Slide 0 (zero index array) will get selected if the first button is pressed, and that corresponds to the first entry in the Slider Data array.
  return (
    <button
      onClick={() => setCurrentSlide(slideNumber)}
      className={`${
        currentSlide === slideNumber ? "bg-moon-secondary" : "bg-white bg-opacity-20"
      } transition-all duration-150 w-11 lg:w-8 2xl:w-11 h-1 xl:h-[6px] rounded`}
    ></button>
  );
};

export default HeroImageSelector;
