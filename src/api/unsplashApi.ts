import axios from "axios";

export type UnsplashImage = {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
};

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 8;

export const getImages = async (
  inputValue: string | undefined,
  page: number,
) => {
  const response = await axios.get(
    `${API_URL}?query=${inputValue}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`,
  );

  return response.data;
};
