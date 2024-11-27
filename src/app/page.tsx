'use client';

import { useEffect, useState } from 'react';
import { TBreed } from '@/app/types';
import Link from 'next/link';

const Home = () => {
  const [breeds, setBreeds] = useState<TBreed[] | null>(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      const url = `https://api.thecatapi.com/v1/breeds?limit=20`;
      const response = await fetch(url, {
        headers: {
          'x-api-key': `${process.env.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setBreeds(json);
    };

    fetchBreeds();
  }, []);

  if (!breeds) {
    return;
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {breeds.map((breed: TBreed) => (
        <Link key={breed.id} className="text-sm" href={`/breed/${breed.id}`}>
          <div className="group relative">
            <div className="h-56 w-full overflow-hidden rounded-md lg:h-72 xl:h-80">
              <img
                src={breed.image.url}
                alt={breed.name}
                className="size-full object-cover"
              />
            </div>
            <div className="mt-4 text-sm">{breed.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
