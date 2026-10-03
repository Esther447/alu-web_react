import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import fetchMock from "fetch-mock";
import nodeFetch from "node-fetch";

const mockStore = configureMockStore([thunk]);

describe("uiActionCreators", () => {
  it("login returns the correct action", () => {
    expect(login("test@test.com", "password")).toEqual({
      type: LOGIN,
      user: { email: "test@test.com", password: "password" },
    });
  });

  it("logout returns the correct action", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("displayNotificationDrawer returns the correct action", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("hideNotificationDrawer returns the correct action", () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe("loginRequest", () => {
  beforeEach(() => {
    const sandbox = fetchMock.sandbox();
    sandbox.config.fetch = nodeFetch;
    global.fetch = sandbox;
  });

  afterEach(() => {
    global.fetch.restore();
  });

  it("dispatches LOGIN and LOGIN_SUCCESS when API call succeeds", () => {
    global.fetch.getOnce("/login-success.json", { success: true });
    const store = mockStore({});
    return store.dispatch(loginRequest("test@test.com", "password")).then(() => {
      expect(store.getActions()).toEqual([
        { type: LOGIN, user: { email: "test@test.com", password: "password" } },
        { type: LOGIN_SUCCESS },
      ]);
    });
  });

  it("dispatches LOGIN and LOGIN_FAILURE when API call fails", () => {
    global.fetch.getOnce("/login-success.json", { throws: new Error("API error") });
    const store = mockStore({});
    return store.dispatch(loginRequest("test@test.com", "password")).then(() => {
      expect(store.getActions()).toEqual([
        { type: LOGIN, user: { email: "test@test.com", password: "password" } },
        { type: LOGIN_FAILURE },
      ]);
    });
  });
});
