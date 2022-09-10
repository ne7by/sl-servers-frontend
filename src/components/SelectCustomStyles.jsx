const getStyles = (width, notSearchable) => ({
    option: (provided, state) => ({
        ...provided,
        cursor: state.isDisabled || notSearchable ? 'default' : 'pointer',
        backgroundColor: state.isSelected || state.isFocused ? '#375a7f' : '#222',
        paddingTop: '5px',
        paddingBottom: '5px'
    }),
    control: (provided) => {
        const controlStyle = {
            ...provided,
            background: "#444",
            border: 0,
            cursor: notSearchable ? 'default' : 'text'
        };

        if (width) controlStyle.width = width;
        return controlStyle
    },
    singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 1000
    }),
    menuList: (provided) => ({
        ...provided,
        padding: 0
    }),
    input: (provided) => ({
        ...provided,
        color: 'white'
    }),
    clearIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer'
    }),
    noOptionsMessage: (provided) => ({
        ...provided,
        background: '#222'
    })
})

export default getStyles;