import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FunctionComponent } from "react";
import { Client } from "./client.model";
import { DummyClients } from "./clients.data";

export const ClientsTable: FunctionComponent = () => {

    const clients: Client[] = DummyClients;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Companie</TableCell>
                        <TableCell>Téléphone</TableCell>
                        <TableCell>Adresse</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((client) => (
                        <TableRow
                            key={client.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
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