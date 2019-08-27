import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import {makeStyles} from "@material-ui/styles";
import {Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";

const PlanetaryWrap = styled.div`
    
`;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

function PlanetaryView(props) {
    const {
        rows
    } = props;

    const classes = useStyles();

    return (
        <PlanetaryWrap>
            <h2>Planetaries</h2>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </PlanetaryWrap>
    );
}

export default PlanetaryView;

PlanetaryView.propTypes = {
    rows: PropTypes.array
};
