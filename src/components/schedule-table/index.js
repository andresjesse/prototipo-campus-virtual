import React from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { useHistory } from "react-router-dom";

import Papa from "papaparse";
import renameModerador from "../../services/rename-moderador";

import "./styles.css";

//import schedule from "../../services/schedule-demo";
import externalURLs from "../../services/external-urls";

import DefaultColumnFilter from "./DefaultColumnFilter";
import SelectColumnFilter from "./SelectColumnFilter";

import icConference from "../../assets/icons/ic-google-meet.svg";
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
      <div className="table-wrap small-font-table">
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

export default function ScheduleTable(props) {
  //const data = React.useMemo(() => schedule, []);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const response = fetch(externalURLs["csv-schedule"])
      .then((response) => response.text())
      .then((data) => Papa.parse(data, { header: true }))
      .catch((err) => console.log(err));

    response.then((arr) => {
      // console.log(arr);
      arr.data.forEach((obj) => {
        // console.log(obj);
        obj.horario = obj.horario.split("-")[0];

        if (obj.dia === "#N/A") obj.dia = "Indisponível";
        if (obj.horario === "#N/A") obj.horario = "Indisponível";
        if (obj.moderador === "#N/A") obj.moderador = "Indisponível";

        if (obj.moderador in renameModerador)
          obj.moderador = renameModerador[obj.moderador];
      });
      setData(arr.data);
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Evento",
        accessor: "evento",
        Filter: SelectColumnFilter,
        width: "5%",
      },
      {
        Header: "ID",
        accessor: "id",
        width: "5%",
      },
      {
        Header: "Título do Trabalho",
        accessor: "titulo",
        Cell: (cellInfo) => (
          <a href={cellInfo.row.original.link_virtual}>
            <img
              src={icConference}
              alt="icone conferencia"
              className="ic-conference"
            />
            {cellInfo.row.original.titulo}
          </a>
        ),
        width: "30%",
      },
      {
        Header: "Primeiro Autor",
        accessor: "autor",
        width: "20%",
      },
      {
        Header: "Data",
        accessor: "dia",
        Filter: SelectColumnFilter,
        width: "5%",
      },
      {
        Header: "Hora",
        accessor: "horario",
        Filter: SelectColumnFilter,
        width: "5%",
      },
      {
        Header: "Modalidade",
        accessor: "modalidade",
        Filter: SelectColumnFilter,
        width: "10%",
      },
      {
        Header: "Moderador",
        accessor: "moderador",
        Filter: SelectColumnFilter,
        width: "10%",
      },
    ],
    []
  );

  const history = useHistory();

  if (data.length > 0)
    return (
      <div className="table-container global-shadow">
        <h2 style={{ marginTop: "8px", fontSize: "14pt", marginBottom: 0 }}>
          Apresentações
        </h2>

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
      <div className="temp-content">Aguarde, carregando...</div>

      <img
        src={icClose}
        className="ic-close"
        alt="ícone para fechar modal"
        onClick={() => history.push("/")}
      />
    </div>
  );
}
