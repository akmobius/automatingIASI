import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//import data
import JSONdata from './example.json';

//styles
const styles = theme => ({
  root: {
    minWidth: 50,
    maxWidth: 100
  }
});

export class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({data: JSONdata})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TableContainer component={Paper}>
            <Table className={classes.root} aria-label="simple table" style={{ width: 400, margin: 'auto' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Latitude&nbsp;(degrees)</TableCell>
                  <TableCell align="right">Longitude&nbsp;(degrees)</TableCell>
                  <TableCell align="right">Methane&nbsp;(WAHDLFJASDF)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map((row) => (
                  <TableRow key={row.ID}>
                    <TableCell align="left">{row.Date}</TableCell>
                    <TableCell align="right">{row.Latitude}</TableCell>
                    <TableCell align="right">{row.Longitude}</TableCell>
                    <TableCell align="right">{row.Methane}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(table);