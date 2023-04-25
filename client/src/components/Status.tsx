interface StatusProps {
  value: "paid" | "pending" | "draft";
}

export const Status = ({ value }: StatusProps) => {
  let statusBox = "";

  switch (value) {
    case "paid":
      statusBox = "badge-success";
      break;
    case "pending":
      statusBox = "badge-warning";
      break;
  }

  return (
    <>
      <p className={`badge badge-outline p-4 rounded-lg ${statusBox}`}>
        {value}
      </p>
    </>
  );
};
