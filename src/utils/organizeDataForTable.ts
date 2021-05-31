import { PKDataEnum } from "./../enums/PKDataEnum";
import { TableHeader } from "../shared/Table/Table";

type IndexedHeaders = {
  [key: string]: TableHeader;
};

type OrganizedItem = {
  [key: string]: any;
};

export default function organizeData(
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
  console.log(data);

  const organizedData = data.map((item) => {
    const organizedItem: OrganizedItem = {};

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = item[key];
    });

    organizedItem[PKDataEnum.ID] = item[PKDataEnum.ID];

    return organizedItem;
  });

  return [organizedData, indexedHeaders];
}
