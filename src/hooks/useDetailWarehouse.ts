/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useWarehouse() {
  const params = useParams();
  const id = params?.id;

  const [warehouse, setWarehouse] = useState({
    isLoading: false,
    data: {
      Active: true,
      Description: "",
      WarehouseID: "",
      LastSync: "",
      Branch: "",
      LastModifiedDateTime: "",
      ReplenishmentClass: "",
    },
  });

  const loadDataWarehouse = async () => {
    setWarehouse((prevState: any) => ({ ...prevState, isLoading: true }));
    try {
      const res = await fetch(
        `https://api.belajartableau.com/api/WarehouseReps/${id}`
      );
      const warehouseData: any = await res.json();

      setWarehouse({
        isLoading: false,
        data: warehouseData,
      });
    } catch (error) {
      setWarehouse({
        isLoading: false,
        data: {
          Active: true,
          Description: "",
          WarehouseID: "",
          LastSync: "",
          Branch: "",
          LastModifiedDateTime: "",
          ReplenishmentClass: "",
        },
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
