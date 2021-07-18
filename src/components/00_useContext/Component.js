import React, { useContext } from "react";

const themes = {
  green: {
    backgroundColor: "#99ee99",
    fontColor: "#22aa22",
  },
  red: {
    backgroundColor: "#ee9999",
    fontColor: "#aa2222",
  },
  blue: {
    backgroundColor: "#9999ee",
    fontColor: "#2222aa",
  },
};

// createContext로 context 생성
const GreenThemeContext = React.createContext(themes.green);
const BlueThemeContext = React.createContext(themes.blue);
const RedThemeContext = React.createContext(themes.red);

function Component() {
  const greenTheme = useContext(GreenThemeContext);
  return (
    <div>
      <div>Hello</div>
      <div>
        <div>
          <GreenComponent />
          <div>
            <div>
              <BlueComponent />
            </div>
          </div>
        </div>
        <RedComponent />
      </div>
    </div>
  );
}

//useConext로 context 사용
const GreenComponent = () => {
  const { backgroundColor, fontColor } = useContext(GreenThemeContext);
  return (
    <div>
      <div style={{ backgroundColor: backgroundColor, color: fontColor }}>
        Green
      </div>
    </div>
  );
};
const BlueComponent = () => {
  const { backgroundColor, fontColor } = useContext(BlueThemeContext);
  return (
    <div>
      <div style={{ backgroundColor: backgroundColor, color: fontColor }}>
        Blue
      </div>
    </div>
  );
};
const RedComponent = () => {
  const { backgroundColor, fontColor } = useContext(RedThemeContext);
  return (
    <div>
      <div style={{ backgroundColor: backgroundColor, color: fontColor }}>
        Red
      </div>
    </div>
  );
};

export default Component;
