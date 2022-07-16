import auth from "../validators/auth";
import {
  setNotificationMessage,
  setShowNotificationMessage,
} from "../store/notifications/notificationActions";
import { setLoggedInUser } from "../store/loginPage/loginActions";
import profileOne from "../assets/profileOne.jpeg";
import profileTwo from "../assets/profileTwo.jpeg";

const usersData = {
  owner: {
    data: {
      id: 1,
      name: "Owner",
      email: "owner@owner.com",
      profilePicture: profileOne,
      created_at: {
        date: "2020-04-27 13:06:15.000000",
        timezone_type: 3,
        timezone: "UTC",
      },
      updated_at: {
        date: "2020-04-27 13:06:15.000000",
        timezone_type: 3,
        timezone: "UTC",
      },
      status: {
        id: 2,
        name: "Active",
        slug: "active",
        description:
          "Active User - the User (the player) has activated his account through the email",
        type: 0,
        created_at: "2020-04-27 13:06:15",
        updated_at: "2020-04-27 13:06:15",
      },
      role: {
        id: 9,
        name: "Owner",
        slug: "owner",
        description:
          "The Role has to be assigned only to the system Owners ...",
        parent_id: null,
        department_id: 0,
        created_at: {
          date: "2020-04-27 13:06:15.000000",
          timezone_type: 3,
          timezone: "UTC",
        },
        updated_at: {
          date: "2020-04-27 13:06:15.000000",
          timezone_type: 3,
          timezone: "UTC",
        },
      },
      department: {
        id: 1,
        name: "Administration",
        description: "",
        parent_id: 0,
      },
    },
    jwt: {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNyby1hZG1pbnMuZmJcL2F1dGgiLCJpYXQiOjE1ODg3NjAwODAsImV4cCI6MTU4ODc2MzY4MCwibmJmIjoxNTg4NzYwMDgwLCJqdGkiOiJPVjdhMTFleTZId1VMNGlxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.qcHAlvhlTvYNU6aPpwF8OQTYV9Nq3ZlDECpiQtGC144",
      token_type: "Bearer",
      expires_in: 3600,
    },
  },
  crm: {
    data: {
      id: 4,
      name: "CRM",
      email: "crm@crm.com",
      profilePicture: profileTwo,
      created_at: {
        date: "2020-04-27 13:06:15.000000",
        timezone_type: 3,
        timezone: "UTC",
      },
      updated_at: {
        date: "2020-04-27 13:06:15.000000",
        timezone_type: 3,
        timezone: "UTC",
      },
      status: {
        id: 2,
        name: "Active",
        slug: "active",
        description:
          "Active User - the User (the player) has activated his account through the email",
        type: 0,
        created_at: "2020-04-27 13:06:15",
        updated_at: "2020-04-27 13:06:15",
      },
      role: {
        id: 13,
        name: "Players Management",
        slug: "players.management",
        description: "Players Management Role ...",
        parent_id: 9,
        department_id: 0,
        created_at: {
          date: "2020-04-27 13:06:15.000000",
          timezone_type: 3,
          timezone: "UTC",
        },
        updated_at: {
          date: "2020-04-27 13:06:15.000000",
          timezone_type: 3,
          timezone: "UTC",
        },
      },
      department: {
        id: 1,
        name: "Administration",
        description: "",
        parent_id: 0,
      },
    },
    jwt: {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNyby1hZG1pbnMuZmJcL2F1dGgiLCJpYXQiOjE1ODg3NTg2MjgsImV4cCI6MTU4ODc2MjIyOCwibmJmIjoxNTg4NzU4NjI4LCJqdGkiOiJuM3BjdTgyVmE1cTFhajgxIiwic3ViIjo0LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ysxby-3_umojUxWHB5JtySEaO7RbaVhrbfDtgj7rABw",
      token_type: "Bearer",
      expires_in: 3600,
    },
  },
};

const users = {
  owner: "owner@owner.com",
  crm: "crm@crm.com",
  blocked: "crm3@crm.com",
  password: "secret123",
};
export const loginMockFetch = (dispatch, props, dataCredentials) => {
  let responseCode = null;
  let userType = undefined;
  let loginData = undefined;
  if (
    (dataCredentials.email === users.owner &&
      dataCredentials.password === users.password) ||
    (dataCredentials.email === users.crm &&
      dataCredentials.password === users.password)
  ) {
    responseCode = 200;
    dataCredentials.email === users.owner
      ? (userType = usersData.owner)
      : (userType = usersData.crm);
    dispatch(setLoggedInUser(userType));
    loginData = auth.login(responseCode, userType, (link) => {
      props.history.push(link);
    });
    if (loginData !== undefined && loginData !== null) {
      dispatch(setNotificationMessage(loginData.message));
      dispatch(setShowNotificationMessage(true));
    }
  } else if (
    dataCredentials.email === users.blocked &&
    dataCredentials.password === users.password
  ) {
    dispatch(
      setNotificationMessage(
        "Your account was blocked, please contact administrator"
      )
    );
    dispatch(setShowNotificationMessage(true));
  } else {
    responseCode = 401;
    loginData = auth.login(responseCode, "NoUser", (link) => {
      props.history.push(link);
    });
    if (loginData !== undefined && loginData !== null) {
      dispatch(setNotificationMessage(loginData.message));
      dispatch(setShowNotificationMessage(true));
    }
  }
};
