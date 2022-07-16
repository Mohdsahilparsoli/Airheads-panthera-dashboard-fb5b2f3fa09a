import BusinessIcon from '@material-ui/icons/Business'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import ReportIcon from '@material-ui/icons/Report'
import PaymentIcon from '@material-ui/icons/Payment'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
// import AccessibilityIcon from '@material-ui/icons/Accessibility'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import MoneyIcon from '@material-ui/icons/Money'
import ContactMailIcon from '@material-ui/icons/ContactMail';

const onClick = (e, item) => {
 
}

const items = [
  {
    Icon: BusinessIcon,
    label: 'Reporting & BI',
    items: [
      { name: 'admin', label: 'Admin',  onClick, Icon: SupervisorAccountIcon },
      { name: 'adminManagement', label: 'Admin Management',  onClick, 
        Icon: ControlPointIcon 
      },
      { name: 'reports', label: 'Reports', onClick, Icon: ReportIcon },
    ],
  },
  {
    name: '', label: 'Player Management', onClick, // TODO temp fix
    Icon: ControlPointIcon    
  },
  {
    Icon: ReportIcon,
    label: 'Players Reports',
    items: [
      { name: 'playersActivityReport', label: 'Players Activity',  onClick, Icon: ReportIcon },
      { name: 'onlinePlayersReport', label: 'Online Players',  onClick, Icon: ReportIcon },
    ],
  },
  { 
    Icon: PaymentIcon,
    label: 'Payments',
    items: [
      { name: 'payments', label: 'Payments Dashboard',  onClick, Icon: PaymentIcon },
      { name: 'withdrawalTransactions', label: 'Withdrawal Transactions',  
        onClick, Icon: MoneyIcon 
      },
      { name: 'withdrawalHistory', label: 'Withdrawal History',  
        onClick, Icon: MoneyIcon 
      }
    ],
   },
   { 
    Icon: MonetizationOnIcon,
    label: 'Bonuses',
    items: [
      { name: 'bonuses', label: 'Bonuses Dashboard',  onClick, Icon: MonetizationOnIcon },
      { name: 'bonusesTypes', label: 'Bonuses Types',  
        onClick, Icon: MonetizationOnIcon 
      },
      { name: 'bonusesReports', label: 'Bonuses Reports',  
        onClick, Icon: MonetizationOnIcon 
      }
    ],
   },
   { 
    Icon: ContactMailIcon,
    label: 'CRM',
    items: [
      { name: 'createCampaign', label: 'Create Promo',  onClick, Icon: MonetizationOnIcon },
      { name: 'campaignReports', label: 'Campaign Reports',  
        onClick, Icon: BusinessIcon 
      },
    ],
   },
  {name: 'communications', label: 'Communications', onClick, Icon: QuestionAnswerIcon},
  {name: 'responsibleGaming', label: 'Responsible Gaming', onClick, 
    Icon: SportsEsportsIcon
  }

]

export default items