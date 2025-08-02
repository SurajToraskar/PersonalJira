import axios from "axios";
import { useEffect, useState } from "react";
import type { ColumnProps } from "../types/jiraBoard";
import Column from "./Column";

export default function Jiraboard() {
  const [columns, setColumns] = useState<ColumnProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/jiraboard/");

        setColumns(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div>{columns && <Column columns={columns} />}</div>;
}
