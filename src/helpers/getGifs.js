// debugger;
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3HSwm2l2FehunrjBCQRPABLum3E3tsAI&q=${category}&limit=20`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((imgs) => ({
    id: imgs.id,
    title: imgs.title,
    img: imgs.images.downsized_medium.url,
  }));

  return gifs;
};
