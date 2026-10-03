import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

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
