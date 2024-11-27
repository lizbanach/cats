import BreedCard from '@/app/components/BreedCard';

const Breed = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <div className="mt-10 flex items-center justify-center">
      {id && <BreedCard id={id} />}
    </div>
  );
};

export default Breed;
