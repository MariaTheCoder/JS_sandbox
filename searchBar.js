const data = {
  library1: {
    tables: [
      {
        tableName: "tableName1",
        columns: [
          {
            columnName: "columnName1",
            columnType: "columnType1",
            columnLength: "columnLength1",
          },
        ],
      },
      {
        tableName: "tableName2",
        columns: [
          {
            columnName: "columnName1",
            columnType: "columnType1",
            columnLength: "columnLength2",
          },
        ],
      },
      {
        tableName: "tableName3",
        columns: [
          {
            columnName: "columnName3",
            columnType: "columnType3",
            columnLength: "columnLength3",
          },
        ],
      },
    ],
  },
  library2: {
    tables: [
      {
        tableName: "tableName1",
        columns: [
          {
            columnName: "columnName1",
            columnType: "columnType1",
            columnLength: "columnLength1",
          },
        ],
      },
      {
        tableName: "tableName2",
        columns: [
          {
            columnName: "columnName2",
            columnType: "columnType2",
            columnLength: "columnLength2",
          },
        ],
      },
      {
        tableName: "tableName3",
        columns: [
          {
            columnName: "columnName3",
            columnType: "columnType3",
            columnLength: "columnLength3",
          },
        ],
      },
    ],
  },
};

function findX(object, searchTerm) {
  let res = [];

  for (const library in object) {
    if (library === searchTerm) {
      res.push({ library: library });
    }

    object[library].tables.forEach((table) => {
      if (table.tableName === searchTerm) {
        res.push({ library, table: table.tableName });
      }

      table.columns.forEach((column) => {
        if (column.columnName === searchTerm) {
          res.push({
            library,
            table: table.tableName,
            column: column.columnName,
          });
        }
      });
    });
  }

  // object[key].tables.forEach((table) => {
  //   if (table.tableName === x) {
  //     res.library = key;
  //     res.table = table.tableName;
  //   }

  //   for (const columnName in table.columns) {
  //     table.columns.forEach((column) => {
  //       if (column.columnName === x) {
  //         res.library = key;
  //         res.table = table.tableName;
  //         res.column = column.columnName;
  //       }
  //     });
  //   }
  // });
  // }
  console.log(res);
}

findX(data, "tableName1");
