import * as notifications from "../../notifications.json";
import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export function getAllNotificationsByUser(userId) {
  return notifications.default
    .filter((item) => item.author.id === userId)
    .map((item) => item.context);
}

export const normalizedData = normalize(notifications.default, [notification]);
