import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent } from "react";
import { Employee } from "./employee.model";
import { DummyEmployees } from "./employeesData";

export const EmployeesTable: FunctionComponent = () => {

    const employees: Employee[] = DummyEmployees;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Prénom</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Poste</TableCell>
                        <TableCell>Mission</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow
                            key={employee.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {employee.firstName}
                            </TableCell>
                            <TableCell align="right">{employee.lastName}</TableCell>
                            <TableCell align="right">{employee.poste}</TableCell>
                            <TableCell align="right">{employee.mission}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}