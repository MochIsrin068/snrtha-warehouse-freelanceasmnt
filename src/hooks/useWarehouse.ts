import { useState, useEffect } from "react";

export default function useWarehouse() {
  const [warehouse, setWarehouse] = useState({
    isLoading: false,
    items: [],
  });

  const loadDataWarehouse = async () => {
    setWarehouse((prevState: any) => ({ ...prevState, isLoading: true }));
    try {
      const res = await fetch(
        "https://api.belajartableau.com/api/WarehouseReps"
      );
      const warehouseData: any = await res.json();

      setWarehouse({
        isLoading: false,
        items: warehouseData.map((item: any, index: number) => ({
          ...item,
          id: item?.WarehouseID,
          number: index + 1,
        })),
      });
    } catch (error) {
      setWarehouse({
        isLoading: false,
        items: [],
      });
    }
  };

  useEffect(() => {
    loadDataWarehouse();
  }, []);

  return {
    warehouse,
  };
}
