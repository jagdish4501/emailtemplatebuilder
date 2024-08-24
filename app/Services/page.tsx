import Card from "./cards";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="w-[1152px] h-[546px] grid grid-cols-3 gap-6 overflow-scroll  scrollbar-none">
      <Card
        title="Notifications"
        content="Notification Handler is used to send customized notification to users."
        badge={false}
        badgeContent="coming soon"
      />
      <Card
        title="Rewards"
        content="Notification Handler is used to send customized notification to users."
        badge={false}
        badgeContent="coming soon"
      />
      <Card
        title="Surveys"
        content="Notification Handler is used to send customized notification to users."
        badge={false}
        badgeContent="coming soon"
      />
      <Card
        title="Search"
        content="Notification Handler is used to send customized notification to users."
        badge={false}
        badgeContent="coming soon"
      />
      <Card
        title="Engage"
        content="Notification Handler is used to send customized notification to users."
        badge={true}
        badgeContent="coming soon"
      />
    </div>
  );
};

export default Services;
