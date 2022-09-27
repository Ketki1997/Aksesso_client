import React, { Component } from 'react';
export default class MultipleImageUploadComponent extends Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
            

        }
        this.setState({ file: this.fileArray })
    }
    uploadFiles(e) {
        e.preventDefault()
        const obj2 = Object.assign({}, this.state.file)
        window.localStorage.setItem("mphoto", JSON.stringify(obj2));

        console.table(obj2);

        
         
    }
    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="... " width="100"  height="100" />
                    ))}
                </div>
                <div className="form-group">
                    <input type="file" id='multiplefile' placeholder='Add Photos Of Site ' className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-danger" onClick={this.uploadFiles}>Upload</button>
            </form >
        )
    }
}