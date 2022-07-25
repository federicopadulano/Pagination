const paginate = (followers) => {
  const pageItems = 9;
  const page = Math.ceil(followers.length / pageItems);
  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * pageItems;
    return followers.slice(start, start + pageItems);
  });
  return newFollowers;
};

export default paginate;
