import CarViewRow from './CarViewRow';
import CarEditRow from './CarEditRow';

function CarTable({ cars, editCarId, onEdit, onCancel, onSave, onDelete }) {
  let carRows = cars.map((car) =>
    editCarId === car.id ? (
      <CarEditRow key={car.id} car={car} onSave={onSave} onCancel={onCancel} />
    ) : (
      <CarViewRow key={car.id} car={car} onEdit={onEdit} onDelete={onDelete} />
    )
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{carRows}</tbody>
    </table>
  );
}

export default CarTable;
