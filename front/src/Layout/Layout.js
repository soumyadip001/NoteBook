import React from "react"

import Editor from "./Markdown/Editor"
import Viewer from "./Markdown/ViewHighlight"
import ParentCategory from "./ParentCategory/Parent"
import TopbarButtons from "./EditorOptions/TopbarButtons"
import SearchBar from "./ChildCategory/SearchBar"
import NoteList from "./ChildCategory/NoteList"

const layout = (props) => {

    const toggleView = props.showViewSection ? 
                <Viewer /> 
                : 
                <Editor handleChangeText={props.handleChangeTextArea} 
                    content={props.textAreaContent}
                    handleChangeQuestionTitle={props.handleChangeQuestionTitle}
                    titleContent={props.titleContent}
                    handleSaveNote={props.handleSaveNote} />;
    
    return (
        <div className="container-fluid">
            <div className="row MainContainer">
                <div className="col-2">
                    <ParentCategory layout={props.layout.parentCategory}
                        events={props.events}
                        allCategories={props.data.allCategories} />
                </div>
                <div className="col-3">
                    <SearchBar click={props.handleCreteNote} />
                    <NoteList />
                </div>
                <div className="col-7">
                    <TopbarButtons />
                    {toggleView}
                </div>
            </div>
        </div>
    )
}

export default layout