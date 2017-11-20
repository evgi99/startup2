/**
 * Created by Evgi on 11/5/2017.
 */
import React from 'react'
import Request from 'superagent'
import { Table ,TableBody ,TableHeader ,TableHeaderColumn ,TableRow, TableRowColumn} from 'material-ui/Table';

export default class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryDetails: []
        }
    }

    componentDidMount() {
        var url = "http://localhost:5000/api/getTableData"
        return Request.get(url).then((response) => {
            var dataFromServer = response.body;
            debugger;
            this.setState ({
                countryDetails : dataFromServer.result
            })
        })
    }

    render() {
        return (
            <div style={{maxWidth: "80%",margin: "5px auto"}} >
                <Table>
                    <TableHeader displaySelectAll={false}
                                 adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                                Countries
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Alpha2 Code</TableHeaderColumn>
                            <TableHeaderColumn>Alpha3 Code</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true}
                               displayRowCheckbox={false}>
                        {this.state.countryDetails.map( (row, index) => (
                            <TableRow key={index + 1}>
                                <TableRowColumn>{index + 1}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.alpha2_code}</TableRowColumn>
                                <TableRowColumn>{row.alpha3_code}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}