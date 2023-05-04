interface StatusProps {
  value: string;
}

export const Status = ({ value }: StatusProps) => {
  let statusBox = "";

  switch (value) {
    case "PAID":
      statusBox = "badge-success";
      break;
    case "PENDING":
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
