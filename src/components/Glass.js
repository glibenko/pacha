export const Glass = ({ first = false, hidden = true, small = true }) => {
  if (!first) {
    return (
      <div
        style={{ width: small ? 48 : 34, height: small ? 100 : 68 }}
        className="flex justify-center"
      >
        <img
          style={{ width: small ? 52 : 36 }}
          className={`absolute z-50 ${hidden ? "hidden" : ""}`}
          src={require("./imgs/glass_2.png")}
          alt="guest"
        />
      </div>
    );
  }

  return (
    <div
      style={{ width: small ? 46 : 34, height: small ? 130 : 80 }}
      className="flex justify-center"
    >
      <img
        style={{ width: small ? 72 : 49 }}
        className={`absolute ${hidden ? "hidden" : ""}`}
        src={require("./imgs/glass_1.png")}
        alt="guest"
      />
    </div>
  );
};
