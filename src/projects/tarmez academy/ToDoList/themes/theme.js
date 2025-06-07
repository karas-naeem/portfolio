import { createTheme } from "@mui/material";

const fontOverride = {
  root: {
    fontFamily: "Alexandria !important",
  },
};

const allMuiComponents = [
  "MuiTypography",
  "MuiButton",
  "MuiToggleButton",
  "MuiTextField",
  "MuiInputBase",
  "MuiInputLabel",
  "MuiOutlinedInput",
  "MuiFilledInput",
  "MuiSnackbar",
  "MuiAlert",
  "MuiCheckbox",
  "MuiRadio",
  "MuiFormControlLabel",
  "MuiFormHelperText",
  "MuiSelect",
  "MuiMenuItem",
  "MuiDialog",
  "MuiDialogTitle",
  "MuiDialogContent",
  "MuiDialogActions",
  "MuiAppBar",
  "MuiToolbar",
  "MuiTabs",
  "MuiTab",
  "MuiCard",
  "MuiCardContent",
  "MuiCardActions",
  "MuiChip",
  "MuiListItem",
  "MuiListItemText",
  "MuiDrawer",
  "MuiTooltip",
  "MuiTableCell",
  "MuiTableHead",
  "MuiTableBody",
  "MuiTableRow",
];

const components = allMuiComponents.reduce((acc, component) => {
  acc[component] = { styleOverrides: fontOverride };
  return acc;
}, {});

export const Theme = createTheme({ components });
