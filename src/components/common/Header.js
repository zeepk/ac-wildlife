import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { InputSwitch } from 'primereact/inputswitch';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import BugIcon from '../../images/bugIcon.png';
import SeaIcon from '../../images/sea.png';
import FishIcon from '../../images/fishIcon.png';
import SongIcon from '../../images/kkslider.png';
import ReddIcon from '../../images/reddIcon.png';
import FossilIcon from '../../images/fossilIcon.png';
import GyroidIcon from '../../images/gyroidIcon.png';
import NewThisMonth from '../common/NewThisMonth';
import '../../styles/Header.css';

class Header extends Component {
	state = {
		hideCaught: false,
		open: true
	};

	render() {
		const message = <div className='text'>{"Attention: if you use this site please start using the new version at\n"}
			<a href="https://acwildlife-dev.netlify.app" className='link'>
				{' acwildlife-dev.netlify.app '}
			</a>
			{"\n(it will be replacing this one soon)\n\nYou can create an account and even import your data from this version in your account settings!\n\nFeel free to"}
			<a href="https://twitter.com/matthughes2112" className='link'>
				{' DM me on twitter '}
			</a>
			{"if you have an trouble/questions. Thanks! :)"}</div>
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					open={this.state.open}
					message={message}
					action={
						<React.Fragment>
							<IconButton
								size="small"
								aria-label="close"
								color="inherit"
								onClick={() => this.setState({ open: false })}
							>
								<CloseIcon fontSize="small" />
							</IconButton>
						</React.Fragment>
					}
				/>
				<Link className="navbar-brand" to="/">
					<p className="title">WildLife Tracker</p>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarColor01"
					aria-controls="navbarColor01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="nav-text collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav ml-3">
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/fish">
								<span role="img">
									<img src={FishIcon} alt="Fish" className="icon" />
								</span>
								{' Fish'}
							</Link>
						</li>
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/bugs">
								<span role="img">
									<img src={BugIcon} alt="Bugs" className="icon" />
								</span>
								{' Bugs'}
							</Link>
						</li>
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/sea">
								<span role="img">
									<img src={SeaIcon} alt="Sea" className="icon" />
								</span>
								{' Sea'}
							</Link>
						</li>
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/fossils">
								<span role="img">
									<img src={FossilIcon} alt="Fossils" className="icon" />
								</span>
								{' Fossils'}
							</Link>
						</li>
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/songs">
								<span role="img">
									<img src={SongIcon} alt="Songs" className="icon" />
								</span>
								{' Songs'}
							</Link>
						</li>
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/art">
								<span role="img">
									<img src={ReddIcon} alt="Art" className="icon" />
								</span>
								{' Art'}
							</Link>
						</li>
						<li
							className="pr-0 nav-item"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							<Link to="/gyroids">
								<span role="img">
									<img src={GyroidIcon} alt="Gyroids" className="icon" />
								</span>
								{' Gyroids'}
							</Link>
						</li>
					</ul>

					<div className="header--hide-caught-container">
						<Card className="hide-caught">
							<div className="hide-text">Hide Caught</div>
							<InputSwitch
								checked={this.state.hideCaught}
								onChange={() => {
									this.props.toggleCaught();
									this.setState({
										hideCaught: !this.state.hideCaught,
									});
								}}
							/>
						</Card>
					</div>
					<div className="header--new-container">
						<NewThisMonth />
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
