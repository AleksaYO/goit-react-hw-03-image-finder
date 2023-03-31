export function SearchImages(value, page) {
  const URL = `https://pixabay.com/api/?q=${value}&page=${page}&key=33670371-d942f4f25aae3d20fc7b6df7e&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL)
    .then(data => data.json())
    .then(res => {
      if (res.hits.length === 0) {
        throw new Error('По этому запросу ничего не найдено');
      }
      return res;
    });
}
