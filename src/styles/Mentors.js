export const Styles = theme => ({
	root: {
		width: '100%',
		overflowX: 'auto',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(1),
	},
	table: {
        minWidth: 750,
        marginTop:'12px'
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},

	tableHeader: {
		fontSize: '30px',
		height: '66px',
	},
	tableCell: {
		backgroundColor: '#3f51b5',
		color: 'white',
	}
});