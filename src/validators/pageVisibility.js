// import React from 'react'

export const checkPermissions = (items, permissions, role) => {
  role = role.replace(/\s/g, "");
  const userPermissions = permissions[role];
  items.forEach((item, index) => {
    if (item.items) {
      if (!item.onClick) {
        userPermissions.forEach((perm) => {
          items[index].items = item.items.filter((e) => e.label !== perm);
        });
      }
    }
  });

  userPermissions.forEach((perm) => {
    items = items.filter((item) => item.label !== perm);
  });

  items.forEach((item) => {
    if (item.items) {
      if (item.items.length === 0) {
        items = items.filter((e) => e.label !== item.label);
      }
    }
  });

  return items;
};
