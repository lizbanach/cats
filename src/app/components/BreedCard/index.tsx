'use client';

import { useEffect, useState } from 'react';

type BreedCardProps = {
  id: string;
};

const BreedCard = ({ id }: BreedCardProps) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.thecatapi.com/v1/breeds/${id}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (!data) {
    return;
  }

  const { name, description, temperament, origin, life_span: lifeSpan } = data;

  return (
    <div className="overflow-hidden bg-petal rounded-lg max-w-[60rem] w-full">
      <div className="px-8 py-12 sm:px-10">
        {name && (
          <h3 className="text-xl/6 font-semibold text-pretty">{name}</h3>
        )}
        {description && <p className="mt-4 text-md/6">{description}</p>}
      </div>

      <div className="border-t border-lavender">
        <dl className="divide-y divide-lavender">
          {temperament && (
            <div className="px-8 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
              <dt className="text-sm/6 font-medium">Temperament</dt>
              <dd className="text-sm/6 sm:col-span-2">{temperament}</dd>
            </div>
          )}
          {origin && (
            <div className="px-8 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
              <dt className="text-sm/6 font-medium ">Origin</dt>
              <dd className="text-sm/6 sm:col-span-2">{origin}</dd>
            </div>
          )}
          {lifeSpan && (
            <div className="px-8 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-10">
              <dt className="text-sm/6 font-medium ">Life Span</dt>
              <dd className="text-sm/6 sm:col-span-2">{lifeSpan} years</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default BreedCard;
