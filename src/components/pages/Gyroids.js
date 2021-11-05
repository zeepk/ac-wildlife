import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import NoCritters from '../common/NoCritters';
import Checkbox from '@material-ui/core/Checkbox';
import CellNameDisplay from '../displays/CellNameDisplay';
import { gyroids } from '../../data_files/gyroids.json';

const Gyroids = (props) => {
	const [ren, setRen] = useState(false);
	const data = gyroids;

	const checkboxChange = (name) => {
		if (window.localStorage.getItem(name) === 'false') {
			window.localStorage.setItem(name, 'true');
		} else if (window.localStorage.getItem(name) === 'true') {
			window.localStorage.setItem(name, 'false');
		} else {
			alert('Something went wrong with updating local storage');
		}
		setRen(!ren);
		return name;
	};

	const caughtDisplay = (rowData) => {
		const name = rowData.combinedName;
		return (
			<Checkbox
				color="primary"
				checked={window.localStorage.getItem(name) === 'true'}
				onChange={() => checkboxChange(name)}
			/>
		);
	};

	const filteredData = props.hideCaught
		? data.filter(
				(critter) =>
					window.localStorage.getItem(critter.combinedName) === 'false',
		  )
		: data;

	if (filteredData.length <= 0) {
		return <NoCritters />;
	}
	return (
		<DataTable
			className="fossils-datatable-container"
			value={data}
			// responsive={true}
		>
			<Column
				className="name-column"
				field="combinedName"
				header="Name"
				sortable={true}
				filter={true}
				filterPlaceholder="Search"
				body={CellNameDisplay}
				filterMatchMode="contains"
				style={{ textDecoration: 'none' }}
			/>
			<Column className="caught-column" header="Caught" body={caughtDisplay} />
		</DataTable>
	);
};
export default Gyroids;
