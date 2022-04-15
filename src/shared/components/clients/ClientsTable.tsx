import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent } from "react";
import { Client } from "./client.model";
import { DummyClients } from "./clients.data";

export const ClientsTable: FunctionComponent = () => {

    const clients: Client[] = DummyClients;

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Companie</TableCell>
                        <TableCell>Téléphone</TableCell>
                        <TableCell>Adresse</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((client) => (
                        <TableRow key={client.id}>
                            <TableCell component="th" scope="row">
                                {client.companyName}
                            </TableCell>
                            <TableCell>{client.phone}</TableCell>
                            <TableCell>{client.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}