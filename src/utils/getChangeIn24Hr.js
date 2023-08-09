const getChangeIn24Hr = (change) => {
    const calcChange = Number(change.slice(1)).toFixed(2);
    if (change[0] === "-") {
      return "-" + calcChange + "%";
    }
    return "+" + calcChange + "%";
  };
  
  export { getChangeIn24Hr };
  