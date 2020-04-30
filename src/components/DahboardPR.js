import React, { Component } from 'react';

import { bugs } from '../data_files/bugs.json';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/Dashboard.css';
import bells_image from '../images/bells.png'; // Tell webpack this JS file uses this image

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Row } from 'primereact/row';
// displays a green check if the month is set to 1 instead of 0
const month_display = (rowData, column) => {
	// console.log(column);
	if (rowData[column.field] === '1') {
		return (
			<CheckCircleIcon
				style={{ color: 'green', fontSize: '30px', zIndex: '' }}
			/>
		);
	}
};

// checks local storage to populate checkboxes
const is_checked = (name) => {
	if (window.localStorage.getItem(name) === 'true') {
		return true;
	} else {
		return false;
	}
};

const icon_display = (rowData) => {
	return (
		<img
			className="bug-image"
			src={`http://acnhapi.com/icons/bugs/${rowData.id}`}
			alt="Price"
		/>
	);
};

const time_display = (rowData, column) => {
	let today = new Date();
	let hour = today.getHours();
	if (rowData.start_time === 'Any time') {
		return (
			<div style={{ backgroundColor: '#a1d6a1', height: '100%' }}>
				{rowData.time_string}
			</div>
		);
	} else if (rowData.start_time_2) {
		if (
			(hour >= rowData.start_time && hour < rowData.end_time) ||
			(hour >= rowData.start_time_2 && hour < rowData.end_time_2)
		) {
			return (
				<div style={{ backgroundColor: '#a1d6a1' }}>{rowData.time_string}</div>
			);
		} else {
			return <div>{rowData.time_string}</div>;
		}
	} else if (rowData.start_time < rowData.end_time) {
		if (hour >= rowData.start_time && hour < rowData.end_time) {
			return (
				<div style={{ backgroundColor: '#a1d6a1' }}>{rowData.time_string}</div>
			);
		} else {
			return <div>{rowData.time_string}</div>;
		}
	} else {
		if (hour >= rowData.start_time || hour < rowData.end_time) {
			return (
				<div style={{ backgroundColor: '#a1d6a1' }}>{rowData.time_string}</div>
			);
		} else {
			return <div>{rowData.time_string}</div>;
		}
	}
};
class DashboardPR extends Component {
	constructor(props) {
		super(props);
		this.state = { ren: false };
	}

	componentDidMount() {
		if (
			typeof Storage !== 'undefined' &&
			localStorage.getItem('Spider') === null
		) {
			console.log('Could not find local storage. Creating...');
			bugs.map((bug) => {
				window.localStorage.setItem(bug.name, false);
				return bug;
			});
		}
	}
	// check for local storage, create if not found

	checkbox_change = (name) => {
		console.log('changing...');
		if (window.localStorage.getItem(name) === 'false') {
			window.localStorage.setItem(name, 'true');
		} else if (window.localStorage.getItem(name) === 'true') {
			window.localStorage.setItem(name, 'false');
		} else {
			alert('Something went wrong with updating local storage');
		}
		this.setState({
			ren: !this.state.ren,
		});
		return name;
	};
	caught_display = (rowData) => {
		return (
			<Checkbox
				color="primary"
				checked={is_checked(rowData.name)}
				onChange={() => this.checkbox_change(rowData.name)}
			/>
		);
	};
	render() {
		// let offset;
		// document.addEventListener('scroll', function (e) {
		// 	offset = window.pageYOffset;
		// 	console.log(offset);
		// });
		const date = new Date();
		const month_id = date.getMonth();
		const color = '#a1d6a1';

		return (
			<div className="table-container">
				<DataTable
					className="datatable-container"
					value={bugs}
					// responsive={true}
				>
					<Column
						className="name-column"
						field="name"
						header="Name"
						sortable={true}
						filter={true}
						filterPlaceholder="Search"
					/>
					<Column className="icon-column" header="Icon" body={icon_display} />
					<Column
						className="caught-column"
						header="Caught"
						body={this.caught_display}
					/>
					<Column
						className="rarity-column"
						field="rarity"
						header="Rarity"
						sortable={true}
					/>
					<Column
						className="price-column"
						field="price"
						header={
							<img className="bells-image" src={bells_image} alt="Price" />
						}
						sortable={true}
					/>
					<Column
						className="location-column"
						field="location"
						header="Location"
					/>
					<Column className="time-column" body={time_display} header="Time" />
					<Column
						className="month-column"
						style={month_id === 0 ? { backgroundColor: color } : {}}
						field="january"
						header="Jan"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 1 ? { backgroundColor: color } : {}}
						field="february"
						header="Feb"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 2 ? { backgroundColor: color } : {}}
						field="march"
						header="Mar"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 3 ? { backgroundColor: color } : {}}
						field="april"
						header="Apr"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 4 ? { backgroundColor: color } : {}}
						field="may"
						header="May"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 5 ? { backgroundColor: color } : {}}
						field="june"
						header="June"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 6 ? { backgroundColor: color } : {}}
						field="july"
						header="July"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 7 ? { backgroundColor: color } : {}}
						field="august"
						header="Aug"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 8 ? { backgroundColor: color } : {}}
						field="september"
						header="Sept"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 9 ? { backgroundColor: color } : {}}
						field="october"
						header="Oct"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 10 ? { backgroundColor: color } : {}}
						field="november"
						header="Nov"
						body={month_display}
					/>
					<Column
						className="month-column"
						style={month_id === 11 ? { backgroundColor: color } : {}}
						field="december"
						header="Dec"
						body={month_display}
					/>
				</DataTable>
			</div>
		);
	}
}

export default DashboardPR;