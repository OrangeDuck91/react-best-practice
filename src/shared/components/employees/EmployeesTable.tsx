import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Employee } from "./employee.model";
import { DummyEmployees } from "./employees.data";
import MissionChanger from "./MissionChanger";

export const EmployeesTable: FunctionComponent = () => {

    // Hook
    const [employees, setEmployees] = useState<Employee[]>(DummyEmployees);

    // Do the changes in parent
    const setEmployeeMission = (id: string, mission: string) => {
        const newArray = employees.map(el => {
            if (el.id === id) {
                el.mission = mission;
            }
            return el
        })
        setEmployees(newArray);
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Prénom</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Poste</TableCell>
                        <TableCell>Mission</TableCell>
                        <TableCell>Changer mission</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Loop on employees */
                        employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell component="th" scope="row">
                                    {employee.firstName}
                                </TableCell>
                                <TableCell>{employee.lastName}</TableCell>
                                <TableCell>{employee.poste}</TableCell>
                                <TableCell>{employee.mission}</TableCell>
                                <TableCell><MissionChanger setEmployee={setEmployeeMission} employeeId={employee.id} /></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}