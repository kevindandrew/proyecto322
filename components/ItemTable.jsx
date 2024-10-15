const ItemTable = ({ usuario }) => {
  return (
    <tr className="bg-white border-b border-red-500 hover:bg-gray-50">
      <td className="px-4 py-2 text-red-500">{usuario.nombreCompleto}</td>
      <td className="px-4 py-2 text-red-500">{usuario.correo}</td>
      <td className="px-4 py-2 text-red-500">{usuario.telefono}</td>
      <td className="px-4 py-2 text-red-500">{usuario.rol}</td>
    </tr>
  );
};

export default ItemTable;
