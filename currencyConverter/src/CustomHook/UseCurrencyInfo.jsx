import React, { useEffect } from "react";

const UseCurrencyInfo = (Currency) => {
  let amountData = `https://v6.exchangerate-api.com/v6/7ab68b39e1c40d3f55545c85/latest/${Currency}`;
  const [data, setData] = React.useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(amountData);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [Currency]);

  return data;
};

export default UseCurrencyInfo;
