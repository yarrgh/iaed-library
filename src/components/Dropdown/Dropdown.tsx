import React, {
  useEffect,
  useState,
  MouseEvent,
  ReactNode,
  Children,
  PropsWithChildren,
  ReactElement,
  createContext,
  useCallback,
  useContext,
} from "react";

interface IDropdownContext {
  isActive: boolean;
  toggle: () => void;
  close: () => void;
}

const initialDropdownState = {
  isActive: false,
  toggle: () => {},
  close: () => {},
};

const dropdownContext = createContext<IDropdownContext>(initialDropdownState);

const DropdownProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isActive, setIsActive] = useState(false);

  const close = useCallback(() => setIsActive(false), []);
  const toggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  useEffect(() => {
    const pageClickEvent = () => {
      setIsActive(false);
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  const Provider = dropdownContext.Provider;
  return <Provider value={{ isActive, toggle, close }}>{children}</Provider>;
};

export interface DropdownProps {
  children: ReactNode;
}

export const Dropdown = ({ children }: DropdownProps) => {
  const childList = Children.toArray(children);

  let Trigger = childList.find(({ type }: any) => type === Dropdown.Trigger) as
    | ReactElement
    | undefined;

  Trigger ??= <Dropdown.Trigger>Default Trigger</Dropdown.Trigger>;

  let Menu = childList.find(({ type }: any) => type === Dropdown.Menu) as
    | ReactElement
    | undefined;

  Menu ??= <Dropdown.Menu>Default Menu</Dropdown.Menu>;

  return (
    <DropdownProvider>
      <div style={{ position: "relative", display: "inline-block" }}>
        {Trigger}
        {Menu}
      </div>
    </DropdownProvider>
  );
};

export type DropdownTriggerProps = PropsWithChildren<{}>;

Dropdown.Trigger = ({ children }: DropdownTriggerProps) => {
  const { isActive, toggle } = useContext(dropdownContext);

  const onToggle = (e: MouseEvent) => {
    e.stopPropagation();
    toggle();
  };
  return <div onClick={onToggle}>{children}</div>;
};

export type DropdownMenuProps = PropsWithChildren<{}>;

Dropdown.Menu = ({ children }: DropdownMenuProps) => {
  const { isActive } = useContext(dropdownContext);

  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "150px",
        background: "white",
        display: isActive ? "block" : "none",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};
