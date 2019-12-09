const attacksDesc = (obj) => (
  obj.special.map((arr) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = arr;

    return {
      id,
      name,
      icon,
      description,
    };
  })
);
export default attacksDesc;
