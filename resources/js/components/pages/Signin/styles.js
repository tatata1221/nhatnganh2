import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        height: 45,
        fontSize: 16,
        fontFamily: "inherit",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    nofi: {
        color: "red",
        padding: 0,
        margin: 0,
    },
}));
