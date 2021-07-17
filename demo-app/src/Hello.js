let Hello = ({ firstname, lastname }) => {
  return (
    <div>
      <p>
        Hello, {firstname} {lastname}!
      </p>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  );
};

Hello.defaultProps = {
  firstname: 'Peter',
  lastname: 'Munro',
};

export default Hello;
