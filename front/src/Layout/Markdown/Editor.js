import React from "react"
import classes from "./EditorStyle.module.css"

const editor = (props) => {
    const initialTitleContent = '01 - What is node JS'
    const initialContent = `
        This is a initial test content to get the idea!

        class abc = {
            fruits: [
                'apple': true,
                'orange': true,
                'meat': false
            ]
        }
    `;
    const textAreaContent = (props.content) ? props.content : initialContent
    const titleContent = (props.titleContent) ? props.titleContent : initialTitleContent
    const myJumboStyle = "jumbotron " + classes.MyJumboStyle
    const QuestionTitle = "form-control " + classes.QuestionTitleEditor
    return (
        <div className={myJumboStyle}>
            <input className={QuestionTitle} value={titleContent} onChange={props.handleChangeQuestionTitle} />
            <textarea className={classes.TextArea} value={textAreaContent}
                onChange={props.handleChangeText}></textarea>
            <button className="btn btn-primary" onClick={props.handleSaveNote}>Save</button> &nbsp;
            <button className="btn btn-secondary">Save Draft</button>
        </div>
    )
}

export default editor