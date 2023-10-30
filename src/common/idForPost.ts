let id = 1;

export const idGen = () => {
  console.log(id);
  return (id += 1);
};
