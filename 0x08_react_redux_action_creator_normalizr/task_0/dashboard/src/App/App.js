import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext, { defaultUser, defaultLogOut } from './AppContext';
import './App.css';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ],
      value: {
        user: defaultUser,
        logOut: this.logOut,
      },
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      value: {
        ...this.state.value,
        user: {
          email,
          password,
          isLoggedIn: true,
        },
      },
    });
  }

  logOut() {
    this.setState({
      value: {
        ...this.state.value,
        user: defaultUser,
      },
    });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((n) => n.id !== id),
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { displayDrawer, listNotifications, value } = this.state;
    const { user } = value;
    return (
      <AppContext.Provider value={value}>
        <>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App">
            <Header />
            <div className="App-body">
              {user.isLoggedIn
                ? <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>
                : <BodySectionWithMarginBottom title="Log in to continue"><Login logIn={this.logIn} /></BodySectionWithMarginBottom>
              }
              <BodySection title="News from the School">
                <p>Some random news about the school goes here.</p>
              </BodySection>
            </div>
            <Footer />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
