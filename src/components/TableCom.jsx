import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { columns } from "../constants/constants.js";

function TableCom({ rowData, page, isDisable, setPage, length }) {
    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden', margin: "auto" }} className='shadow-3xl'>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rowData.map((item) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                        {columns.map((pos) => {
                                            const value = item[pos.id];
                                            return (
                                                <TableCell key={pos.id} align={pos.align}>
                                                    {pos.format && typeof value === 'number' ? pos.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='flex justify-evenly items-center py-5'>
                    <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1 ? true : false} className={`p-3  shadow-md text-white font-bold rounded-lg duration-300 hover:duration-300  cursor-pointer ${page === 1 ? "bg-slate-500" : "bg-blue-500 hover:bg-blue-700"}`}>Prev</button>
                    <h3>Page No: {page} - Data Count: {length}</h3>
                    <button onClick={() => setPage((prev) => prev + 1)} disabled={isDisable} className={`p-3  shadow-md text-white font-bold rounded-lg duration-300 hover:duration-300  cursor-pointer ${isDisable ? "bg-slate-500" : "bg-blue-500 hover:bg-blue-700"}`}>Next</button>
                </div>
            </Paper >
        </div >
    )
}

export default TableCom;