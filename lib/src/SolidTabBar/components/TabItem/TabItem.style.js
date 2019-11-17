export const _container = (
  isActive,
  activeColor,
  inActiveColor,
  width,
  padding
) => ({
  width,
  padding,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isActive ? activeColor : inActiveColor
});

export const _textStyle = (isActive, activeTextColor, inactiveTextColor) => ({
  fontSize: 12,
  fontWeight: "600",
  color: isActive ? activeTextColor : inactiveTextColor
});

export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export default {};