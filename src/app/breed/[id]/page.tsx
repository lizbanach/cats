import BreedCard from '@/app/components/BreedCard';

const Breed = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <div>{id && <BreedCard id={id} />}</div>;
};

export default Breed;
