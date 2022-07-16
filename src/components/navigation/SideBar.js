import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import "../../styles/Sidebar.scss";
import { checkPermissions } from "../../validators/pageVisibility";
import { rolesPermissions } from "../../validators/rolesPermissions";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const renderItem = (depthStep, depth, expanded, item) => {
  if (item.onClick) {
    return (
      <Link
        to={{
          pathname: `/${item.name}`,
        }}
      >
        <SidebarItem
          depthStep={depthStep}
          depth={depth}
          expanded={expanded}
          item={item}
        />
      </Link>
    );
  } else {
    return (
      <SidebarItem
        depthStep={depthStep}
        depth={depth}
        expanded={expanded}
        item={item}
      />
    );
  }
};

const SidebarItem = (
  { depthStep = 10, depth = 0, expanded, item, ...rest },
  context
) => {
  const [collapsed, setCollapsed] = useState(true);
  const store = useSelector((state) => ({
    currentTab: state.changeMenuTab.currentTab,
  }));
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;
  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon className={"sidebar-item-expand-arrow"} />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }
  
  return (
    <>
      <ListItem
        className="sidebar-item"
        style={label===store.currentTab? {fontWeight: "bold", backgroundColor: "#555467"}: {}}
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text" >{context.t(label)}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0" }} />
                ) : (
                  renderItem(depthStep, depth + 1, expanded, subItem)
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
};

SidebarItem.contextTypes = {
  t: PropTypes.func.isRequired,
};

const Sidebar = ({ items, depthStep, depth, expanded }) => {
    const store = useSelector((state) => ({
    role: state.loggedInUser.role,
  }));
  const [permissionsItems, setpermissionsItems] = useState(items);
  useEffect(() => {
    setpermissionsItems(checkPermissions(items, rolesPermissions, store.role));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="sidebarFactory">
      <List disablePadding dense>
        {permissionsItems.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
              renderItem(depthStep, depth, expanded, sidebarItem)
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
