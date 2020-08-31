import React, {Component} from "react"
import axios from "axios"

import Layout from "../Layout/Layout"

class Note extends Component {

    state = {
        layout: {
            parentCategory: {
                showTab: "ALL", // DASH OR ALL
            },
            selectedCategory: {
                title: "node",
                parent: "PGLANG",
            },
        },
        allCategories: [
            {
                key: "PGLANG",
                title: "Languages",
                icon: "FolderSpecial",
                lastUpdated: "31-05-2020",
                fileCount: 35,
                isMoreOptions: true,
                showMoreOptions: false,
                showChild: true,
                subCategories: [
                    { title: "Node JS", count: 10, key: "node", selected: true },
                    { title: "React JS", count: 15, key: "react", },
                    { title: "Mongo DB", count: 10, key: "mongo", },
                    { title: "Vue JS", count: 30, key: "vue", },
                    { title: "Node JS Advanced", count: 120, key: "nodeadv", },
                ],
            },
            {
                key: "GK",
                title: "General Knowledge",
                icon: "FolderSpecial",
                lastUpdated: "3 months ago",
                fileCount: 135,
                isMoreOptions: true,
                showMoreOptions: false,
                showChild: false,
                subCategories: [
                    { title: "Flags", count: 40, key: "flag", },
                ],
            },
            {
                key: "Nature",
                title: "NATURE",
                icon: "FolderSpecial",
                lastUpdated: "25 days ago",
                fileCount: 15,
                isMoreOptions: true,
                showMoreOptions: false,
                showChild: false,
                subCategories: [],
            },
        ],
        viewEditSection: true,
        viewNoteViewSection: false,
        textAreaContent: "",
        questionTitle: "",
    }

    changeTab = () => {
        let selectedState = ''
        if (this.state.layout.parentCategory.showTab === 'DASH') {
            selectedState = 'ALL'
        } else {
            selectedState = 'DASH'
        }
        this.setState({
            ...this.state,
            layout: {
                ...this.state.layout,
                parentCategory: {
                    ...this.state.layout.parentCategory,
                    showTab: selectedState
                }
            }
        })
    }

    showCategoryChild = (index) => {
        let newAllCat = [...this.state.allCategories]
        newAllCat[index].showChild = !newAllCat[index].showChild
        // console.log("[child cat]", newAllCat[index].showChild, index)
        this.setState({
            ...this.state,
            allCategories: newAllCat
        })
    }

    showCreateNoteSection = () => {
        this.setState({
            ...this.state,
            viewEditSection: true,
            viewNoteViewSection: false
        })
    }

    handleChangeTextArea = (e) => {
        const content = e.target.value
        this.setState({
            textAreaContent: content
        })
    }

    handleChangeQuestionTitle = (e) => {
        const title = e.target.value
        this.setState({
            questionTitle: title
        })
    }

    handleSaveNote = () => {
        const qTitle = this.state.questionTitle
        const qContent = this.state.textAreaContent
        const category = this.state.layout.selectedCategory.title

        // check the file name
        if (!this.isValid(qTitle)) {
            // remove special chanracters \ / : * ? " < > |
            // remove starting .
            console.log("File name is wrong!");
        }
        
        const postData = {
            title: qTitle, 
            content: qContent, 
            category: category
        }

        axios.post('http://127.0.0.1:8000/notes', postData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    
    }

    isValid = (fname) => {
        // eslint-disable-next-line
        var rg1= /^[^\\/:\*\?"<>\|]+$/;
        // eslint-disable-next-line
        var rg2=/^\./;
        // eslint-disable-next-line
        var rg3=/^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
        return function isValid(fname){
          return rg1.test(fname)&&!rg2.test(fname)&&!rg3.test(fname);
        }
    }

    selectCategory = (title, parent, parentIndex, childIndex) => {
        console.log("selected category: ", title, parent)
        if (title && parent) {
            this.setState({
                ...this.state,
                layout: {
                    ...this.state.layout,
                    selectedCategory: {
                        title: title.trim().toLowerCase(),
                        parent: parent.trim().toUpperCase(),
                    },
                },
            })
        }

        if (parseInt(parentIndex) >= 0 && parseInt(childIndex) >= 0) {
            // assign selected to true
        }
    }

    showMoreOptionsParent = (index) => {
        let newAllCat = [...this.state.allCategories]
        newAllCat[index].showMoreOptions = !newAllCat[index].showMoreOptions
        // console.log("[child cat]", newAllCat[index].showChild, index)
        this.setState({
            ...this.state,
            allCategories: newAllCat
        })
    }

    render() {
        return (
            <Layout
                layout={{...this.state.layout}} 
                events={{
                    changeTab: this.changeTab,
                    showCategoryChild: this.showCategoryChild,
                    selectCategory: this.selectCategory,
                    showMoreOptions: this.showMoreOptionsParent,
                }}
                data={{
                    allCategories: this.state.allCategories,
                }}

                showEditSection={this.state.viewEditSection}
                showViewSection={this.state.viewNoteViewSection}
                textAreaContent={this.state.textAreaContent}
                titleContent={this.state.questionTitle}
                handleCreteNote={this.showCreateNoteSection}
                handleChangeTextArea={this.handleChangeTextArea}
                handleChangeQuestionTitle={this.handleChangeQuestionTitle}
                handleSaveNote={this.handleSaveNote} />
        )
    }
}

export default Note