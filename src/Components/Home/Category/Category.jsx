import Heading from "../../../Shared/Heading";
import Button from "../../../Shared/Button";
import DairyCat from "../../../assets/dairy-and-eggs.png";
import FruitsCat from "../../../assets/fruits-and-veggies.png";
import SeaFoodCat from "../../../assets/meat-and-seafood.png";

const Category = () => {
  const renderCard = category.map((card) => {
    return (
      <div className='md:flex-1 flex flex-col'>
        
        {/* Card Image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className='absolute bottom-0' alt="" />
        </div>

        {/* Card Content   Note: this card have some issue in desing.update could be needed*/} 
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-3xl text-zinc-800 font-bold">{card.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="py-20">
        <Heading title1="Shop" title2="by Category" />

        {/* Category Cards */}
        <div className="flex flex-wrap gap-10 md:mt-15">
          {renderCard}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description:
      "Fresh, organic produce sourced daily from local farmers. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality responsibly sourced meats and seafood. Choose from fresh cuts, marinated option, and more.",
    image: SeaFoodCat,
  },
];
