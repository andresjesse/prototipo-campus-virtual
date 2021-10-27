import React from "react";

function sortSet(set) {
  const entries = [];
  for (const member of set) {
    entries.push(member);
  }
  set.clear();
  for (const entry of entries.sort()) {
    set.add(entry);
  }
  return set;
}

// This is a custom filter UI for selecting
// a unique option from a list
export default function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    sortSet(options);
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">-</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
