export const handleClick = (setter) => () => {
    setter((prevClicked) => !prevClicked);
};
