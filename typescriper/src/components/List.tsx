interface ListProps<T> {
  items: T[]; // Ang 'items' prop kay array sa generic type T
  onClick: (value: T) => void; // Ang 'onClick' kay function nga mudawat og isa ka value of type T, then walay return (void)
}
// Above: Kini nga interface gigamit para strongly-typed ang props nga i-pasa sa List component. Ang <T> kay generic type parameter.

function List<T extends { id: number; first: string; last: string }>(
  {
    items,
    onClick,
  }: ListProps<T> // Gidestructure nato ang props, gamit ang generic type na ListProps<T>
) {
  return (
    <>
      <h2>List of items</h2>

      {/* Gamit ta og .map() para iloop ang mga items sa array */}
      {items.map((item) => (
        <div key={item.id} onClick={() => onClick(item)}>
          {/* 
            Gi-render nato ang pangalan gamit ang item.first ug item.last 
            kay kabalo ta nga ang T type always naay 'first' ug 'last' properties tungod sa generic constraint
          */}
          <p>{item.first} {item.last}</p>
        </div>
      ))}
    </>
  );
}

export default List;
