import { Grid } from "@mui/material";
import Form from "./components/Form";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

function App() {
  const defaultFontSize = 15;
  const [fontSize, changeFontSize] = useState(defaultFontSize);

  const changeFont = (isOld) => {
    isOld?changeFontSize(defaultFontSize/2):changeFontSize(defaultFontSize);
  }

  const theme = createTheme({
    typography: {
      htmlFontSize: fontSize,
    },
  });

  return (
    <div className="App" style = {{fontSize: 20}}>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent= "center">
          <Form changeFontSize={changeFont}></Form>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
