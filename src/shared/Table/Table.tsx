import React from "react";
import { BsFillTrashFill, BsPencil, BsSearch } from "react-icons/bs";
import organizeData from "../../utils/organizeDataForTable";
import "./Table.scss";
import TooltipButton from "../TooltipButton";
import { PKDataEnum } from "../../enums/PKDataEnum";

export interface TableProps {
  data: any[];
  headers: TableHeader[];
  enableActions?: boolean;
  onDetail?: (item: any) => void;
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

export interface TableHeader {
  key: string;
  value: string;
  right?: boolean;
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
            {props.enableActions && (
              <th className="actions actions-text">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {organizedData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(row).map((item, i) =>
                  item !== PKDataEnum.ID ? (
                    <td
                      key={row[PKDataEnum.ID] + i}
                      className={indexedHeaders[item].right ? "right" : ""}
                    >
                      {row[item]}
                    </td>
                  ) : null
                )}

                {props.enableActions && (
                  <td className="actions right">
                    {props.onDetail && (
                      <div>
                        <div className="App">
                          <TooltipButton
                            dataFor="detailTip"
                            tooltip="Detail Product"
                            submit={true}
                            color="info"
                            outline={true}
                            onClick={() =>
                              props.onDetail && props.onDetail(row)
                            }
                            appendIcon={<BsSearch></BsSearch>}
                          ></TooltipButton>
                        </div>
                      </div>
                    )}
                    {props.onEdit && (
                      <TooltipButton
                        dataFor="EditTip"
                        tooltip="Edit Product"
                        submit={true}
                        color="dark"
                        outline={true}
                        onClick={() => props.onEdit && props.onEdit(row)}
                        appendIcon={<BsPencil></BsPencil>}
                      ></TooltipButton>
                    )}
                    {props.onDelete && (
                      <TooltipButton
                        dataFor="DeleteTip"
                        tooltip="Delete Product"
                        submit={true}
                        color="danger"
                        outline={true}
                        onClick={() => props.onDelete && props.onDelete(row)}
                        appendIcon={<BsFillTrashFill></BsFillTrashFill>}
                      ></TooltipButton>
                    )}
                  </td>
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
