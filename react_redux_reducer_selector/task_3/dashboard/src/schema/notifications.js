import * as notifications from "../../notifications.json";
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export function getAllNotificationsByUser(userId) {
  const { notifications: notifEntities, messages } = normalizedData.entities;
  return Object.values(notifEntities).reduce((acc, notif) => {
    if (notif.author === userId) acc.push(messages[notif.context]);
    return acc;
  }, []);
}

export const normalizedData = normalize(notifications.default, [notification]);
