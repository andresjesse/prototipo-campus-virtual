import React from "react";
import { useTable, useFilters } from "react-table";

import "./styles.css";

import schedule from "../../services/schedule";

import DefaultColumnFilter from "./DefaultColumnFilter";
import SelectColumnFilter from "./SelectColumnFilter";

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
        filterTypes,
      },
      useFilters
    );

  // Render the UI for your table
  return (
    <table
      {...getTableProps()}
      border={1}
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        {headerGroups.map((group) => (
          <tr {...group.getHeaderGroupProps()}>
            {group.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function ScheduleTable(props) {
  const data = React.useMemo(() => schedule, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Título",
        accessor: "title",
      },
      {
        Header: "Data",
        accessor: "date",
        Filter: SelectColumnFilter,
      },
      {
        Header: "Hora",
        accessor: "hour",
        Filter: SelectColumnFilter,
      },
      {
        Header: "Modalidade",
        accessor: "area",
      },
      {
        Header: "Evento",
        accessor: "event",
        Filter: SelectColumnFilter,
      },
    ],
    []
  );

  return (
    <div className="table-container global-shadow">
      <Table columns={columns} data={data} />
    </div>
  );
}
