import React from "react";
import { useTable, useFilters, usePagination } from "react-table";

import "./styles.css";

import schedule from "../../services/schedule";
import externalURLs from "../../services/external-urls";

import DefaultColumnFilter from "./DefaultColumnFilter";
import SelectColumnFilter from "./SelectColumnFilter";

import icConference from '../../assets/icons/ic-google-meet.svg'

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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: { pageSize: 10 },
    },
    useFilters,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} border={1}>
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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Página{" "}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{" "}
        </span>
        <span>
          | Ir para página:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
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
        Cell: cellInfo => (
          <a href={
            externalURLs[cellInfo.row.original.room]
          }>
            <img src={icConference} alt="icone conferencia" className="ic-conference"/>
            {cellInfo.row.original.title}
          </a>
        )
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
