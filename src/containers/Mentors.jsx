import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import {getMentors,getMentorsAction} from '../actions/GetMentorsActions';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Grid} from '@material-ui/core';
import { Styles } from '../styles/Mentors';


export function createData(email, address, bio, occupation,expertise, id) {
	return { email, address, bio, occupation,expertise, id };
}

export class GetMentors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rowsPerPage: 5,
			page: 0,
		};
	}

	UNSAFE_componentWillMount() {
		const { getMentors } = this.props;
		getMentors();
	}


	handleChangePage(event, newPage) {
		this.setState({
			page: newPage,
		});
	}
	handleChangeRowsPerPage(event) {
		this.setState({
			rowsPerPage: parseInt(event.target.value, 10),
			page: 0,
		});
	}


	render() {
		const rows = [];
		const { result } = this.props;
		let x;
		let users = [];
		for (x in result) {
			users.push(result[x]);
		}

		users.map((user, index) => {
			rows.push(
				createData(
					user.email,
					user.address,
					user.bio,
                    user.occupation,
                    user.expertise,
					user.id,
				),
			);
		});

		const { classes } = this.props;
		const emptyRows =
			this.state.rowsPerPage -
			Math.min(
				this.state.rowsPerPage,
				rows.length - this.state.page * this.state.rowsPerPage,
			);
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Hidden mdDown>
						<TableContainer>
							<Table
								className={classes.table}
								aria-labelledby='tableTitle'
								aria-label='enhanced table'
								size='small'
							>
								<TableHead className={classes.tableHeader}>
									<TableRow>
										<TableCell align='left' className={classes.tableCell}>
											Email
										</TableCell>
										<TableCell
											numeric
											align='center'
											className={classes.tableCell}
										>
											Address
										</TableCell>
                                        <TableCell
											numeric
											align='center'
											className={classes.tableCell}
										>
										Biography
										</TableCell>
										<TableCell
											numeric
											align='center'
											className={classes.tableCell}
										>
											Occupation
										</TableCell>
										<TableCell
											numeric
											align='center'
											className={classes.tableCell}
										>
											Expertise
										</TableCell>
									</TableRow>
								</TableHead>

							
									<TableBody>
										{rows
											.slice(
												this.state.page * this.state.rowsPerPage,
												this.state.page * this.state.rowsPerPage +
													this.state.rowsPerPage,
											)
											.map((row, index) => {
												return (
													<TableRow
														hover
														role='checkbox'
														tabIndex={-1}
														key={row.id}
														padding='checkbox'
													>
														<TableCell component='th' scope='row'>
															{row.email}
														</TableCell>
														<TableCell align='center'>{row.address}</TableCell>

														<TableCell align='right'>
                                                        {row.bio}
														</TableCell>
														<TableCell align='center'>
                                                        {row.occupation}
														</TableCell>

														<TableCell align='center'>
                                                        {row.expertise}
														</TableCell>
													</TableRow>
												);
											})}
										{emptyRows > 0 && (
											<TableRow>
												<TableCell colSpan={6} />
											</TableRow>
										)}
									</TableBody>
				
							</Table>
						</TableContainer>
					</Hidden>
					<Hidden lgUp>
						{
							rows
								.slice(
									this.state.page * this.state.rowsPerPage,
									this.state.page * this.state.rowsPerPage +
										this.state.rowsPerPage,
								)
								.map((row, index) => {
									return (
										<Box key={index} p={1}>
											<Card id='cardItem' variant='outlined'>
												<CardContent style={{ padding: 16 }}>
													<Grid container>
														<Grid item container justify='space-between'>
															<Grid item>
																<Typography
																	style={{ fontSize: 16, color: '#C4C4C4' }}
																>
																	Email
																</Typography>
															</Grid>
															<Grid item>{row.email}</Grid>
														</Grid>
														<Grid item container justify='space-between'>
															<Grid item>
																<Typography
																	style={{ fontSize: 16, color: '#C4C4C4' }}
																>
																	Address
																</Typography>
															</Grid>
															<Grid item>{row.address}</Grid>
														</Grid>
														<Grid
															item
															container
															justify='space-between'
															alignItems='center'
															alignContent='center'
														>
															<Grid item>
																<Typography
																	style={{ fontSize: 16, color: '#C4C4C4' }}
																>
																	Biography
																</Typography>
															</Grid>
															<Grid item>
                                                            {row.bio}
															</Grid>
														</Grid>
														<Grid item container justify='space-between'>
															<Grid item>
																<Typography
																	style={{ fontSize: 16, color: '#C4C4C4' }}
																>
																	Occupation
																</Typography>
															</Grid>
															<Grid item>
															
                                                                {row.occupation}
																
															</Grid>
														</Grid>
														<Grid item container justify='space-between'>
															<Grid item>
																<Typography
																	style={{ fontSize: 16, color: '#C4C4C4' }}
																>
																	Expertise
																</Typography>
															</Grid>
															<Grid item>
																{' '}
                                                                {row.expertise}
															</Grid>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Box>
									);
								})
		}
						<Grid container>
							<Grid item xs={12}>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25]}
									component='div'
									count={rows.length}
									rowsPerPage={this.state.rowsPerPage}
									page={this.state.page}
									onChangePage={this.handleChangePage.bind(this)}
									onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
								/>
							</Grid>
						</Grid>
					</Hidden>
					<Grid container>
						<Grid item xs={5}></Grid>
						<Hidden mdDown>
							<Grid item xs={5}>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25]}
									component='div'
									count={rows.length}
									rowsPerPage={this.state.rowsPerPage}
									page={this.state.page}
									onChangePage={this.handleChangePage.bind(this)}
									onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
								/>
							</Grid>
						</Hidden>
					</Grid>
				</Paper>
			</div>
		);
	}
}
export const mapStateToProps = state => {
	return {
		result: state.GetMentorsReducer.users,
	};
};
const connectedGetMentorsPage = withRouter(
	connect(mapStateToProps, {
		getMentors,getMentorsAction
	})(withStyles(Styles)(GetMentors)),
);
export default connectedGetMentorsPage;
