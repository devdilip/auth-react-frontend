import { Theme } from '@material-ui/core';

export const LoginStyle = (theme: Theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        // marginLeft: theme.spacing.unit * 3,
        // marginRight: theme.spacing.unit * 3,
        // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        //     width: 400,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
    },
    paper: {
        // marginTop: theme.spacing.unit * 13,
        display: 'flex' as any,
        flexDirection: 'column' as any,
        alignItems: 'center' as any,
        // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        // margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing.unit,
    },
    submit: {
        // marginTop: theme.spacing.unit * 3,
        // marginBottom: theme.spacing.unit * 3,
    },
});

