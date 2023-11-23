import LinkButton from "./LinkButton";

const MobileBar = ({ links, pathname }) => {
  return (
    <div className="flex items-center justify-between p-2 gap-2 md:hidden">
      {links
        .slice()
        .reverse()
        .map((link) => {
          const isActive = pathname === link.href;
          return (
            <LinkButton key={link.href} href={link.href} active={isActive}>
              {link.label}
            </LinkButton>
          );
        })}
    </div>
  );
};

export default MobileBar;
