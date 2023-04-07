import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nama</th>
        <th>Cabang (25/qty)</th>
        <th>Dealer (40/qty)</th>
        <th>COD (60/qty)</th>
        <th>JTR (65/qty)</th>
        <th>Gosend (75/qty)</th>
        <th>Reguler (200/sku)</th>
        <th>Total Fee</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.cabang}</td>
            <td>{user.dealer * 40}</td>
            <td>{user.cod * 60}</td>
            <td>{user.jtr * 65}</td>
            <td>{user.gosend * 75}</td>
            <td>{user.reguler * 200}</td>
            <td>{user.total = parseInt(user.cabang * 25) + parseInt(user.dealer * 40) + parseInt(user.cod * 60) + parseInt(user.jtr * 65) + parseInt(user.gosend * 75) + parseInt(user.reguler * 200)}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
