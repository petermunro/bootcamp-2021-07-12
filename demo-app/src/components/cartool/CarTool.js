import { useState, useEffect } from 'react';
import axios from 'axios';
import CarForm from './CarForm';
import CarTable from './CarTable';
import Footer from '../generic/Footer';
import ToolHeader from '../generic/ToolHeader';

function CarTool() {
  const [cars, setCars] = useState([]);
  const [editCarId, setEditCarId] = useState(-1);

  function deleteCar(id) {
    setCars(cars.filter((car) => car.id !== id));
  }

  function addCar(car) {
    setCars([...cars, { ...car, id: Math.max(...cars.map((c) => c.id)) + 1 }]);
  }

  function saveCar(editedCar) {
    let indexToSave = cars.findIndex((car) => car.id === editedCar.id);
    let newCars = [...cars];
    newCars[indexToSave] = editedCar;
    setCars(newCars);
    setEditCarId(-1);
  }

  useEffect(
    () =>
      axios
        .get('http://localhost:3010/cars')
        .then((res) => setCars(res.data))
        .catch((err) => console.log(err)),
    []
  );

  return (
    <div>
      <ToolHeader label="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onEdit={(id) => setEditCarId(id)}
        onCancel={() => setEditCarId(-1)}
        onSave={(car) => saveCar(car)}
        onDelete={deleteCar}
      />
      <CarForm onSave={addCar} />
      <Footer footerText={'Copyright 2021. A Cool Company, Inc.'} />
    </div>
  );
}

export default CarTool;
