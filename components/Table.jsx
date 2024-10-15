import ItemTable from './ItemTable';

const Table = ({ usuarios }) => {
  return (
    <div className="border border-green-500 p-4">
      <h2 className="text-green-500 text-lg font-bold mb-4">Usuarios</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-green-100">
          <tr>
            <th className="px-4 py-2 text-green-500 text-left">Nombre completo</th>
            <th className="px-4 py-2 text-green-500 text-left">Correo</th>
            <th className="px-4 py-2 text-green-500 text-left">Teléfono</th>
            <th className="px-4 py-2 text-green-500 text-left">Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <ItemTable key={index} usuario={usuario} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;