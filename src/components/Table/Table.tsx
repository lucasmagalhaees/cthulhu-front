import React from "react";
import "./Table.scss";

export interface TableProps {
  data: any[];
  headers: TableHeader[];
}

export interface TableHeader {
  key: string;
  value: string;
  right?: boolean;
}

type IndexedHeaders = {
  [key: string]: TableHeader;
};

type OrganizedItem = {
  [key: string]: any;
};

function organizeData(
  data: any[],
  headers: TableHeader[]
): [OrganizedItem[], IndexedHeaders] {
  const indexedHeaders: IndexedHeaders = {};

  headers.forEach((header) => {
    indexedHeaders[header.key] = {
      ...header,
    };
  });

  const headerKeysInOrder = Object.keys(indexedHeaders);

  const organizedData = data.map((item) => {
    const organizedItem: OrganizedItem = {};

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = item[key];
    });

    organizedItem.$original = item;

    return organizedItem;
  });

  return [organizedData, indexedHeaders];
}

const AppTable: React.FC<TableProps> = (props) => {
  const _headers = props.headers;
  const _data = props.data;
  const [organizedData, indexedHeaders] = organizeData(_data, _headers);

  return (
    <div>
      <table className="AppTable">
        <thead className="bg-info">
          <tr>
            {_headers.map((header) => (
              <th className={header.right ? "right" : ""} key={header.key}>
                {header.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {organizedData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(row).map((item, i) =>
                  item !== "$original" ? (
                    <td
                      key={row.$original.id + i}
                      className={indexedHeaders[item].right ? "right" : ""}
                    >
                      {row[item]}
                    </td>
                  ) : null
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
