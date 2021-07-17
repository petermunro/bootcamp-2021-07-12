function CarViewRow({ car, onEdit, onDelete }) {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => onEdit(car.id)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(car.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CarViewRow;
