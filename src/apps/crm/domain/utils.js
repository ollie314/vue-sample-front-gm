const format = new Intl.DateTimeFormat("en-US");

export const toDate = (d) => {
  return format.format(new Date(d * 1000));
};

export const toStatusString = (s) => {
  switch (s) {
    case 0:
      return "opened";
    case 1:
      return "pending";
    case 2:
      return "closed";
    case 3:
      return "canceled";
    default:
      return "unknown";
  }
};
