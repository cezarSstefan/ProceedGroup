// CONSTRUCTOR - Passing id of Cockpit Connector to create new connector object
const accounts = new Connector("718C69A9-A5B3-ED11-A8E0-000D3ADA944E");

// FIELDCATALOG
async function getFieldCatalog() {
    console.log(await accounts.getFieldCatalog());
}

getFieldCatalog();

// LIST
async function list() {
    let options = {
        fields: [
            { name: "ClearingStatus" },
            { name: "CompanyName" },
            { name: "CompanyCode" },
            { name: "Customer" },
            { name: "CustomerName" },
            { name: "AmountInTransactionCurrency" },
        ],
    };

    const response = await accounts.list(options);
    console.log(response.result);
    modelTableAccounts.setData(response.result);
}

// PAGINATION - Enable
accounts.enablePagination({ table: TableAccounts, take: 15 });

// PAGINATION - Auto Column Sorting
accounts.enableColumnSorting({ column: colTableClearingStatus, field: "ClearingStatus" });
accounts.enableColumnSorting({ column: colTableCustomerName, field: "CustomerName" });

list();
