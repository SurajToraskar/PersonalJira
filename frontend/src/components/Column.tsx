import type { ColumnProps } from "../types/jiraBoard";

export default function Column({ columns }: { columns: ColumnProps[] }) {
  return (
    <div className="w-full flex  justify-around">
      {columns.length > 0 &&
        columns.map((column) => {
          return (
            <div key={column.id} className="flex-1">
              <div>
                {" "}
                <h1 className="text-center">{column.name}</h1>
              </div>
            </div>
          );
        })}
    </div>
  );
}
