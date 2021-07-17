import { useState } from 'react';

export default function CarEditRow({ car, onSave, onCancel }) {
  let [carForm, setCarForm] = useState(car);

  function handleChange(e) {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value,
    });
  }

  function save(carForm) {
    onSave(carForm);
  }

  console.log(carForm);

  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          name="make"
          value={carForm.make}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="model"
          value={carForm.model}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="year"
          value={carForm.year}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="color"
          value={carForm.color}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={carForm.price}
          onChange={handleChange}
        />
      </td>
      <td>
        <button type="button" onClick={() => save(carForm)}>
          Save
        </button>
        <button type="button" onClick={() => onCancel(carForm)}>
          Cancel
        </button>
      </td>
    </tr>
  );
}
