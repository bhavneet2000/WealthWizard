import Tooltip from "@mui/material/Tooltip";

export const InfoToolTip = ({ text, component }) => {
  const customTooltipStyle = {
    backgroundColor: "#000",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "14px",
    fontFamily: ["Castoro", "cursive"],
    fontWeight: 400,
    padding: "10px"
  };

  const customArrowStyle = {
    color: "#000",
    fontSize: 9
  };

  return (
    <Tooltip
      title={text}
      placement={"top"}
      arrow={true}
      sx={{
        "& .MuiTooltip-tooltip": customTooltipStyle,
        "& .MuiTooltip-arrow": customArrowStyle
      }}
    >
      {component}
    </Tooltip>
  );
};
