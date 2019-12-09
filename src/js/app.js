export default function attacksDesc(obj) {
  const result = [];
  obj.special.map((arr) => {
    if (!arr.description) {
      arr.description = 'Описание недоступно';
    }
    const {
      id, name, icon, description,
    } = arr;


    result.push([id, name, icon, description]);
  });
  return (result);
}
