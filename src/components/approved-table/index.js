import React from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { useHistory } from "react-router-dom";

import "./styles.css";

import dataSEI from "../../services/approved-papers-sei";

import DefaultColumnFilter from "./DefaultColumnFilter";
import SelectColumnFilter from "./SelectColumnFilter";

import icClose from "../../assets/icons/ic-close.png";

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
    //rows,
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
      initialState: { pageSize: 20 },
    },
    useFilters,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <div className="table-wrap">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((group) => (
              <tr {...group.getHeaderGroupProps()}>
                {group.headers.map((column) => (
                  <th
                    className="react-table-header-th"
                    {...column.getHeaderProps({
                      style: { width: column.width },
                    })}
                  >
                    {column.render("Header")}
                    <div className="react-table-header-filterdiv">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
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
      </div>

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

export default function DataTable(props) {
  const mergedData = [];

  dataSEI.map((entry) => mergedData.push({ event: "SEI", ...entry }));

  const data = React.useMemo(() => mergedData, []);

  const columns = React.useMemo(
    () => [
      // {
      //   Header: "ID",
      //   accessor: "id",
      //   width: 60,
      // },
      {
        Header: "Título",
        accessor: "title",
        width: 700,
      },
      {
        Header: "Primeiro Autor",
        accessor: "author",
        width: 300,
      },
      {
        Header: "Evento",
        accessor: "event",
        Filter: SelectColumnFilter,
        width: 80,
      },
    ],
    []
  );

  const history = useHistory();

  if (data.length > 0)
    return (
      <div className="table-container global-shadow">
        <h2 style={{ marginTop: "8px", marginBottom: 0 }}>Trabalhos Aceitos</h2>

        <Table columns={columns} data={data} />

        <img
          src={icClose}
          className="ic-close"
          alt="ícone para fechar modal"
          onClick={() => history.push("/")}
        />
      </div>
    );

  return (
    <div className="table-container global-shadow">
      <div className="temp-content">
        os dados serão disponibilizados em breve, aguarde...
      </div>

      <img
        src={icClose}
        className="ic-close"
        alt="ícone para fechar modal"
        onClick={() => history.push("/")}
      />
    </div>
  );
}
