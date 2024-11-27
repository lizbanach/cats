export type TImage = {
  id: string;
  width: number;
  height: number;
  url: string;
};

export type TBreed = {
  id: string;
  name: string;
  image: TImage;
  url: string;
};
