import "./OrderHistory.css";

export default function OrderHistory() {
  return (
    <div className="OrderHistoryPage">
      <div className="ohp-tablepart">
        <table className="ohTable">
          <thead>
            <tr>
              <th className="ohProduct ohpImg">IMAGE</th>
              <th className="ohProduct ohpName">PRODUCT NAME</th>
              <th className="ohProduct ohpPrice">PRICE</th>
              <th className="ohProduct ohpSub">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ohImgCol">
                <div className="ohImg">
                  <img
                    alt="product"
                    src="https://cdn.shopify.com/s/files/1/0650/2190/3084/files/botanica_web_x800.jpg?v=1678152160"
                  ></img>
                </div>
              </td>
              <td className="ohName"> Modern Sofa</td>
              <td className="ohPrice">&#8380; 288.0</td>
              <td className="ohAdding">
                28.03.2023
              </td>
            </tr>
            <tr>
              <td className="ohImgCol">
                <div className="ohImg">
                  <img
                    alt="product"
                    src="https://cdn.shopify.com/s/files/1/0650/2190/3084/files/botanica_web_x800.jpg?v=1678152160"
                  ></img>
                </div>
              </td>
              <td className="ohName"> Modern Sofa</td>
              <td className="ohPrice">&#8380; 288.0</td>
              <td className="ohAdding">
                28.03.2023
              </td>
            </tr>
            <tr>
              <td className="ohImgCol">
                <div className="ohImg">
                  <img
                    alt="product"
                    src="https://cdn.shopify.com/s/files/1/0650/2190/3084/files/botanica_web_x800.jpg?v=1678152160"
                  ></img>
                </div>
              </td>
              <td className="ohName"> Modern Sofa</td>
              <td className="ohPrice">&#8380; 288.0</td>
              <td className="ohAdding">
                28.03.2023
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
