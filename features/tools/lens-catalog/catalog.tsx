import { searchOpticaStore } from "./utils/search-optica-store"
import { CATALOG_TECNI_OPTICA } from "./data/company-tecni-optica/catalog-tecni-optica"
import { CATALOG_TABLE_COLUMNS } from "./data/catalog-table-columns"
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from "@/components/ui"
import { mapCatalogToRow } from "./logic/catalog-row"
import { formatCatalogCellValue } from "./utils/format-catalog-cell-value"

export const Catalog = () => {
    const { monofocal } = searchOpticaStore(CATALOG_TECNI_OPTICA)

    return (
        <section className="overflow-x-auto">
            <Table className="min-w-full">
                <TableHeader>
                    <TableRow>
                        {CATALOG_TABLE_COLUMNS.map(({ tableTitle, Ico, tableKey }) => (
                            <TableHead key={tableKey}>
                                {Ico ? <Ico className="mx-auto" /> : tableTitle}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {monofocal.map((lensItem) => {
                        const row = mapCatalogToRow(lensItem)
                        return (
                            <TableRow key={lensItem.key}>
                                {CATALOG_TABLE_COLUMNS.map(({ tableKey }) => {
                                    const value = row[tableKey]

                                    return (
                                        <TableCell key={tableKey}>
                                            {formatCatalogCellValue(value)}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </section>
    )
}
