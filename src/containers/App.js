import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import Sidebar from "../components/navigation/SideBar";
import SidebarItems from "../components/navigation/SideBarItems";
import Navbar from "../components/navigation/Navbar";
import Copyright from "../components/footer/Footer";
import Admin from "./admin/Admin";
import AdminManagement from "./admin/AdminManagement";
import AdminProfile from "./admin/AdminProfile";
import Reports from "./admin/Reports";
import PlayersManagement from "./playerManagement/PlayersManagement";
import PlayerProfile from "./playerManagement/PlayerProfile";
import Payments from "./payments/Payments";
import PlayerPayments from "./payments/PlayerPayments";
import Bonuses from "./bonuses/Bonuses";
import BonusesReports from "./bonuses/BonusesReports";
import BonusReports from "./bonuses/BonusReports";
import PlayerBonuses from "./bonuses/PlayerBonuses";
import ResponsibleGaming from "./responsibleGaming/ResponsibleGaming";
import PlayerResponsibleGaming from "./responsibleGaming/PlayerResponsibleGaming";
import GlossaryContent from "../components/glossary/GlossaryContent";
import MyProfile from "./profile/MyProfile";
import WithdrawalTransactions from "./payments/WithdrawalTransactions";
import PlayersActivityReport from "./reports/PlayersActivityReport";
import OnlinePlayersReport from "./reports/OnlinePlayersReport";
import WithdrawalHistory from "./payments/WithdrawalHistory";
import WithdrawalReview from "./payments/WithdrawalReview";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import RightSideBarPanel from "../components/rightSideBar/RightSideBarPanel";
import { ProtectedRoute } from "../validators/protected.route";
import SignIn from "../components/login/LoginPage";
import FourOFourPage from "../components/notFoundPage/notFound";
import { connect } from 'react-redux';
import BonusesTypes from '../containers/bonuses/BonusesTypes'
import CreateCampaign from '../containers/CRM/CreateCampaign'
import CampaignReports from '../containers/CRM/CampaignReports'
import SingleCampaignReport from '../containers/CRM/SingleCampaignReport'
import Communications from '../containers/communications/Communications'
import ViewTicket from '../containers/communications/ViewTicket'
import RequestResetPassword from "../components/resetPasswordPage/RequestReset"; 
import ResetPassword from "../components/resetPasswordPage/ResetPassword";
const mapStateToProps = (state) => {
  return {
    role: state.loggedInUser.role,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const App = (props) =>  {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route path="/request_reset_password" render={(props) => <RequestResetPassword {...props} />} />
          <Route path="/reset_password/:token" render={(props) => <ResetPassword  {...props}/>} />
          <ProtectedRoute
            path="/"
            role = {props.role}
            component={() => (
              <>
                <RightSideBarPanel />
                <div className="header">
                  <Navbar />
                </div>
                <div className="container">
                  <div className="sidebar">
                    <Sidebar items={SidebarItems} />
                  </div>
                  <div className="main">
                    <Switch>
                      <Route
                        exact
                        path="/admin"
                        render={(props) => {
                          return <Admin {...props} />;
                        }}
                      />

                      <Route
                        exact
                        path="/adminManagement"
                        render={props => {
                          return <AdminManagement {...props} />;
                        }}
                      />

                      <Route
                        path="/adminProfile"
                        render={props => {
                          return <AdminProfile {...props} />;
                        }}
                      />

                      <Route
                        exact
                        path="/reports"
                        render={(props) => {
                          return <Reports {...props} />;
                        }}
                      />

                      <Route
                        exact
                        path="/"
                        render={(props) => {
                          return <PlayersManagement {...props} />;
                        }}
                      />

                      <Route
                        exact
                        path="/playersActivityReport"
                        render={(props) => {
                          return <PlayersActivityReport {...props} />;
                        }}
                      />

                      <Route
                        exact
                        path="/onlinePlayersReport"
                        render={(props) => {
                          return <OnlinePlayersReport {...props} />;
                        }}
                      />

                      <Route
                        path="/playerProfile"
                        render={(props) => {
                          return <PlayerProfile {...props} />;
                        }}
                      />

                      <Route
                        path="/payments"
                        render={(props) => {
                          return <Payments {...props} />;
                        }}
                      />

                      <Route
                        path="/playerPayments"
                        render={(props) => {
                          return <PlayerPayments {...props} />;
                        }}
                      />

                      <Route
                        path="/withdrawalTransactions"
                        render={(props) => {
                          return <WithdrawalTransactions {...props} />;
                        }}
                      />

                      <Route
                        path="/withdrawalHistory"
                        render={(props) => {
                          return <WithdrawalHistory {...props} />;
                        }}
                      />

                      <Route
                        path="/withdrawalReview"
                        render={(props) => {
                          return <WithdrawalReview {...props} />;
                        }}
                      />
                      

                      <Route path="/bonuses" render={() => <Bonuses />} />

                      <Route
                        path="/bonusesReports"
                        render={(props) => {
                          return <BonusesReports {...props} />;
                        }}
                      />

                      <Route
                        path="/BonusReports"
                        render={(props) => {
                          return <BonusReports {...props} />;
                        }}
                      />
                      
                      <Route path="/bonusesTypes" render={() => <BonusesTypes />} />
                      <Route path="/createCampaign" render={() => <CreateCampaign />} />
                      <Route path="/campaignReports" render={() => <CampaignReports />} />

                      <Route
                        path="/singleCampaignReport"
                        render={(props) => {
                          return <SingleCampaignReport {...props} />;
                        }}
                      />

                      <Route
                        path="/playerBonuses"
                        render={(props) => {
                          return <PlayerBonuses {...props} />;
                        }}
                      />

                      <Route
                        path="/communications"
                        render={(props) => {
                          return <Communications {...props} />;
                        }}
                      />

                      <Route
                        path="/viewTicket"
                        render={(props) => {
                          return <ViewTicket {...props} />;
                        }}
                      />

                      <Route
                        path="/responsibleGaming"
                        render={(props) => {
                          return <ResponsibleGaming {...props} />;
                        }}
                        
                      />

                      <Route
                        path="/playerResponsibleGaming"
                        component={(props) => {
                          return <PlayerResponsibleGaming {...props} />;
                        }}
                      />
                      <Route
                        path="/glossary"
                        component={(props) => {
                          return <GlossaryContent {...props} />;
                        }}
                      />
                      <Route
                        path="/myProfile"
                        render={props => {
                          return <MyProfile {...props} />;
                        }}
                      />
                      <Route
                        path="/nopermissions"
                        render={() => {
                          return (
                            <p
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              You don't have permissions to see this page
                            </p>
                          );
                        }}
                      />
                      <Route path="*" render={() => <FourOFourPage />} />
                    </Switch>
                  </div>
                </div>
                <Copyright />
              </>
            )}
          />
          <Route path="*" render={() => <FourOFourPage />} />
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
