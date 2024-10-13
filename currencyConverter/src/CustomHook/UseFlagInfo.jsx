import React, { useEffect } from "react";

const UseCurrencyInfo = (options) => {
  let flagData = `https://flagsapi.com/${options}/flat/64.png`
  const [data, setData] = React.useState({});

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        fetch(flagData).then((res)=> res.json()).then((data)=>{
            setData(data);
        })
      } catch (error) {
        
      }
    }
    fetchFlag();
  }, [options]);

  return data;
};

export default UseCurrencyInfo;