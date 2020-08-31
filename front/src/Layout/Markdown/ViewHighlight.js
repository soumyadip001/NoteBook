import React from "react"
import Highlight from 'react-highlight'
import classes from "./EditorStyle.module.css"

const view = (props) => {
    const jumboStyle = {
        padding: '0px', marginBottom: '0px', textAlign: 'left', 
        paddingLeft: '2rem', backgroundColor: "transparent", 
        color: '#e1f5fe'
    };

    return (
    <div className={classes.wrapper}>
        <div className="jumbotron" style={jumboStyle}>
        <p className={classes.QuestionTitle}>01 - What is Node JS:</p>
        <Highlight className="javascript">
        {` 
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}))

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
        </AppBar>
        <div className={classes.offset} />
        </React.Fragment>
    )
};
        `}
    </Highlight>
    </div>
    <div className="jumbotron" style={jumboStyle}>
    <Highlight className="html">
    {`
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
    `}
    </Highlight>
        </div>
    </div>
    )
}

export default view