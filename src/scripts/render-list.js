const renderList = (data) => `
  <div class="data-list-card" id="${data.id}">
      <h3>Order Details</h3>
      <div class="order-detail">
        <table>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>${data.name}</td>
            </tr>

            <tr>
              <td>ID</td>
              <td>:</td>
              <td>${data.id}</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>:</td>
              <td>Rp. ${data.totalPrice}</td>
            </tr>

            <tr>
              <td>Order Progress</td>
              <td>:</td>
              <td><div class="order-progress"></div>${data.status}</td>
            </tr>

            <tr>
              <td>Payment Status</td>
              <td>:</td>
              <td><div class="payment-status"></div>${data.paymentStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

export default renderList;
