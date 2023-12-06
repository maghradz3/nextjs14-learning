import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchSingleDrink = async (id) => {
  const responese = await fetch(`${url}${id}`);
  if (!responese.ok) {
    throw new Error("Failed to fetch a drink");
  }
  const data = await responese.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const data = await fetchSingleDrink(params.id);

  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0].strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btun-primary mt-8 mb-12">
        {" "}
        back to drinks
      </Link>
      <h1 className="text-4xl">{title}</h1>
      <Image
        src={imgSrc}
        className=" w-48 h-48 rounded-lg shadow-xl mb-4"
        width={300}
        height={300}
        priority
        alt="drink "
      />
    </div>
  );
};

export default SingleDrinkPage;
