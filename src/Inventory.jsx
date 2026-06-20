export const InventoryCards = ({ inventory }) => {
  return (
    <div>
      <h2>Inventory cards</h2>
      {inventory.map((item) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <div>{item.name} : </div>
            <div
              style={{
                backgroundColor:
                  item.stock === 0
                    ? "red"
                    : item.stock <= 5
                      ? "orange"
                      : "lightgreen",
              }}
            >
              {item.stock === 0
                ? "Sold Out ❌"
                : item.stock <= 5
                  ? "Only Few Left ⚠️"
                  : "Available ✅"}
            </div>
          </div>
        );
      })}
    </div>
  );
};
