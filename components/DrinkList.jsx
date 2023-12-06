import Link from "next/link";
import React from "react";
import Image from "next/image";

export const DrinkList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks?.map((drinkItem) => (
        <li key={drinkItem?.idDrink}>
          <Link
            href={`drinks/${drinkItem.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drinkItem.strDrinkThumb}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200ox) 50vw"
                alt={drinkItem.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            {drinkItem?.strIngredient1}
          </Link>
        </li>
      ))}
    </ul>
  );
};
