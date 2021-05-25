import React from "react";
import "./CustomTable.scss";
import organizeData from "../../utils/organizeDataForTable";
import { BsFillTrashFill, BsPencil, BsSearch } from "react-icons/bs";

export interface TableHeader {
  key: string;
  value: string;
  right?: boolean;
}
declare interface TableProps {
  headers: TableHeader[];
  data: any[];

  enableActions?: boolean;

  onDelete?: (item: any) => void;
  onDetail?: (item: any) => void;
  onEdit?: (item: any) => void;
}

const CustomTable: React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(
    props.data,
    props.headers
  );

  return (
    <table className="AppTable">
      <thead>
        <tr>
          {props.headers.map((header) => (
            <th className={header.right ? "right" : ""} key={header.key}>
              {header.value}
            </th>
          ))}
          {props.enableActions && <th className="right">Actions</th>}
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

              {props.enableActions && (
                <td className="actions right">
                  {props.onDetail && (
                    <button
                      className="mr-3 btn btn-outline-info"
                      type="button"
                      onClick={() => props.onDetail && props.onDetail(row)}
                    >
                      <BsSearch></BsSearch>
                    </button>
                  )}

                  {props.onEdit && (
                    <button
                      className="mr-3 btn btn-outline-warning"
                      type="button"
                      onClick={() => props.onEdit && props.onEdit(row)}
                    >
                      <BsPencil></BsPencil>
                    </button>
                  )}

                  {props.onDelete && (
                    <button
                      className="btn btn-outline-danger round"
                      type="button"
                      onClick={() => props.onDelete && props.onDelete(row)}
                    >
                      <BsFillTrashFill></BsFillTrashFill>
                    </button>
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
